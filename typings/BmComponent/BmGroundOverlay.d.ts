declare namespace BmComponent {
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
         * 矩形对角坐标
         */
        bounds?: [
            {
                lng: number
                lat: number
            },
            {
                lng: number
                lat: number
            }
        ]
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
        /**
         * 设置图层显示的最小级别
         */
        displayOnMinLevel?: number
        /**
         * 设置图层显示的最大级别
         */
        dispalyOnMaxLevel?: number
    }
}