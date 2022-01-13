import { ComponentPublicInstance } from "vue";

export namespace BaiduMapVue3 {
    /**
     * 地图容器
     */
    export const BmView: ComponentPublicInstance<{}>
    /**
     * 地图根组件
     */
    export const BaiduMap: ComponentPublicInstance<BmComponent.BaiduMapProps>
    /**
     * 比例尺控件
     */
    export const BmScaleControl: ComponentPublicInstance<BmComponent.BmScaleControlProps>
    /**
     * 地图级别控件
     */
    export const BmZoomControl: ComponentPublicInstance<BmComponent.BmZoomControlProps>
    /**
     * 版权控件
     */
    export const BmCopyrightControl: ComponentPublicInstance<BmComponent.BmCopyrightControlProps>
    /**
     * 自定义控件
     */
    export const BmCustomControl: ComponentPublicInstance<BmComponent.BmCustomControlProps>
    /**
     * 平移导航控件
     */
    export const BmNavigationControl: ComponentPublicInstance<BmComponent.BmNavigationControlProps>
    /**
     * 3D导航控件
     */
    export const BmNavigationThreedControl: ComponentPublicInstance<BmComponent.BmNavigationThreedControlProps>
    /**
     * 定位控件
     */
    export const BmLocationControl: ComponentPublicInstance<BmComponent.BmLocationControlProps>
    /**
     * 地图类型控件
     */
    export const BmMapTypeControl: ComponentPublicInstance<BmComponent.BmMapTypeControlProps>
    /**
     * 城市列表控件
     */
    export const BmCityListControl: ComponentPublicInstance<BmComponent.BmCityListControlProps>
    /**
     * 点标注
     */
    export const BmMarker: ComponentPublicInstance<BmComponent.BmMarkerProps>
    /**
     * 点图标
     */
    export const BmMarkerIcon: ComponentPublicInstance<BmComponent.BmMarkerIconProps>
    /**
     * 3d点标注
     */
    export const BmMarkerThreed: ComponentPublicInstance<BmComponent.BmMarker3DProps>
    /**
     * 3d点图标
     */
    export const BmMarkerThreedIcon: ComponentPublicInstance<BmComponent.BmMarkerThreedIconProps>
    /**
     * 文本标注
     */
    export const BmLabel: ComponentPublicInstance<BmComponent.BmLabelProps>
    /**
     * 折线
     */
    export const BmPolyline: ComponentPublicInstance<BmComponent.BmPolylineProps>
    /**
     * 折线图标
     */
    export const BmIconSequence: ComponentPublicInstance<BmComponent.BmIconSequenceProps>
    /**
     * 多边形
     */
    export const BmPolygon: ComponentPublicInstance<BmComponent.BmPolygonProps>
    /**
     * 城市区域
     */
    export const BmCityBoundary: ComponentPublicInstance<BmComponent.BmCityBoundaryProps>
    /**
     * 棱柱
     */
    export const BmPrism: ComponentPublicInstance<BmComponent.BmPrismProps>
    /**
     * 地面叠加层
     */
    export const BmGroundOverlay: ComponentPublicInstance<BmComponent.BmGroundOverlayProps>
    /**
     * 地面叠加层图片
     */
    export const BmGroundOverlayImage: ComponentPublicInstance<BmComponent.BmGroundOverlayImageProps>
    /**
     * 上下文菜单
     */
    export const BmContextMenu: ComponentPublicInstance<BmComponent.BmContextMenuProps>
    /**
     * 上下文菜单
     */
    export const BmContextMenuItem: ComponentPublicInstance<BmComponent.BmContextMenuItemProps>
    /**
     * 圆形
     */
    export const BmCircle: ComponentPublicInstance<BmComponent.BmCircleProps>
    /**
     * 信息窗口
     */
    export const BmInfoWindow: ComponentPublicInstance<BmComponent.BmInfoWindowProps>
    /**
     * 地图动画
     */
    export const BmViewAnimation: ComponentPublicInstance<BmComponent.BmViewAnimationProps>
    /**
     * 轨迹动画
     */
    export const BmTrackAnimation: ComponentPublicInstance<BmComponent.BmTrackAnimationProps>
    /**
     * 路书动画
     */
    export const BmLushuAnimation: ComponentPublicInstance<BmComponent.BmLushuAnimationProps>
    /**
     * 测距工具
     */
    export const BmDistanceTool: ComponentPublicInstance<BmComponent.BmDistanceToolProps>
    /**
     * 绘制工具
     */
    export const BmDrawingManager: ComponentPublicInstance<BmComponent.BmDrawingManagerProps>
    /**
     * 富文本标记
     */
    export const BmRichMarker: ComponentPublicInstance<BmComponent.BmRichMarkerProps>
    /**
     * 贝塞尔曲线
     */
    export const BmBezierCurve: ComponentPublicInstance<BmComponent.BmBezierCurveProps>
    /**
     * 驾驶规划
     */
    export const BmDrivingRoute: ComponentPublicInstance<BmComponent.BmDrivingRouteProps>
    /**
     * 公交规划
     */
    export const BmTransitRoute: ComponentPublicInstance<BmComponent.BmTransitRouteProps>
    /**
     * 步行规划
     */
    export const BmWalkingRoute: ComponentPublicInstance<BmComponent.BmWalkingRouteProps>
    /**
     * 骑行规划
     */
    export const BmRidingRoute: ComponentPublicInstance<BmComponent.BmRidingRouteProps>
    /**
     * 自定义路书
     */
    export const BmCustomLushu: ComponentPublicInstance<BmComponent.BmCustomLushuProps>
    /**
     * 自定义折线
     */
    export const BmCustomPolyline: ComponentPublicInstance<BmComponent.BmCustomPolylineProps>

