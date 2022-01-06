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
    }>(),
    {
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
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => props.show && props.points.length > 0)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.Polygon | null>()
watch(
    () => state.value.map_inited,
    val => {
        if (val) {
            bm.value = bindEvents(addPolygon(props.points, options.value), extractEmitEvents(attrs), emit)
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
            if (bm.value) {
                if (props.overallView && map.value) {
                    map.value.setViewport(bm.value.getPath())
                }
                bm.value.show()
            }
        } else {
            bm.value && bm.value.hide()
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.overallView && isShow.value,
    val => {
        if (val && map.value && bm.value) {
            map.value.setViewport(bm.value.getPath())
        }
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
    name: 'Ploygon',
}
</script>
