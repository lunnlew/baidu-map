declare interface BMapGLLib {
    /**
    * 创建地图轨迹动画对象，通过折线轨迹形式对动画进行定义
    * @param bmap
    * @param pl
    * @param opts TrackAnimationOptions
    */
    TrackAnimation: { new(bmap: BMapGL.Map, pl: BMapGL.Polyline, opts: BMapGL.TrackAnimationOptions): BMapGL.TrackAnimation }
    /**
     * 创建一个地图路书动画对象
     * @param bmap
     * @param points
     * @param opts LushuAnimationOptions
     */
    LuShu: { new(bmap: BMapGL.Map, points: Array<BMapGL.Point>, opts: BMapGL.LushuAnimationOptions): BMapGL.LushuAnimation }
    /**
     * 创建一个测距工具对象
     * @param bmap
     */
    DistanceTool: { new(bmap: BMapGL.Map): BMapGL.DistanceTool }
    /**
     * 创建一个地图绘制工具对象
     * @param bmap
     */
    DrawingManager: { new(bmap: BMapGL.Map): BMapGL.DrawingManager }
    /**
     * 创建一个富文本标注对象
     * @param bmap
     */
    RichMarker: { new(html: string, point: BMapGL.Point, opts?: BMapGL.RichMarkerOptions): BMapGL.RichMarker }
    /**
     * 地理工具类
     */
    GeoUtils: BMapGL.GeoUtils
}

declare namespace BMapGLLib {
    interface DrawingLabelOptions { }

    interface DrawingStyleOptions {
        /**
         * 边线颜色
         */
        strokeColor?: string,
        /**
         * 填充颜色。当参数为空时，圆形没有填充颜色
         */
        fillColor?: string,
        /**
         * 边线宽度，以像素为单位
         */
        strokeWeight?: number,
        /**
         * 边线透明度，取值范围0-1
         */
        strokeOpacity?: number,
        /**
         * 填充透明度，取值范围0-1
         */
        fillOpacity?: number
    }
}