<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLRef } from '../../lib/map'
import { addMaker } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        point: {
            lng: number
            lat: number
        }
        offset?: [number, number]
        enableMassClear?: boolean
        enableDragging?: boolean
        enableClicking?: boolean
        raiseOnDrag?: boolean
        draggingCursor?: string
        rotation?: number
        zIndex?: number
        title?: string
        label?: string
        labelOptions?: BMapGL.LabelOptions
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        point: () => ({
            lng: 116.403963,
            lat: 39.915119,
        }),
        offset: () => [0, 0],
        enableMassClear: true,
        enableDragging: false,
        enableClicking: true,
        raiseOnDrag: false,
        draggingCursor: '',
        rotation: 0,
        zIndex: undefined,
        title: '',
        label: '',
        labelOptions: undefined,
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref<BMapGL.Marker | null>()
const isShow = computed(() => props.show)
const options = computed(() => props)
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                let MarkerIcon = slots.default().find(s => (s.type as any).name == 'MarkerIcon')
                if (MarkerIcon) {
                    let merge_icon_props = mergePropsDefault(MarkerIcon.props as any, (MarkerIcon.type as any).props)
                    if (merge_icon_props.src) {
                        ;(merge_props as any).icon = merge_icon_props
                    }
                }
            }
            bm.value = bindEvents(addMaker(currentMap.value, props.point, merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
            isShow.value && bm.value?.show()
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => isShow.value && currentMap.value,
    val => {
        if (val) {
            bm.value && bm.value.show()
        } else {
            bm.value && bm.value.hide()
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.point,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setPosition(new BMapGLRef.value.Point(val.lng, val.lat))
        }
    }
)
watch(
    () => props.offset,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setOffset(new BMapGLRef.value.Size(val[0], val[1]))
        }
    }
)
watch(
    () => props.title,
    val => {
        if (bm.value) {
            bm.value.setTitle(val)
        }
    }
)
watch(
    () => props.label,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setLabel(new BMapGLRef.value.Label(val, props.labelOptions))
        }
    }
)
watch(
    () => props.enableMassClear,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableMassClear()
            } else {
                bm.value.disableMassClear()
            }
        }
    }
)
watch(
    () => props.enableDragging,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableDragging()
            } else {
                bm.value.disableDragging()
            }
        }
    }
)
watch(
    () => props.rotation,
    val => {
        if (bm.value) {
            bm.value.setRotation(val)
        }
    }
)
watch(
    () => props.zIndex,
    val => {
        if (bm.value) {
            bm.value.setZIndex(val)
        }
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.removeOverlay(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'Marker',
}
</script>
