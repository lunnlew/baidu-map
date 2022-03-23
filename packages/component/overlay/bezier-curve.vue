<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, reactive, ref, useAttrs, watch } from 'vue'
import { addBezierCurve } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import { BMapGLRef } from '../../lib/map'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        points: {
            lng: number
            lat: number
        }[]
        controlPoints: [
            [
                {
                    lng: number
                    lat: number
                },
                {
                    lng: number
                    lat: number
                }
            ],
            [
                {
                    lng: number
                    lat: number
                }
            ]
        ]
        strokeColor?: string
        strokeWeight?: number
        strokeOpacity?: number
        strokeStyle?: string
        enableMassClear?: boolean
        overallView?: boolean
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        points: () => [],
        controlPoints: () => [
            [
                {
                    lng: 0,
                    lat: 0,
                },
                {
                    lng: 0,
                    lat: 0,
                },
            ],
            [
                {
                    lng: 0,
                    lat: 0,
                },
            ],
        ],
        overallView: false,
        show: true,
        strokeColor: '#FF0000',
        strokeWeight: 2,
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        enableMassClear: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const bm = ref<{
    bc: BMapGL.BezierCurve | null
    removeOverlay: Function
    overallView: (points?: BMapGL.Point[]) => void
} | null>()
const isShow = computed(() => props.show && props.points.length > 0)
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => currentMap.value,
    val => {
        if (val) {
            bm.value = addBezierCurve(currentMap.value, props)
            bindEvents(bm.value?.bc, extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value?.bc,
            })
            isShow.value && bm.value?.bc?.show()
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
            bm.value && bm.value.bc?.show()
        } else {
            bm.value && bm.value.bc?.hide()
        }
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
                bm.value?.bc?.setPath(
                    val.map(p => {
                        return new (BMapGLRef.value as any).Point(p.lng, p.lat)
                    })
                )
        }
    }
)
watch(
    () => reactive([...props.controlPoints]),
    val => {
        if (isShow.value) {
            let control_points_arr = [] as BMapGL.Point[][]
            for (let control_points of props.controlPoints) {
                let control_point_arr = [] as BMapGL.Point[]
                for (let control_point of control_points) {
                    control_point_arr.push(new (BMapGLRef.value as any).Point(control_point.lng, control_point.lat))
                }
                control_points_arr.push(control_point_arr)
            }
            bm.value && bm.value?.bc?.setControlPoints(control_points_arr)
        }
    }
)
watch(
    () => props.strokeColor,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.bc?.setStrokeColor(val)
        }
    }
)
watch(
    () => props.strokeWeight,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.bc?.setStrokeWeight(val)
        }
    }
)
watch(
    () => props.strokeOpacity,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.bc?.setStrokeOpacity(val)
        }
    }
)
watch(
    () => props.strokeStyle,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.bc?.setStrokeStyle(val)
        }
    }
)
watch(
    () => props.enableMassClear,
    val => {
        if (isShow.value) {
            bm.value && (val ? bm.value?.bc?.enableMassClear() : bm.value?.bc?.disableMassClear())
        }
    }
)
onUnmounted(() => {
    if (bm.value) {
        bm.value.removeOverlay(bm.value.bc)
        bm.value.bc = null
        bm.value = null
    }
})
</script>
<script lang="ts">
export default {
    name: 'BezierCurve',
}
</script>
