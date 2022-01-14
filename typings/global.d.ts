// GlobalComponents for Volar
declare module 'vue' {
    export interface GlobalComponents {
        /**
         * 地图容器
         */
        BmView: typeof import("../packages/main").BmView
        /**
         * 地图根组件
         */
        BaiduMap: typeof import("../packages/main").BaiduMap
        /**
         * 比例尺控件
         */
        BmScaleControl: typeof import("../packages/main").BmScaleControl
        /**
         * 地图级别控件
         */
        BmZoomControl: typeof import("../packages/main").BmZoomControl
        /**
         * 版权控件
         */
        BmCopyrightControl: typeof import("../packages/main").BmCopyrightControl
        /**
         * 自定义控件
         */
        BmCustomControl: typeof import("../packages/main").BmCustomControl
        /**
         * 平移导航控件
         */
        BmNavigationControl: typeof import("../packages/main").BmNavigationControl
        /**
         * 3D导航控件
         */
        BmNavigationThreedControl: typeof import("../packages/main").BmNavigationThreedControl
        /**
         * 定位控件
         */
        BmLocationControl: typeof import("../packages/main").BmLocationControl
        /**
         * 地图类型控件
         */
        BmMapTypeControl: typeof import("../packages/main").BmMapTypeControl
        /**
         * 城市列表控件
         */
        BmCityListControl: typeof import("../packages/main").BmCityListControl
        /**
         * 点标注
         */
        BmMarker: typeof import("../packages/main").BmMarker
        /**
         * 点图标
         */
        BmMarkerIcon: typeof import("../packages/main").BmMarkerIcon
        /**
         * 3d点标注
         */
        BmMarkerThreed: typeof import("../packages/main").BmMarkerThreed
        /**
         * 3d点图标
         */
        BmMarkerThreedIcon: typeof import("../packages/main").BmMarkerThreedIcon
        /**
         * 文本标注
         */
        BmLabel: typeof import("../packages/main").BmLabel
        /**
         * 折线
         */
        BmPolyline: typeof import("../packages/main").BmPolyline
        /**
         * 折线图标
         */
        BmIconSequence: typeof import("../packages/main").BmIconSequence
        /**
         * 多边形
         */
        BmPolygon: typeof import("../packages/main").BmPolygon
        /**
         * 城市区域
         */
        BmCityBoundary: typeof import("../packages/main").BmCityBoundary
        /**
         * 棱柱
         */
        BmPrism: typeof import("../packages/main").BmPrism
        /**
         * 地面叠加层
         */
        BmGroundOverlay: typeof import("../packages/main").BmGroundOverlay
        /**
         * 地面叠加层图片
         */
        BmGroundOverlayImage: typeof import("../packages/main").BmGroundOverlayImage
        /**
         * 上下文菜单
         */
        BmContextMenu: typeof import("../packages/main").BmContextMenu
        /**
         * 上下文菜单
         */
        BmContextMenuItem: typeof import("../packages/main").BmContextMenuItem
        /**
         * 圆形
         */
        BmCircle: typeof import("../packages/main").BmCircle
        /**
         * 信息窗口
         */
        BmInfoWindow: typeof import("../packages/main").BmInfoWindow
        /**
         * 地图动画
         */
        BmViewAnimation: typeof import("../packages/main").BmViewAnimation
        /**
         * 轨迹动画
         */
        BmTrackAnimation: typeof import("../packages/main").BmTrackAnimation
        /**
         * 路书动画
         */
        BmLushu: typeof import("../packages/main").BmLushu
        /**
         * 测距工具
         */
        BmDistanceTool: typeof import("../packages/main").BmDistanceTool
        /**
         * 绘制工具
         */
        BmDrawingManager: typeof import("../packages/main").BmDrawingManager
        /**
         * 富文本标记
         */
        BmRichMarker: typeof import("../packages/main").BmRichMarker
        /**
         * 贝塞尔曲线
         */
        BmBezierCurve: typeof import("../packages/main").BmBezierCurve
        /**
         * 驾驶规划
         */
        BmDrivingRoute: typeof import("../packages/main").BmDrivingRoute
        /**
         * 公交规划
         */
        BmTransitRoute: typeof import("../packages/main").BmTransitRoute
        /**
         * 步行规划
         */
        BmWalkingRoute: typeof import("../packages/main").BmWalkingRoute
        /**
         * 骑行规划
         */
        BmRidingRoute: typeof import("../packages/main").BmRidingRoute
        /**
         * 自定义路书
         */
        BmCustomLushu: typeof import("../packages/main").BmCustomLushu
        /**
         * 自定义折线
         */
        BmCustomPolyline: typeof import("../packages/main").BmCustomPolyline
    }
}

export { }
