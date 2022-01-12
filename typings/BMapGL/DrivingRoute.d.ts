declare namespace BMapGL {
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
}