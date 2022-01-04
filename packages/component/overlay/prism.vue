<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '@/lib/map'
import { addPrism } from '@/lib/overlay'
import { bindEvents, extractEmitEvents } from '@/utils/util'
const props = withDefaults(
    defineProps<{
        points?: {
            lng: number
            lat: number
        }[]
        altitude?: number
        topFillColor?: string
        topFillOpacity?: number
        sideFillColor?: string
        sideFillOpacity?: number
        enableMassClear?: boolean
        overallView?: boolean
        show?: boolean
    }>(),
    {
        points: () => [],
        altitude: 5000,
        topFillColor: '#5679ea',
        topFillOpacity: 0.5,
        sideFillColor: '#5679ea',
        sideFillOpacity: 0.9,
        enableMassClear: true,
        overallView: true,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits([])
const options = computed(() => props)
const isShow = computed(() => state.value.inited && props.show && props.points.length > 0)
const bm = ref()
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addPrism(props.points, options.value), extractEmitEvents(attrs), emit)
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
    name: 'Prisim',
}
</script>
