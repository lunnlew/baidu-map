
declare namespace BmComponent {

    export interface BmViewAnimationProps {
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
        /**
         * 是否显示
         */
        show?: boolean
    }

    export interface BmViewAnimationKeyFramesProps {
        /**
         * 定义关键帧帧地图中心点
         */
        center: {
            lng: number
            lat: number
        }
        /**
         *  定义关键帧地图等级
         */
        zoom: number
        /**
         * 定义关键帧地图倾斜角度
         */
        tilt: number
        /**
         * 定义关键帧地图旋转方向
         */
        heading: number
        /**
         * 定义关键帧处于动画过程的百分比，取值范围0~1
         */
        percentage: number
    }

}