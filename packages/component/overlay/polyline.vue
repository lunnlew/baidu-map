<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, reactive, ref, useAttrs, useSlots, watch } from 'vue'
import { addPolyline } from '../../lib/overlay'
import { bindEvents, extractEmitEvents, useSlotComponentPropsArray } from '../../utils/util'
import { BMapGLRef } from '../../lib/map'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        points: {
            lng: number
            lat: number
        }[]
        strokeColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        strokeStyle?: string
        enableMassClear?: boolean
        enableEditing?: boolean
        enableClicking?: boolean
        clip?: boolean
        geodesic?: boolean
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
        enableMassClear: true,
        enableEditing: false,
        enableClicking: true,
        overallView: false,
        clip: true,
        geodesic: false,
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
    polyline: BMapGL.Polyline | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
const PolylineIconSequenceList = useSlotComponentPropsArray(slots, 'default', 'PolylineIconSequence')
watch(
    () => props.init && currentMap.value,
    val => {
        if (val) {
            let merge_props = { ...props, icons: PolylineIconSequenceList.items.value }
            bm.value = addPolyline(currentMap.value, props.points, merge_props)
            bindEvents(bm.value?.polyline, extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value?.polyline,
            })
            isShow.value && bm.value?.polyline?.show()
            isShow.value && merge_props.overallView && bm.value?.overallView()
        }
    },
    { immediate: true }
)
watch(
    () => isShow.value && currentMap.value,
    val => {
        if (val) {
            bm.value?.polyline?.show()
        } else {
            bm.value?.polyline?.hide()
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
                bm.value?.polyline?.setPath(
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
            bm.value && bm.value?.polyline?.setStrokeColor(val)
        }
    }
)
watch(
    () => props.strokeWeight,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polyline?.setStrokeWeight(val)
        }
    }
)
watch(
    () => props.strokeOpacity,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polyline?.setStrokeOpacity(val)
        }
    }
)
watch(
    () => props.strokeStyle,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.polyline?.setStrokeStyle(val)
        }
    }
)
watch(
    () => props.enableMassClear,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.polyline?.enableMassClear() : bm.value?.polyline?.disableMassClear())
        }
    }
)
watch(
    () => props.enableEditing,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.polyline?.enableEditing() : bm.value?.polyline?.disableEditing())
        }
    }
)
onUnmounted(() => {
    if (bm.value) {
        bm.value.removeOverlay()
        bm.value.polyline = null
        bm.value = null
    }
})
</script>
<script lang="ts">
export default {
    name: 'Polyline',
}
</script>
