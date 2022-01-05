<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { state } from '../../lib/map'
import { addTrackAnimation, initTrackAnimation } from '../../lib/animation'
import { bindEvents, extractEmitEvents, mergePropsDefault } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        points?: {
            lng: number
            lat: number
        }[]
        overallView?: boolean
        tilt?: number
        duration?: number
        delay?: number
        show?: boolean
    }>(),
    {
        points: () => [],
        overallView: true,
        tilt: 30,
        duration: 20000,
        delay: 3000,
        show: true,
    }
)
const emit = defineEmits({})
const attrs = useAttrs()
const slots = useSlots()
const isShow = computed(() => state.value.map_inited && props.show && props.points.length > 0)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.TrackAnimation | null>()
watch(
    () => isShow.value,
    val => {
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
        if (val) {
            initTrackAnimation().then(result => {
                bm.value = bindEvents(addTrackAnimation(merge_props), extractEmitEvents(attrs), emit)
            })
        } else {
            bm.value && bm.value?.cancel()
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && bm.value.cancel()
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
    start: () => bm.value && bm.value?.start(),
    cancel: () => bm.value && bm.value?.cancel(),
    pause: () => bm.value && bm.value?.pause(),
    continue: () => bm.value && bm.value?.continue(),
})
</script>
<script lang="ts">
export default {
    name: 'TrackAnimation',
}
</script>
