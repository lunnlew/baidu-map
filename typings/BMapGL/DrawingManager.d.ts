declare namespace BMapGL {
    /**
     * DrawingManager 绘制类型
     */
    enum DrawingType {
        BMAP_DRAWING_MARKER = "marker",
        BMAP_DRAWING_POLYLINE = "polyline",
        BMAP_DRAWING_RECTANGLE = "rectangle",
        BMAP_DRAWING_POLYGON = "polygon",
        BMAP_DRAWING_CIRCLE = "circle"
    }
    /**
     * 地图绘制工具类。
     */
    class DrawingManager {
        /**
         * 创建一个地图绘制工具对象
         * @param bmap
         */
        constructor(bmap: Map)
        /**
         * 启动
         */
        open(): void
        /**
         * 关闭
         */
        close(): void
        /**
         * 设置绘制模式
         * @param mode
         */
        setDrawingMode(mode: string): void
        /**
         * 获取绘制模式
         */
        getDrawingMode(): string
        /**
         * 是否开启
         */
        _isOpen: boolean
    }

    type DrawingManagerEvent = 'overlaycomplete'
}