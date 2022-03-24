<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, reactive, Ref, ref, useAttrs, useSlots, watch } from 'vue'
import { addPolygon } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import { BMapGLRef } from '../../lib/map'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
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
const bm = ref<{
    polygon: BMapGL.Polygon | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const inject_map = inject<Ref<BMapGL.Map>>('map')
const currentMap = computed<BMapGL.Map | undefined>(() => props.map || inject_map?.value)
watch(
    () => props.init && currentMap.value,
    val => {
        if (val) {
            bm.value = addPolygon(currentMap.value, props.points, props)
            bindEvents(bm.value?.polygon, extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value?.polygon,
            })
            isShow.value && bm.value?.polygon?.show()
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
watch(
    () => reactive([...props.points]),
    val => {
        if (isShow.value) {
            bm.value &&
                bm.value?.polygon?.setPath(
                    val.map(p => {
                        return new (BMapGLRef.value as any).Point(p.lng, p.lat)
                    })
                )
        }
    }
)
watch(
    () => props.strokeColor,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polygon?.setStrokeColor(val)
        }
    }
)
watch(
    () => props.strokeWeight,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polygon?.setStrokeWeight(val)
        }
    }
)
watch(
    () => props.strokeOpacity,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polygon?.setStrokeOpacity(val)
        }
    }
)
watch(
    () => props.strokeStyle,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polygon?.setStrokeStyle(val)
        }
    }
)
watch(
    () => props.fillColor,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polygon?.setFillColor(val)
        }
    }
)
watch(
    () => props.fillOpacity,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polygon?.setFillOpacity(val)
        }
    }
)
watch(
    () => props.enableMassClear,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.polygon?.enableMassClear() : bm.value?.polygon?.disableMassClear())
        }
    }
)
watch(
    () => props.enableEditing,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.polygon?.enableEditing() : bm.value?.polygon?.disableEditing())
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
