declare namespace BmComponent {
    /**
         * 地图覆盖物
         */
    interface BmMarker3DProps {
        /**
         * 标注位置
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 点的高度
         */
        height?: number
        /**
         * 点的大小，默认为50
         */
        size?: number
        /**
         * 点的形状，1 为圆形，2 为正方形，默认为 1。也可以使用对应的常量 BMAP_SHAPE_CIRCLE 和 BMAP_SHAPE_RECT
         */
        shape?: number
        /**
         * 点的颜色，格式为 '#xxxxxx'，比如'#f00'
         */
        fillColor?: string
        /**
         * 点的透明度，范围0-1，默认0.8
         */
        fillOpacity?: number
        /**
         * 是否显示
         */
        show?: boolean
    }
}