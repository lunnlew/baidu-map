<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, Ref, ref, useAttrs, useSlots, watch } from 'vue'
import { addPrism } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
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
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
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
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show && props.points.length > 0)
const bm = ref<{
    prism: BMapGL.Prism | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const inject_map = inject<Ref<BMapGL.Map>>('map')
const currentMap = computed<BMapGL.Map | undefined>(() => props.map || inject_map?.value)
watch(
    () => props.init && currentMap.value,
    val => {
        if (val) {
            bm.value = addPrism(currentMap.value, props.points, props)
            bindEvents(bm.value?.prism, extractEmitEvents(attrs), emit)
            isShow.value && bm.value?.prism?.show()
            emit('ready', {
                bmobj: bm.value?.prism,
            })
            isShow.value && props.overallView && bm.value?.overallView()
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => isShow.value && currentMap.value,
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
</script>
<script lang="ts">
export default {
    name: 'Prisim',
}
</script>
