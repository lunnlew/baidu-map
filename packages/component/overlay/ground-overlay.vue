<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { useAttrs, useSlots, watch, computed, ref, onUnmounted } from 'vue'
import { map, state } from '../../lib/map'
import { addGroundOverlay } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        startPoint: {
            lng: number
            lat: number
        }
        endPoint: {
            lng: number
            lat: number
        }
        type?: string
        opacity?: number
        url?: string
        show?: boolean
    }>(),
    {
        startPoint: () => ({
            lng: 0,
            lat: 0,
        }),
        endPoint: () => ({
            lng: 0,
            lat: 0,
        }),
        type: 'image',
        opacity: 0.8,
        url: '',
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
                let GroundOverlayImage = slots.default().find(s => (s.type as any).name == 'GroundOverlayImage')
                if (GroundOverlayImage) {
                    let merge_image_props = mergePropsDefault(
                        GroundOverlayImage.props as any,
                        (GroundOverlayImage.type as any).props
                    )
                    merge_props = Object.assign({}, merge_props, merge_image_props)
                }
            }
            bm.value = bindEvents(
                addGroundOverlay(props.startPoint, props.endPoint, merge_props),
                extractEmitEvents(attrs),
                emit
            )
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
    name: 'GroundOverlay',
}
</script>
