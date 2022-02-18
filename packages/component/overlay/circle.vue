<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, watch } from 'vue'
import { BMapGLRef } from '../../lib/map'
import { addCircle } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
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
        overallView?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
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
        overallView: false,
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const bm = ref<BMapGL.Circle | null>()
const isShow = computed(() => props.show)
const options = computed(() => props)
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
function overallView(map: BMapGL.Map) {
    if (bm.value && map) {
        map.setViewport([
            bm.value?.getBounds().getNorthEast() as BMapGL.Point,
            bm.value?.getBounds().getSouthWest() as BMapGL.Point,
        ])
    }
}
watch(
    () => currentMap.value,
    val => {
        if (val) {
            bm.value = bindEvents(
                addCircle(currentMap.value, props.center, props.radius, options.value),
                extractEmitEvents(attrs),
                emit
            )
            emit('ready', {
                bmobj: bm.value,
            })
            isShow.value && bm.value?.show()
            isShow.value && props.overallView && overallView(currentMap.value)
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
            bm.value && bm.value.show()
        } else {
            bm.value && bm.value.hide()
        }
    }
)
watch(
    () => props.center,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setCenter(new BMapGLRef.value.Point(val.lng, val.lat))
            isShow.value && props.overallView && overallView(currentMap.value)
        }
    }
)
watch(
    () => props.radius,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setRadius(val)
        }
    }
)
watch(
    () => props.strokeColor,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setStrokeColor(val)
        }
    }
)
watch(
    () => props.strokeWeight,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setStrokeWeight(val)
        }
    }
)
watch(
    () => props.strokeOpacity,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setStrokeOpacity(val)
        }
    }
)
watch(
    () => props.strokeStyle,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setStrokeStyle(val)
        }
    }
)
watch(
    () => props.fillColor,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setFillColor(val)
        }
    }
)
watch(
    () => props.fillOpacity,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setFillOpacity(val)
        }
    }
)
watch(
    () => props.enableMassClear,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.enableMassClear() : bm.value?.disableMassClear())
        }
    }
)
watch(
    () => props.enableEditing,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.enableEditing() : bm.value?.disableEditing())
        }
    }
)
watch(
    () => props.overallView && isShow.value,
    val => {
        if (val) {
            bm.value && overallView(currentMap.value)
        }
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.removeOverlay(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'Circle',
}
</script>
