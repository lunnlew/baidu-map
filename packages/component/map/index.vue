<template>
    <div ref="container">
        <div ref="mapView" class="mapView"></div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import BMapGL from '../../lib/BMapGL'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import { addMap, BMapGLRef, initMap } from '../../lib/map'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        center: {
            lng: number
            lat: number
        }
        apiKey?: string
        zoom?: number
        bottomOffset?: number
        clickInterval?: number
        enableDragging?: boolean
        enableRotate?: boolean
        enableTilt?: boolean
        enableKeyboard?: boolean
        enableDblclickZoom?: boolean
        enableContinuousZoom?: boolean
        enableWheelZoom?: boolean
        enableRotateGestures?: boolean
        enableTiltGestures?: boolean
        enablePinchZoom?: boolean
        fixCenterWhenPinch?: boolean
        enableMapClick?: boolean
        enableAutoResize?: boolean
        ebableTraffic?: boolean
        zoomCenter?: {
            lng: number
            lat: number
        } | null
        zoomerDuration?: number
        actionDuration?: number
        mapType?: BMapGL.MapTypeId
        enableInertialDragging?: boolean
        drawMargin?: number
        drawMarginGL?: number
        enableFulltimeSpotClick?: boolean
        enableResizeOnCenter?: boolean
        showControls?: boolean
        showRealSunlight?: boolean
        showMilkyway?: boolean
        showStreetLayer?: boolean
        minZoom?: number | null
        maxZoom?: number | null
        style?: string
        backgroundColor?: string | null
        enableIconClick?: boolean
        autoSafeArea?: boolean
        restrictCenter?: boolean
        preserveDrawingBuffer?: boolean
        onReady?: (state: any) => void
    }>(),
    {
        center: () => ({
            lng: 116.403963,
            lat: 116.403963,
        }),
        apiKey: '',
        zoom: 13,
        bottomOffset: 0,
        clickInterval: 200,
        enableDragging: true,
        enableRotate: true,
        enableTilt: true,
        enableKeyboard: false,
        enableDblclickZoom: true,
        enableContinuousZoom: true,
        enableWheelZoom: false,
        enableRotateGestures: true,
        enableTiltGestures: true,
        enablePinchZoom: true,
        fixCenterWhenPinch: false,
        enableMapClick: true,
        enableAutoResize: true,
        ebableTraffic: false,
        zoomCenter: null,
        zoomerDuration: 240,
        actionDuration: 450,
        mapType: BMapGL.MapTypeId.BMAP_NORMAL_MAP,
        enableInertialDragging: true,
        drawMargin: 500,
        drawMarginGL: 500,
        enableFulltimeSpotClick: false,
        enableResizeOnCenter: false,
        showControls: false,
        showRealSunlight: true,
        showMilkyway: true,
        earthBackground: null,
        showStreetLayer: true,
        minZoom: null,
        maxZoom: null,
        style: 'default',
        backgroundColor: null,
        enableIconClick: false,
        autoSafeArea: false,
        restrictCenter: true,
        preserveDrawingBuffer: false,
        onReady: () => {},
    }
)
const emit = defineEmits({})
const bm = ref<BaiduMapVue3.BMapGL.Map | null>()
const container = ref()
const attrs = useAttrs()
const slots = useSlots()
const options = computed(() => props)
const mapView = ref()
onMounted(() => {
    let merge_props = { ...options.value }
    initMap(merge_props.apiKey)?.then(() => {
        let events = extractEmitEvents(attrs) as string[]
        let map_dom = container.value
        if (slots.default) {
            let MapView = slots.default().find(s => (s.type as any).name == 'MapView')
            if (MapView) {
                map_dom = mapView.value
            }
        }
        // 启用了enableMapClick选项时，某些地图事件本身就有默认的事件处理，不需要再次注册，否则导致多次触发
        let result = addMap(map_dom, merge_props)
        // "on" + e + "_changed"
        bm.value = bindEvents(
            result?.map,
            events.filter((v: string) => !merge_props.enableMapClick || !['click', 'mousedown'].includes(v)),
            emit
        )
        emit('ready', result)
    })
})
watch(
    () => props.center,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.panTo(new BMapGLRef.value.Point(val.lng, val.lat))
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.zoom,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setZoom(val, {
                zoomCenter: props.zoomCenter
                    ? new BMapGLRef.value.Point(props.zoomCenter.lng, props.zoomCenter.lat)
                    : null,
            })
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.mapType,
    val => {
        if (bm.value) {
            bm.value.setMapType(val)
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableRotate,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableRotate()
            } else {
                bm.value.disableRotate()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableWheelZoom,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableScrollWheelZoom()
            } else {
                bm.value.disableScrollWheelZoom()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableContinuousZoom,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableContinuousZoom()
            } else {
                bm.value.disableContinuousZoom()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableResizeOnCenter,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableResizeOnCenter()
            } else {
                bm.value.disableResizeOnCenter()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableDblclickZoom,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableDoubleClickZoom()
            } else {
                bm.value.disableDoubleClickZoom()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableKeyboard,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableKeyboard()
            } else {
                bm.value.disableKeyboard()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enablePinchZoom,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enablePinchToZoom()
            } else {
                bm.value.disablePinchToZoom()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableRotate,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableRotate()
            } else {
                bm.value.disableRotate()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableRotateGestures,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableRotateGestures()
            } else {
                bm.value.disableRotateGestures()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableTiltGestures,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableTiltGestures()
            } else {
                bm.value.disableTiltGestures()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableAutoResize,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableAutoResize()
            } else {
                bm.value.disableAutoResize()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableDragging,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableDragging()
            } else {
                bm.value.disableDragging()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.enableInertialDragging,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.enableInertialDragging()
            } else {
                bm.value.disableInertialDragging()
            }
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.ebableTraffic,
    val => {
        if (bm.value) {
            if (val) {
                bm.value.setTrafficOn()
            } else {
                bm.value.setTrafficOff()
            }
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    if (bm.value) {
        bm.value.clearOverlays()
        bm.value.clearSpots()
        bm.value.clearAreaSpots()
        bm.value.destroy()
    }
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'BaiduMap',
}
</script>
<style lang="less" scoped>
.mapView {
    width: 100%;
    height: 100%;
}
</style>
