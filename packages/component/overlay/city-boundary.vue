<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLRef, map, state } from '../../lib/map'
import { addCityBoundary, initBoundariesResult } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        name: string
        overallView?: boolean
        firstLoad?: boolean
        show?: boolean
    }>(),
    {
        name: '北京市',
        overallView: false,
        firstLoad: true,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const options = computed(() => props)
const isShow = computed(() => props.show)
const bm = ref<{
    boundary: BaiduMapVue3.BMapGL.Boundary | null
    overlay: BaiduMapVue3.BMapGL.Overlay | null
    removeOverlay: Function
    overallView: (points?: BaiduMapVue3.BMapGL.Point[]) => void
} | null>()
const boundaries_result = ref<{
    boundary: BaiduMapVue3.BMapGL.Boundary
    rs: {
        boundaries: string[]
    }
}>()

const need_init_load = computed(() => state.value.map_inited && props.firstLoad)
watch(
    () => need_init_load.value,
    async () => {
        boundaries_result.value = await initBoundariesResult(props.name)
        bindEvents(boundaries_result.value?.boundary, extractEmitEvents(attrs), emit)
    },
    {
        immediate: true,
    }
)

async function loadBoundary() {
    if (bm.value?.overlay) {
        map.value?.removeOverlay(bm.value?.overlay as BaiduMapVue3.BMapGL.Overlay)
        bm.value.overlay = null
    }
    let merge_props = { ...options.value }
    if (slots.default) {
        let MarkerPolygon = slots.default().find(s => (s.type as any).name == 'Polygon')
        if (MarkerPolygon) {
            let merge_polygon_props = mergePropsDefault(MarkerPolygon.props as any, (MarkerPolygon.type as any).props)
            ;(merge_props as any).polygon = merge_polygon_props
        }
    }
    bm.value = await addCityBoundary(options.value.name, merge_props, boundaries_result.value)
    isShow.value && bm.value?.overlay?.show()
    merge_props.overallView && bm.value?.overallView()
}

watch(
    () => state.value.map_inited,
    async val => {
        if (val) {
            loadBoundary()
        }
    },
    {
        immediate: true,
    }
)

watch(
    () => isShow.value && state.value.map_inited,
    val => {
        if (val) {
            bm.value?.overlay?.show()
        } else {
            bm.value?.overlay?.hide()
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

watch(
    () => props.name,
    () => {
        loadBoundary()
    }
)

onUnmounted(() => {
    if (bm.value) {
        bm.value.removeOverlay()
        bm.value.boundary = null
        bm.value.overlay = null
        bm.value = null
    }
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'CityBoundary',
}
</script>
