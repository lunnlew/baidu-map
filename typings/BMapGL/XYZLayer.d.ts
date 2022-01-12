declare namespace BMapGL {
    type transformType = 'EPSG3857' | 'BD09MC'
    /**
     * XYZLayer的构造参数
     */
    interface XYZLayerOptions {
        /**
         * 坐标转换设置默认 {source："EPSG3857", target："BD09MC"}
         */
        transform: {
            source: transformType
            target: transformType
        }
        /**
         * 	图像数据请求地址。可通过{0,1,2}标记实现多请求地址的配置；可通过[z]，[x]，[y]，[b]引用默认的*Template。WMTS/TMS/自定义栅格图层服务默认使用[z]，[x]，[y]，瓦片大小为256*256。WMS服务默认使用[b]。
         */
        tileUrlTemplate: String
        /**
         * 通过输入的网格x、y、z参数计算[x]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
         */
        xTemplate: Function
        /**
         * 通过输入的网格x、y、z参数计算[y]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
         */
        yTemplate: Function
        /**
         * 通过输入的网格x、y、z参数计算[z]具体返回值。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
         */
        zTemplate: Function
        /**
         * 通过输入的网格x、y、z参数计算[b]具体返回值，返回值默认为四至坐标拼接成的字符串：’minX,minY,maxX,maxY’。x、y、z参数对应是Google web墨卡托网格的列号、行号、缩放等级。
         */
        bTemplate: Function
        /**
         * 设置图层显示的最小缩放等级。
         */
        minZoom: Number
        /**
         * 设置图层显示的最大缩放等级。
         */
        maxZoom: Number
        /**
         * 设置图层加载数据的四至范围，输入的范围数值默认为EPSG:3857坐标[minX,minY,maxX,maxY]。
         */
        extent: [number, number, number, number]
        /**
         * 标记参数extend数组数据是否为EPSG:4326坐标。默认false，如果设置为true，参数extent数值需要是EPSG:4326 坐标。
         */
        extentCRSIsWGS84: Boolean
        /**
         * 设置图层掩膜。可通过BMapGL1.Boundary()获取行政区域的坐标数据。
         */
        boundary: any[]
        /**
         * 缩放图层时，是否使用跨图层的瓦片进行平滑切换。默认false。如果影响透明图层的展示效果，可以设置false；如果非透明图层，可以设置true。
         */
        useThumbData: Boolean
        /**
         * tileUrlTemplate中[y]是否为tms请求服务形式。默认false。如果是则设置为true。
         */
        tms: Boolean
    }

    /**
     * 此类用于添加第三方标准图层。
     */
    class XYZLayer {
        /**
         * XYZLayer实例化TileLayer，用于添加第三方标准图层，通过options设置图层瓦片请求地址、显示等级、显示范围等。
         * @param options
         */
        constructor(options: XYZLayerOptions)
        /**
         * 设置图层掩膜。boundaries可通过BMapGL1.Boundary()获取行政区域的坐标数据。
         * @param boundaries
         */
        addBoundary(boundaries: any[]): void
        /**
         * 清空图层掩膜。
         */
        clearBoundary(): void
        /**
         *
         * @param index 设置图层显示层级，数字越大，显示越靠上。
         */
        setZIndex(index: Number): void
        /**
         * 设置图层显示等级为最上层。
         */
        setZIndexTop(): void
    }
}