declare namespace BMapGL {
    /**
     * 点的形状
     */
    enum Marker3DShapeType {
        /**
         * 圆形
         */
        BMAP_SHAPE_CIRCLE = 1,
        /**
         * 正方形
         */
        BMAP_SHAPE_RECT = 2,
    }

    /**
     * 此类表示Marker3D构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
     */
    interface Marker3DOptions {
        /**
         * 点的大小，默认为50
         */
        size?: number
        /**
         * 点的形状，1 为圆形，2 为正方形，默认为 1。也可以使用对应的常量 BMAP_SHAPE_CIRCLE 和 BMAP_SHAPE_RECT
         */
        shape?: Marker3DShapeType
        /**
         * 点的颜色，格式为 '#xxxxxx'，比如'#f00'
         */
        fillColor?: string
        /**
         * 点的透明度，范围0-1，默认0.8
         */
        fillOpacity?: number
        /**
         * 点的纹理贴图，格式为通过Icon创建的Icon对象
         */
        icon?: Icon
    }

    /**
     * 此类表示地图上的带高度的点覆盖物绘制。
     */
    class Marker3D extends Overlay {
        /**
         * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
         * @param point
         * @param height
         * @param opts
         */
        constructor(point: Point, height: number, opts: Marker3DOptions)
        /**
         * 设置标注的地理坐标
         * @param position
         */
        setPosition(position: Point): void
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