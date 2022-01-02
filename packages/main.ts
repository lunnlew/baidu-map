import BaiduMap from './component/map/index.vue';
import BMapGL from './lib/BMapGL';

import BmScaleControl from './component/control/scale.vue';
import BmZoomControl from './component/control/zoom.vue';
import BmCopyrightControl from './component/control/copyright.vue';
import BmNavigationControl from './component/control/navigation.vue';
import BmNavigationControl3D from './component/control/navigation-3d.vue';
import BmLocationControl from './component/control/location.vue';
import BmMapTypeControl from './component/control/map-type.vue';
import BmCityListControl from './component/control/city-list.vue';
import BmCustomControl from './component/control/custom-control.vue';

import BmMarker from './component/overlay/marker.vue';
import BmMarkerIcon from './component/overlay/marker-icon.vue';
import BmMarker3D from './component/overlay/marker3d.vue';
import BmMarker3DIcon from './component/overlay/marker3d-icon.vue';
import BmPolyline from './component/overlay/polyline.vue';
import BmPolygon from './component/overlay/polygon.vue';
import BmCityBoundary from './component/overlay/city-boundary.vue';
import BmPrism from './component/overlay/prism.vue';
import BmLabel from './component/overlay/label.vue';
import BmGroundOverlay from './component/overlay/ground-overlay.vue';
import BmGroundOverlayImage from './component/overlay/ground-overlay-image.vue';
import BmContextMenu from './component/overlay/context-menu.vue';
import BmContextMenuItem from './component/overlay/context-menu-item.vue';
import BmCircle from './component/overlay/circle.vue';
import BmInfoWindow from './component/overlay/info-window.vue';

import BmViewAnimation from './component/animation/index.vue';
import BmTrackAnimation from './component/animation/track.vue';

/**
 * 地图类型空间及根组件
 */
export {
    BMapGL,
    BaiduMap,

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
    BmPolyline,
    BmPolygon,
    BmCityBoundary,
    BmPrism,
    BmGroundOverlay,
    BmGroundOverlayImage,
    BmContextMenu,
    BmContextMenuItem,
    BmCircle,
    BmInfoWindow,

    /**
     * 地图动画
     */
    BmViewAnimation,
    BmTrackAnimation
};