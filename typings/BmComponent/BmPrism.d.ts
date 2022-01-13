declare namespace BmComponent {
    interface BmPrismProps {
        /**
         * 点集
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 高度
         */
        altitude: number
        /**
         * 顶面填充颜色
         */
        topFillColor?: string
        /**
         * 顶面填充颜色透明度，取值范围0 - 1
         */
        topFillOpacity?: number
        /**
         * 侧面填充颜色
         */
        sideFillColor?: string
        /**
         * 侧面填充颜色透明度，取值范围0 - 1
         */
        sideFillOpacity?: number
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
}