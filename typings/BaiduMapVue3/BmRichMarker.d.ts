declare namespace BaiduMapVue3 {
    interface BmRichMarkerProps {
        /**
         * 标记的坐标
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 图标定位锚点
         */
        anchor?: [number, number]
        /**
         * 是否允许拖动
         */
        enableDragging?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
}