    /**
     * BMapGL
     */
    namespace BMapGL {
        /**
         * 此常量表示控件的定位。
         */
        enum ControlAnchor {
            /**
             * 控件将定位到地图的左上角
             */
            BMAP_ANCHOR_TOP_LEFT = 0,
            /**
             * 控件将定位到地图的右上角
             */
            BMAP_ANCHOR_TOP_RIGHT = 1,
            /**
             * 控件将定位到地图的左下角
             */
            BMAP_ANCHOR_BOTTOM_LEFT = 2,
            /**
             * 控件将定位到地图的右下角
             */
            BMAP_ANCHOR_BOTTOM_RIGHT = 3,
        }
        /**
         * 坐标类型
         */
        enum CoordPointType {
            /**
             * 大地坐标系
             */
            COORDINATES_WGS84 = 1,
            /**
             * 大地坐标系墨卡托米制坐标
             */
            COORDINATES_WGS84_MC = 2,
            /**
             * 火星坐标系
             */
            COORDINATES_GCJ02 = 3,
            /**
             * 火星坐标系墨卡托米制坐标
             */
            COORDINATES_GCJ02_MC = 4,
            /**
             * 百度坐标系
             */
            COORDINATES_BD09 = 5,
            /**
             * 百度坐标系墨卡托米制坐标
             */
            COORDINATES_BD09_MC = 6,
            /**
             * mapbar地图坐标
             */
            COORDINATES_MAPBAR = 7,
            /**
             * 51地图坐标
             */
            COORDINATES_51 = 8,
        }
        /**
         * DrawingManager 绘制类型
         */
        enum DrawingType {
            BMAP_DRAWING_MARKER = "marker",
            BMAP_DRAWING_POLYLINE = "polyline",
            BMAP_DRAWING_RECTANGLE = "rectangle",
            BMAP_DRAWING_POLYGON = "polygon",
            BMAP_DRAWING_CIRCLE = "circle"
        }
        /**
         * 常量表示不同的线路类型。
         */
        enum RouteType {
            /**
             * 驾车线路
             */
            BMAP_ROUTE_TYPE_DRIVING = 3,
            /**
             * 步行线路
             */
            BMAP_ROUTE_TYPE_WALKING = 2,
            /**
             * 骑行线路
             */
            BMAP_ROUTE_TYPE_RIDING = 6,
        }

