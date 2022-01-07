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
        init?: boolean
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
        init: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits([])
const options = computed(() => props)
const isShow = computed(() => props.show && props.points.length > 0)
const bm = ref<{
    prism: BaiduMapVue3.BMapGL.Prism | null
    removeOverlay: Function
    overallView: (points?: BaiduMapVue3.BMapGL.Point[]) => void
} | null>()
watch(
    () => props.init && state.value.map_inited,
    val => {
        if (val) {
            bm.value = addPrism(props.points, options.value)
            bindEvents(bm.value?.prism, extractEmitEvents(attrs), emit)
            isShow.value && bm.value?.prism?.show()
            isShow.value && options.value.overallView && bm.value?.overallView()
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
            bm.value?.prism?.show()
        } else {
            bm.value?.prism?.hide()
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
        bm.value.prism = null
        bm.value = null
    }
})
defineExpose({
    bmobj: bm.value?.prism,
})
</script>
<script lang="ts">
export default {
    name: 'Prisim',
}
</script>
