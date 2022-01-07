<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addPolygon } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        points?: {
            lng: number
            lat: number
        }[]
        strokeColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        strokeStyle?: string
        fillColor?: string
        fillOpacity?: number
        enableMassClear?: boolean
        enableClicking?: boolean
        enableEditing?: boolean
        overallView?: boolean
        show?: boolean
        init?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        points: () => [],
        strokeColor: '#FF0000',
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        enableMassClear: true,
        enableClicking: true,
        enableEditing: false,
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
const options = computed(() => props)
const bm = ref<{
    polygon: BaiduMapVue3.BMapGL.Polygon | null
    removeOverlay: Function
    overallView: (points?: BaiduMapVue3.BMapGL.Point[]) => void
} | null>()
const currentMap = computed(() => props.map || map.value)
watch(
    () => props.init && currentMap.value,
    val => {
        if (val) {
            bm.value = addPolygon(currentMap.value, props.points, options.value)
            bindEvents(bm.value?.polygon, extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value?.polygon,
            })
            isShow.value && bm.value?.polygon?.show()
            isShow.value && options.value.overallView && bm.value?.overallView()
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
            bm.value && bm.value?.polygon?.show()
        } else {
            bm.value && bm.value?.polygon?.hide()
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
        bm.value.polygon = null
        bm.value = null
    }
})
</script>
<script lang="ts">
export default {
    name: 'Ploygon',
}
</script>
