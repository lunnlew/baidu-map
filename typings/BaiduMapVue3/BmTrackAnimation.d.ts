declare namespace BaiduMapVue3 {
    interface BmTrackAnimationProps {
        /**
         * 轨迹点
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         *  动画完成后自动调整视野到总览
         */
        overallView?: boolean
        /**
         * 轨迹播放的角度，默认为55
         */
        tilt?: number
        /**
         * 动画持续时长，默认为10000，单位ms
         */
        duration?: number
        /**
         * 动画开始的延迟，默认0，单位ms
         */
        delay?: number
        /**
         * 是否显示
         */
        show?: boolean
    }
}