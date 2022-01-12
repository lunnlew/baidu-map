declare namespace BMapGL {
    /**
    * 此类表示地图上的一点，单位为像素。
    */
    class Pixel {
        /**
         * x坐标
         */
        x: number
        /**
         * y坐标
         */
        y: number
        /**
         * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
         * @param x
         * @param y
         */
        constructor(x: number, y: number)
        /**
         * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
         * @param other Pixel
         */
        equals(other: Pixel): boolean
    }
}