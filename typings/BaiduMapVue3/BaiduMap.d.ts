declare namespace BaiduMapVue3 {
    interface BaiduMapProps {
        /**
         * 地图中心点坐标
         */
        center: {
            lng: number
            lat: number
        }
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
}