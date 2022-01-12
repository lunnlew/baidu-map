declare namespace BMapGL {
    class Bounds {
        /**
         * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角
         * @param sw
         * @param ne
         */
        constructor(sw: Point, ne: Point)
        /**
         * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
         * @param other Bounds
         */
        equals(other: Bounds): boolean
        /**
         * 如果点的地理坐标位于此矩形内，则返回true
         * @param point
         */
        containsPoint(point: Point): boolean
        /**
         * 传入的矩形区域完全包含于此矩形区域中，则返回true
         * @param bounds Bounds
         */
        containsBounds(bounds: Bounds): boolean
        /**
         * 计算与另一矩形的交集区域
         * @param other Bounds
         */
        intersects(other: Bounds): Bounds
        /**
         * 放大此矩形，使其包含给定的点
         * @param point
         */
        extend(point: Point): void
        /**
         * 返回矩形的中心点
         */
        getCenter(): Point
        /**
         * 如果矩形为空，则返回true
         */
        isEmpty(): boolean
        /**
         * 返回矩形区域的西南角
         */
        getSouthWest(): Point
        /**
         * 返回矩形区域的东北角
         */
        getNorthEast(): Point
        /**
         * 返回矩形区域的跨度
         */
        toSpan(): Point
    }
}