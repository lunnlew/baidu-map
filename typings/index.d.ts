import { ComponentPublicInstance } from 'vue'

declare namespace BaiduMapOptions {
    type center = {
        lng: number
        lat: number
    }
}

declare namespace BaiduMapVue3 {
    export function install(app: any): void

    export interface BaiduMapProps {
        /**
         * 地图中心点坐标
         */
        center: BaiduMapOptions.center
        /**
         * 百度地图APIKEY
         */
        apiKey: string
        /**
         * 地图缩放级别
         */
        zoom?: number
        bottomOffset?: number
        clickInterval?: number
        /**
         * 是否启用拖动
         */
        enableDragging?: boolean
        /**
         * 是否启用旋转
         */
        enableRotate?: boolean
        /**
         * 是否启用倾斜
         */
        enableTilt?: boolean
        /**
         * 是否启用键盘操作
         */
        enableKeyboard?: boolean
        /**
         * 是否启用双击放大
         */
        enableDblclickZoom?: boolean
        /**
         * 是否启用连续缩放效果。
         */
        enableContinuousZoom?: boolean
        /**
         * 是否启用滚轮缩放
         */
        enableWheelZoom?: boolean
        /**
         * 是否允许旋转地图
         */
        enableRotateGestures?: boolean
        /**
         * 是否倾斜旋转地图
         */
        enableTiltGestures?: boolean
        /**
         * 是否启用手势缩放
         */
        enablePinchZoom?: boolean
        /**
         * 手势缩放时地图中心保持在当前缩放级别的屏幕中心
         */
        fixCenterWhenPinch?: boolean
        /**
         * 是否启用点击
         */
        enableMapClick?: boolean
        /**
         * 启用自动适应容器尺寸
         */
        enableAutoResize?: boolean
        /**
         * 是否启用交通流量图层
         */
        ebableTraffic?: boolean
        /**
         * 缩放的中心点
         */
        zoomCenter?: {
            lng: number
            lat: number
        } | null
        zoomerDuration?: number
        actionDuration?: number
        /**
         * 地图类型
         */
        mapType?: BMapGL.MapTypeId
        /**
         * 启用地图惯性拖拽
         */
        enableInertialDragging?: boolean
        drawMargin?: number
        drawMarginGL?: number
        enableFulltimeSpotClick?: boolean
        enableResizeOnCenter?: boolean
        showControls?: boolean
        showRealSunlight?: boolean
        showMilkyway?: boolean
        showStreetLayer?: boolean
        /**
         * 最小缩放级别
         */
        minZoom?: number | null
        /**
         * 最大缩放级别
         */
        maxZoom?: number | null
        style?: string
        backgroundColor?: string | null
        enableIconClick?: boolean
        autoSafeArea?: boolean
        restrictCenter?: boolean
        /**
         * 截图时需要开启用以清理gl缓存
         */
        preserveDrawingBuffer?: boolean
        /**
         * 地图加载完成后的事件
         */
        onReady?: (state: any) => void
    }
    /**
     * 百度地图组件
     */
    export const BaiduMap: ComponentPublicInstance<BaiduMapProps>
    export interface BmScaleControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 比例尺控件
     */
    export const BmScaleControl: ComponentPublicInstance<BmScaleControlProps>
    export interface BmZoomControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 地图级别控件
     */
    export const BmZoomControl: ComponentPublicInstance<BmZoomControlProps>
    export interface BmCopyrightControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 版权控件
     */
    export const BmCopyrightControl: ComponentPublicInstance<BmCopyrightControlProps>

    export interface BmCustomControlProps {
        /**
         * 控件dom
         */
        dom?: HTMLElement
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
    }
    /**
     * 自定义控件
     */
    export const BmCustomControl: ComponentPublicInstance<BmCustomControlProps>

    export interface BmNavigationControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 控件类型
         */
        type?: BMapGL.NavigationControlType
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 平移导航控件
     */
    export const BmNavigationControl: ComponentPublicInstance<BmNavigationControlProps>
    export interface BmNavigationThreedControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 控件类型
         */
        type?: BMapGL.NavigationControlType
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 3D导航控件
     */
    export const BmNavigationThreedControl: ComponentPublicInstance<BmNavigationThreedControlProps>

    export interface BmLocationControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 定位控件
     */
    export const BmLocationControl: ComponentPublicInstance<BmLocationControlProps>

    export interface BmMapTypeControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 地图类型控件
     */
    export const BmMapTypeControl: ComponentPublicInstance<BmMapTypeControlProps>
    export interface BmCityListControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: number
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 城市列表控件
     */
    export const BmCityListControl: ComponentPublicInstance<BmCityListControlProps>
    /**
     * 地图覆盖物
     */
    export interface BmMarkerProps {
        /**
         * 标注坐标
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 标注的位置偏移值
         */
        offset?: [number, number]

        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用拖拽，默认为false
         */
        enableDragging?: boolean
        /**
         * 是否响应点击事件。默认为true
         */
        enableClicking?: boolean
        /**
         * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
         */
        raiseOnDrag?: boolean
        /**
         * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
         */
        draggingCursor?: string
        /**
         * 旋转角度
         */
        rotation?: number
        /**
         * 鼠标移到marker上的显示内容
         */
        title?: string
        /**
         * 文本标注内容
         */
        label?: string
        /**
         * 文本标注选项
         */
        labelOptions?: BMapGL.LabelOptions
        /**
         * 覆盖物的zIndex
         * @param zIndex
         */
        zIndex?: number
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmMarker: ComponentPublicInstance<BmMarkerProps>

    /**
     * 地图覆盖物
     */
    export interface BmMarker3DProps {
        /**
         * 标注位置
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 点的高度
         */
        height?: number
        /**
         * 点的大小，默认为50
         */
        size?: number
        /**
         * 点的形状，1 为圆形，2 为正方形，默认为 1。也可以使用对应的常量 BMAP_SHAPE_CIRCLE 和 BMAP_SHAPE_RECT
         */
        shape?: number
        /**
         * 点的颜色，格式为 '#xxxxxx'，比如'#f00'
         */
        fillColor?: string
        /**
         * 点的透明度，范围0-1，默认0.8
         */
        fillOpacity?: number
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmMarkerThreed: ComponentPublicInstance<BmMarker3DProps>

    /**
     * 文本标注
     */
    export interface BmLabelProps {
        /**
         * 文本
         */
        content: string
        /**
         * 文本标注的地理位置
         */
        position: {
            lng: number
            lat: number
        }
        /**
         * 文本标注的位置偏移值
         */
        offset?: [number, number]
        /**
         * 是否在调用map.clearOverlays时清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 样式表
         */
        styles?: Object
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmLabel: ComponentPublicInstance<BmLabelProps>

    /**
     * 地图覆盖物图标
     */
    export interface BmMarkerThreedIconProps {
        /**
         * 图标地址
         */
        src: string
        /**
         * 图标大小
         */
        size?: [number, number]
        /**
         * 图标定位锚点
         */
        anchor?: [number, number]
        /**
         * 图标可视区偏移
         */
        imageOffset?: [number, number]
    }
    export const BmMarkerThreedIcon: ComponentPublicInstance<BmMarkerThreedIconProps>

    /**
     * 折线参数
     */
    export interface BmPolylineProps {
        /**
         * 折线点集
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 折线颜色
         */
        strokeColor?: string
        /**
         * 折线的宽度，以像素为单位
         */
        strokeWeight?: number
        /**
         * 折线的透明度，取值范围0 - 1
         */
        strokeOpacity?: number
        /**
         * 折线的样式，solid或dashed
         */
        strokeStyle?: string
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用线编辑，默认为false
         */
        enableEditing?: boolean
        /**
         * 是否响应点击事件，默认为true
         */
        enableClicking: boolean

        clip: boolean
        /**
         * 大地线模式
         */
        geodesic: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmPolyline: ComponentPublicInstance<BmPolylineProps>

    interface BmIconSequenceProps {
        symbol?: string
        offset?: string
        repeat?: string
        fixedRotation?: boolean
        anchor?: [number, number]
        fillColor?: string
        fillOpacity?: number
        scale?: number
        rotation?: number
        strokeColor?: string
        strokeOpacity?: number
        strokeWeight?: number
    }

    export const BmIconSequence: ComponentPublicInstance<BmIconSequenceProps>
    /**
     * 多边形参数
     */
    export interface BmPolygonProps {
        /**
         * 多边形点集
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 边线颜色
         */
        strokeColor?: string
        /**
         * 填充颜色。当参数为空时，折线覆盖物将没有填充效果
         */
        fillColor?: string
        /**
         * 边线的宽度，以像素为单位
         */
        strokeWeight?: number
        /**
         * 边线透明度，取值范围0 - 1
         */
        strokeOpacity?: number
        /**
         * 填充的透明度，取值范围0 - 1
         */
        fillOpacity?: number
        /**
         * 边线的样式，solid或dashed
         */
        strokeStyle?: string
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用线编辑，默认为false
         */
        enableEditing?: boolean
        /**
         * 是否响应点击事件，默认为true
         */
        enableClicking?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmPolygon: ComponentPublicInstance<BmPolygonProps>

    export interface BmCityBoundaryProps {
        /**
         * 城市区域区域字符串
         */
        name?: string
        /**
         * 是否显示
         */
        show?: boolean
        /**
         * 是否预先加载区域数据
         */
        firstLoad?: boolean
    }
    export const BmCityBoundary: ComponentPublicInstance<BmCityBoundaryProps>

    export interface BmPrismProps {
        /**
         * 点集
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 高度
         */
        altitude: number
        /**
         * 顶面填充颜色
         */
        topFillColor?: string
        /**
         * 顶面填充颜色透明度，取值范围0 - 1
         */
        topFillOpacity?: number
        /**
         * 侧面填充颜色
         */
        sideFillColor?: string
        /**
         * 侧面填充颜色透明度，取值范围0 - 1
         */
        sideFillOpacity?: number
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmPrism: ComponentPublicInstance<BmPrismProps>

    export interface BmGroundOverlayProps {
        /**
         * 矩形对角左上坐标
         */
        startPoint: {
            lng: number
            lat: number
        }
        /**
         * 矩形对角右下坐标
         */
        endPoint: {
            lng: number
            lat: number
        }
        /**
         * 'image' | 'video' | 'canvas'，默认为image
         */
        type?: string
        /**
         * 图层透明度
         */
        opacity?: number
        /**
         * 图层地址
         */
        url?: string
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmGroundOverlay: ComponentPublicInstance<BmGroundOverlayProps>
    export interface BmGroundOverlayImageProps {
        /**
         * 'image' | 'video' | 'canvas'，默认为image
         */
        type?: string
        /**
         * 图层透明度
         */
        opacity?: number
        /**
         * 图层地址
         */
        url?: string
    }
    export const BmGroundOverlayImage: ComponentPublicInstance<BmGroundOverlayImageProps>

    /**
     * 地图覆盖物图标
     */
    export interface BmMarkerIconProps {
        /**
         * 图标地址
         */
        src: string
        /**
         * 图标大小
         */
        size?: [number, number]
        /**
         * 图标定位锚点
         */
        anchor?: [number, number]
        /**
         * 图标可视区偏移
         */
        imageOffset?: [number, number]
    }
    export const BmMarkerIcon: ComponentPublicInstance<BmMarkerIconProps>

    export interface BmContextMenuProps {
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmContextMenu: ComponentPublicInstance<BmContextMenuProps>

    export interface BmContextMenuItemProps {
        /**
         * 子菜单ID
         */
        id: string
        /**
         * 菜单宽度
         */
        width: number
        /**
         * 菜单文本
         */
        text: string
        /**
         * 菜单点击回调
         */
        callback: Function
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmContextMenuItem: ComponentPublicInstance<BmContextMenuItemProps>

    export interface BmCircleProps {
        /**
         * 圆心坐标
         */
        center: {
            lng: number
            lat: number
        }
        /**
         * 半径
         */
        radius: number
        /**
         * 圆形边线颜色
         */
        strokeColor?: string
        /**
         * 圆形填充颜色。当参数为空时，圆形将没有填充效果
         */
        fillColor?: string
        /**
         * 圆形边线的宽度，以像素为单位
         */
        strokeWeight?: number
        /**
         * 圆形边线透明度，取值范围0 - 1
         */
        strokeOpacity?: number
        /**
         * 圆形填充的透明度，取值范围0 - 1
         */
        fillOpacity?: number
        /**
         * 圆形边线的样式，solid或dashed
         */
        strokeStyle?: string
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用线编辑，默认为false
         */
        enableEditing?: boolean
        /**
         * 是否响应点击事件，默认为true
         */
        enableClicking?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmCircle: ComponentPublicInstance<BmCircleProps>

