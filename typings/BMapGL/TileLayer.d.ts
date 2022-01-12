declare namespace BMapGL {
    /**
    * 此类表示TileLayer构造函数的可选参数
    */
    interface TileLayerOptions {
        /**
         * 是否使用了带有透明信息的PNG。由于IE6不支持PNG透明，因此需要特殊处理
         */
        transparentPng: boolean
        /**
         * 指定图块网址模板，该模板可以针对每个图块请求而展开，以根据现有的图块坐标系引用唯一的图块。模板的格式应该为：http://yourhost/tile?x={X}&y={Y}&z={Z}.png 其中X和Y分别指纬度和经度图块坐标，Z指缩放级别，比如： http://yourhost/tile?x=3&y=27&z=5.png 如果您没有提供图块网址模板，您需要实现TileLayer.getTileUrl()抽象方法
         */
        tileUrlTemplate: string
        /**
         * 图层的zIndex
         */
        zIndex: number
    }

    /**
     * 此类表示一个地图图层，您可以向地图中添加自定义图层。
     */
    class TileLayer {
        /**
         * 创建一个地图图层实例
         * @param opts
         */
        constructor(opts: TileLayerOptions)
        /**
         * 抽象。向地图返回地图图块的网址，图块索引由tileCoord的x和y属性在指定的缩放级别zoom提供。如果您在TileLayerOptions中提供了tileUrlTemplate参数，则可不实现此接口
         * @param tileCoord
         * @param zoom
         */
        getTilesUrl(tileCoord: Pixel, zoom: Number): string
        /**
         * 如果图层所用的图片为PNG格式并且包含透明信息，则返回true
         */
        isTransparentPng(): number
    }
}