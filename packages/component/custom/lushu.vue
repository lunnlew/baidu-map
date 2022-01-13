<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addCustomLushu, addMaker } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, mergePropsDefault } from '../../utils/util'
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
    }>(),
    {
        map: null,
        points: () => [],
        speed: 50,
        time: 10,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show)
const options = computed(() => props)
const bm = ref<{
    lushu: BmComponent.CustomLushu | null
} | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...options.value }
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

            let merge_marker_props = {
                size: () => [23, 15],
                src: 'http://webmap0.bdimg.com/image/api/marker_red.png',
                anchor: undefined,
                imageOffset: () => [0, 0],
            } as any
            if (slots.default) {
                let Marker = slots.default().find(s => (s.type as any).name == 'Marker')
                if (Marker) {
                    merge_marker_props = mergePropsDefault(Marker.props as any, (Marker.type as any).props)
                }
            }
            let marker = null as any

            bm.value?.lushu?.on('moving', (e: any) => {
                if (marker) {
                    marker.setPosition(e.point)
                } else {
                    marker = bindEvents(addMaker(currentMap.value, e.point, merge_marker_props), ['click'], emit)
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
        console.log('addPoints')
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
