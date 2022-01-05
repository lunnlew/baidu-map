<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { BMapGLRef, map, state } from '../../lib/map'
import { addCircle } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        center: {
            lng: number
            lat: number
        }
        radius?: number
        strokeColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        strokeStyle?: string
        fillColor?: string
        fillOpacity?: number
        enableMassClear?: boolean
        enableEditing?: boolean
        enableClicking?: boolean
        show?: boolean
    }>(),
    {
        center: () => ({
            lng: 116.403963,
            lat: 39.915119,
        }),
        radius: 200,
        strokeColor: 'black',
        strokeWeight: 1,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        fillColor: '',
        fillOpacity: 0.5,
        enableMassClear: true,
        enableEditing: false,
        enableClicking: true,
        show: true,
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const bm = ref<BaiduMapVue3.BMapGL.Circle | null>()
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addCircle(props.center, props.radius, options.value), extractEmitEvents(attrs), emit)
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
    () => props.center,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setCenter(new BMapGLRef.value.Point(val.lng, val.lat))
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
    name: 'Circle',
}
</script>
