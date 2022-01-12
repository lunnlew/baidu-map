declare namespace BMapGL {
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
}