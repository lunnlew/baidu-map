declare namespace BMapGL {
    /**
     * 地图贝塞尔曲线类。
     */
    class BezierCurve extends Overlay {
        /**
         * 创建一个贝塞尔曲线
         * @param points
         * @param controlPoints
         */
        constructor(points: Array<Point>, controlPoints: any[])
    }
}