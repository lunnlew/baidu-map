declare namespace BMapGL {
    type ViewAnimationEvent = 'animationstart' | 'animationiterations' | 'animationend' | 'animationcancel'
    interface TrackAnimationOptions {
        /**
         *  动画完成后自动调整视野到总览
         */
        overallView: boolean
        /**
         * 轨迹播放的角度，默认为55
         */
        tilt: number
        /**
         * 动画持续时长，默认为10000，单位ms
         */
        duration: number
        /**
         * 动画开始的延迟，默认0，单位ms
         */
        delay: number
    }

    /**
     * 地图轨迹动画类。
     */
    class TrackAnimation {
        /**
         * 创建一个地图轨迹动画对象
         * @param bmap
         * @param pl
         * @param opts
         */
        constructor(bmap: Map, pl: Polyline, opts: TrackAnimationOptions)
        /**
         * 启动动画
         */
        start(): void
        /**
         * 强制停止动画
         */
        cancel(): void
        /**
         * 暂时停止动画
         */
        pause(): void
        /**
         * 恢复动画
         */
        continue(): void
    }
}