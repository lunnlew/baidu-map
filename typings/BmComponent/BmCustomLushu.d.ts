declare namespace BmComponent {
    interface BmCustomLushuProps {
        map?: BMapGL.Map | null
        /**
         * 折线点集
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 移动速度，单位：米/秒
         */
        speed?: number
        /**
         * 时间片段，单位：毫秒
         */
        time?: number
        /**
         * 是否显示
         */
        show?: boolean
    }
}