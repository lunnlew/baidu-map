declare namespace BMapGL {
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
}