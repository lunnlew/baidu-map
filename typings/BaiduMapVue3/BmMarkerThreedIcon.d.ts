declare namespace BaiduMapVue3 {
    /**
         * 地图覆盖物图标
         */
    interface BmMarkerThreedIconProps {
        /**
         * 图标地址
         */
        src: string
        /**
         * 图标大小
         */
        size?: [number, number]
        /**
         * 图标定位锚点
         */
        anchor?: [number, number]
        /**
         * 图标可视区偏移
         */
        imageOffset?: [number, number]
    }
}