        /**
         * 此枚举类型表示驾车方案的策略配置。
         */
        enum DrivingPolicy {
            /**
             * 默认
             */
            BMAP_DRIVING_POLICY_DEFAULT = 0,
            /**
             * 优先高速
             */
            BMAP_DRIVING_POLICY_FIRST_HIGHWAYS = 4,
            /**
             * 避开高速
             */
            BMAP_DRIVING_POLICY_AVOID_HIGHWAYS = 3,
            /**
             * 避开拥堵
             */
            BMAP_DRIVING_POLICY_AVOID_CONGESTION = 5,
        }
        /**
         * 地图类型类
         */
        enum MapTypeId {
            /**
             * 此地图类型展示普通街道视图
             */
            BMAP_NORMAL_MAP = 'B_NORMAL_MAP',
            /**
             * 此地图类型展示地球卫星视图
             */
            BMAP_EARTH_MAP = 'B_EARTH_MAP',
            /**
             *
             */
            BMAP_NONE_MAP = 'B_NONE_MAP',
            /**
             * 此地图类型展示卫星视图
             */
            BMAP_SATELLITE_MAP = 'B_SATELLITE_MAP',
            /**
             * 此地图类型展示普通街道视图
             */
            BMAP_STREET_MAP = 'B_STREET_MAP',
        }
        /**
         * 点的形状
         */
        enum Marker3DShapeType {
            /**
             * 圆形
             */
            BMAP_SHAPE_CIRCLE = 1,
            /**
             * 正方形
             */
            BMAP_SHAPE_RECT = 2,
        }
        /**
         * NavigationControl控件的类型
         */
        enum NavigationControlType {
            /**
             * 标准的平移缩放控件（包括平移、缩放按钮和滑块）
             */
            BMAP_NAVIGATION_CONTROL_LARGE = 0,
            /**
             * 仅包含平移和缩放按钮
             */
            BMAP_NAVIGATION_CONTROL_SMALL = 1,
            /**
             * 仅包含平移按钮
             */
            BMAP_NAVIGATION_CONTROL_PAN = 2,
            /**
             * 仅包含缩放按钮
             */
            BMAP_NAVIGATION_CONTROL_ZOOM = 3,
            /**
             *
             */
            BMAP_NAVIGATION_CONTROL_ANIM = 4,
        }
        /**
        * 定位结果状态
        */
        enum StatusCode {
            BMAP_STATUS_SUCCESS = 0,
            BMAP_STATUS_UNKNOWN_LOCATION = 2,
            BMAP_STATUS_PERMISSION_DENIED = 6,
            BMAP_STATUS_TIMEOUT = 8,
        }
        /**
         * 此枚举常量表示地点的类型。
         */
        enum PoiType {
            /**
             * 一般位置点
             */
            BMAP_POI_TYPE_NORMAL = 0,
            /**
             * 公交车站位置点
             */
            BMAP_POI_TYPE_BUSSTOP = 1,
            /**
             * 公交线路位置点
             */
            BMAP_POI_TYPE_BUSLINE = 2,
            /**
             * 地铁车站位置点
             */
            BMAP_POI_TYPE_SUBSTOP = 3,
            /**
             * 地铁线路位置点
             */
            BMAP_POI_TYPE_SUBLINE = 4,
        }
        /**
        * 常量表示长度单位制
        */
        enum LengthUnit {
            /**
             * 公制单位
             */
            BMAP_UNIT_METRIC = 'BMAP_UNIT_METRIC',
            /**
             * 英制单位
             */
            BMAP_UNIT_IMPERIAL = 'BMAP_UNIT_IMPERIAL',
        }
        /**
         * 此枚举类型表示矢量图标类预设的图标样式。
         */
        enum SymbolShapeType {
            /**
             * 圆形，默认半径为1px
             */
            BMap_Symbol_SHAPE_CIRCLE = 'BMap_Symbol_SHAPE_CIRCLE',
            /**
             * 矩形，默认宽度4px、高度2px
             */
            BMap_Symbol_SHAPE_RECTANGLE = 'BMap_Symbol_SHAPE_RECTANGLE',
            /**
             * 菱形，默认外接圆半径10px
             */
            BMap_Symbol_SHAPE_RHOMBUS = 'BMap_Symbol_SHAPE_RHOMBUS',
            /**
             * 五角星，五角星外接圆半径为10px
             */
            BMap_Symbol_SHAPE_STAR = 'BMap_Symbol_SHAPE_STAR',
            /**
             * 箭头方向向下的闭合箭头
             */
            BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW = 'BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW',
            /**
             * 箭头方向向上的闭合箭头
             */
            BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW = 'BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW',
            /**
             * 箭头方向向下的非闭合箭头
             */
            BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW = 'BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW',
            /**
             * 箭头方向向上的非闭合箭头
             */
            BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW = 'BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW',
            /**
             * 定位点图标
             */
            BMap_Symbol_SHAPE_POINT = 'BMap_Symbol_SHAPE_POINT',
            /**
             * 预设的飞机形状
             */
            BMap_Symbol_SHAPE_PLANE = 'BMap_Symbol_SHAPE_PLANE',
            /**
             * 预设的照相机形状
             */
            BMap_Symbol_SHAPE_CAMERA = 'BMap_Symbol_SHAPE_CAMERA',
            /**
             * 预设的警告符号
             */
            BMap_Symbol_SHAPE_WARNING = 'BMap_Symbol_SHAPE_WARNING',
            /**
             * 预设的笑脸形状
             */
            BMap_Symbol_SHAPE_SMILE = 'BMap_Symbol_SHAPE_SMILE',
            /**
             * 预设的钟表形状
             */
            BMap_Symbol_SHAPE_CLOCK = 'BMap_Symbol_SHAPE_CLOCK',
        }
        /**
         * 此常量表示市内公交方案换乘策略。
         */
        enum TransitPolicy {
            /**
             * 推荐方案
             */
            BMAP_TRANSIT_POLICY_RECOMMEND = 0,
            /**
             * 最少时间
             */
            BMAP_TRANSIT_POLICY_LEAST_TIME = 4,
            /**
             * 最少换乘
             */
            BMAP_TRANSIT_POLICY_LEAST_TRANSFER = 1,
            /**
             * 最少步行
             */
            BMAP_TRANSIT_POLICY_LEAST_WALKING = 2,
            /**
             * 不乘地铁
             */
            BMAP_TRANSIT_POLICY_AVOID_SUBWAYS = 3,
            /**
             * 优先地铁
             */
            BMAP_TRANSIT_POLICY_FIRST_SUBWAYS = 5,
        }

