<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '@/lib/map'
import { addCityBoundary } from '@/lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '@/utils/util'
const props = withDefaults(
    defineProps<{
        name: string
        show?: boolean
    }>(),
    {
        name: '北京市',
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const options = computed(() => props)
const isShow = computed(() => state.value.inited && props.show)
const bm = ref()
watch(
    () => isShow.value,
    val => {
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
            bm.value = bindEvents(addCityBoundary(options.value.name, merge_props), extractEmitEvents(attrs), emit)
        } else {
            bm.value && map.value?.removeOverlay(bm.value)
            bm.value = null
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
    name: 'CityBoundary',
}
</script>
