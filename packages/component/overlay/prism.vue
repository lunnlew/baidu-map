<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addPrism } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
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
        overallView: false,
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits([])
const options = computed(() => props)
const isShow = computed(() => props.show && props.points.length > 0)
const bm = ref<BaiduMapVue3.BMapGL.Prism | null>()
watch(
    () => state.value.map_inited,
    val => {
        if (val) {
            bm.value = bindEvents(addPrism(props.points, options.value), extractEmitEvents(attrs), emit)
            isShow.value && bm.value?.show()
        }
    },
    {
        immediate: true,
    }
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
    name: 'Prisim',
}
</script>
