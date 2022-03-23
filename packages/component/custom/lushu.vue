<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, ref, useAttrs, useSlots, watch } from 'vue'
import { addCustomLushu, addMaker } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, useSlotComponentProps } from '../../utils/util'
import { BMapGLRef } from '../../lib/map'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        points: {
            lng: number
            lat: number
        }[]
        speed?: number
        time?: number
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        points: () => [],
        speed: 50,
        time: 10,
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show)
const bm = ref<{
    lushu: BmComponent.CustomLushu | null
} | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
const Marker = useSlotComponentProps(slots, 'default', 'Marker')
watch(
    () => currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...props }
            bm.value = addCustomLushu(currentMap.value, props.points, merge_props)
            emit('ready', {
                bmobj: bm.value?.lushu,
                addPoints: (points: { lng: number; lat: number }[]) => {
                    if (BMapGLRef.value) {
                        bm.value?.lushu?.addPoints(
                            points.map(p => {
                                return new (BMapGLRef.value as any).Point(p.lng, p.lat)
                            })
                        )
                    }
                },
            })

            let marker = null as any

            bm.value?.lushu?.on('moving', (e: any) => {
                if (marker) {
                    marker.setPosition(e.point)
                } else {
                    marker = bindEvents(addMaker(currentMap.value, e.point, Marker.props.value), ['click'], emit)
                    marker.show()
                }
            })

            bm.value?.lushu?.on('remove', (e: any) => {
                if (marker) {
                    currentMap.value.removeOverlay(marker)
                    marker = null
                }
            })

            bindEvents(bm.value?.lushu, extractEmitEvents(attrs), emit)
            isShow.value && bm.value?.lushu?.show()
        }
    },
    { immediate: true }
)
watch(
    () => isShow.value && currentMap.value,
    val => {
        if (val) {
            bm.value?.lushu?.show()
        } else {
            bm.value?.lushu?.hide()
        }
    },
    {
        immediate: true,
    }
)
defineExpose({
    addPoints: (points: { lng: number; lat: number }[]) => {
        if (bm.value && points && points.length > 0) {
            bm.value?.lushu?.addPoints(
                points.map(p => {
                    return new (BMapGLRef.value as any).Point(p.lng, p.lat)
                })
            )
        }
    },
})
</script>
<script lang="ts">
export default {
    name: 'Lushu',
}
</script>
