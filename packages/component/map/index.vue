<template>
    <div ref="container">
        <div ref="mapView" class="mapView"></div>
        <slot v-bind:map="map"></slot>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, provide, Ref, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLConstant } from '../../lib/BMapGL'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import { addMap, BMapGLRef, initMap } from '../../lib/map'
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
        earthBackground?: null
        showStreetLayer?: boolean
        minZoom?: number | null
        maxZoom?: number | null
        style?: string
        backgroundColor?: string | null
        enableIconClick?: boolean
        autoSafeArea?: boolean
        restrictCenter?: boolean
        preserveDrawingBuffer?: boolean
        displayOptions?: {
            overlay?: boolean
            layer?: boolean
            building?: boolean
            street?: boolean
            poi?: boolean
            skyColors?: string[]
        }
        onReady?: (el: any) => void
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
        mapType: BMapGLConstant.MapTypeId.BMAP_NORMAL_MAP,
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
        displayOptions: () => {
            return {
                overlay: true,
                layer: true,
                building: true,
                street: true,
                poi: true,
                skyColors: [],
            }
        },
        onReady: (el: any) => {},
    }
)
const emit = defineEmits({})
const bm = ref<BMapGL.Map | null>()
const container = ref()
const attrs = useAttrs()
const slots = useSlots()
const mapView = ref()
const map = ref<BMapGL.Map>()
provide('map', map)
onMounted(() => {
    let merge_props = { ...props }
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
        map.value = result?.map
        bm.value?.setDisplayOptions(merge_props.displayOptions)
        emit('ready', {
            map: bm.value,
        })
    })
})
watch(
    () => props.displayOptions,
    (val: any) => {
        if (bm.value) {
            bm.value?.setDisplayOptions(val)
        }
    },
    {
        deep: true,
    }
)
watch(
    () => props.center,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.panTo(new BMapGLRef.value.Point(val.lng, val.lat))
        }
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
    }
)
watch(
    () => props.mapType,
    val => {
        if (bm.value) {
            bm.value.setMapType(val)
        }
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
    }
)
onUnmounted(() => {
    if (bm.value) {
        bm.value.clearOverlays()
        bm.value.clearSpots()
        bm.value.clearAreaSpots()
        bm.value.destroy()
        bm.value = null
    }
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
