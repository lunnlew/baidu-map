<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, Ref, ref, useAttrs, useSlots, watch } from 'vue'
import { addTrackAnimation, initTrackAnimation } from '../../lib/animation'
import { bindEvents, extractEmitEvents, useSlotComponentProps } from '../../utils/util'
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
const inject_map = inject<Ref<BMapGL.Map>>('map')
const currentMap = computed<BMapGL.Map | undefined>(() => props.map || inject_map?.value)
const isShow = computed(() => currentMap.value && props.show)
const bm = ref<{
    animation: BMapGL.TrackAnimation | null
    overlay: BMapGL.Overlay | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const Polyline = useSlotComponentProps(slots, 'default', 'Polyline')
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = { ...props, polyline: Polyline.props.value }
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
