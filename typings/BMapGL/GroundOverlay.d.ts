declare namespace BMapGL {
    /**
     * GroundOverlay类构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface GroundOverlayOptions {
        /**
         * 'image' | 'video' | 'canvas'，默认为image
         */
        type?: string
        /**
         * 图层透明度
         */
        opacity?: number
        /**
         * 图层地址
         */
        url?: string
        /**
         * 图层显示的最小级别
         */
        displayOnMinLevel?: number
        /**
         * 图层显示的最大级别
         */
        displayOnMaxLevel?: number
    }

    /**
     * 此类表示地图上的地面叠加层。
     */
    class GroundOverlay extends Overlay {
        /**
         * 创建地面叠加层
         * @param bounds
         * @param opts
         */
        constructor(bounds: Bounds, opts: GroundOverlayOptions)
        /**
         * 设置图层显示的矩形区域
         * @param bounds
         */
        setBounds(bounds: Bounds): void
        /**
         * 返回图层显示的矩形区域
         */
        getBounds(): Bounds
        /**
         * 设置图层的透明度
         * @param opcity
         */
        setOpacity(opcity: number): void
        /**
         * 返回图层的透明度
         */
        getOpacity(): number
        /**
         * 返回图层地址
         * @param url
         */
        setImageURL(url: string): void
        /**
         * 返回图层地址
         */
        getImageURL(): string
        /**
         * 设置图层显示的最小级别
         * @param level
         */
        setDisplayOnMinLevel(level: number): void
        /**
         * 返回图层显示的最小级别
         */
        getDisplayOnMinLevel(): number
        /**
         * 设置图层显示的最大级别
         * @param level
         */
        setDispalyOnMaxLevel(level: number): void
        /**
         * 返回图层显示的最大级别
         */
        getDispalyOnMaxLevel(): number
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