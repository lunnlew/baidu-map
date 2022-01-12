<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addTrackAnimation, initTrackAnimation } from '../../lib/animation'
import { bindEvents, extractEmitEvents, mergePropsDefault } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        points?: {
            lng: number
            lat: number
        }[]
        overallView?: boolean
        tilt?: number
        duration?: number
        delay?: number
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        points: () => [],
        overallView: false,
        tilt: 30,
        duration: 20000,
        delay: 3000,
        show: true,
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const slots = useSlots()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<{
    animation: BMapGL.TrackAnimation | null
    overlay: BMapGL.Overlay | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
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
            }
            initTrackAnimation().then(result => {
                bm.value = addTrackAnimation(currentMap.value, merge_props)
                bindEvents(bm.value?.animation, extractEmitEvents(attrs), emit)
                isShow.value && merge_props.overallView && bm.value?.overallView()
                emit('ready', {
                    bmobj: bm.value?.animation,
                    start: () => bm.value && bm.value?.animation?.start(),
                    cancel: () => bm.value && bm.value?.animation?.cancel(),
                    pause: () => bm.value && bm.value?.animation?.pause(),
                    continue: () => bm.value && bm.value?.animation?.continue(),
                })
            })
        } else {
            if (bm.value) {
                bm.value.animation?.cancel()
                bm.value.removeOverlay(bm.value.overlay)
                bm.value.overlay = null
                bm.value.animation = null
                bm.value = null
            }
        }
    },
    {
        immediate: true,
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
    if (bm.value) {
        bm.value.animation?.cancel()
        bm.value.removeOverlay(bm.value.overlay)
        bm.value.overlay = null
        bm.value.animation = null
        bm.value = null
    }
})
defineExpose({
    start: () => bm.value && bm.value?.animation?.start(),
    cancel: () => bm.value && bm.value?.animation?.cancel(),
    pause: () => bm.value && bm.value?.animation?.pause(),
    continue: () => bm.value && bm.value?.animation?.continue(),
})
</script>
<script lang="ts">
export default {
    name: 'TrackAnimation',
}
</script>
