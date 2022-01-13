declare namespace BmComponent {

    interface BmLushuAnimationProps {
        /**
         * 信息窗口文案
         */
        defaultContent: string
        /**
         * 是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
         */
        autoView: boolean
        /**
         * 速度
         */
        speed: number
        /**
         * 图标
         */
        icon: string
        /**
         * 是否设置marker随着道路的走向进行旋转
         */
        enableRotation: boolean
        /**
         * 是否大地线
         */
        geodesic: boolean
        /**
         * 是否自动地图中心
         */
        autoCenter: boolean
    }
}