    export type BmInfoWindowProps = {
        /**
         * 信息窗口的坐标
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 信息窗口的内容，支持HTML内容
         */
        content: string
        /**
         * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
         */
        width?: number
        /**
         * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
         */
        height?: number
        /**
         * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
         */
        maxWidth?: number
        /**
         * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
         */
        offset?: [number, number]
        /**
         * 信息窗标题文字，支持HTML内容
         */
        title?: string
        /**
         * 是否开启信息窗口打开时地图自动移动（默认开启）
         */
        enableAutoPan?: boolean
        /**
         * 是否开启最大化（默认关闭）
         */
        enableMaximize?: boolean
        /**
         * 是否开启点击地图关闭信息窗口（默认开启）
         */
        enableCloseOnClick?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
    export const BmInfoWindow: ComponentPublicInstance<BmInfoWindowProps>

    export interface BmViewAnimationProps {
        /**
         * 动画开始延迟时间，单位ms，默认0
         */
        delay: number
        /**
         * 	动画持续时间，单位ms，默认1000
         */
        duration: number
        /**
         * 循环次数，参数类型为数字时循环固定次数，参数为'INFINITE'无限循环，默认为1
         */
        interation: number | string
        /**
         * 是否显示
         */
        show?: boolean
    }

    export interface BmViewAnimationKeyFramesProps {
        /**
         * 定义关键帧帧地图中心点
         */
        center: {
            lng: number
            lat: number
        }
        /**
         *  定义关键帧地图等级
         */
        zoom: number
        /**
         * 定义关键帧地图倾斜角度
         */
        tilt: number
        /**
         * 定义关键帧地图旋转方向
         */
        heading: number
        /**
         * 定义关键帧处于动画过程的百分比，取值范围0~1
         */
        percentage: number
    }

    /**
     * 地图动画
     */
    export const BmViewAnimation: ComponentPublicInstance<BmViewAnimationProps>

    interface BmTrackAnimationProps {
        /**
         * 轨迹点
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         *  动画完成后自动调整视野到总览
         */
        overallView?: boolean
        /**
         * 轨迹播放的角度，默认为55
         */
        tilt?: number
        /**
         * 动画持续时长，默认为10000，单位ms
         */
        duration?: number
        /**
         * 动画开始的延迟，默认0，单位ms
         */
        delay?: number
        /**
         * 是否显示
         */
        show?: boolean
    }

    /**
     * 轨迹动画
     */
    export const BmTrackAnimation: ComponentPublicInstance<BmTrackAnimationProps>

    interface BmLushuAnimationProps {
        /**
         * 信息窗口文案
         */
        defaultContent: string
        /**
         * 是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
         */
        autoView: boolean
        /**
         * 速度
         */
        speed: number
        /**
         * 图标
         */
        icon: string
        /**
         * 是否设置marker随着道路的走向进行旋转
         */
        enableRotation: boolean
        /**
         * 是否大地线
         */
        geodesic: boolean
        /**
         * 是否自动地图中心
         */
        autoCenter: boolean
    }

    /**
     * 路书动画
     */
    export const BmLushuAnimation: ComponentPublicInstance<BmLushuAnimationProps>

    interface BmDistanceToolProps {
        /**
         * 是否显示
         */
        show?: boolean
    }

    /**
     * 测距工具
     */
    export const BmDistanceTool: ComponentPublicInstance<BmDistanceToolProps>

    interface DrawingStyleOptions {
        /**
         * 边线颜色
         */
        strokeColor?: string,
        /**
         * 填充颜色。当参数为空时，圆形没有填充颜色
         */
        fillColor?: string,
        /**
         * 边线宽度，以像素为单位
         */
        strokeWeight?: number,
        /**
         * 边线透明度，取值范围0-1
         */
        strokeOpacity?: number,
        /**
         * 填充透明度，取值范围0-1
         */
        fillOpacity?: number
    }

    interface DrawingLabelOptions { }

    interface BmDrawingManagerProps {
        /**
         * 是否开启绘制模式
         */
        isOpen?: boolean
        /**
         * 绘制是否进行测距测面
         */
        enableCalculate?: boolean
        /**
         * 是否开启边界吸附功能
         */
        enableSorption?: boolean
        /**
         * 是否开启延边裁剪功能
         */
        enableGpc?: boolean,
        /**
         * 是否开启超限提示
         */
        enableLimit?: boolean,
        /**
         * 超限值
         */
        limitOptions?: {
            /**
             * 面积超限值
             */
            area?: number,
            /**
             * 距离超限值
             */
            distance?: number
        },
        /**
         * 边界吸附距离
         */
        sorptiondistance?: number
        /**
         * 圆的样式
         */
        circleOptions?: DrawingStyleOptions
        /**
         * 线的样式
         */
        polylineOptions?: DrawingStyleOptions
        /**
         * 多边形的样式
         */
        polygonOptions?: DrawingStyleOptions
        /**
         * 矩形的样式
         */
        rectangleOptions?: DrawingStyleOptions
        /**
         * label样式
         */
        labelOptions?: DrawingLabelOptions
        /**
         * 是否显示
         */
        show?: boolean
    }

    /**
     * 绘制工具
     */
    export const BmDrawingManager: ComponentPublicInstance<BmDrawingManagerProps>

    interface BmRichMarkerProps {
        /**
         * 标记的坐标
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 图标定位锚点
         */
        anchor?: [number, number]
        /**
         * 是否允许拖动
         */
        enableDragging?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
    /**
     * 富文本标记
     */
    export const BmRichMarker: ComponentPublicInstance<BmRichMarkerProps>


    interface BmBezierCurveProps {
        /**
         * 轨迹点
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 控制点
         */
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
        /**
         * 是否总览显示
         */
        overallView?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }

    export const BmBezierCurve: ComponentPublicInstance<BmBezierCurveProps>

    interface BmDrivingRouteProps {
        /**
         * 检索区域，类型可为地图实例、坐标点或城市名称的字符串
         */
        location:
        | Object
        | {
            lng: number
            lat: number
        }
        | String
        /**
         * 起点
         */
        start?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 终点
         */
        end?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 结果呈现设置
         */
        renderOptions?: {
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map?: Object
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
             */
            panel?: string | HTMLElement
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult?: boolean
            /**
             * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport?: boolean
        }
        /**
         * 驾车策略
         */
        policy?: number
        /**
         * 	检索完成后的回调函数。参数： results: DrivingRouteResult
         */
        onSearchComplete: Function
        /**
         * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，通过marker属性可得到其对应的标注
         */
        onMarkersSet?: Function
        /**
         * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素
         */
        onInfoHtmlSet?: Function
        /**
         * 折线添加完成后的回调函数。 参数： routes: Array ，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
         */
        onPolylinesSet?: Function
    }

    /**
     * 驾驶规划
     */
    export const BmDrivingRoute: ComponentPublicInstance<BmDrivingRouteProps>

    interface BmTransitRouteProps {
        /**
         * 检索区域，类型可为地图实例、坐标点或城市名称的字符串
         */
        location:
        | Object
        | {
            lng: number
            lat: number
        }
        | String
        /**
         * 起点
         */
        start?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 终点
         */
        end?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 结果呈现设置
         */
        renderOptions?: {
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map?: Object
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
             */
            panel?: string | HTMLElement
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult?: boolean
            /**
             * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport?: boolean
        }
        /**
         * 驾车策略
         */
        policy?: number
        /**
         * 跨城公交的换乘策略参数
         */
        intercityPolicy?: number
        /**
         * 跨城公交的交通方式策略参数
         */
        transitTypePolicy?: number
        /**
         * 返回方案的个数
         */
        pageCapacity?: Number
        /**
         * 	检索完成后的回调函数。参数： results: DrivingRouteResult
         */
        onSearchComplete: Function
        /**
         * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，通过marker属性可得到其对应的标注
         */
        onMarkersSet?: Function
        /**
         * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素
         */
        onInfoHtmlSet?: Function
        /**
         * 折线添加完成后的回调函数。 参数： routes: Array ，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
         */
        onPolylinesSet?: Function
        /**
         * 结果列表添加完成后的回调函数。参数：container: 结果列表所用的HTML元素
         */
        onResultsHtmlSet: Function
    }

    /**
     * 公交规划
     */
    export const BmTransitRoute: ComponentPublicInstance<BmTransitRouteProps>

    interface BmWalkingRouteProps {
        /**
         * 检索区域，类型可为地图实例、坐标点或城市名称的字符串
         */
        location:
        | Object
        | {
            lng: number
            lat: number
        }
        | String
        /**
         * 起点
         */
        start?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 终点
         */
        end?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 结果呈现设置
         */
        renderOptions?: {
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map?: Object
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
             */
            panel?: string | HTMLElement
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult?: boolean
            /**
             * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport?: boolean
        }
        /**
         * 检索完成后的回调函数。 参数： results: WalkingRouteResult
         */
        onSearchComplete: Function
        /**
         * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，。通过marker属性可得到其对应的标注
         */
        onMarkersSet: Function
        /**
         * 折线添加完成后的回调函数。 参数： routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
         */
        onPolylinesSet: Function
        /**
         * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
         */
        onInfoHtmlSet: Function
        /**
         * 结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素
         */
        onResultsHtmlSet: Function
    }

    /**
     * 步行规划
     */
    export const BmWalkingRoute: ComponentPublicInstance<BmWalkingRouteProps>

    interface BmRidingRouteProps {
        /**
         * 检索区域，类型可为地图实例、坐标点或城市名称的字符串
         */
        location:
        | Object
        | {
            lng: number
            lat: number
        }
        | String
        /**
         * 起点
         */
        start?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 终点
         */
        end?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 结果呈现设置
         */
        renderOptions?: {
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map?: Object
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
             */
            panel?: string | HTMLElement
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult?: boolean
            /**
             * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport?: boolean
        }
        /**
         * 检索完成后的回调函数。 参数： results: RidingRouteResult
         */
        onSearchComplete: Function
        /**
         * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，。通过marker属性可得到其对应的标注
         */
        onMarkersSet: Function
        /**
         * 折线添加完成后的回调函数。 参数： routes: Array ，骑行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
         */
        onPolylinesSet: Function
        /**
         * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
         */
        onInfoHtmlSet: Function
        /**
         * 结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素
         */
        onResultsHtmlSet: Function
    }

    /**
     * 骑行规划
     */
    export const BmRidingRoute: ComponentPublicInstance<BmRidingRouteProps>

    /**
     * BMapGL 名称空间
     */
    export namespace BMapGL {
        /**
         * 此类代表视野，不可实例化，通过对象字面量形式表示。
         */
        interface Viewport {
            /**
             * 视野中心点
             */
            center: Point
            /**
             * 视野级别
             */
            zoom: number
        }

        /**
         * 此类作为map.getViewport与map.setViewport方法的可选参数，不可实例化。
         */
        interface ViewportOptions {
            /**
             * 是否启用动画效果移动地图，默认为true。当调整后的级别与当前地图级别一致时，将使用动画效果移动地图
             */
            enableAnimation: boolean
            /**
             * 视野调整的预留边距，例如： margins: [30, 20, 0, 20] 表示坐标点会限制在上述区域内
             */
            margins: Array<Number>
            /**
             * 地图级别的偏移量，您可以在方法得出的结果上增加一个偏移值。例如map.setViewport计算出地图的级别为10，如果zoomFactor为-1，则最终的地图级别为9
             */
            zoomFactor: number
            /**
             * 改变地图视野的延迟执行时间，单位毫秒，默认为200ms。此延时仅针对动画效果有效
             */
            delay: number
        }

        /**
         * 此类表示一个地理坐标点。
         */
        class Point {
            /**
             * 地理经度
             */
            lng: number
            /**
             * 	地理纬度
             */
            lat: number
            /**
             * 以指定的经度和纬度创建一个地理点坐标
             * @param lng
             * @param lat
             */
            constructor(lng: number, lat: number)
            /**
             * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
             * @param other Point
             */
            equals(other: Point): boolean
        }

        /**
         * 此类表示地图上的一点，单位为像素。
         */
        class Pixel {
            /**
             * x坐标
             */
            x: number
            /**
             * y坐标
             */
            y: number
            /**
             * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
             * @param x
             * @param y
             */
            constructor(x: number, y: number)
            /**
             * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
             * @param other Pixel
             */
            equals(other: Pixel): boolean
        }

        class Bounds {
            /**
             * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角
             * @param sw
             * @param ne
             */
            constructor(sw: Point, ne: Point)
            /**
             * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
             * @param other Bounds
             */
            equals(other: Bounds): boolean
            /**
             * 如果点的地理坐标位于此矩形内，则返回true
             * @param point
             */
            containsPoint(point: Point): boolean
            /**
             * 传入的矩形区域完全包含于此矩形区域中，则返回true
             * @param bounds Bounds
             */
            containsBounds(bounds: Bounds): boolean
            /**
             * 计算与另一矩形的交集区域
             * @param other Bounds
             */
            intersects(other: Bounds): Bounds
            /**
             * 放大此矩形，使其包含给定的点
             * @param point
             */
            extend(point: Point): void
            /**
             * 返回矩形的中心点
             */
            getCenter(): Point
            /**
             * 如果矩形为空，则返回true
             */
            isEmpty(): boolean
            /**
             * 返回矩形区域的西南角
             */
            getSouthWest(): Point
            /**
             * 返回矩形区域的东北角
             */
            getNorthEast(): Point
            /**
             * 返回矩形区域的跨度
             */
            toSpan(): Point
        }

        /**
         * 此类以像素表示一个矩形区域的大小。
         */
        class Size {
            /**
             * 宽度/水平方向的数值
             */
            width: number
            /**
             * 高度/竖直方向的数值
             */
            height: number
            /**
             * 以指定的宽度和高度创建一个矩形区域大小对象
             * @param width
             * @param height
             */
            constructor(width: number, height: number)
            /**
             * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
             * @param other Size
             */
            equals(other: Size): boolean
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
         * 此类表示Map构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface MapOptions {
            bottomOffset?: number
            clickInterval?: number
            /**
             * 是否启用拖动
             */
            enableDragging?: boolean
            /**
             * 是否启用旋转
             */
            enableRotate?: boolean
            /**
             * 是否启用倾斜
             */
            enableTilt?: boolean
            /**
             * 是否启用键盘操作
             */
            enableKeyboard?: boolean
            /**
             * 是否启用双击放大
             */
            enableDblclickZoom?: boolean
            /**
             * 是否启用连续缩放效果。
             */
            enableContinuousZoom?: boolean
            /**
             * 是否启用滚轮缩放
             */
            enableWheelZoom?: boolean
            /**
             * 是否允许旋转地图
             */
            enableRotateGestures?: boolean
            /**
             * 是否倾斜旋转地图
             */
            enableTiltGestures?: boolean
            /**
             * 是否启用手势缩放
             */
            enablePinchZoom?: boolean
            /**
             * 手势缩放时地图中心保持在当前缩放级别的屏幕中心
             */
            fixCenterWhenPinch?: boolean
            /**
             * 是否启用点击
             */
            enableMapClick?: boolean
            /**
             * 启用自动适应容器尺寸
             */
            enableAutoResize?: boolean
            /**
             * 是否启用交通流量图层
             */
            ebableTraffic?: boolean
            /**
             * 缩放的中心点
             */
            zoomCenter?: {
                lng: number
                lat: number
            } | null
            zoomerDuration?: number
            actionDuration?: number
            /**
             * 地图类型
             */
            mapType?: BMapGL.MapTypeId
            /**
             * 启用地图惯性拖拽
             */
            enableInertialDragging?: boolean
            drawMargin?: number
            drawMarginGL?: number
            enableFulltimeSpotClick?: boolean
            enableResizeOnCenter?: boolean
            showControls?: boolean
            showRealSunlight?: boolean
            showMilkyway?: boolean
            showStreetLayer?: boolean
            /**
             * 最小缩放级别
             */
            minZoom?: number | null
            /**
             * 最大缩放级别
             */
            maxZoom?: number | null
            style?: string
            backgroundColor?: string | null
            enableIconClick?: boolean
            autoSafeArea?: boolean
            restrictCenter?: boolean
            /**
             * 截图时需要开启用以清理gl缓存
             */
            preserveDrawingBuffer?: boolean
        }

        /**
         * 此类表示InfoWindow构造函数的可选参数，它没有构造函数，但可通过对象字面量形式表示。
         */
        interface InfoWindowOptions {
            /**
             * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
             */
            width: number
            /**
             * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
             */
            height: number
            /**
             * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
             */
            maxWidth: number
            /**
             * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
             */
            offset: Size
            /**
             * 信息窗标题文字，支持HTML内容
             */
            title: string
            /**
             * 是否开启信息窗口打开时地图自动移动（默认开启）
             */
            enableAutoPan: boolean
            /**
             * 是否开启最大化（默认关闭）
             */
            enableMaximize: boolean
            /**
             * 是否开启点击地图关闭信息窗口（默认开启）
             */
            enableCloseOnClick: boolean
        }

        /**
         *  InfoWindow 事件
         */
        interface InfoWindowEventEventMap {
            /**
             * 信息窗口被关闭时触发此事件
             */
            close: InfoWindowPayload
            /**
             * 信息窗口被打开时触发此事件
             */
            open: InfoWindowPayload
            /**
             * 信息窗口最大化后触发此事件
             */
            maximize: InfoWindowPayload
            /**
             * 信息窗口还原时触发此事件
             */
            restore: InfoWindowPayload
            /**
             * 点击信息窗口的关闭按钮时触发此事件
             */
            clickclose: InfoWindowPayload
        }
        type InfoWindowEvent = keyof InfoWindowEventEventMap
        type InfoWindowPayload = { type: string; target: InfoWindow }
        type OnInfoWindowEventPayload<T extends InfoWindowEvent> = InfoWindowEventEventMap[T]

        /**
         * 此类表示地图上包含信息的窗口。
         */
        class InfoWindow {
            /**
             * 创建一个信息窗实例，其中content支持HTML内容。
             * @param content
             * @param opts
             */
            constructor(content: string | HTMLElement, opts: InfoWindowOptions)
            /**
             * 设置信息窗口的宽度，单位像素。取值范围：220 - 730
             * @param width
             */
            setWidth(width: number): void
            /**
             * 设置信息窗口的高度，单位像素。取值范围：60 - 650
             * @param height
             */
            setHeight(height: number): void
            /**
             * 重绘信息窗口，当信息窗口内容发生变化时进行调用
             */
            redraw(): void
            /**
             * 设置信息窗口标题。支持HTML内容。1.2版本开始title参数支持传入DOM结点
             * @param title
             */
            setTitle(title: string | HTMLElement): void
            /**
             * 返回信息窗口标题
             */
            getTitle(): string | HTMLElement
            /**
             * 设置信息窗口内容。支持HTML内容。1.2版本开始content参数支持传入DOM结点
             * @param content
             */
            setContent(content: string | HTMLElement): void
            /**
             * 返回信息窗口内容
             */
            getContent(): string | HTMLElement
            /**
             * 返回信息窗口的位置
             */
            getPosition(): Point
            /**
             * 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效
             */
            enableMaximize(): void
            /**
             * 禁用窗口最大化功能
             */
            disableMaximize(): void
            /**
             * 返回信息窗口的打开状态
             */
            isOpen(): boolean
            /**
             * 信息窗口最大化时所显示内容，支持HTML内容
             * @param content
             */
            setMaxContent(content: string): void
            /**
             * 最大化信息窗口
             */
            maximize(): void
            /**
             * 还原信息窗口
             */
            restore(): void
            /**
             * 开启打开信息窗口时地图自动平移
             */
            enableAutoPan(): void
            /**
             * 关闭打开信息窗口时地图自动平移
             */
            disableAutoPan(): void
            /**
             * 开启点击地图时关闭信息窗口
             */
            enableCloseOnClick(): void
            /**
             * 关闭点击地图时关闭信息窗口
             */
            disableCloseOnClick(): void
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends InfoWindowEvent>(
                event: T,
                handler: (data: OnInfoWindowEventPayload<T>) => void
            ): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends InfoWindowEvent>(
                event: T,
                handler: (data: OnInfoWindowEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends InfoWindowEvent>(event: T, listener: (data: OnInfoWindowEventPayload<T>) => void): this
        }

        /**
         * 此类表示Lable构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface LabelOptions {
            /**
             * 文本标注的位置偏移值
             */
            offset?: Size
            /**
             * 文本标注的地理位置
             */
            position: Point
            /**
             * 是否在调用map.clearOverlays时清除此覆盖物，默认为true
             */
            enableMassClear?: boolean
            /**
             * 样式表
             */
            styles?: Object
        }

        /**
         * 此类表示地图上的文本标注。
         */
        class Label extends Overlay {
            /**
             * 创建一个文本标注实例。point参数指定了文本标注所在的地理位置
             * @param content
             * @param opts
             */
            constructor(content: string, opts?: LabelOptions)
            /**
             * 设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" }) 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor
             * @param styles
             */
            setStyle(styles: Object): void
            /**
             * 设置文本标注的内容。支持HTML
             * @param content
             */
            setContent(content: string): void
            /**
             * 设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效
             * @param position
             */
            setPosition(position: Point): void
            /**
             * 获取Label的地理坐标
             */
            getPosition(): Point
            /**
             * 设置文本标注的偏移值
             * @param offset
             */
            setOffset(offset: Size): void
            /**
             * 返回文本标注的偏移值
             */
            getOffset(): Size
            /**
             * 设置文本标注的标题，当鼠标移至标注上时显示此标题
             * @param title
             */
            setTitle(title: string): void
            /**
             * 返回文本标注的标题
             */
            getTitle(): string
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): void
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): void
            /**
             * 设置覆盖物的zIndex
             * @param zIndex
             */
            setZIndex(zIndex: number): void
            /**
             * 设置地理坐标
             * @param position
             */
            setPosition(position: Point): void
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         * 此类表示Symbol构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface SymbolOptions {
            /**
             * 符号的位置偏移值
             */
            anchor: Size
            /**
             * 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
             */
            fillColor: string
            /**
             * 设置矢量图标填充透明度,范围0~1
             */
            fillOpacity: number
            /**
             * 设置矢量图标的缩放比例
             */
            scale: number
            /**
             * 设置矢量图标的旋转角度,参数为角度
             */
            rotation: number
            /**
             * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
             */
            strokeColor: string
            /**
             * 设置矢量图标线的透明度,opacity范围0~1
             */
            strokeOpacity: number
            /**
             * 旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同
             */
            strokeWeight: number
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
         * 未知的定义 SymbolShape
         */
        interface SymbolShape { }

        /**
         * 此类表示通过svg的path string创建的矢量图标类。
         */
        class Symbol {
            /**
             * 创建一个矢量图标实例。path为svg中的path字符串或者已定义的符号常量,opts为矢量图标的样式
             * @param path
             * @param opts
             */
            constructor(path: string | SymbolShapeType, opts: SymbolOptions)
            /**
             * 设置矢量图标的路径
             * @param path
             */
            setPath(path: string | SymbolShape): void
            /**
             * 设置矢量图标的定位点,该定位点的位置以图标自身为基准
             * @param anchor
             */
            setAnchor(anchor: Size): void
            /**
             * 设置矢量图标的旋转角度,参数为角度
             * @param rotation
             */
            setRotation(rotation: number): void
            /**
             * 设置矢量图标的缩放比例
             * @param scale
             */
            setScale(scale: number): void
            /**
             * 设置矢量图标的线宽
             * @param strokeWeight
             */
            setStrokeWeight(strokeWeight: number): void
            /**
             * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
             * @param color
             */
            setStrokeColor(color: string): void
            /**
             * 设置矢量图标线的透明度,opacity范围0~1
             * @param opacity
             */
            setStrokeOpacity(opacity: number): void
            /**
             * 设置矢量图标填充透明度,opacity范围0~1
             * @param opacity
             */
            setFillOpacity(opacity: number): void
            /**
             * 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
             * @param color
             */
            setFillColor(color: string): void
        }

        /**
         * 此类用于设置polyline上的符号显示。
         */
        class IconSequence {
            /**
             * 创建线上的符号类。symbol为符号样式;offset为符号相对于线起点的位置，取值可以是百分比也可以是像素位置，默认为"100%";repeat为符号在线上重复显示的距离，可以是百分比也可以是距离值，同时设置repeat与offset时，以repeat为准;fixedRotation设置图标的旋转角度是否与线走向一致，默认为true
             */
            constructor(symbol: Symbol, offset: string, repeat: string, fixedRotation: boolean)
        }

        /**
         * 此类表示Polyline构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface PolylineOptions {
            /**
             * 指定路径两端的形状
             */
            strokeLineCap: 'butt' | 'round' | 'square' | 'inherit'
            /**
             * 指定路径转角处使用的形状
             */
            strokeLineJoin: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'
            /**
             * 显示大地线
             */
            geodesic: boolean

            clip: boolean
            /**
             * 折线颜色
             */
            strokeColor: string
            /**
             * 折线的宽度，以像素为单位
             */
            strokeWeight: number
            /**
             * 折线的透明度，取值范围0 - 1
             */
            strokeOpacity: number
            /**
             * 折线的样式，solid或dashed
             */
            strokeStyle: string
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: boolean
            /**
             * 是否启用线编辑，默认为false
             */
            enableEditing: boolean
            /**
             * 是否响应点击事件，默认为true
             */
            enableClicking: boolean
            /**
             * 配置贴合折线的图标
             */
            icons: Array<IconSequence>
        }

        /**
         * 使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层。
         */
        class Polyline extends Overlay {
            /**
             * 创建折线覆盖物对象
             * @param points
             * @param opts
             */
            constructor(points: Array<Point>, opts: PolylineOptions)
            /**
             * 设置折线的点数组
             * @param path
             */
            setPath(path: Array<Point>): void
            /**
             * 返回折线的点数组
             */
            getPath(): Array<Point>
            /**
             * 设置折线的颜色
             * @param color
             */
            setStrokeColor(color: string): void
            /**
             * 返回折线的颜色
             */
            getStrokeColor(): string
            /**
             * 设置透明度，取值范围0 - 1
             * @param opacity
             */
            setStrokeOpacity(opacity: number): void
            /**
             * 返回透明度
             */
            getStrokeOpacity(): number
            /**
             * 设置线的宽度，范围为大于等于1的整数
             * @param weight
             */
            setStrokeWeight(weight: number): void
            /**
             * 返回线的宽度
             */
            getStrokeWeight(): number
            /**
             * 设置是为实线或虚线，solid或dashed
             * @param style
             */
            setStrokeStyle(style: string): void
            /**
             * 返回当前线样式状态，实线或者虚线
             */
            getStrokeStyle(): string
            /**
             * 返回覆盖物的地理区域范围
             */
            getBounds(): Bounds
            /**
             * 开启编辑功能
             */
            enableEditing(): void
            /**
             * 关闭编辑功能
             */
            disableEditing(): void
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): void
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): void
            /**
             * 修改指定位置的坐标。索引index从0开始计数。例如setPointAt(2, point)代表将折线的第3个点的坐标设为point
             * @param index
             * @param point
             */
            setPositionAt(index: number, point: Point): void
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         * 此类表示Polygon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface PolygonOptions {
            /**
             * 边线颜色
             */
            strokeColor?: string
            /**
             * 填充颜色。当参数为空时，折线覆盖物将没有填充效果
             */
            fillColor?: string
            /**
             * 边线的宽度，以像素为单位
             */
            strokeWeight?: number
            /**
             * 边线透明度，取值范围0 - 1
             */
            strokeOpacity?: number
            /**
             * 填充的透明度，取值范围0 - 1
             */
            fillOpacity?: number
            /**
             * 边线的样式，solid或dashed
             */
            strokeStyle?: string
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear?: boolean
            /**
             * 是否启用线编辑，默认为false
             */
            enableEditing?: boolean
            /**
             * 是否响应点击事件，默认为true
             */
            enableClicking?: boolean
        }

        /**
         * 此类表示一个多边形覆盖物。
         */
        class Polygon extends Overlay {
            /**
             * 创建多边形覆盖物
             * @param points Array<Point>
             * @param opts PolygonOptions
             */
            constructor(points: Array<Point>, opts: PolygonOptions)
            /**
             *
             * @param path 设置多边型的点数组
             */
            setPath(path: Array<Point>): void
            /**
             * 返回多边型的点数组
             */
            getPath(): Array<Point>
            /**
             *
             * @param color 设置多边型的边线颜色，参数为合法的CSS颜色值
             */
            setStrokeColor(color: string): void
            /**
             * 返回多边型的边线颜色
             */
            getStrokeColor(): string
            /**
             * 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，折线覆盖物将没有填充效果
             * @param color
             */
            setFillColor(color: string): void
            /**
             * 返回多边形的填充颜色
             */
            getFillColor(): string
            /**
             * 设置多边形的边线透明度，取值范围0 - 1
             * @param opacity
             */
            setStrokeOpacity(opacity: number): void
            /**
             * 返回多边形的边线透明度
             */
            getStrokeOpacity(): number
            /**
             *  设置多边形的填充透明度，取值范围0 - 1
             * @param opacity
             */
            setFillOpacity(opacity: number): void
            /**
             * 返回多边形的填充透明度
             */
            getFillOpacity(): number
            /**
             * 设置多边形边线的宽度，取值为大于等于1的整数
             * @param weight
             */
            setStrokeWeight(weight: number): void
            /**
             * 返回多边形边线的宽度
             */
            getStrokeWeight(): number
            /**
             * 设置多边形边线样式为实线或虚线，取值solid或dashed
             * @param style
             */
            setStrokeStyle(style: string): void
            /**
             * 返回多边形边线样式
             */
            getStrokeStyle(): string
            /**
             * 返回覆盖物的地理区域范围
             */
            getBounds(): Bounds
            /**
             * 开启编辑功能
             */
            enableEditing(): void
            /**
             * 关闭编辑功能
             */
            disableEditing(): void
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): void
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): void
            /**
             * 修改指定位置的坐标。索引index从0开始计数。例如setPositionAt(2, point)代表将折线的第3个点的坐标设为point
             * @param index
             * @param point
             */
            setPositionAt(index: number, point: Point): void
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         * Circle类构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface CircleOptions {
            /**
             * 圆形边线颜色
             */
            strokeColor: string
            /**
             * 圆形填充颜色。当参数为空时，圆形将没有填充效果
             */
            fillColor: string
            /**
             * 圆形边线的宽度，以像素为单位
             */
            strokeWeight: number
            /**
             * 圆形边线透明度，取值范围0 - 1
             */
            strokeOpacity: number
            /**
             * 圆形填充的透明度，取值范围0 - 1
             */
            fillOpacity: number
            /**
             * 圆形边线的样式，solid或dashed
             */
            strokeStyle: string
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: boolean
            /**
             * 是否启用线编辑，默认为false
             */
            enableEditing: boolean
            /**
             * 是否响应点击事件，默认为true
             */
            enableClicking: boolean
        }

        /**
         * 此类表示地图上的圆覆盖物。
         */
        class Circle extends Overlay {
            /**
             * 创建圆覆盖物
             * @param center Point
             * @param radius Number
             * @param opts CircleOptions
             */
            constructor(center: Point, radius: number, opts: CircleOptions)
            /**
             * 设置圆形的中心点坐标
             * @param center
             */
            setCenter(center: Point): void
            /**
             * 返回圆形的中心点坐标
             */
            getCenter(): Point
            /**
             * 设置圆形的半径，单位为米
             * @param radius
             */
            setRadius(radius: number): void
            /**
             * 返回圆形的半径，单位为米
             */
            getRadius(): number
            /**
             * 返回圆形的地理区域范围
             */
            getBounds(): Bounds
            /**
             * 设置圆形的边线颜色，参数为合法的CSS颜色值
             * @param color
             */
            setStrokeColor(color: string): void
            /**
             * 返回圆形的边线颜色
             */
            getStrokeColor(): string
            /**
             * 设置圆形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆形覆盖物将没有填充效果
             * @param color
             */
            setFillColor(color: string): void
            /**
             * 返回圆形的填充颜色
             */
            getFillColor(): string
            /**
             * 设置圆形的边线透明度，取值范围0 - 1
             * @param opacity
             */
            setStrokeOpacity(opacity: number): void
            /**
             * 返回圆形的边线透明度
             */
            getStrokeOpacity(): number
            /**
             * 设置圆形的填充透明度，取值范围0 - 1
             * @param opacity
             */
            setFillOpacity(opacity: number): void
            /**
             * 返回圆形的填充透明度
             */
            getFillOpacity(): number
            /**
             * 设置圆形边线的宽度，取值为大于等于1的整数
             * @param weight
             */
            setStrokeWeight(weight: number): void
            /**
             * 返回圆形边线的宽度
             */
            getStrokeWeight(): number
            /**
             * 设置圆形边线样式为实线或虚线，取值solid或dashed
             * @param style
             */
            setStrokeStyle(style: string): void
            /**
             * 返回圆形边线样式
             */
            getStrokeStyle(): string
            /**
             * 开启编辑功能
             */
            enableEditing(): void
            /**
             * 关闭编辑功能
             */
            disableEditing(): void
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): void
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): void
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         * GroundOverlay类构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface GroundOverlayOptions {
            /**
             * 'image' | 'video' | 'canvas'，默认为image
             */
            type?: string
            /**
             * 图层透明度
             */
            opacity?: number
            /**
             * 图层地址
             */
            url?: string
            /**
             * 图层显示的最小级别
             */
            displayOnMinLevel?: number
            /**
             * 图层显示的最大级别
             */
            displayOnMaxLevel?: number
        }

        /**
         * 此类表示地图上的地面叠加层。
         */
        class GroundOverlay extends Overlay {
            /**
             * 创建地面叠加层
             * @param bounds
             * @param opts
             */
            constructor(bounds: Bounds, opts: GroundOverlayOptions)
            /**
             * 设置图层显示的矩形区域
             * @param bounds
             */
            setBounds(bounds: Bounds): void
            /**
             * 返回图层显示的矩形区域
             */
            getBounds(): Bounds
            /**
             * 设置图层的透明度
             * @param opcity
             */
            setOpacity(opcity: number): void
            /**
             * 返回图层的透明度
             */
            getOpacity(): number
            /**
             * 返回图层地址
             * @param url
             */
            setImageURL(url: string): void
            /**
             * 返回图层地址
             */
            getImageURL(): string
            /**
             * 设置图层显示的最小级别
             * @param level
             */
            setDisplayOnMinLevel(level: number): void
            /**
             * 返回图层显示的最小级别
             */
            getDisplayOnMinLevel(): number
            /**
             * 设置图层显示的最大级别
             * @param level
             */
            setDispalyOnMaxLevel(level: number): void
            /**
             * 返回图层显示的最大级别
             */
            getDispalyOnMaxLevel(): number
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         * 类表示ScaleControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface ScaleControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
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

        type ScaleControlEvent = 'zoom_changed' | 'zoomstart' | 'zoomend'

        /**
         * 此类表示比例尺控件。
         */
        class ScaleControl extends Control {
            /**
             * 创建一个比例尺控件
             * @param opts
             */
            constructor(opts?: ScaleControlOptions)
            /**
             * 返回比例尺单位制
             */
            getUnit(): LengthUnit
            /**
             * 设置比例尺单位制
             * @param unit
             */
            setUnit(unit: LengthUnit): void
        }

        /**
         * 类表示ZoomControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface ZoomControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
        }

        type ZoomControlEvent = 'zoomchange' | 'zoomstart' | 'zoomend'

        /**
         * 此类表示缩放控件。
         */
        class ZoomControl extends Control {
            /**
             * 创建一个缩放控件
             * @param opts
             */
            constructor(opts: ZoomControlOptions)
        }

        /**
         * 类表示CopyrightControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface CopyrightControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
        }

        /**
         * 此类表示版权控件。
         */
        class CopyrightControl extends Control {
            /**
             * 创建一个版权控件
             * @param opts
             */
            constructor(opts: CopyrightControlOptions)
        }

        /**
         * 此类表示自定义控件
         */
        interface CustomControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
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
         * 类表示NavigationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface NavigationControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
            /**
             * 控件的类型
             */
            type?: NavigationControlType
        }

        /**
         * 此类表示缩放平移控件。
         */
        class NavigationControl extends Control {
            /**
             * 创建一个缩放平移控件
             * @param opts
             */
            constructor(opts: NavigationControlOptions)
        }

        /**
         * 类表示NavigationControl3D构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface NavigationControl3DOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
        }

        /**
         *此类表示地图的3D控件，可以对地图进行旋转以及切换地图2D、3D展示效果。
         */
        class NavigationControl3D extends Control {
            /**
             * 创建一个特定样式的地图平移缩放控件
             * @param opts
             */
            constructor(opts: NavigationControl3DOptions)
        }

        /**
         * 类表示LocationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface LocationControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
        }

        /**
         * 此类表示定位控件。
         */
        class LocationControl extends Control {
            /**
             * 创建一个定位控件
             * @param opts
             */
            constructor(opts: LocationControlOptions)
        }

        /**
         * 类表示CityListControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface CityListControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
        }

        /**
         * 此类表示城市选择控件。
         */
        class CityListControl extends Control {
            /**
             * 创建一个城市选择控件
             * @param opts
             */
            constructor(opts: CityListControlOptions)
        }

        /**
         * 类表示MapTypeControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface MapTypeControlOptions {
            /**
             * 控件的停靠位置
             */
            anchor?: ControlAnchor
            /**
             * 控件的偏移值
             */
            offset?: Size
        }

        type MapTypeControlEvent = 'maptypechange'

        /**
         * 此类表示地图类型控件。
         */
        class MapTypeControl extends Control {
            /**
             * 创建一个地图类型控件
             * @param opts
             */
            constructor(opts: MapTypeControlOptions)
        }

        /**
         * 此类表示地图上所有覆盖物的容器集合，没有构造函数，通过对象字面量形式表示。通过Map的getPanes方法可获得该对象实例。
         */
        interface MapPanes {
            /**
             * 信息窗口所在的容器
             */
            floatPane: HTMLElement
            /**
             * 标注点击区域所在的容器
             */
            markerMouseTarget: HTMLElement
            /**
             * 信息窗口阴影所在的容器
             */
            floatShadow: HTMLElement
            /**
             * 文本标注所在的容器
             */
            labelPane: HTMLElement
            /**
             * 标注图标所在的容器
             */
            markerPane: HTMLElement
        }

        /**
         * 此类表示Icon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface IconOptions {
            /**
             * 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值
             */
            anchor?: Size
            /**
             * 图片相对于可视区域的偏移值
             */
            imageOffset?: Size
        }

        /**
         * 此类表示标注覆盖物所使用的图标。
         */
        class Icon {
            /**
             * 图标的定位点相对于图标左上角的偏移值
             */
            anchor: Size
            /**
             * 图标可视区域的大小
             */
            size: Size
            /**
             * 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background-position属性
             */
            imageOffset: Size
            /**
             * 图标所用的图片的大小，此功能的作用等同于CSS中的background-size属性。可用于实现高清屏的高清效果
             */
            imageSize: Size
            /**
             * 图标所用图像资源的位置
             */
            imageUrl: string
            /**
             * 设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
             */
            printImageUrl: string
            /**
             * 以给定的图像地址和大小创建图标对象实例
             * @param url
             * @param size
             * @param opts
             */
            constructor(url: string, size: Size, opts: IconOptions)
            /**
             * 设置图片资源的地址
             * @param imageUrl
             */
            setImageUrl(imageUrl: string): void
            /**
             * 设置图标可视区域的大小
             * @param size
             */
            setSize(size: Size): void
            /**
             * 设置图标的大小
             * @param offset
             */
            setImageSize(offset: Size): void
            /**
             * 设置图标定位点相对于其左上角的偏移值
             * @param anchor
             */
            setAnchor(anchor: Size): void
            /**
             * 设置图片相对于可视区域的偏移值
             * @param offset
             */
            setImageOffset(offset: Size): void
        }

        /**
         * 此类表示Marker构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
         */
        interface MarkerOptions {
            /**
             * 标注的位置偏移值
             */
            offset?: Size
            /**
             * 标注所用的图标对象
             */
            icon?: Icon
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear?: boolean
            /**
             * 是否启用拖拽，默认为false
             */
            enableDragging?: boolean
            /**
             * 是否响应点击事件。默认为true
             */
            enableClicking?: boolean
            /**
             * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
             */
            raiseOnDrag?: boolean
            /**
             * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
             */
            draggingCursor?: string
            /**
             * 旋转角度
             */
            rotation?: number
            /**
             * 鼠标移到marker上的显示内容
             */
            title?: string
        }

        /**
         * 此类表示地图上的一个图像标注。
         */
        class Marker extends Overlay {
            /**
             * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
             * @param point
             * @param opts
             */
            constructor(point: Point, opts: MarkerOptions)
            /**
             * 设置标注所用的图标对象
             * @param icon
             */
            setIcon(icon: Icon): void
            /**
             * 返回标注所用的图标对象
             */
            getIcon(): Icon
            /**
             * 设置标注的地理坐标
             * @param position
             */
            setPosition(position: Point): void
            /**
             * 返回标注的地理坐标
             */
            getPosition(): Point
            /**
             * 设置标注的偏移值
             * @param offset
             */
            setOffset(offset: Size): void
            /**
             * 返回标注的偏移值
             */
            getOffset(): Size
            /**
             * 设置标注的标题，当鼠标移至标注上时显示此标题
             * @param title
             */
            setTitle(title: String): void
            /**
             * 返回标注的标题
             */
            getTitle(): String
            /**
             * 为标注添加文本标注
             * @param label
             */
            setLabel(label: Label): void
            /**
             * 返回标注的文本内容
             */
            getLabel(): Label
            /**
             * 开启标注拖拽功能
             */
            enableDragging(): void
            /**
             * 关闭标注拖拽功能
             */
            disableDragging(): void
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): void
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): void
            /**
             * 设置覆盖物的zIndex
             * @param zIndex
             */
            setZIndex(zIndex: Number): void
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map
            /**
             * 设置点的旋转角度
             * @param rotation
             */
            setRotation(rotation: Number): void
            /**
             * 获取点的旋转角度
             */
            getRotation(): Number
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
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
         * 此类表示Marker3D构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
         */
        interface Marker3DOptions {
            /**
             * 点的大小，默认为50
             */
            size?: number
            /**
             * 点的形状，1 为圆形，2 为正方形，默认为 1。也可以使用对应的常量 BMAP_SHAPE_CIRCLE 和 BMAP_SHAPE_RECT
             */
            shape?: Marker3DShapeType
            /**
             * 点的颜色，格式为 '#xxxxxx'，比如'#f00'
             */
            fillColor?: string
            /**
             * 点的透明度，范围0-1，默认0.8
             */
            fillOpacity?: number
            /**
             * 点的纹理贴图，格式为通过Icon创建的Icon对象
             */
            icon?: Icon
        }

        /**
         * 此类表示地图上的带高度的点覆盖物绘制。
         */
        class Marker3D extends Overlay {
            /**
             * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
             * @param point
             * @param height
             * @param opts
             */
            constructor(point: Point, height: number, opts: Marker3DOptions)
            /**
             * 设置标注的地理坐标
             * @param position
             */
            setPosition(position: Point): void
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         *  Overlay 事件
         */
        interface OverlayEventEventMap {
            /**
             * 点击文本标注后会触发此事件
             */
            click: OverlayEventPayload
            /**
             * 双击文本标注后会触发此事件
             */
            dblclick: OverlayEventPayload
            /**
             * 鼠标在文本标注上按下触发此事件
             */
            mousedown: OverlayEventPayload
            /**
             * 鼠标在文本标注释放触发此事件
             */
            mouseup: OverlayEventPayload
            /**
             * 鼠标离开文本标注时触发此事件
             */
            mouseout: OverlayEventPayload
            /**
             * 当鼠标进入文本标注区域时会触发此事件
             */
            mouseover: OverlayEventPayload
            /**
             * 移除文本标注时触发
             */
            remove: OverlayEventPayload
            /**
             * 右键点击标注时触发此事件
             */
            rightclick: OverlayEventPayload
            /**
             * 拖动开始触发此事件
             */
            dragstart: OverlayEventPayload
            /**
             * 拖动中触发此事件
             */
            dragging: OverlayEventPayload
            /**
             * 拖动结束触发此事件
             */
            dragend: OverlayEventPayload
            /**
             * 移动开始触发此事件
             */
            movestart: OverlayEventPayload
            /**
             * 鼠标移动触发此事件
             */
            mousemove: OverlayEventPayload
            /**
             * 移动结束触发此事件
             */
            moveend: OverlayEventPayload
        }
        type OverlayEvent = keyof OverlayEventEventMap
        type OverlayEventPayload = {
            cancelBubble: boolean
            currentTarget: keyof BMapGL.BMapGL
            domEvent: any
            latLng: Point
            pixel: Pixel
            point: Point
            returnValue: boolean
            srcElement: keyof BMapGL.BMapGL
            target: keyof BMapGL.BMapGL
            type: string
        }
        type OnOverlayEventPayload<T extends OverlayEvent> = OverlayEventEventMap[T]

        /**
         * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
         */
        abstract class Overlay {
            /**抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
             *
             * @param map
             */
            initialize(map: Map): HTMLElement
            /**
             * 判断覆盖物是否可见
             */
            isVisible(): boolean
            /**
             * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
             */
            draw(): void
            /**
             * 显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空
             */
            show(): void
            /**
             * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none
             */
            hide(): void
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         * 富文本标注选项
         */
        interface RichMarkerOptions {
            "anchor"?: Size,
            "enableDragging"?: boolean
        }

        /**
         * 富文本标注
         */
        class RichMarker extends Overlay {
            /**
             * 创建一个富文本标注对象
             * @param html 
             * @param point 
             * @param opts 
             */
            constructor(html: string, point: Point, opts?: RichMarkerOptions)
        }

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
         * 此类是所有控件的基类，您可以通过此类来实现自定义控件。所有控件均包含Control类的属性、方法和事件。通过Map.addControl()方法可将控件添加到地图上。
         */
        class Control {
            /**
             * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
             */
            defaultAnchor: ControlAnchor
            /**
             * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
             */
            defaultOffset: Size
            /**
             * 创建一个控件原型实例，通过该原型实例可创建自定义控件
             */
            constructor()
            /**
             * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。DOM元素需要添加到地图的容器中，使用map.getContainer()方法可获得地图容器元素
             * @param map
             */
            initialize(map: Map): HTMLElement
            /**
             * 设置控件停靠的位置
             * @param anchor
             */
            setAnchor(anchor: ControlAnchor): void
            /**
             * 返回控件停靠的位置
             */
            getAnchor(): ControlAnchor
            /**
             * 设置控件停靠的偏移量
             * @param offset
             */
            setOffset(offset: Size): void
            /**
             * 返回控件停靠的偏移量
             */
            getOffset(): Size
            /**
             * 显示控件
             */
            show(): void
            /**
             * 隐藏控件
             */
            hide(): void
            /**
             * 判断控件的可见性
             */
            isVisible(): boolean
        }

        /**
         * 此类表示MenuItem构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface MenuItemOptions {
            /**
             * 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
             */
            width: number
            /**
             * 指定此菜单项dom的id
             */
            id: string
        }

        /**
         * 此类表示一个菜单项。
         */
        class MenuItem {
            /**
             * 创建一个菜单项。当菜单项被点击时，系统将会以当前菜单弹出的地理坐标点作为参数调用回调函数callback
             */
            constructor(text: string, callback: Function, opts: MenuItemOptions)
            /**
             * 设置菜单项显示的文本
             * @param text
             */
            setText(text: string): void
            /**
             * 启用菜单项
             */
            enable(): void
            /**
             * 禁用菜单项
             */
            disable(): void
        }

        /**
         * 此类表示右键菜单。您可以在地图上添加自定义内容的右键菜单。
         */
        class ContextMenu {
            /**
             * 创建一个右键菜单实例
             */
            constructor()
            /**
             * 添加菜单项
             * @param item
             */
            addItem(item: MenuItem): void
            /**
             * 返回指定索引位置的菜单项，第一个菜单项的索引为0
             * @param index
             */
            getItem(index: number): MenuItem
            /**
             * 移除菜单项
             * @param item
             */
            removeItem(item: MenuItem): void
            /**
             * 	添加分隔符
             */
            addSeparator(): void
            /**
             * 移除指定索引位置的分隔符，第一个分隔符的索引为0
             * @param index
             */
            removeSeparator(index: number): void
        }

        /**
         * 此类表示地图视角动画的关键帧，通过定义关键帧，API会补全关键帧之间过渡的动画过程
         */
        interface ViewAnimationKeyFrames {
            /**
             * 地图中心点，默认值为地图当前状态中心点
             */
            center: Point
            /**
             * 地图缩放级别，默认值为地图当前状态缩放级别
             */
            zoom: number
            /**
             * 地图倾斜角度，默认值为地图当前状态倾斜角度
             */
            tilt: number
            /**
             * 地图旋转角度，默认值为地图当前旋转角度
             */
            heading: number
            /**
             * 	表示当前关键帧处于动画过程的百分比，取值范围0~1
             */
            percentage: number
        }

        /**
         * 此类表示地图视角动画的配置
         */
        interface ViewAnimationOptions {
            /**
             * 动画开始延迟时间，单位ms，默认0
             */
            delay: number
            /**
             * 	动画持续时间，单位ms，默认1000
             */
            duration: number
            /**
             * 循环次数，参数类型为数字时循环固定次数，参数为'INFINITE'无限循环，默认为1
             */
            interation: number | string
        }

        type ViewAnimationEvent = 'animationstart' | 'animationiterations' | 'animationend' | 'animationcancel'

        /**
         * 地图视角动画类。
         */
        class ViewAnimation {
            /**
             * 创建地图视角动画对象，通过关键帧的形式对动画进行定义
             * @param keyFrames
             * @param opts
             */
            constructor(keyFrames: Array<ViewAnimationKeyFrames>, opts: ViewAnimationOptions)
        }

        interface TrackAnimationOptions {
            /**
             *  动画完成后自动调整视野到总览
             */
            overallView: boolean
            /**
             * 轨迹播放的角度，默认为55
             */
            tilt: number
            /**
             * 动画持续时长，默认为10000，单位ms
             */
            duration: number
            /**
             * 动画开始的延迟，默认0，单位ms
             */
            delay: number
        }

        /**
         * 地图轨迹动画类。
         */
        class TrackAnimation {
            /**
             * 创建一个地图轨迹动画对象
             * @param bmap
             * @param pl
             * @param opts
             */
            constructor(bmap: Map, pl: Polyline, opts: TrackAnimationOptions)
            /**
             * 启动动画
             */
            start(): void
            /**
             * 强制停止动画
             */
            cancel(): void
            /**
             * 暂时停止动画
             */
            pause(): void
            /**
             * 恢复动画
             */
            continue(): void
        }

        interface LushuAnimationOptions {
            /**
             * 信息窗口文案
             */
            defaultContent?: string
            /**
             * 是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
             */
            autoView?: boolean
            /**
             * 速度
             */
            speed?: number
            /**
             * 图标
             */
            icon?: Icon
            /**
             * 是否设置marker随着道路的走向进行旋转
             */
            enableRotation?: boolean
            /**
             * 是否大地线
             */
            geodesic?: boolean
            /**
             * 是否自动地图中心
             */
            autoCenter?: boolean
        }

        /**
         * 地图路书动画类。
         */
        class LushuAnimation {
            /**
             * 创建一个地图路书动画对象
             * @param bmap
             * @param pl
             * @param opts
             */
            constructor(bmap: Map, pl: Polyline, opts: LushuAnimationOptions)
            /**
             * 启动动画
             */
            start(): void
            /**
             * 暂停动画
             */
            pause(): void
            /**
             * 停止动画
             */
            stop(): void
            /**
             * 设置属性
             */
            _setOptions(opt?: LushuAnimationOptions): void
        }

        type DistanceToolEvent = 'drawend' | 'addpoint' | 'removepolyline'

        /**
         * 地图测距工具类。
         */
        class DistanceTool {
            /**
             * 创建一个地图测距工具对象
             * @param bmap
             */
            constructor(bmap: Map)
            /**
             * 启动
             */
            open(): void
            /**
             * 关闭
             */
            close(): void
        }

        /**
         * 地图绘制工具类。
         */
        class DrawingManager {
            /**
             * 创建一个地图绘制工具对象
             * @param bmap
             */
            constructor(bmap: Map)
            /**
             * 启动
             */
            open(): void
            /**
             * 关闭
             */
            close(): void
            /**
             * 设置绘制模式
             * @param mode
             */
            setDrawingMode(mode: string): void
            /**
             * 获取绘制模式
             */
            getDrawingMode(): string
            /**
             * 是否开启
             */
            _isOpen: boolean
        }

        type DrawingManagerEvent = 'overlaycomplete'

        /**
         *  Map 事件
         */
        interface MapEventEventMap {
            tilesloaded: MapPayload
            click: MapPayload
            dblclick: MapPayload
            mousedown: MapPayload
            mouseup: MapPayload
            mousemove: MapPayload
            mouseover: MapPayload
            mouseout: MapPayload
            movestart: MapPayload
            moveing: MapPayload
            moveend: MapPayload
            mousewheel: MapPayload
            rightclick: MapPayload
            resize: MapPayload
            touchstart: MapPayload
            touchmove: MapPayload
            touchend: MapPayload
            touchcancel: MapPayload
            zoomstart: MapPayload
            zoomend: MapPayload
            zooming: MapPayload
            zoom_changed: MapPayload
            center_changed: MapPayload
            animation_start: MapPayload
            animation_end: MapPayload
            size_changed: MapPayload
            addcontrol: MapPayload
            removecontrol: MapPayload
            addcontextmenu: MapPayload
            removecontextmenu: MapPayload
            beforeaddoverlay: MapPayload
            addoverlay: MapPayload
            clearoverlays: MapPayload
            removeoverlay: MapPayload
            addtilelayer: MapPayload
            removetilelayer: MapPayload
            maptypechange: MapPayload
            style_willchange: MapPayload
            style_changed: MapPayload
            heading_changed: MapPayload
            dragging: MapPayload
            dragend: MapPayload
            dragstart: MapPayload
        }
        type MapEvent = keyof MapEventEventMap
        type MapPayload = {
            latlng: Point
        }
        type OnMapEventPayload<T extends MapEvent> = MapEventEventMap[T]

        /**
         * 缩放选项
         */
        interface zoomOptions {
            /**
             * 缩放中心点
             */
            zoomCenter?: Point | null
        }

        /**
         * 此类是地图API的核心类，用来实例化一个地图。请注意WebGL版本的地图API的命名空间是BMapGL。
         * 示例：const map = new BMapGL.Map('container');
         */
        class Map {
            /**
             * 在指定的容器内创建地图实例，之后需要调用Map.centerAndZoom()方法对地图进行初始化。未进行初始化的地图将不能进行任何操作
             * @param container String | HTMLElement
             * @param opts MapOptions
             */
            constructor(container: string | HTMLElement, opts: MapOptions)
            /**
             * 启用地图拖拽，默认启用
             */
            enableDragging(): void
            /**
             * 禁用地图拖拽
             */
            disableDragging(): void
            /**
             * 启用地图惯性拖拽，默认禁用
             */
            enableInertialDragging(): void
            /**
             * 禁用地图惯性拖拽
             */
            disableInertialDragging(): void
            /**
             * 允许地图可被鼠标滚轮缩放，默认禁用
             */
            enableScrollWheelZoom(): void
            /**
             * 禁止地图被鼠标滚轮缩放
             */
            disableScrollWheelZoom(): void
            /**
             * 开启双击平滑缩放效果
             */
            enableContinuousZoom(): void
            /**
             * 关闭双击平滑缩放效果
             */
            disableContinuousZoom(): void
            /**
             * 开启图区resize中心点不变
             */
            enableResizeOnCenter(): void
            /**
             * 关闭图区resize中心点不变
             */
            disableResizeOnCenter(): void
            /**
             * 启用地图双击缩放，左键双击放大、右键双击缩小
             */
            enableDoubleClickZoom(): void
            /**
             * 取消地图双击缩放
             */
            disableDoubleClickZoom(): void
            /**
             * 启用键盘操作，默认禁用。键盘的上、下、左、右键可连续移动地图。同时按下其中两个键可使地图进行对角移动。PgUp、PgDn、Home和End键会使地图平移其1/2的大小。+、-键会使地图放大或缩小一级
             */
            enableKeyboard(): void
            /**
             * 禁用键盘操作
             */
            disableKeyboard(): void
            /**
             * 启用双指缩放地图。
             */
            enablePinchToZoom(): void
            /*
             * 禁用双指缩放地图。
             */
            disablePinchToZoom(): void
            /**
             * 启用地图旋转
             */
            enableRotate(): void
            /**
             * 禁用地图旋转
             */
            disableRotate(): void
            /**
             * 允许通过手势旋转地图。
             */
            enableRotateGestures(): void
            /**
             * 是否允许通过手势旋转地图。
             */
            disableRotateGestures(): void
            /**
             * 禁用自通过手势倾斜地图。
             */
            enableTiltGestures(): void
            /**
             * 禁用自通过手势倾斜地图。
             */
            disableTiltGestures(): void
            /**
             * 启用自动适应容器尺寸变化，默认启用
             */
            enableAutoResize(): void
            /**
             * 禁用自动适应容器尺寸变化
             */
            disableAutoResize(): void
            /**
             * 地图容器变化后调用此方法用来重新铺图
             */
            checkResize(): void
            /**
             * 强制地图调整尺寸，此时会以当前容器尺寸为基准重新计算视野所需图像数据并重新绘制。当关闭自动调整视野时（`enableAutoResize` 配置），需要调用此方法来强制地图刷新。
             */
            resize(): void
            /**
             * 返回地图当前尺寸，以像素表示
             */
            getSize(): Size
            /**
             * 获取地图容器尺寸
             */
            getContainerSize(): Size
            /**
             * 返回当前地图级别，一个像素对应多少单位的平面墨卡托坐标
             */
            getZoomUnits(): number
            /**
             * 返回地图的DOM容器元素。当创建用户自定义控件时，需要自行实现Control.initialize()方法，并将控件的容器元素添加到地图上，通过此方法可获得地图容器
             */
            getContainer(): HTMLElement
            /**
             * 像素坐标转换为经纬度坐标
             * @param pixel 像素坐标
             */
            pixelToPoint(pixel: Pixel): Point
            /**
             * 经纬度坐标转换为像素坐标
             * @param point 经纬度坐标
             */
            pointToPixel(point: Point): Pixel
            /**
             * 经纬度球体坐标转换为墨卡托平面坐标
             * @param lng 经纬度球体经度坐标
             * @param lat 经纬度球体维度坐标
             */
            lnglatToMercator(lng: number, lat: number): [number, number]
            /**
             * 墨卡托平面坐标转换为经纬度球体坐标
             * @param x 墨卡托平面横坐标
             * @param y 墨卡托平面纵坐标
             */
            mercatorToLnglat(x: number, y: number): [number, number]
            /**
             * 返回地图是否经过centerAndZoom进行初始化
             */
            isLoaded(): boolean
            /**
             * 添加地点区域，作为地图上的虚拟可点击区域。其中参数spots为热区点数组，options为可选配置参数；返回区域id。
             * @param spots
             * @param options
             */
            addSpots(spots: Array<any>, options: Object): number
            /**
             * 根据id返回地点区域数组
             * @param id
             */
            getSpots(id: number): Array<any>
            /**
             * 根据id移除区域数组
             * @param id
             */
            removeSpots(id: number): void
            /**
             * 清除地点区域，此操作将清空所有虚拟可点数据
             */
            clearSpots(): void
            /**
             * 清空当前map所有的自定义底图标注
             */
            clearLabels(): void
            /**
             * 	在底图上添加文字，这些文字会和底图文字一同参与避让。
             * @param labels
             */
            addLabelsToMapTile(labels: Array<any>): void
            /**
             * 	从底图上移除文字标注，参数为uid数组，根据数组里的uid进行移除
             * @param labels
             */
            removeLabelsFromMapTile(labelUids: Array<Number | String>): void
            /**
             * 通过点击坐标获取当前点中的底图icon，如果获取到返回其{name, uid, position}，否则返回null
             * @param clickPosition
             */
            getIconByClickPosition(clickPosition: Pixel): Object | null
            /**
             * 设置地图可拖动区域，参数为地图拖拽的区域范围
             */
            setBounds(bounds: Bounds): void
            /**
             * 获取地图当前视野范围的矩形区域，以地理坐标表示。如果地图尚未初始化则返回一个空的 `Bounds` 实例。
             */
            getBounds(): Bounds
            /**
             * 获取地图坐标类型，为CoordType常量
             */
            getCoordType(): string
            /**
             * 	获取当前地图样式id，对于内置样式则返回样式名称；对于自定义样式，则返回内部自动生成的样式id
             */
            getMapStyleId(): string
            /**
             * 获取覆盖物容器元素，返回地图覆盖物容器对象
             */
            getPanes(): MapPanes
            /**
             * 获取当前打开的信息窗口实例，如果当前地图没有处于打开状态信息窗口，则返回 `null`
             */
            getInfoWindow(): InfoWindow | null
            /**
             * 设置地图默认的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
             * @param cursor
             */
            setDefaultCursor(cursor: string): void
            /**
             * 获取地图默认的鼠标指针样式，返回cursor值
             */
            getDefaultCursor(): string
            /**
             * 	设置拖拽地图时的鼠标指针样式。参数cursor应符合CSS的cursor属性规范
             * @param cursor
             */
            setDraggingCursor(cursor: string): void
            /**
             * 	返回拖拽地图时的鼠标指针样式
             */
            getDraggingCursor(): string
            /**
             * 设置地图允许的最小级别。取值不得小于地图类型所允许的最小级别
             * @param zoom
             */
            getMinZoom(): number
            /**
             * 	设置地图允许的最大级别。取值不得大于地图类型所允许的最大级别
             * @param zoom
             */
            setMaxZoom(zoom: number): void
            /**
             * 返回两点之间的距离，单位是米
             * @param start Point
             * @param end Point
             */
            getDistance(start: Point, end: Point): number
            /**
             * 返回地图类型
             */
            getMapType(): MapTypeId
            /**
             * 根据提供的地理区域或坐标设置地图视野，调整后的视野会保证包含提供的地理区域或坐标
             * @param view
             * @param viewportOptions
             */
            setViewport(view: Array<Point> | Viewport, viewportOptions?: ViewportOptions): void
            /**
             * 根据提供的地理区域或坐标获得最佳的地图视野，返回的对象中包含center和zoom属性，分别表示地图的中心点和级别。此方法仅返回视野信息，不会将新的中心点和级别做用到当前地图上
             * @param view
             * @param viewportOptions
             */
            getViewport(view: Array<Point>, viewportOptions: ViewportOptions): Viewport
            /**
             * 设初始化地图。 如果center类型为Point时，zoom必须赋值，范围3-19级，若调用高清底图（针对移动端开发）时，zoom可赋值范围为3-18级。如果center类型为字符串时，比如“北京”，zoom可以忽略，地图将自动根据center适配最佳zoom级别
             * @param center
             * @param zoom
             */
            centerAndZoom(center: Point, zoom: number): void
            /**
             * 	将地图的中心点更改为给定的点，跳转到指定中心点进行渲染。如果该点在当前的地图视图中已经可见，则会以平滑动画的方式移动到中心点位置。可以通过配置强制移动过程不使用动画效果
             * @param center
             */
            panTo(center: Point): void
            /**
             * 	将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果
             * @param x
             * @param y
             */
            panBy(x: number, y: number): void
            /**
             * 	飞到指定的中心点和级别，提供给定位缩放地图使用
             * @param center
             * @param zoom
             */
            flyTo(center: Point, zoom: number): void
            /**
             * 设置地图中心点。center除了可以为坐标点以外，还支持城市名。可选配置参数包括'noAnimation: boolean'是否禁用动画效果；'callback: function'动画结束后调用此方法，如果没有动画则立即调用
             * @param center
             * @param options
             */
            setCenter(center: Point | String, options?: Object): void
            /**
             * 返回地图当前中心点
             */
            getCenter(): Point
            /**
             * 设置地图类型
             * @param mapTypeId MapTypeId
             */
            setMapType(mapTypeId: MapTypeId): void
            /**
             * 将视图切换到指定的缩放等级，中心点坐标不变。注意：当有信息窗口在地图上打开时，地图缩放将保证信息窗口所在的坐标位置不动。可选配置参数包括'noAnimation：boolean'是否禁用动画效果；'callback:function'动画结束后会调用此方法，如果没有动画则立即调用；'zoomCenter：Point'缩放中心点，默认以地图中心点为基准缩放
             * @param zoom
             * @param options
             */
            setZoom(zoom: number, options?: zoomOptions): void
            /**
             * 返回地图当前缩放级别
             */
            getZoom(): number
            /**
             * 放大一级视图
             */
            zoomIn(): void
            /**
             * 缩小一级视图
             */
            zoomOut(): void
            /**
             * 将控件添加到地图，一个控件实例只能向地图中添加一次
             * @param control
             */
            addControl(control: Control): void
            /**
             * 从地图中移除控件。如果控件从未被添加到地图中，则该移除不起任何作用
             * @param control
             */
            removeControl(control: Control): void
            /**
             * 添加右键菜单
             */
            addContextMenu(menu: ContextMenu): void
            /**
             * 移除右键菜单
             */
            removeContextMenu(menu: ContextMenu): void
            /**
             * 	将覆盖物添加到地图中，一个覆盖物实例只能向地图中添加一次
             * @param overlay
             */
            addOverlay(overlay: Overlay): void
            /**
             * 	从地图中移除覆盖物。如果覆盖物从未被添加到地图中，则该移除不起任何作用
             * @param overlay
             */
            removeOverlay(overlay: Overlay): void
            /**
             * 清除地图上所有覆盖物
             */
            clearOverlays(): void
            /**
             * 	根据地理坐标获取对应的覆盖物容器的坐标，此方法用于自定义覆盖物
             * @param point
             */
            pointToOverlayPixel(point: Point): Pixel
            /**
             * 根据覆盖物容器的坐标获取对应的地理坐标
             * @param pixel
             */
            overlayPixelToPoint(pixel: Pixel): Point
            /**
             * 获取当前地图上的所有覆盖物，返回覆盖物对象的集合
             */
            getOverlays(): Array<Overlay>
            /**
             * 	返回地图覆盖物容器列表
             */
            getPanes(): MapPanes
            /**
             * 获取当前地图允许的最大倾斜角度
             */
            getCurrentMaxTilt(): number
            /**
             * 根据 uid 将底图上的 poi 高亮显示，其中参数tilePosStr为label的位置字符串
             * @param uid
             * @param tilePosStr
             */
            hightlightSpotByUid(uid: string, tilePosStr: string): void
            /**
             * 重置热区状态，即将高亮的热区点取消
             */
            resetSpotStatus(): void
            /**
             * 增加热区数组
             */
            addAreaSpot(areas: Array<any>[]): string
            /**
             * 返回地点区域数组
             */
            getAreaSpot(id: string): Array<any>[]
            /**
             * 移除区域数组
             * @param id
             */
            removeAreaSpot(id: string): void
            /**
             * 清除地点区域，此操作将清空所有虚拟可点数据
             */
            clearAreaSpots(): void
            /**
             * 开启路况图层
             */
            setTrafficOn(): void
            /**
             * 关闭路况图层
             */
            setTrafficOff(): void
            /**
             * 显示覆盖物
             */
            showOverlayContainer(): void
            /**
             * 不显示覆盖物
             */
            hideOverlayContainer(): void
            /**
             * 设置个性化地图，参数为个性化配置对象
             * @param config
             */
            setMapStyleV2(config: Object): void
            /**
             * 启动视角动画
             * @param viewAnimation
             */
            startViewAnimation(viewAnimation: ViewAnimation): number
            /**
             * 停止视角动画
             * @param viewAnimation
             */
            cancelViewAnimation(viewAnimation: ViewAnimation): void
            /**
             * 获取地图截图，地球模式不支持。需要初始化地图配置preserveDrawingBuffer：true，否则是黑屏
             */
            getMapScreenshot(): string
            /**
             * 加载地图当前样式所需要的样式文件，callback为加载成功后的回调函数
             * @param callback
             */
            loadMapStyleFiles(callback: Function): void
            /**
             * 设置版权信息位置，其中logo为logo位置，copyright为文字位置
             * @param logo
             * @param cpy
             */
            setCopyrightOffset(logo: Object, cpy: Object): void
            /**
             * 销毁地图，当使用 WebGL 渲染地图时，如果确认不再使用该地图实例，则需要调用本方法销毁 WebGL 上下文，否则频繁创建新地图实例会导致浏览器报：too many WebGL context 的警告
             */
            destroy(): void
            /**
             * 判断浏览器是否支持地球,支持返回true,否则返回false
             */
            isSupportEarth(): boolean
            /**
             * 设置地图旋转角度
             */
            setHeading(rotate: number): void
            /**
             * 设置地图的倾斜角度
             */
            setTilt(tilt: number): void
            /**
             * 打开信息窗口
             * @param infoWindow
             * @param point
             */
            openInfoWindow(infoWindow: InfoWindow, point: Point): void
            /**
             * 关闭地图上打开的信息窗口
             */
            closeInfoWindow(): void
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends MapEvent>(event: T, handler: (data: OnMapEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends MapEvent>(event: T, handler: (data: OnMapEventPayload<T>) => void): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends MapEvent>(event: T, listener: (data: OnMapEventPayload<T>) => void): this
        }

        /**
         * 此类表示一个行政区域的边界。
         */
        class Boundary {
            /**
             * 建行政区域搜索的对象实例
             */
            constructor()
            /**
             * 返回行政区域的边界。 name: 查询省、直辖市、地级市、或县的名称。 callback:执行查询后，数据返回到客户端的回调函数，数据以回调函数的参数形式返回。返回结果是一个数组，数据格式如下： arr[0] = "x1, y1; x2, y2; x3, y3; ..." arr[1] = "x1, y1; x2, y2; x3, y3; ..." arr[2] = "x1, y1; x2, y2; ..." … 否则回调函数的参数为null
             * @param name
             * @param callback
             */
            get(name: string, callback: Function): void
        }

        /**
         * 此类表示PrismOptions构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface PrismOptions {
            /**
             * 顶面填充颜色
             */
            topFillColor: string
            /**
             * 顶面填充颜色透明度，取值范围0 - 1
             */
            topFillOpacity: number
            /**
             * 侧面填充颜色
             */
            sideFillColor: string
            /**
             * 侧面填充颜色透明度，取值范围0 - 1
             */
            sideFillOpacity: number
            /**
             * 是否在调用map.clearOverlays清除此覆盖物，默认为true
             */
            enableMassClear: boolean
        }

        /**
         * 此类表示一个棱柱覆盖物
         */
        class Prism extends Overlay {
            /**
             * 创建棱柱覆盖物，构造函数中需要定义底面和高度
             * @param points
             * @param altitude
             * @param opts
             */
            constructor(points: Array<Point>, altitude: number, opts: PrismOptions)
            /**
             * 设置底面多边形的点数组
             * @param path
             */
            setPath(path: Array<Point>): void
            /**
             * 返回底面多边形的点数组
             */
            getPath(): Array<Point>
            /**
             * 设置棱柱的高，单位：米
             * @param altitude
             */
            setAltitude(altitude: number): void
            /**
             * 返回棱柱的高，单位：米
             */
            getAltitude(): number
            /**
             * 设置棱柱顶面的填充颜色
             * @param color
             */
            setTopFillColor(color: string): void
            /**
             * 返回棱柱顶面的填充颜色
             */
            getTopFillColor(): string
            /**
             * 设置棱柱顶面透明度，取值范围0 - 1
             * @param opacity
             */
            setTopFillOpacity(opacity: number): void
            /**
             * 返回棱柱顶面透明度
             */
            getTopFillOpacity(): number
            /**
             * 设置棱柱侧面的填充颜色
             * @param color
             */
            setSideFillColor(color: string): void
            /**
             * 返回棱柱侧面的填充颜色
             */
            getSideFillColor(): string
            /**
             * 设置棱柱侧面透明度，取值范围0 - 1
             * @param opacity
             */
            setSideFillOpacity(opacity: number): void
            /**
             * 返回棱柱侧面透明度
             */
            getSideFillOpacity(): number
            /**
             * 允许覆盖物在map.clearOverlays方法中被清除
             */
            enableMassClear(): void
            /**
             * 禁止覆盖物在map.clearOverlays方法中被清除
             */
            disableMassClear(): void
            /**
             * 返回覆盖物所在的map对象
             */
            getMap(): Map
            /**
             * 添加事件监听函数
             * @param event
             * @param handler
             */
            addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
            /**
             * 移除事件监听函数
             * @param event
             * @param handler
             */
            removeEventListener<T extends OverlayEvent>(
                event: T,
                handler: (data: OnOverlayEventPayload<T>) => void
            ): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
        }

        /**
         * 地图贝塞尔曲线类。
         */
        class BezierCurve extends Overlay {
            /**
             * 创建一个贝塞尔曲线
             * @param points
             * @param controlPoints
             */
            constructor(points: Array<Point>, controlPoints: any[])
        }

        /**
         * 此类表示DrivingRoute构造函数的可选参数。
         */
        interface DrivingRouteOptions {
            /**
             * 结果呈现设置
             */
            renderOptions?: RenderOptions
            /**
             * 驾车策略
             */
            policy?: DrivingPolicy
            /**
             * 	检索完成后的回调函数。参数： results: DrivingRouteResult
             */
            onSearchComplete?: Function
            /**
             * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，通过marker属性可得到其对应的标注
             */
            onMarkersSet?: Function
            /**
             * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素
             */
            onInfoHtmlSet?: Function
            /**
             * 折线添加完成后的回调函数。 参数： routes: Array ，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            onPolylinesSet?: Function
        }

        /**
         * 此类表示路线导航的结果，没有构造函数，通过DrivingRoute.getResults()方法或DrivingRoute的onSearchComplete回调函数参数获得。
         */
        interface DrivingRouteResult {
            /**
             * 驾车导航策略
             */
            policy: DrivingPolicy
            /**
             * 返回起点
             */
            getStart(): LocalResultPoi
            /**
             * 返回终点
             */
            getEnd(): LocalResultPoi
            /**
             * 返回方案个数
             */
            getNumPlans(): Number
            /**
             * 返回索引指定的方案。索引0表示第一条方案
             * @param i
             */
            getPlan(i: Number): RoutePlan
        }

        /**
         * 此类表示一条驾车、步行或骑行出行方案。它没有构造函数，可通过DrivingRouteResult.getPlan()方法或WalkingRouteResult类的getPlan()方法获得。
         */
        interface RoutePlan {
            /**
             * 返回方案包含的线路的个数
             */
            getNumRoutes(): Number
            /**
             * 返回方案中索引指定的线路。索引0表示第一条线路
             * @param i
             */
            getRoute(i: Number): Route
            /**
             * 返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true
             * @param format
             */
            getDistance(format: Boolean): String | Number
            /**
             * 返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true
             * @param format
             */
            getDuration(format: Boolean): String | Number
        }

        /**
         * 此类表示一条驾车、步行或骑行路线。
         */
        interface Route {
            /**
             * 返回路线包含的关键点个数
             */
            getNumSteps(): Number
            /**
             * 返回索引指定的关键点，驾车和步行适用。索引0表示第一个关键点
             * @param i
             */
            getStep(i: Number): Step
            /**
             * 返回路线距离，当format为false时仅返回数值
             * @param format
             */
            getDistance(format: Boolean): String | Number
            /**
             * 返回本路线在方案中的索引位置
             */
            getIndex(): Number
            /**
             * 返回路线对应的覆盖物，仅当结果自动添加到地图上时有效
             */
            getPolyline(): Polyline
            /**
             * 返回路线的地理坐标点数组
             */
            getPath(): Array<Point>
            /**
             * 返回路线类型，可区分是驾车还是步行线路
             */
            getRouteType(): RouteType
        }

        /**
         * 此类表示驾车、步行或骑行路线中的一个关键点。它没有构造函数，通过Route.getStep()方法获得。
         */
        interface Step {
            /**
             * 返回关键点地理坐标
             */
            getPosition(): Point
            /**
             * 	返回本关键点在路线中的位置索引
             */
            getIndex(): Number
            /**
             * 返回关键点描述文本，默认包含HTML标签。当includeHtml为false时，描述文本不包含HTML标签。不支持驾车路线规划
             * @param includeHtml
             */
            getDescription(includeHtml: Boolean): String
            /**
             * 返回到下一个关键点的距离，当format为false时仅返回数值（单位为米）
             * @param format
             */
            getDistance(format: Boolean): String | Number
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
         * 此类用于获取驾车路线规划方案。
         */
        class DrivingRoute {
            /**
             * 创建一个驾车导航实例，其中location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由地图当前的中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            constructor(location: Map | Point | String, opts: DrivingRouteOptions)
            /**
             * 发起检索。 start: 起点，参数可以是坐标点和LocalSearchPoi实例。 end: 终点，参数可以是坐标点或LocalSearchPoi实例
             * @param start
             * @param end
             */
            search(start: Point | LocalResultPoi, end: Point | LocalResultPoi): void
            /**
             * 返回最近一次检索的结果
             */
            getResults(): DrivingRouteResult
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): void
            /**
             * 启用自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): void
            /**
             * 禁用自动调整地图层级
             */
            disableAutoViewport(): void
            /**
             * 设置路线规划策略，参数为策略常量
             * @param policy
             */
            setPolicy(policy: DrivingPolicy): void
            /**
             * 设置检索结束后的回调函数。 参数： results: DrivingRouteResult
             * @param callback
             */
            setSearchCompleteCallback(callback: Function): void
            /**
             * 设置添加标注后的回调函数。 参数： pois: Array，起点和目的地点数组，通过marker属性可得到其对应的标注
             * @param callback
             */
            setMarkersSetCallback(callback: Function): void
            /**
             * 设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过marker属性可得到当前的标注。html: HTMLElement，气泡内的DOM元素
             * @param callback
             */
            setInfoHtmlSetCallback(callback: Function): void
            /**
             * 设置添加路线后的回调函数。 参数： routes: Array ，驾车线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             * @param callback
             */
            setPolylinesSetCallback(callback: Function): void
            /**
             * 返回状态码
             */
            getStatus(): StatusCode
            /**
             * 返回类型说明
             */
            toString(): String
        }

        /**
         * 用于获取骑行路线规划方案。
         */
        class RidingRoute {
            /**
             * 创建一个骑行导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            constructor(location: Map | Point | String, opts: RidingRouteOptions)
            /**
             * 发起检索。 start: 起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。 end: 终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例
             * @param start
             * @param end
             */
            search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi): void
            /**
             * 返回最近一次检索的结果
             */
            getResults(): RidingRouteResult
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): void
            /**
             * 启用自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): void
            /**
             * 禁用自动调整地图层级
             */
            disableAutoViewport(): void
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             * @param location
             */
            setLocation(location: Map | Point | String): void
            /**
             * 设置检索结束后的回调函数。 参数： results: RidingRouteResult
             * @param callback
             */
            setSearchCompleteCallback(callback: Function): void
            /**
             * 设置添加标注后的回调函数。 参数： pois: Array ，起点和目的地点数组。通过marker属性可得到其对应的标注
             * @param callback
             */
            setMarkersSetCallback(callback: Function): void
            /**
             * 设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
             * @param callback
             */
            setInfoHtmlSetCallback(callback: Function): void
            /**
             * 设置添加路线后的回调函数。 参数： routes: Array ，骑行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             * @param callback
             */
            setPolylinesSetCallback(callback: Function): void
            /**
             * 设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素
             * @param callback
             */
            setResultsHtmlSetCallback(callback: Function): void
            /**
             * 返回状态码
             */
            getStatus(): StatusCode
            /**
             * 返回类型说明
             */
            toString(): String
        }

        /**
         * 此类表示RidingRoute构造函数的可选参数。
         */
        interface RidingRouteOptions {
            /**
             * 搜索结果呈现设置
             */
            renderOptions: RenderOptions
            /**
             * 检索完成后的回调函数。 参数： results: RidingRouteResult
             */
            onSearchComplete: Function
            /**
             * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，。通过marker属性可得到其对应的标注
             */
            onMarkersSet: Function
            /**
             * 折线添加完成后的回调函数。 参数： routes: Array ，骑行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            onPolylinesSet: Function
            /**
             * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
             */
            onInfoHtmlSet: Function
            /**
             * 结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素
             */
            onResultsHtmlSet: Function
        }

        /**
         * 此类表示骑行路线导航的结果，没有构造函数，通过访问RidingRoute.getResults()方法或RidingRoute的onSearchComplete回调函数参数获得。
         */
        interface RidingRouteResult {
            /**
             * 返回起点
             */
            getStart(): LocalResultPoi
            /**
             * 返回终点
             */
            getEnd(): LocalResultPoi
            /**
             * 返回方案个数
             */
            getNumPlans(): Number
            /**
             * 返回索引指定的方案。索引0表示第一条方案
             * @param i
             */
            getPlan(i: Number): RoutePlan
        }

        /**
         * 用于获取步行路线规划方案。
         */
        class WalkingRoute {
            /**
             * 创建一个步行导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            constructor(location: Map | Point | String, opts: WalkingRouteOptions)
            /**
             * 发起检索。 start: 起点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例。 end: 终点，参数可以是关键字、坐标点（自1.1版本支持）或者LocalSearchPoi实例
             * @param start
             * @param end
             */
            search(start: String | Point | LocalResultPoi, end: String | Point | LocalResultPoi): void
            /**
             * 返回最近一次检索的结果
             */
            getResults(): WalkingRouteResult
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): void
            /**
             * 启用自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): void
            /**
             * 禁用自动调整地图层级
             */
            disableAutoViewport(): void
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             * @param location
             */
            setLocation(location: Map | Point | String): void
            /**
             * 设置检索结束后的回调函数。 参数： results: WalkingRouteResult
             * @param callback
             */
            setSearchCompleteCallback(callback: Function): void
            /**
             * 设置添加标注后的回调函数。 参数： pois: Array ，起点和目的地点数组。通过marker属性可得到其对应的标注
             * @param callback
             */
            setMarkersSetCallback(callback: Function): void
            /**
             * 设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
             * @param callback
             */
            setInfoHtmlSetCallback(callback: Function): void
            /**
             * 设置添加路线后的回调函数。 参数： routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             * @param callback
             */
            setPolylinesSetCallback(callback: Function): void
            /**
             * 设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素
             * @param callback
             */
            setResultsHtmlSetCallback(callback: Function): void
            /**
             * 返回状态码
             */
            getStatus(): StatusCode
            /**
             * 返回类型说明
             */
            toString(): String
        }

        /**
         * 此类表示WalkingRoute构造函数的可选参数。
         */
        interface WalkingRouteOptions {
            /**
             * 搜索结果呈现设置
             */
            renderOptions: RenderOptions
            /**
             * 检索完成后的回调函数。 参数： results: WalkingRouteResult
             */
            onSearchComplete: Function
            /**
             * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，。通过marker属性可得到其对应的标注
             */
            onMarkersSet: Function
            /**
             * 折线添加完成后的回调函数。 参数： routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            onPolylinesSet: Function
            /**
             * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
             */
            onInfoHtmlSet: Function
            /**
             * 结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素
             */
            onResultsHtmlSet: Function
        }

        /**
         * 此类表示路线导航的结果，没有构造函数，通过访问WalkingRoute.getResults()方法或WalkingRoute的onSearchComplete回调函数参数获得。
         */
        interface WalkingRouteResult {
            /**
             * 返回起点
             */
            getStart(): LocalResultPoi
            /**
             * 返回终点
             */
            getEnd(): LocalResultPoi
            /**
             * 返回方案个数
             */
            getNumPlans(): Number
            /**
             * 返回索引指定的方案。索引0表示第一条方案
             * @param i
             */
            getPlan(i: Number): RoutePlan
        }

        /**
         * 用于获取公交线路规划方案。
         */
        class TransitRoute {
            /**
             * 创建一个公交导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会优先在该城市内进行
             * @param location
             * @param opts
             */
            constructor(location: Map | Point | String, opts: TransitRouteOptions)
            /**
             * 发起检索。 start: 起点，参数可以坐标点或者LocalSearchPoi实例。 end: 终点，参数可以是坐标点或者LocalSearchPoi实例，3.0版本暂不支持起终点参数为关键字，开发者可以先用检索接口确认关键字的坐标点
             * @param start
             * @param end
             */
            search(start: Point | LocalResultPoi, end: Point | LocalResultPoi): void
            /**
             * 返回最近一次检索的结果
             */
            getResults(): TransitRouteResult
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): void
            /**
             * 启用自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): void
            /**
             * 	禁用自动调整地图层级
             */
            disableAutoViewport(): void
            /**
             * 设置每页返回方案个数（1-5），默认为5
             * @param capacity
             */
            setPageCapacity(capacity: Number): void
            /**
             * 设置城市内换乘策略
             * @param policy
             */
            setPolicy(policy: TransitPolicy): void
            /**
             * 设置跨城换乘策略
             * @param intercityPolicy
             */
            setIntercityPolicy(intercityPolicy: IntercityPolicy): void
            /**
             * 设置跨城交通方式策略
             * @param transitTypePolicy
             */
            setTransitTypePolicy(transitTypePolicy: TransitTypePolicy): void
            /**
             * 设置检索结束后的回调函数。 参数： results: TransitRouteResult，公交导航结果
             * @param callback
             */
            setSearchCompleteCallback(callback: Function): void
            /**
             * 设置添加标注后的回调函数。 参数： pois: Array ，起点和目的地数组。 transfers: Array ，公交车站数组
             * @param callback
             */
            setMarkersSetCallback(callback: Function): void
            /**
             * 设置气泡打开后的回调函数。 参数： poi: LocalResultPoi，表示当前气泡对应的点（可以是起点、终点或换乘车站） html: HTMLElement，气泡内的DOM元素
             * @param callback
             */
            setInfoHtmlSetCallback(callback: Function): void
            /**
             * 设置添加路线后的回调函数。 参数： lines: Array ，公交线路数组。 routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             * @param callback
             */
            setPolylinesSetCallback(callback: Function): void
            /**
             * 设置结果列表创建后的回调函数。 参数： container: 结果列表所用的HTML元素
             * @param callback
             */
            setResultsHtmlSetCallback(callback: Function): void
            /**
             * 返回状态码
             */
            getStatus(): StatusCode
            /**
             * 返回线路规划对象类型
             */
            toString(): String
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
         * 此类表示路线导航的结果，没有构造函数，通过访问TransitRoute.getResults()方法或TransitRoute的onSearchComplete回调函数参数获得。
         */
        interface TransitRouteResult {
            /**
             * 公交导航策略
             */
            policy: TransitPolicy
            /**
             * 跨城策略（仅跨城时有）
             */
            intercityPolicy: IntercityPolicy
            /**
             * 跨城交通方式策略（仅跨城时有）
             */
            transitTypePolicy: TransitTypePolicy
            /**
             * 返回起点
             */
            getStart(): LocalResultPoi
            /**
             * 返回终点
             */
            getEnd(): LocalResultPoi
            /**
             * 返回方案个数
             */
            getNumPlans(): Number
            /**
             * 返回索引指定的方案。索引0表示第一条方案
             * @param i
             */
            getPlan(i: Number): TransitRoutePlan
            /**
             * 返回公交出行方案的类型
             */
            getTransitType(): TransitType
        }

        /**
         * 此类表示一条公交线路，如果是跨城检索，还有可能表示一条飞机、火车或大巴线路。没有构造函数，通过TransitRoutePlan.getLine()方法得到。
         */
        interface Line {
            /**
             * 线路全称
             */
            title: String
            /**
             * 线路类型
             */
            type: LineType
            /**
             * 	返回公交线路途径的车站个数，仅在公交和地铁类型有效
             */
            getNumViaStops(): Number
            /**
             * 返回上车站
             */
            getGetOnStop(): LocalResultPoi
            /**
             * 返回下车站
             */
            getGetOffStop(): LocalResultPoi
            /**
             * 返回线路对应的地理坐标点数组，在公交方案中，地理坐标只给出方案涉及的部分
             */
            getPath(): Array<Point>
            /**
             * 返回公交线路对应的折线覆盖物
             */
            getPolyline(): Polyline
            /**
             * 当format为true时，返回本段公交线路的距离字符串（包含单位），当format为false时仅返回数值（单位为米）。默认参数为true
             * @param format
             */
            getDistance(format: Boolean): String | Number
        }

        interface TransitPlanType { }

        /**
         * 此类表示一条公交出行方案。没有构造函数，通过TransitRouteResult.getPlan()方法获得。
         */
        interface TransitRoutePlan {
            /**
             * 返回方案包含的公交线路段数(如果是跨城检索，还包括飞机、火车、大巴线路)
             */
            getNumLines(): Number
            /**
             * 返回方案包含的某条公交线路(如果是跨城检索，还包括飞机、火车、大巴线路)
             * @param i
             */
            getLine(i: Number): Line
            /**
             * 返回方案包含的步行线路段数
             */
            getNumRoutes(): Number
            /**
             * 返回方案中索引指定的线路。索引0表示第一条线路
             * @param i
             */
            getRoute(i: Number): Route
            /**
             * 	返回方案总距离。当format参数为true时，返回方案距离字符串（包含单位），当format为false时，仅返回数值（单位为米）信息。默认参数为true
             */
            getDistance(format: Boolean): String | Number
            /**
             * 返回方案总时间。当format参数为true时，返回描述时间的字符串（包含单位），当format为false时，仅返回数值（单位为秒）信息。默认参数为true
             * @param format
             */
            getDuration(format: Boolean): String | Number
            /**
             * 返回方案描述文本，默认包含HTML标签。当includeHtml为false时，方案描述不包含HTML标签
             * @param includeHtml
             */
            getDescription(includeHtml: Boolean): String
            /**
             * 返回指定路段的交通方式类型，分别对应Line和Route
             * @param i
             */
            getTotalType(i: Number): TransitPlanType
            /**
             * 返回整个方案包含的某段线路，根据方案的数据情况，返回值可能是步行对象Route也有可能是线路对象Line
             * @param i
             */
            getTotal(i: Number): Route | Line
            /**
             * 总路段数量
             */
            getNumTotal(): Number
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
         * 此类表示TransitRoute构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface TransitRouteOptions {
            /**
             * 搜索结果的呈现设置
             */
            renderOptions: RenderOptions
            /**
             * 市内公交的策略参数
             */
            policy: TransitPolicy
            /**
             * 跨城公交的换乘策略参数
             */
            intercityPolicy: IntercityPolicy
            /**
             * 跨城公交的交通方式策略参数
             */
            transitTypePolicy: TransitTypePolicy
            /**
             * 返回方案的个数
             */
            pageCapacity: Number
            /**
             * 检索完成后的回调函数。参数：results: TransitRouteResult，公交导航结果
             */
            onSearchComplete: Function
            /**
             * 标注添加完成后的回调函数。参数：pois: Array ，起点和目的地数组。transfers: Array ，公交车站数组
             */
            onMarkersSet: Function
            /**
             * 气泡内容创建后的回调函数。参数：poi: LocalResultPoi，表示当前气泡对应的点（可以是起点、终点或换乘车站）html: HTMLElement，气泡内的DOM元素
             */
            onInfoHtmlSet: Function
            /**
             * 折线添加完成后的回调函数。参数：lines: Array ，公交线路数组。routes: Array ，步行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
             */
            onPolylinesSet: Function
            /**
             * 结果列表添加完成后的回调函数。参数：container: 结果列表所用的HTML元素
             */
            onResultsHtmlSet: Function
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
         * 此类表示地址解析结果的层次化地址信息，没有构造函数，通过对象字面量形式表示。
         */
        interface AddressComponent {
            /**
             * 门牌号码
             */
            streetNumber: string
            /**
             * 街道名称
             */
            street: string
            /**
             * 区县名称
             */
            district: string
            /**
             * 城市名称
             */
            city: string
            /**
             * 省份名称
             */
            province: string
        }

        /**
         * 此类作为Geolocation的getCurrentPosition方法的回调函数参数，不可实例化。
         */
        interface GeolocationResult {
            /**
             * 定位坐标点
             */
            point: Point
            /**
             * 定位精度，单位为米
             */
            accuracy: number
            /**
             * 根据定位坐标点解析出的地址信息，可能为空（3.0新增）
             */
            address: AddressComponent
        }

        /**
         * 返回用户当前的位置，会首先调用浏览器自带的定位接口，如果失败或不支持则调用高精IP定位（需要开通权限，否则调用普通定位）接口，如果用户拒绝授权定位，则无法返回任何定位结果。
         */
        class Geolocation {
            /**
             * 创建Geolocation对象实例
             */
            constructor()
            /**
             * 返回用户当前位置。定位完成时（包括成功、失败、超时等情况），回调参数为GeolocationResult对象，否则为null
             * @param callback
             * @param opts
             */
            getCurrentPosition(callback: Function, opts: PositionOptions): void
            /**
             * 定位完成后的状态码。分为BMAP_STATUS_SUCCESS，BMAP_STATUS_UNKNOWN_LOCATION，BMAP_STATUS_PERMISSION_DENIED，BMAP_STATUS_TIMEOUT
             */
            getStatus(): StatusCode
            /**
             * 开启SDK辅助定位，仅当使用环境为移动web混合开发，且开启了定位sdk辅助定位功能后生效
             */
            enableSDKLocation(): void
            /**
             * 关闭SDK辅助定位
             */
            disableSDKLocation(): void
        }

        /**
         * 此类表示搜索结果呈现的配置。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface RenderOptions {
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map: Map
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
             */
            panel: string | HTMLElement
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult: boolean
            /**
             * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport: boolean
        }

        /**
         * 此类表示LocalCity的可选参数。它没有构造函数，但可通过对象字面量表示。
         */
        interface LocalCityOptions {
            /**
             * 结果呈现设置，当给定map参数时，改地图将自动将视野定位到当前城市
             */
            renderOptions: RenderOptions
        }

        /**
         * 此类表示LocalCity的定位结果。
         */
        interface LocalCityResult {
            /**
             * 城市所在中心点
             */
            center: Point
            /**
             * 展示当前城市的最佳地图级别，如果您在使用此对象时提供了map实例，则地图级别将根据您提供的地图大小进行调整
             */
            level: number
            /**
             * 城市名称
             */
            name: string
        }

        /**
         * 此类用于获取用户所在的城市位置信息。(根据用户IP自动定位到城市)
         */
        class LocalCity {
            /**
             * 创建一个获取本地城市位置的实例
             * @param opts
             */
            constructor(opts: LocalCityOptions)
            /**
             * 当获取城市信息后，回调函数会被调用，其参数为类型为LocalCityResult对象
             */
            get(callback: Function): void
        }

        /**
         * 此类表示Geocoder的地址解析请求的可选参数。它不可实例化。
         */
        interface LocationOptions {
            /**
             * 附近POI所处于的最大半径，默认为100米
             */
            poiRadius: number
            /**
             * 返回的POI点个数，默认为10个。取值范围
             */
            numPois: number
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
         * 此类表示位置检索或路线规划的一个结果点，没有构造函数，可通过对象字面量形式表示。
         */
        interface LocalResultPoi {
            /**
             * 结果的名称标题
             */
            title: string
            /**
             * 该结果所在的地理位置
             */
            point: Point
            /**
             * 在百度地图中展示该结果点的详情信息链接
             */
            url: string
            /**
             * 地址（根据数据部分提供）。注：当结果点类型为公交站或地铁站时，地址信息为经过该站点的所有车次
             */
            address: string
            /**
             * 所在城市
             */
            city: string
            /**
             * 电话，根据数据部分提供
             */
            phoneNumber: string
            /**
             * 邮政编码，根据数据部分提供
             */
            postcode: string
            /**
             * 类型，根据数据部分提供
             */
            type: PoiType
            /**
             * 是否精确匹配。只适用LocalSearch的search方法检索的结果
             */
            isAccurate: boolean
            /**
             * 所在省份
             */
            province: string
            /**
             * POI的标签，如商务大厦、餐馆等。目前只有LocalSearch的回调函数onSearchComplete(result)中的result和Geocoder.getLocation的回调函数的参数GeocoderResult.surroundingPois涉及的LocalResultPoi有tags字段。其他API涉及的LocalResultPoi没有该字段
             */
            tags: Array<string>
            /**
             * 	在百度地图详情页面展示该结果点的链接。localsearch的结果中才有
             */
            detailUrl: string
        }

        /**
         * 此类表示Geocoder的地址解析结果。它在地址解析的回调函数的参数中返回，不可实例化。
         */
        interface GeocoderResult {
            /**
             * 坐标点
             */
            point: Point
            /**
             * 地址描述
             */
            address: string
            /**
             * 结构化的地址描述
             */
            addressComponents: AddressComponent
            /**
             * 附近的POI点
             */
            surroundingPois: Array<LocalResultPoi>
            /**
             * 商圈字段，代表此点所属的商圈
             */
            business: string
        }

        /**
         * 类用于获取用户的地址解析。
         */
        class Geocoder {
            /**
             * 创建一个地址解析器的实例
             */
            constructor()
            /**
             * 对指定的地址进行解析。如果地址定位成功，则以地址所在的坐标点Point为参数调用回调函数。否则，回调函数的参数为null。city为地址所在的城市名，例如“北京市”
             * @param address
             * @param callback
             * @param city
             */
            getPoint(address: String, callback: Function, city: String): void
            /**
             * 对指定的坐标点进行反地址解析。如果解析成功，则回调函数的参数为GeocoderResult对象，否则回调函数的参数为null
             * @param point
             * @param callback
             * @param options
             */
            getLocation(point: Point, callback: Function, options: LocationOptions): void
        }

        /**
         * 此类表示TileLayer构造函数的可选参数
         */
        interface TileLayerOptions {
            /**
             * 是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理
             */
            transparentPng: boolean
            /**
             * 指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法
             */
            tileUrlTemplate: string
            /**
             * 图层的zIndex
             */
            zIndex: number
        }

        /**
         * 此类表示一个地图图层，您可以向地图中添加自定义图层。
         */
        class TileLayer {
            /**
             * 创建一个地图图层实例
             * @param opts
             */
            constructor(opts: TileLayerOptions)
            /**
             * 抽象。向地图返回地图图块的网址，图块索引由tileCoord的x和y属性在指定的缩放级别zoom提供。如果您在TileLayerOptions中提供了tileUrlTemplate参数，则可不实现此接口
             * @param tileCoord
             * @param zoom
             */
            getTilesUrl(tileCoord: Pixel, zoom: Number): string
            /**
             * 如果图层所用的图片为PNG格式并且包含透明信息，则返回true
             */
            isTransparentPng(): number
        }

        type transformType = 'EPSG3857' | 'BD09MC'

        /**
         * XYZLayer的构造参数
         */
        interface XYZLayerOptions {
            /**
             * 坐标转换设置默认 {source："EPSG3857", target："BD09MC"}
             */
            transform: {
                source: transformType
                target: transformType
            }
            /**
             * 	图像数据请求地址。可通过{0,1,2}标记实现多请求地址的配置；可通过[z]，[x]，[y]，[b]引用默认的*Template。WMTS/TMS/自定义栅格图层服务默认使用[z]，[x]，[y]，瓦片大小为256*256。WMS服务默认使用[b]。
             */
            tileUrlTemplate: String
            /**
             * 通过输入的网格x、y、z参数计算[x]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
             */
            xTemplate: Function
            /**
             * 通过输入的网格x、y、z参数计算[y]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
             */
            yTemplate: Function
            /**
             * 通过输入的网格x、y、z参数计算[z]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
             */
            zTemplate: Function
            /**
             * 通过输入的网格x、y、z参数计算[b]具体返回值，返回值默认为四至坐标拼接成的字符串：’minX,minY,maxX,maxY’。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
             */
            bTemplate: Function
            /**
             * 设置图层显示的最小缩放等级。
             */
            minZoom: Number
            /**
             * 设置图层显示的最大缩放等级。
             */
            maxZoom: Number
            /**
             * 设置图层加载数据的四至范围，输入的范围数值默认为EPSG:3857坐标[minX,minY,maxX,maxY]。
             */
            extent: [number, number, number, number]
            /**
             * 标记参数extend数组数据是否为EPSG:4326坐标。默认false，如果设置为true，参数extent数值需要是EPSG:4326 坐标。
             */
            extentCRSIsWGS84: Boolean
            /**
             * 设置图层掩膜。可通过BMapGL.Boundary()获取行政区域的坐标数据。
             */
            boundary: any[]
            /**
             * 缩放图层时，是否使用跨图层的瓦片进行平滑切换。默认false。如果影响透明图层的展示效果，可以设置false；如果非透明图层，可以设置true。
             */
            useThumbData: Boolean
            /**
             * tileUrlTemplate中[y]是否为tms请求服务形式。默认false。如果是则设置为true。
             */
            tms: Boolean
        }

        /**
         * 此类用于添加第三方标准图层。
         */
        class XYZLayer {
            /**
             * XYZLayer实例化TileLayer，用于添加第三方标准图层，通过options设置图层瓦片请求地址、显示等级、显示范围等。
             * @param options
             */
            constructor(options: XYZLayerOptions)
            /**
             * 设置图层掩膜。boundaries可通过BMapGL.Boundary()获取行政区域的坐标数据。
             * @param boundaries
             */
            addBoundary(boundaries: any[]): void
            /**
             * 清空图层掩膜。
             */
            clearBoundary(): void
            /**
             *
             * @param index 设置图层显示层级，数字越大，显示越靠上。
             */
            setZIndex(index: Number): void
            /**
             * 设置图层显示等级为最上层。
             */
            setZIndexTop(): void
        }

        /**
         * 此类表示检索lbs云服务的数据。它没有构造函数，但可通过对象字面量形式表示。 要检索lbs云服务的数据，需要在引用api的时候在参数后加上lbs云平台的key。
         */
        interface CustomData {
            /**
             * lbs云v2接口，可在lbs云平台上查看自己的geotableId
             */
            geotableId: Number
            /**
             * 空格分隔的多字符串
             */
            tags: String
            /**
             * 	过滤条件，参考：lbsyun.baidu.com/index.php?title=lbscloud/api/geosearch
             */
            filter: String
        }

        /**
         * 此类表示搜索结果呈现的配置。它没有构造函数，但可通过对象字面量形式表示。
         */
        interface LocalRenderOptions {
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map: Map
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
             */
            panel: String | HTMLElement
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult: Boolean
            /**
             * 	检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport: Boolean
        }

        /**
         * 此类表示LocalSearch构造函数的可选参数。
         */
        interface LocalSearchOptions {
            /**
             * 结果呈现设置
             */
            renderOptions: LocalRenderOptions
            /**
             * 标注添加完成后的回调函数。 参数： pois: Array ，通过marker属性可得到其对应的标注
             */
            onMarkersSet: Function
            /**
             * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素
             */
            onInfoHtmlSet: Function
            /**
             * 结果列表添加完成后的回调函数。 参数： container: HTMLElement，结果列表所用的HTML元素 */
            onResultsHtmlSet: Function
            /**
             * 设置每页容量，取值范围：1 - 100，对于多关键字检索，容量表示每个关键字的数量，如果有2个关键字，则实际检索结果数量范围为：2 - 200
             */
            pageCapacity: Number
            /**
             * 检索完成后的回调函数。 参数：results: LocalResult或Array 如果是多关键字检索，回调函数参数返回一个LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致
             */
            onSearchComplete: Function
        }

        /**
         * 类表示LocalSearch的检索结果，没有构造函数，通过LocalSearch.getResults()方法或LocalSearch的onSearchComplete回调函数的参数得到。
         */
        interface LocalResult {
            /**
             * 本次检索的关键词
             */
            keyword: String
            /**
             * 周边检索的中心点（仅当周边检索时提供）
             */
            center: LocalResultPoi
            /**
             * 周边检索的半径（仅当周边检索时提供）
             */
            radius: Number
            /**
             * 范围检索的地理区域（仅当范围检索时提供）
             */
            bounds: Bounds
            /**
             * 本次检索所在的城市
             */
            city: String
            /**
             * 更多结果的链接，到百度地图进行搜索
             */
            moreResultsUrl: String
            /**
             * 本次检索所在的省份
             */
            province: String
            /**
             * 搜索建议列表。（当关键词是拼音或拼写错误时给出的搜索建议）
             */
            suggestions: Array<String>
            /**
             *
             * @param i 返回索引指定的结果。索引0表示第1条结果
             */
            getPoi(i: Number): LocalResultPoi
            /**
             * 返回当前页的结果数
             */
            getCurrentNumPois(): Number
            /**
             * 返回总结果数
             */
            getNumPois(): Number
            /**
             * 返回总页数
             */
            getNumPages(): Number
            /**
             * 返回页数序号
             */
            getPageIndex(): Number
            /**
             * 返回城市列表。数组元素对象包含如下属性： city: String，城市名 numResults: Number，结果数
             */
            getCityList(): Array<Object>
        }

        /**
         * 用于位置检索、周边检索和范围检索。
         */
        class LocalSearch {
            /**
             * 创建一个搜索类实例，其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            constructor(location: Map | Point | String, opts: LocalSearchOptions)
            /**
             * 根据检索词发起检索。当keyword为数组时将同时执行多关键字的查询，最多支持10个关键字，多关键字自 1.2 版本支持。option:{forceLocal:Boolean, customData:CustomData} forceLocal表示是否将搜索范围约束在当前城市，customData表示检索lbs云服务的数据
             * @param keyword
             * @param option
             */
            search(keyword: String | Array<String>, option: Object): void
            /**
             * 根据范围和检索词发起范围检索。当keyword为数组时将同时执行多关键字检索，最多支持10个关键字，多关键字自 1.2 版本支持。option:{customData:CustomData} customData表示检索lbs云服务的数据
             * @param keyword
             * @param bounds
             * @param option
             */
            searchInBounds(keyword: String | Array<String>, bounds: Bounds, option: Object): void
            /**
             * 根据中心点、半径与检索词发起周边检索。当keyword为数组时将同时执行多关键字的检索，最多支持10个关键字，多关键字自 1.2 版本支持。当center为字符串时，半径参数将忽略。注意：Point类型的中心点自 1.1 版本支持。option: { customData: CustomData } customData表示检索lbs云服务的数据
             * @param keyword
             * @param center
             * @param radius
             * @param option
             */
            searchNearby(
                keyword: String | Array<String>,
                center: LocalResultPoi | String | Point,
                radius: Number,
                option: Object
            ): void
            /**
             * 返回最近一次检索的结果。如果是多关键字范围检索，则返回一个LocalResult的数组，数组中的结果顺序和范围检索中多关键字数组中顺序一致
             */
            getResults(): LocalResult | Array<LocalResult>
            /**
             * 清除最近一次检索的结果
             */
            clearResults(): void
            /**
             * 检索特定页面的结果
             */
            gotoPage(page: Number): void
            /**
             * 启用根据结果自动调整地图层级，当指定了搜索结果所展现的地图时有效
             */
            enableAutoViewport(): void
            /**
             * 禁用根据结果自动调整地图层级
             */
            disableAutoViewport(): void
            /**
             * 启用自动选择第一个检索结果
             */
            enableFirstResultSelection(): void
            /**
             * 禁用自动选择第一个检索结果
             */
            disableFirstResultSelection(): void
            /**
             *  设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             */
            setLocation(location: Map | Point | String): void
            /**
             * 设置每页容量，取值范围：1 - 100，对于多关键字检索，每页容量表示每个关键字返回结果的数量（例如当用2个关键字检索时，实际结果数量范围为：2 - 200）。此值只对下一次检索有效
             */
            setPageCapacity(): void
            /**
             * 返回每页容量，对于多关键字检索，返回每个关键字对应的页面容量
             */
            getPageCapacity(): Number
            /**
             *  设置检索结束后的回调函数。参数：results: LocalResult 或 Array 如果是多关键字检索，回调函数参数为LocalResult的数组，数组中的结果顺序和检索中多关键字数组中顺序一致
             */
            setSearchCompleteCallback(): void
            /**
             * 设置添加标注后的回调函数。参数： pois: Array ，通过marker属性可得到其对应的标注
             */
            setMarkersSetCallback(callback: Function): void
            /**
             *  设置标注气泡创建时的回调函数。参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的Dom元素
             */
            setInfoHtmlSetCallback(callback: Function): void
            /**
             * 设置结果列表创建后的回调函数。参数： container: HTMLElement，结果列表所用的HTML元素
             */
            setResultsHtmlSetCallback(callback: Function): void
            /**
             * 返回状态码
             */
            getStatus(): StatusCode
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
         * 其他坐标转百度坐标
         */
        class Convertor {
            /**
             * 其他坐标转百度坐标
             * @param points 其他坐标
             * @param from_type 要转换的坐标类型
             * @param to_type 要得到的坐标类型
             * @param translateCallback 接收转换结果的回调函数
             */
            constructor(
                points: Array<Point>,
                from_type: CoordPointType,
                to_type: CoordPointType,
                translateCallback: Function
            )
        }

        /**
         * 公交路线搜索类。
         */
        class BusLineSearch {
            /**
             * 创建公交线搜索类。其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param options
             */
            constructor(location: Map | Point | String, options: BusLineSearchOptions)
            /**
             * 在用户配置的回调函数中返回公交列表结果，其类型为BusListResult
             * @param keyword
             */
            getBusList(keyword: String): void
            /**
             * 在用户配置的回调函数中返回该条线路的公交信息，其类型为BusLine类型
             * @param busLstItem
             */
            getBusLine(busLstItem: BusListItem): void
            /**
             * 清除本次公交线检索结果
             */
            clearResults(): void
            /**
             * 启用自动调整地图视野功能
             */
            enableAutoViewport(): void
            /**
             * 禁用自动调整地图视野功能
             */
            disableAutoViewport(): void
            /**
             * 设置检索范围，参数类型可以为地图实例、坐标点或字符串。例：setLocation("北京市")
             * @param location
             */
            setLocation(location: Map | Point | String): void
            /**
             * 返回状态码
             */
            getStatus(): StatusCode
            /**
             * 返回类型说明
             */
            toString(): String
            /**
             * 设置公交列表查询后的回调函数。参数：rs: BusListResult类型
             * @param callback
             */
            setGetBusListCompleteCallback(callback: Function): void
            /**
             * 设置公交线路查询后的回调函数。参数：rs: BusLine类型
             * @param callback
             */
            setGetBusLineCompleteCallback(callback: Function): void
            /**
             * 公交列表结果页渲染后回调函数。参数：container: HTMLElement，结果列表所用的HTML元素
             * @param callback
             */
            setBusListHtmlSetCallback(callback: Function): void
            /**
             * 公交线路结果页渲染后回调函数。参数：container: HTMLElement，结果列表所用的HTML元素
             * @param callback
             * @returns
             */
            setBusLineHtmlSetCallback(callback: Function): void
            /**
             * 添加公交线时候回调函数。参数：ply:Polyline 公交线路几何对象
             */
            setPolylinesSetCallback(callback: Function): void
            /**
             * 添加公交站点时候回调函数。参数：sts:Array 公交站坐标组成的Marker对象数组
             */
            setMarkersSetCallback(callback: Function): void
        }

        /**
         * 此类表示BusLineSearch类的可选参数，没有构造参数，可以通过对象字面量表示
         */
        interface BusLineSearchOptions {
            /**
             * RenderOptions结果呈现设置
             */
            renderOptions: RenderOptions
            /**
             * 设置公交列表查询后的回调函数.参数：rs: BusListResult类型
             */
            onGetBusListComplete: Function
            /**
             * 设置公交线路查询后的回调函数.参数：rs: BusLine类型
             */
            onGetBusLineComplete: Function
            /**
             * 公交列表结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素
             */
            onBusListHtmlSet: Function
            /**
             * 公交线路结果页渲染后回调函数.参数：container: HTMLElement，结果列表所用的HTML元素
             */
            onBusLineHtmlSet: Function
            /**
             * 添加公交线时候回调函数.参数：ply:Polyline 公交线路几何对象
             */
            onPolylinesSet: Function
            /**
             * 添加公交站点时候回调函数.参数：sts:Array 公交站坐标组成的Marker对象数组
             */
            onMarkersSet: Function
        }

        /**
         * 公交列表查询成功回调函数的参数对象
         */
        interface BusListResult {
            /**
             * 本次检索关键字
             */
            keyword: String
            /**
             * 本次检索所在城市
             */
            city: String
            /**
             * 到百度地图查看url
             */
            moreResultsUrl: String
            /**
             * 公交列表个数
             */
            getNumBusList(): Number
            /**
             * @param i 获取某一个具体的公交列表中的对象。0表示上行，1表示下行
             */
            getBusListItem(i: Number): BusListItem
        }

        /**
         * 表示公交线路结果的公交线，没有构造函数，通过检索回调函数获得。
         */
        interface BusLine {
            /**
             * 线路名称
             */
            name: String
            /**
             * 首班车时间
             */
            startTime: String
            /**
             * 末班时间
             */
            endTime: String
            /**
             * 公交线路所属公司
             */
            company: String
            /**
             * 获取公交站点个数
             */
            getNumBusStations(): Number
            /**
             * 获取某一个具体的公交站对象
             * @param i
             */
            getBusStation(i: Number): BusStation
            /**
             * 返回公交线地理坐标点数组
             */
            getPath(): Array<Point>
            /**
             * 获取公交线几何对象, 仅当结果自动添加到地图上时有效
             */
            getPolyline(): Polyline
        }

        /**
         * 一个具体公交对象
         */
        interface BusListItem {
            /**
             * 公交线名称
             */
            name: String
        }
        /**
         * 公交站点对象
         */
        interface BusStation {
            /**
             * 站点名称
             */
            name: String
            /**
             * 站点坐标
             */
            position: Point
        }

        /**
         * Autocomplete是结果提示、自动完成类。
         */
        class Autocomplete {
            /**
             * 	创建自动完成的实例
             * @param options
             */
            constructor(options: AutocompleteOptions)
            /**
             * 显示提示列表
             */
            show(): void
            /**
             * 隐藏提示列表
             */
            hide(): void
            /**
             * 修改请求数据类型。types定义方法详见AutocompleteOptions
             * @param types
             */
            setTypes(types: Array<string>): void
            /**
             * 设置检索区域
             * @param location
             */
            setLocation(location: String | Map | Point): void
            /**
             * 发起某个关键字的提示请求，会引起onSearchComplete的回调
             * @param keywords
             */
            search(keywords: string): void
            /**
             * 获取结果列表
             */
            getResults(): AutocompleteResult
            /**
             * 	设置绑定的input控件的值，且不会出现下拉列表
             * @param keyword
             */
            setInputValue(keyword: string): void
            /**
             * 销毁自动完成对象
             */
            dispose(): void
            /**
             * 事件处理函数
             * @param event
             * @param listener
             */
            on<T extends 'confirm' | 'highlight'>(
                event: T,
                listener: (type: any, target: any, fromitem: any, toitem: any) => void
            ): this
        }

        /**
         * 本类是Autocomplete类的可选参数对象
         */
        interface AutocompleteOptions {
            /**
             * 返回数据类型。两种设置方式，第一种为默认值（即设置值为空），将返回所有数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现包含“小”关键字的多种类型（如餐饮、地名等）的提示词条。第二种设置值为"city"，将返回省市区县乡镇街道地址类型数据。如地图初始化为北京，在输入框中输入“小”，输入框下会出现“小金县”的地点名称类的提示词条
             */
            types: Array<String>
            /**
             * 在input框中输入字符后，发起列表检索，完成后的回调函数。 参数：AutocompleteResult
             */
            onSearchComplete: Function
            /**
             * 文本输入框元素或其id
             */
            input: String | HTMLElement
        }

        /**
         * 自动完成检索完成回调函数的参数对象
         */
        interface AutocompleteResult {
            /**
             * 检索关键字
             */
            keyword: String
            /**
             * 结果数组
             * @param i
             */
            getPoi(i: Number): AutocompleteResultPoi
            /**
             * 结果总数
             */
            getNumPois(): Number
        }

        /**
         * 自动完成类获取的单个POI点的信息
         */
        interface AutocompleteResultPoi {
            /**
             * 省名
             */
            province: String
            /**
             * 城市名
             */
            City: String
            /**
             * 区县名称
             */
            district: String
            /**
             * 街道名称
             */
            street: String
            /**
             * 门牌号码
             */
            streetNumber: String
            /**
             * 商户名
             */
            business: String
        }

        interface BMapGL {
            /**
             * 在指定的容器内创建地图实例，之后需要调用Map.centerAndZoom()方法对地图进行初始化。未进行初始化的地图将不能进行任何操作
             * @param container String | HTMLElement
             * @param opts MapOptions
             */
            Map: { new(container: string | HTMLElement, opts: MapOptions): Map }
            /**
             * 创建一个信息窗实例，其中content支持HTML内容。
             * @param content String | HTMLElement
             * @param opts InfoWindowOptions
             */
            InfoWindow: { new(content: string | HTMLElement, opts: InfoWindowOptions): InfoWindow }
            /**
             * 以指定的经度和纬度创建一个地理点坐标
             * @param lng Number
             * @param lat Number
             */
            Point: { new(lng: number, lat: number): Point }
            /**
             * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
             * @param x
             * @param y
             */
            Pixel: { new(x: number, y: number): Pixel }
            /**
             * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
             * @param point Point
             * @param opts MarkerOptions
             */
            Marker: { new(point: Point, opts?: MarkerOptions): Marker }
            /**
             * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
             * @param point Point
             * @param opts Marker3DOptions
             */
            Marker3D: { new(point: Point, height: number, opts?: Marker3DOptions): Marker3D }
            /**
             * 创建一个文本标注实例。point参数指定了文本标注所在的地理位置
             * @param content String
             * @param opts LabelOptions
             */
            Label: { new(content: string, opts?: LabelOptions): Label }
            /**
             * 创建折线覆盖物对象
             * @param points Array<Point>
             * @param opts PolylineOptions
             */
            Polyline: { new(points: Array<Point>, opts?: PolylineOptions): Polyline }
            /**
             * 创建线上的符号类。symbol为符号样式;offset为符号相对于线起点的位置，取值可以是百分比也可以是像素位置，默认为"100%";repeat为符号在线上重复显示的距离，可以是百分比也可以是距离值，同时设置repeat与offset时，以repeat为准;fixedRotation设置图标的旋转角度是否与线走向一致，默认为true
             */
            IconSequence: { new(symbol: Symbol, offset: string, repeat: string, fixedRotation: boolean): IconSequence }
            /**
             * 创建一个矢量图标实例。path为svg中的path字符串或者已定义的符号常量,opts为矢量图标的样式
             * @param path
             * @param opts
             */
            Symbol: { new(path: string | SymbolShapeType, opts: SymbolOptions): Symbol }
            /**
             * 创建多边形覆盖物
             * @param points Array<Point>
             * @param opts PolygonOptions
             */
            Polygon: { new(points: Array<Point>, opts?: PolygonOptions): Polygon }
            /**
             * 创建圆覆盖物
             * @param center Point
             * @param radius Number
             * @param opts CircleOptions
             */
            Circle: { new(center: Point, radius: number, opts: CircleOptions): Circle }
            /**
             * 创建地面叠加层
             * @param bounds Bounds
             * @param opts GroundOverlayOptions
             */
            GroundOverlay: { new(bounds: Bounds, opts: GroundOverlayOptions): GroundOverlay }
            /**
             * 以指定的宽度和高度创建一个矩形区域大小对象
             * @param width
             * @param height
             */
            Size: { new(width: number, height: number): Size }
            /**
             * 以给定的图像地址和大小创建图标对象实例
             * @param url String
             * @param size Size
             * @param opts IconOptions
             */
            Icon: { new(url: string, size: Size, opts: IconOptions): Icon }
            /**
             * 创建一个比例尺控件
             * 默认位于地图左下方，显示地图的比例关系
             * @param opts ScaleControlOptions
             */
            ScaleControl: { new(opts?: ScaleControlOptions): ScaleControl }
            /**
             * 创建一个缩放控件
             * @param opts ZoomControlOptions
             */
            ZoomControl: { new(opts?: ZoomControlOptions): ZoomControl }
            /**
             * 创建一个版权控件
             * @param opts CopyrightControlOptions
             */
            CopyrightControl: { new(opts?: CopyrightControlOptions): CopyrightControl }
            /**
             * 创建一个缩放平移控件
             * PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方
             * @param opts NavigationControlOptions
             */
            NavigationControl: { new(opts?: NavigationControlOptions): NavigationControl }
            /**
             * 创建一个特定样式的地图平移缩放控件
             * @param opts NavigationControl3DOptions
             */
            NavigationControl3D: { new(opts?: NavigationControl3DOptions): NavigationControl3D }
            /**
             * 创建一个定位控件
             * @param opts LocationControlOptions
             */
            LocationControl: { new(opts?: LocationControlOptions): LocationControl }
            /**
             * 创建一个地图类型控件
             * @param opts MapTypeControlOptions
             */
            MapTypeControl: { new(opts?: MapTypeControlOptions): MapTypeControl }
            /**
             * 创建一个城市选择控件
             * @param opts CityListControlOptions
             */
            CityListControl: { new(opts?: CityListControlOptions): CityListControl }
            /**
             * 创建一个自定义控件
             * @param opts CustomControlOptions
             */
            Control: { new(opts: CustomControlOptions): Control }
            /**
             * 创建一个分界范围区域
             */
            Boundary: { new(): Boundary }
            /**
             * 创建棱柱覆盖物，构造函数中需要定义底面和高度
             * @param points
             * @param altitude
             * @param opts PrismOptions
             */
            Prism: { new(points: Array<Point>, altitude: number, opts: PrismOptions): Prism }
            /**
             * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角
             * @param sw
             * @param ne
             */
            Bounds: { new(sw: Point, ne: Point): Bounds }
            /**
             * 创建一个右键菜单实例
             */
            ContextMenu: { new(): ContextMenu }
            /**
             * 创建一个右键菜单项实例
             * @param text string
             * @param callback Function
             * @param opts MenuItemOptions
             */
            MenuItem: { new(text: string, callback: Function, opts: MenuItemOptions): MenuItem }
            /**
             * 创建Geolocation对象实例
             */
            Geolocation: { new(): Geolocation }
            /**
             * 创建一个获取本地城市位置的实例
             * @param opts LocalCityOptions
             */
            LocalCity: { new(opts: LocalCityOptions): LocalCity }
            /**
             * 创建一个地址解析器的实例
             */
            Geocoder: { new(): Geocoder }
            /**
             * 创建一个地图图层实例
             * @param opts TileLayerOptions
             */
            TileLayer: { new(opts: TileLayerOptions): TileLayer }
            /**
             * 创建一个搜索类实例，其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定，且搜索结果的标注将自动加载到地图上，并支持调整地图视野层级；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            LocalSearch: { new(location: Map | Point | String, opts: LocalSearchOptions): LocalSearch }
            /**
             * 创建地图视角动画对象，通过关键帧的形式对动画进行定义
             * @param keyFrames Array<ViewAnimationKeyFrames>
             * @param opts ViewAnimationOptions
             */
            ViewAnimation: { new(keyFrames: Array<ViewAnimationKeyFrames>, opts: ViewAnimationOptions): ViewAnimation }
            /**
             * 创建一个贝塞尔曲线对象
             * @param points
             * @param controlPoints
             */
            BezierCurve: { new(points: Array<Point>, controlPoints: any[]): BezierCurve }
            /**
             * 创建一个驾车导航实例，其中location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由地图当前的中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            DrivingRoute: { new(location: Map | Point | String, opts: DrivingRouteOptions): DrivingRoute }
            /**
             * 创建一个公交导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会优先在该城市内进行
             * @param location
             * @param opts
             */
            TransitRoute: { new(location: Map | Point | String, opts: TransitRouteOptions): TransitRoute }
            /**
             * 创建一个步行导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            WalkingRoute: { new(location: Map | Point | String, opts: WalkingRouteOptions): WalkingRoute }
            /**
             * 创建一个骑行导航实例。location表示检索区域，类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param opts
             */
            RidingRoute: { new(location: Map | Point | String, opts: RidingRouteOptions): RidingRoute }
            /**
             * 坐标转换
             * @param points 其他坐标
             * @param from_type 要转换的坐标类型
             * @param to_type 要得到的坐标类型
             * @param translateCallback 接收转换结果的回调函数
             */
            Convertor: {
                new(
                    points: Array<Point>,
                    from_type: CoordPointType,
                    to_type: CoordPointType,
                    translateCallback: Function
                ): Convertor
            }
            /**
             * 创建自动完成的实例
             * @param options
             */
            Autocomplete: { new(options: AutocompleteOptions): Autocomplete }
            /**
             * 创建公交线搜索类。其中location表示检索区域，其类型可为地图实例、坐标点或城市名称的字符串。当参数为地图实例时，检索位置由当前地图中心点确定；当参数为坐标时，检索位置由该点所在位置确定；当参数为城市名称时，检索会在该城市内进行
             * @param location
             * @param options
             */
            BusLineSearch: { new(location: Map | Point | String, options: BusLineSearchOptions): BusLineSearch }
        }

        interface BMapGLLib {
            /**
             * 创建地图轨迹动画对象，通过折线轨迹形式对动画进行定义
             * @param bmap
             * @param pl
             * @param opts TrackAnimationOptions
             */
            TrackAnimation: { new(bmap: Map, pl: Polyline, opts: TrackAnimationOptions): TrackAnimation }
            /**
             * 创建一个地图路书动画对象
             * @param bmap
             * @param points
             * @param opts LushuAnimationOptions
             */
            LuShu: { new(bmap: Map, points: Array<Point>, opts: LushuAnimationOptions): LushuAnimation }
            /**
             * 创建一个测距工具对象
             * @param bmap
             */
            DistanceTool: { new(bmap: Map): DistanceTool }
            /**
             * 创建一个地图绘制工具对象
             * @param bmap
             */
            DrawingManager: { new(bmap: Map): DrawingManager }
            /**
             * 创建一个富文本标注对象
             * @param bmap
             */
            RichMarker: { new(html: string, point: Point, opts?: RichMarkerOptions): RichMarker }
        }

        type AllBMapGLType = keyof BMapGL.BMapGL
    }
}

export = BaiduMapVue3
