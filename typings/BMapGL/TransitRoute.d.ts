declare namespace BMapGL {
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
}