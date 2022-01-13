declare namespace BmComponent {
    interface CustomLushuOptions {
        /**
         * 历史轨迹点集
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
    }

    class CustomLushu extends BMapGL.Overlay {
        /**
         * 增加新的路径点
         * @param points 
         */
        addPoints(points: BMapGL.Point[]): void
    }
}