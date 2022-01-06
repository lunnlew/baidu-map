import BMapGL from './lib/BMapGL'

import BaiduMap from './component/map/index.vue'
import BmView from './component/map/view.vue'

import BmScaleControl from './component/control/scale.vue'
import BmZoomControl from './component/control/zoom.vue'
import BmCopyrightControl from './component/control/copyright.vue'
import BmNavigationControl from './component/control/navigation.vue'
import BmNavigationControl3D from './component/control/navigation-3d.vue'
import BmLocationControl from './component/control/location.vue'
import BmMapTypeControl from './component/control/map-type.vue'
import BmCityListControl from './component/control/city-list.vue'
import BmCustomControl from './component/control/custom-control.vue'

import BmMarker from './component/overlay/marker.vue'
import BmMarkerIcon from './component/overlay/marker-icon.vue'
import BmMarker3D from './component/overlay/marker3d.vue'
import BmMarker3DIcon from './component/overlay/marker3d-icon.vue'
import BmRichMarker from './component/overlay/rich-marker.vue'
import BmPolyline from './component/overlay/polyline.vue'
import BmPolylineIconSequence from './component/overlay/polyline-icon-sequence.vue'
import BmPolygon from './component/overlay/polygon.vue'
import BmCityBoundary from './component/overlay/city-boundary.vue'
import BmPrism from './component/overlay/prism.vue'
import BmLabel from './component/overlay/label.vue'
import BmGroundOverlay from './component/overlay/ground-overlay.vue'
import BmGroundOverlayImage from './component/overlay/ground-overlay-image.vue'
import BmContextMenu from './component/overlay/context-menu.vue'
import BmContextMenuItem from './component/overlay/context-menu-item.vue'
import BmCircle from './component/overlay/circle.vue'
import BmInfoWindow from './component/overlay/info-window.vue'
import BmBezierCurve from './component/overlay/bezier-curve.vue'

import BmViewAnimation from './component/animation/index.vue'
import BmTrackAnimation from './component/animation/track.vue'
import BmLushu from './component/animation/lushu.vue'
import BmDistanceTool from './component/tool/distance-tool.vue'
import BmDrawingManager from './component/tool/drawing-manager.vue'
import BmDrivingRoute from './component/tool/driving-route.vue'
import BmTransitRoute from './component/tool/transit-route.vue'
import BmWalkingRoute from './component/tool/walking-route.vue'
import BmRidingRoute from './component/tool/riding-route.vue'


/**
 * 地图类型空间及根组件
 */
export {
    BMapGL,
    BaiduMap,
    BmView,
    /**
     * 地图控件
     */
    BmScaleControl,
    BmZoomControl,
    BmCopyrightControl,
    BmNavigationControl,
    BmNavigationControl3D as BmNavigationThreedControl,
    BmCityListControl,
    BmLocationControl,
    BmMapTypeControl,
    BmCustomControl,
    /**
     * 地图覆盖物
     */
    BmLabel,
    BmMarker,
    BmMarkerIcon,
    BmMarker3D as BmMarkerThreed,
    BmMarker3DIcon as BmMarkerThreedIcon,
    BmRichMarker,
    BmPolyline,
    BmPolylineIconSequence as BmIconSequence,
    BmPolygon,
    BmCityBoundary,
    BmPrism,
    BmGroundOverlay,
    BmGroundOverlayImage,
    BmContextMenu,
    BmContextMenuItem,
    BmCircle,
    BmInfoWindow,
    BmBezierCurve,
    /**
     * 地图动画
     */
    BmViewAnimation,
    BmTrackAnimation,
    BmLushu,
    /**
     * 地图工具
     */
    BmDistanceTool,
    BmDrawingManager,
    BmDrivingRoute,
    BmTransitRoute,
    BmWalkingRoute,
    BmRidingRoute,
}

const bm = {
    install: function (app: any, options?: {
        apiKey: string,
    }) {
        app.config.globalProperties.$bm_apikey = options?.apiKey
        app.component('baidu-map', BaiduMap)
        app.component('bm-scale-control', BmScaleControl)
        app.component('bm-zoom-control', BmZoomControl)
        app.component('bm-copyright-control', BmCopyrightControl)
        app.component('bm-navigation-control', BmNavigationControl)
        app.component('bm-navigation-threed-control', BmNavigationControl3D)
        app.component('bm-city-list-control', BmCityListControl)
        app.component('bm-location-control', BmLocationControl)
        app.component('bm-map-type-control', BmMapTypeControl)
        app.component('bm-custom-control', BmCustomControl)
        app.component('bm-marker', BmMarker)
        app.component('bm-rich-marker', BmRichMarker)
        app.component('bm-marker-icon', BmMarkerIcon)
        app.component('bm-marker-threed', BmMarker3D)
        app.component('bm-marker-threed-icon', BmMarker3DIcon)
        app.component('bm-polyline', BmPolyline)
        app.component('bm-icon-sequence', BmPolylineIconSequence)
        app.component('bm-polygon', BmPolygon)
        app.component('bm-city-boundary', BmCityBoundary)
        app.component('bm-prism', BmPrism)
        app.component('bm-label', BmLabel)
        app.component('bm-ground-overlay', BmGroundOverlay)
        app.component('bm-ground-overlay-image', BmGroundOverlayImage)
        app.component('bm-context-menu', BmContextMenu)
        app.component('bm-context-menu-item', BmContextMenuItem)
        app.component('bm-circle', BmCircle)
        app.component('bm-info-window', BmInfoWindow)
        app.component('bm-bezier-curve', BmBezierCurve)
        app.component('bm-view-animation', BmViewAnimation)
        app.component('bm-track-animation', BmTrackAnimation)
        app.component('bm-lushu', BmLushu)
        app.component('bm-distance-tool', BmDistanceTool)
        app.component('bm-drawing-manager', BmDrawingManager)
        app.component('bm-driving-route', BmDrivingRoute)
        app.component('bm-transit-route', BmTransitRoute)
        app.component('bm-walking-route', BmWalkingRoute)
        app.component('bm-riding-route', BmRidingRoute)
    },
}
export default bm
