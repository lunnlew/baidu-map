<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addCityBoundary } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../types'
const props = withDefaults(
    defineProps<{
        name: string
        overallView?: boolean
        show?: boolean
    }>(),
    {
        name: '北京市',
        overallView: true,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const options = computed(() => props)
const isShow = computed(() => state.value.map_inited && props.show)
const bm = ref<{
    boundary: BaiduMapVue3.BMapGL.Boundary | null
    overlay: BaiduMapVue3.BMapGL.Overlay | null
} | null>()
watch(
    () => isShow.value,
    async val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                let MarkerPolygon = slots.default().find(s => (s.type as any).name == 'Polygon')
                if (MarkerPolygon) {
                    let merge_polygon_props = mergePropsDefault(
                        MarkerPolygon.props as any,
                        (MarkerPolygon.type as any).props
                    )
                    ;(merge_props as any).polygon = merge_polygon_props
                }
            }
            bm.value = await addCityBoundary(options.value.name, merge_props)
            bindEvents(bm.value?.boundary, extractEmitEvents(attrs), emit)
        } else {
            if (bm.value) {
                map.value?.removeOverlay(bm.value?.overlay as BaiduMapVue3.BMapGL.Overlay)
                bm.value.boundary = null
                bm.value.overlay = null
                bm.value = null
            }
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    if (bm.value) {
        map.value?.removeOverlay(bm.value?.overlay as BaiduMapVue3.BMapGL.Overlay)
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
