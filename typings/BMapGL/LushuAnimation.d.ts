declare namespace BMapGL {
    interface LushuAnimationOptions {
        /**
         * 信息窗口文案
         */
        defaultContent?: string
        /**
         * 是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
         */
        autoView?: boolean
        /**
         * 速度
         */
        speed?: number
        /**
         * 图标
         */
        icon?: Icon
        /**
         * 是否设置marker随着道路的走向进行旋转
         */
        enableRotation?: boolean
        /**
         * 是否大地线
         */
        geodesic?: boolean
        /**
         * 是否自动地图中心
         */
        autoCenter?: boolean
    }

    /**
     * 地图路书动画类。
     */
    class LushuAnimation {
        /**
         * 创建一个地图路书动画对象
         * @param bmap
         * @param pl
         * @param opts
         */
        constructor(bmap: Map, pl: Polyline, opts: LushuAnimationOptions)
        /**
         * 启动动画
         */
        start(): void
        /**
         * 暂停动画
         */
        pause(): void
        /**
         * 停止动画
         */
        stop(): void
        /**
         * 设置属性
         */
        _setOptions(opt?: LushuAnimationOptions): void
    }
}