        /**
         * 此常量表示跨城公交换乘策略。
         */
        enum IntercityPolicy {
            /**
             * 时间短
             */
            BMAP_INTERCITY_POLICY_LEAST_TIME = 0,
            /**
             * 出发早
             */
            BMAP_INTERCITY_POLICY_EARLY_START = 1,
            /**
             * 价格低
             */
            BMAP_INTERCITY_POLICY_CHEAP_PRICE = 2,
        }

        /**
         * 此常量表示跨城交通方式策略。
         */
        enum TransitTypePolicy {
            /**
             * 火车优先
             */
            BMAP_TRANSIT_TYPE_POLICY_TRAIN = 0,
            /**
             * 飞机优先
             */
            BMAP_TRANSIT_TYPE_POLICY_AIRPLANE = 1,
            /**
             * 大巴优先
             */
            BMAP_TRANSIT_TYPE_POLICY_COACH = 2,
        }
        /**
         * 此枚举类型标识不同类型的交通线路类型，其中包括了市内公交和跨城公交。
         */
        enum LineType {
            /**
             * 公交车
             */
            BMAP_LINE_TYPE_BUS = 0,
            /**
             * 地铁
             */
            BMAP_LINE_TYPE_SUBWAY = 1,
            /**
             * 轮渡
             */
            BMAP_LINE_TYPE_FERRY = 2,
            /**
             * 火车
             */
            BMAP_LINE_TYPE_TRAIN = 3,
            /**
             * 飞机
             */
            BMAP_LINE_TYPE_AIRPLANE = 4,
            /**
             * 大巴
             */
            BMAP_LINE_TYPE_COACH = 5,
        }
        /**
         * 此常量表示出行方案的类型
         */
        enum TransitType {
            /**
             * 国内市内换乘
             */
            BMAP_TRANSIT_TYPE_IN_CITY = 0,
            /**
             * 国内跨城换乘
             */
            BMAP_TRANSIT_TYPE_CROSS_CITY = 1,
        }
    }
}
