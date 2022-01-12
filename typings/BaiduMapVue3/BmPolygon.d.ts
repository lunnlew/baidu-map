declare namespace BaiduMapVue3 {
    /**
     * 多边形参数
     */
    interface BmPolygonProps {
        /**
         * 多边形点集
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 边线颜色
         */
        strokeColor?: string
        /**
         * 填充颜色。当参数为空时，折线覆盖物将没有填充效果
         */
        fillColor?: string
        /**
         * 边线的宽度，以像素为单位
         */
        strokeWeight?: number
        /**
         * 边线透明度，取值范围0 - 1
         */
        strokeOpacity?: number
        /**
         * 填充的透明度，取值范围0 - 1
         */
        fillOpacity?: number
        /**
         * 边线的样式，solid或dashed
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
        /**
         * 是否显示
         */
        show?: boolean
    }
}