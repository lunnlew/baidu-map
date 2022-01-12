declare namespace BMapGL {
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
}