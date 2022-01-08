<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addCustomPolyline } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, mergePropsDefault } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        points: {
            lng: number
            lat: number
        }[]
        arrowLength?: number
        arrowAngle?: number
        arrowWidth?: number
        arrowPadding?: number
        arrowHeadlen?: number
        arrowColor?: string
        strokeColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        strokeStyle?: string
        strokeLineCap?: string
        strokeLineJoin?: string
        overallView?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        points: () => [],
        arrowLength: 15,
        arrowAngle: 25,
        arrowWidth: 1,
        arrowPadding: 20,
        arrowHeadlen: 10,
        arrowColor: '#FFF',
        strokeColor: '#FF0000',
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        strokeLineCap: 'round',
        strokeLineJoin: 'round',
        overallView: false,
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show && props.points.length > 0)
const options = computed(() => props)
const bm = ref<{
    polyline: BaiduMapVue3.CustomPolyline | null
    removeOverlay: Function
    overallView: (points?: BaiduMapVue3.BMapGL.Point[]) => void
} | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...options.value, icons: [] }
            if (slots.default) {
                let icons = slots.default().filter(s => (s.type as any).name == 'CustomPolylineIconSequence')
                for (let icon of icons) {
                    let icon_props = mergePropsDefault(icon.props as any, (icon.type as any).props)
                    if (icon_props.symbol) {
                        ;(merge_props as any).icons.push(icon_props)
                    }
                }
            }
            bm.value = addCustomPolyline(currentMap.value, props.points, merge_props)
            emit('ready', {
                bmobj: bm.value?.polyline,
            })
            bindEvents(bm.value?.polyline, extractEmitEvents(attrs), emit)
            isShow.value && bm.value?.polyline?.show()
            isShow.value && merge_props.overallView && bm.value?.overallView()
        }
    },
    { immediate: true }
)
watch(
    () => isShow.value && currentMap.value,
    val => {
        if (val) {
            bm.value?.polyline?.show()
        } else {
            bm.value?.polyline?.hide()
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
        bm.value.removeOverlay()
        bm.value.polyline = null
        bm.value = null
    }
})
</script>
<script lang="ts">
export default {
    name: 'Polyline',
}
</script>
