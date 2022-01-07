<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { state } from '../../lib/map'
import { addLushu, initLushu } from '../../lib/animation'
import { bindEvents, extractEmitEvents, mergePropsDefault } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        points?: {
            lng: number
            lat: number
        }[]
        geodesic?: boolean
        autoCenter?: boolean
        defaultContent?: string
        autoView?: boolean
        speed?: number
        icon?: string
        enableRotation?: boolean
        overallView?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        points: () => [],
        defaultContent: '',
        geodesic: false,
        autoCenter: false,
        autoView: true,
        speed: 500,
        icon: '',
        enableRotation: true,
        overallView: false,
        show: true,
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const slots = useSlots()
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
const bm = ref<{
    animation: BaiduMapVue3.BMapGL.LushuAnimation | null
    overlay: BaiduMapVue3.BMapGL.Overlay | null
    removeOverlay: Function
    overallView: (points?: BaiduMapVue3.BMapGL.Point[]) => void
} | null>()
function clear() {
    if (bm.value) {
        bm.value.animation?.stop()
        bm.value.animation = null
        bm.value.removeOverlay()
        bm.value = null
    }
}
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                let MarkerPolyline = slots.default().find(s => (s.type as any).name == 'Polyline')
                if (MarkerPolyline) {
                    let merge_polyline_props = mergePropsDefault(
                        MarkerPolyline.props as any,
                        (MarkerPolyline.type as any).props
                    )
                    ;(merge_props as any).polyline = merge_polyline_props
                }
                let MarkerIcon = slots.default().find(s => (s.type as any).name == 'MarkerIcon')
                if (MarkerIcon) {
                    let merge_icon_props = mergePropsDefault(MarkerIcon.props as any, (MarkerIcon.type as any).props)
                    if (merge_icon_props.src) {
                        ;(merge_props as any).icon = merge_icon_props
                    }
                }
            }
            initLushu().then(result => {
                bm.value = addLushu(merge_props)
                bindEvents(bm.value?.animation, extractEmitEvents(attrs), emit)
                isShow.value && merge_props.overallView && bm.value?.overallView()
                emit('ready', {
                    bmobj: bm.value?.animation,
                    start: () => bm.value && bm.value?.animation?.start(),
                    stop: () => bm.value && bm.value?.animation?.stop(),
                    pause: () => bm.value && bm.value?.animation?.pause(),
                })
            })
        } else {
            clear()
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.speed,
    val => {
        bm.value &&
            bm.value?.animation?._setOptions({
                speed: val,
            })
    }
)
watch(
    () => props.overallView && isShow.value,
    val => {
        if (val) {
            bm.value && bm.value?.overallView()
        }
    }
)
onUnmounted(() => {
    clear()
})
defineExpose({
    bmobj: bm.value?.animation,
    start: () => bm.value && bm.value?.animation?.start(),
    stop: () => bm.value && bm.value?.animation?.stop(),
    pause: () => bm.value && bm.value?.animation?.pause(),
})
</script>
<script lang="ts">
export default {
    name: 'Lushu',
}
</script>
