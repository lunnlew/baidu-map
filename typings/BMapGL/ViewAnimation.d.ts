declare namespace BMapGL {
    /**
     * 此类表示地图视角动画的关键帧，通过定义关键帧，API会补全关键帧之间过渡的动画过程
     */
    interface ViewAnimationKeyFrames {
        /**
         * 地图中心点，默认值为地图当前状态中心点
         */
        center: Point
        /**
         * 地图缩放级别，默认值为地图当前状态缩放级别
         */
        zoom: number
        /**
         * 地图倾斜角度，默认值为地图当前状态倾斜角度
         */
        tilt: number
        /**
         * 地图旋转角度，默认值为地图当前旋转角度
         */
        heading: number
        /**
         * 	表示当前关键帧处于动画过程的百分比，取值范围0~1
         */
        percentage: number
    }

    /**
     * 此类表示地图视角动画的配置
     */
    interface ViewAnimationOptions {
        /**
         * 动画开始延迟时间，单位ms，默认0
         */
        delay: number
        /**
         * 	动画持续时间，单位ms，默认1000
         */
        duration: number
        /**
         * 循环次数，参数类型为数字时循环固定次数，参数为'INFINITE'无限循环，默认为1
         */
        interation: number | string
    }
    /**
     * 地图视角动画类。
     */
    class ViewAnimation {
        /**
         * 创建地图视角动画对象，通过关键帧的形式对动画进行定义
         * @param keyFrames
         * @param opts
         */
        constructor(keyFrames: Array<ViewAnimationKeyFrames>, opts: ViewAnimationOptions)
    }
}