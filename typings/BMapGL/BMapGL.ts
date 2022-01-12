declare namespace BMapGL {
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
         * 创建一个覆盖物
         */
        Overlay: { new(): Overlay }
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
}