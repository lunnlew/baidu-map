declare namespace BaiduMapVue3 {
    interface BmGroundOverlayProps {
        /**
         * 矩形对角左上坐标
         */
        startPoint: {
            lng: number
            lat: number
        }
        /**
         * 矩形对角右下坐标
         */
        endPoint: {
            lng: number
            lat: number
        }
        /**
         * 'image' | 'video' | 'canvas'，默认为image
         */
        type?: string
        /**
         * 图层透明度
         */
        opacity?: number
        /**
         * 图层地址
         */
        url?: string
        /**
         * 是否显示
         */
        show?: boolean
    }
}