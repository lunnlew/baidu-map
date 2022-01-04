<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addMaker3D } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        point: {
            lng: number
            lat: number
        }
        height?: number
        size?: number
        shape?: number
        fillColor?: string
        fillOpacity?: number
        show?: boolean
    }>(),
    {
        point: () => ({
            lng: 116.403963,
            lat: 39.915119,
        }),
        height: 200,
        size: 50,
        shape: 1,
        fillColor: '#FF0000',
        fillOpacity: 0.8,
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
                let Marker3DIcon = slots.default().find(s => (s.type as any).name == 'Marker3DIcon')
                if (Marker3DIcon) {
                    let merge_icon_props = mergePropsDefault(
                        Marker3DIcon.props as any,
                        (Marker3DIcon.type as any).props
                    )
                    if (merge_icon_props.src) {
                        ;(merge_props as any).icon = merge_icon_props
                    }
                }
            }
            bm.value = bindEvents(addMaker3D(props.point, merge_props), extractEmitEvents(attrs), emit)
        } else {
            bm.value && map.value?.removeOverlay(bm.value)
            bm.value = null
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
    bm.value && map.value?.removeOverlay(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'Marker3D',
}
</script>
