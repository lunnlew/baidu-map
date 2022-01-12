declare namespace BMapGL {
    type DistanceToolEvent = 'drawend' | 'addpoint' | 'removepolyline'
    /**
     * 地图测距工具类。
     */
    class DistanceTool {
        /**
         * 创建一个地图测距工具对象
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
    }
}