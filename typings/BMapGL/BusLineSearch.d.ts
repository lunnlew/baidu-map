declare namespace BMapGL {
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
}