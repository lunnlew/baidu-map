declare namespace BMapGL {
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
}