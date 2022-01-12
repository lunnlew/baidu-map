declare namespace BMapGL {
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
        mapType?: MapTypeId
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
    interface DisplayOptions {
        /**
         * 是否显示覆盖物
         */
        overlay?: boolean
        /**
         * 是否显示叠加图层，地球模式暂不支持
         */
        layer?: boolean
        /**
         * 是否显示3D建筑物（仅支持WebGL方式渲染的地图）
         */
        building?: boolean
        /**
         * 是否显示路网（只对卫星图和地球模式有效）
         */
        street?: boolean
        /**
         * 是否显示POI信息 
         */
        poi?: boolean
        /**
         * 天空颜色
         */
        skyColors?: string[]
    }
    /**
     * 此类是地图API的核心类，用来实例化一个地图。请注意WebGL版本的地图API的命名空间是BMapGL1。
     * 示例：const map = new Map('container');
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
         * 设置元素隐藏及可见
         * @param options 
         */
        setDisplayOptions(options: DisplayOptions): void
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
}