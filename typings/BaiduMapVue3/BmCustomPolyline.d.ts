declare namespace BaiduMapVue3 {

    /**
     * 折线参数
     */
    interface BmCustomPolylineProps {
        /**
         * 折线点集
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 箭头线长度
         */
        arrowLength?: number
        /**
         * 箭头斜线夹角
         */
        arrowAngle?: number
        /**
         * 箭头线宽度
         */
        arrowWidth?: number
        /**
         * 箭头间的间隔长度
         */
        arrowPadding?: number
        /**
         * 箭头斜线长度
         */
        arrowHeadlen?: number
        /**
         * 箭头颜色
         */
        arrowColor?: string
        /**
         * 折线颜色
         */
        strokeColor?: string
        /**
         * 折线的宽度，以像素为单位
         */
        strokeWeight?: number
        /**
         * 折线的透明度，取值范围0 - 1
         */
        strokeOpacity?: number
        /**
         * 折线的样式，solid或dashed
         */
        strokeStyle?: string
        /**
         * 折线尾部样式，默认为butt
         */
        strokeLineCap?: string
        /**
         * 折线连接样式，默认为round
         */
        strokeLineJoin?: string
        overallView?: boolean
        show?: boolean
    }
}