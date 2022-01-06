<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addPolyline } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, mergePropsDefault } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        points: {
            lng: number
            lat: number
        }[]
        strokeColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        strokeStyle?: string
        enableMassClear?: boolean
        enableEditing?: boolean
        enableClicking?: boolean
        clip?: boolean
        geodesic?: boolean
        overallView?: boolean
        show?: boolean
    }>(),
    {
        points: () => [],
        strokeColor: '#FF0000',
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        enableMassClear: true,
        enableEditing: false,
        enableClicking: true,
        overallView: true,
        clip: true,
        geodesic: false,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show && props.points.length > 0)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.Polyline | null>()
watch(
    () => state.value.map_inited,
    val => {
        if (val) {
            let merge_props = { ...options.value, icons: [] }
            if (slots.default) {
                let icons = slots.default().filter(s => (s.type as any).name == 'PolylineIconSequence')
                for (let icon of icons) {
                    let icon_props = mergePropsDefault(icon.props as any, (icon.type as any).props)
                    if (icon_props.symbol) {
                        ;(merge_props as any).icons.push(icon_props)
                    }
                }
            }
            bm.value = bindEvents(addPolyline(props.points, merge_props), extractEmitEvents(attrs), emit)
            isShow.value && bm.value?.show()
        }
    },
    { immediate: true }
)
watch(
    () => state.value.map_inited && isShow.value,
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
onUnmounted(() => {
    bm.value && map.value?.removeOverlay(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'Polyline',
}
</script>
