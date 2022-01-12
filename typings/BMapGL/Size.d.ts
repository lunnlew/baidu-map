declare namespace BMapGL {
    /**
     * 此类以像素表示一个矩形区域的大小。
     */
    class Size {
        /**
         * 宽度/水平方向的数值
         */
        width: number
        /**
         * 高度/竖直方向的数值
         */
        height: number
        /**
         * 以指定的宽度和高度创建一个矩形区域大小对象
         * @param width
         * @param height
         */
        constructor(width: number, height: number)
        /**
         * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
         * @param other Size
         */
        equals(other: Size): boolean
    }
}