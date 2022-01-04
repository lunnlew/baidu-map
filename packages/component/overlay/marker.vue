<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '@/lib/map'
import { addMaker } from '@/lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '@/utils/util'
const props = withDefaults(
    defineProps<{
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
        title?: string
        show?: boolean
    }>(),
    {
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
        title: '',
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref()
const isShow = computed(() => state.value.inited && props.show)
const options = computed(() => props)
watch(
    () => isShow.value,
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
            bm.value = bindEvents(addMaker(props.point, merge_props), extractEmitEvents(attrs), emit)
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.point,
    val => {
        if (bm.value) {
            bm.value.setPosition(val)
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    map.value?.removeOverlay(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'Marker',
}
</script>
