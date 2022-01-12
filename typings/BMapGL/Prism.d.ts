declare namespace BMapGL {
    /**
     * 此类表示PrismOptions构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface PrismOptions {
        /**
         * 顶面填充颜色
         */
        topFillColor: string
        /**
         * 顶面填充颜色透明度，取值范围0 - 1
         */
        topFillOpacity: number
        /**
         * 侧面填充颜色
         */
        sideFillColor: string
        /**
         * 侧面填充颜色透明度，取值范围0 - 1
         */
        sideFillOpacity: number
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear: boolean
    }
    /**
     * 此类表示一个棱柱覆盖物
     */
    class Prism extends Overlay {
        /**
         * 创建棱柱覆盖物，构造函数中需要定义底面和高度
         * @param points
         * @param altitude
         * @param opts
         */
        constructor(points: Array<Point>, altitude: number, opts: PrismOptions)
        /**
         * 设置底面多边形的点数组
         * @param path
         */
        setPath(path: Array<Point>): void
        /**
         * 返回底面多边形的点数组
         */
        getPath(): Array<Point>
        /**
         * 设置棱柱的高，单位：米
         * @param altitude
         */
        setAltitude(altitude: number): void
        /**
         * 返回棱柱的高，单位：米
         */
        getAltitude(): number
        /**
         * 设置棱柱顶面的填充颜色
         * @param color
         */
        setTopFillColor(color: string): void
        /**
         * 返回棱柱顶面的填充颜色
         */
        getTopFillColor(): string
        /**
         * 设置棱柱顶面透明度，取值范围0 - 1
         * @param opacity
         */
        setTopFillOpacity(opacity: number): void
        /**
         * 返回棱柱顶面透明度
         */
        getTopFillOpacity(): number
        /**
         * 设置棱柱侧面的填充颜色
         * @param color
         */
        setSideFillColor(color: string): void
        /**
         * 返回棱柱侧面的填充颜色
         */
        getSideFillColor(): string
        /**
         * 设置棱柱侧面透明度，取值范围0 - 1
         * @param opacity
         */
        setSideFillOpacity(opacity: number): void
        /**
         * 返回棱柱侧面透明度
         */
        getSideFillOpacity(): number
        /**
         * 允许覆盖物在map.clearOverlays方法中被清除
         */
        enableMassClear(): void
        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除
         */
        disableMassClear(): void
        /**
         * 返回覆盖物所在的map对象
         */
        getMap(): Map
        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         */
        addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         */
        removeEventListener<T extends OverlayEvent>(
            event: T,
            handler: (data: OnOverlayEventPayload<T>) => void
        ): void
        /**
         * 事件处理函数
         * @param event
         * @param listener
         */
        on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
    }
}