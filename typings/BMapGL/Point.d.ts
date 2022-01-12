declare namespace BMapGL {
    /**
     * 此类表示一个地理坐标点。
     */
    class Point {
        /**
         * 地理经度
         */
        lng: number
        /**
         * 	地理纬度
         */
        lat: number
        /**
         * 以指定的经度和纬度创建一个地理点坐标
         * @param lng
         * @param lat
         */
        constructor(lng: number, lat: number)
        /**
         * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
         * @param other Point
         */
        equals(other: Point): boolean
    }
}