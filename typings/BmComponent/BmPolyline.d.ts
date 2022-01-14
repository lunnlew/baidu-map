declare namespace BmComponent {
    /**
     * 折线参数
     */
    interface BmPolylineProps {
        /**
         * 折线点集
         */
        points: {
            lng: number
            lat: number
        }[]
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
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用线编辑，默认为false
         */
        enableEditing?: boolean
        /**
         * 是否响应点击事件，默认为true
         */
        enableClicking?: boolean

        clip?: boolean
        /**
         * 大地线模式
         */
        geodesic?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
}