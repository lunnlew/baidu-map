declare namespace BMapGL {
    /**
     * 此类表示BezierCurve构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface BezierCurveOptions {
        /**
         * 折线颜色
         */
        strokeColor: string
        /**
         * 折线的宽度，以像素为单位
         */
        strokeWeight: number
        /**
         * 折线的透明度，取值范围0 - 1
         */
        strokeOpacity: number
        /**
         * 折线的样式，solid或dashed
         */
        strokeStyle: string
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear: boolean
    }
    /**
     * 地图贝塞尔曲线类。
     */
    class BezierCurve extends Overlay {
        /**
         * 创建一个贝塞尔曲线
         * @param points
         * @param controlPoints
         */
        constructor(points: Array<Point>, controlPoints: Array<Point>, opts: BezierCurveOptions)
        /**
         * 设置曲线的路径点
         * @param path 
         */
        setPath(path: Array<Point>): void
        /**
         * 返回曲线的路径点
         */
        getPath(): Array<Point>
        /**
         * 设置曲线的控制点，每两个路径点之间可以有1或2个控制点，比如路径点有三个点，那个控制点的格式可以是：[[cp1, cp2], [cp3]]，其中cp1和cp2为路经点1到2的控制点，cp3为路径点2到3的控制点
         * @param path 
         */
        setControlPoints(path: Point[][]): void
        /**
         * 返回曲线的控制点
         */
        getControlPoints(): Array<Point>
        /**
         * 设置曲线的颜色
         * @param color 
         */
        setStrokeColor(color: String): void
        /**
         * 返回曲线的颜色
         */
        getStrokeColor(): string
        /**
         * 设置透明度，取值范围0 - 1
         * @param opacity 
         */
        setStrokeOpacity(opacity: Number): void
        /**
         * 返回透明度
         */
        getStrokeOpacity(): number
        /**
         * 设置线的宽度，范围为大于等于1的整数
         * @param weight 
         */
        setStrokeWeight(weight: number): void
        /**
         * 返回线的宽度
         */
        getStrokeWeight(): number
        /**
         * 设置是为实线或虚线，solid或dashed
         * @param style 
         */
        setStrokeStyle(style: String): void
        /**
         * 返回当前线样式状态，实线或者虚线
         */
        getStrokeStyle(): string
        /**
         * 返回覆盖物的地理区域范围
         */
        getBounds(): Bounds
        /**
         * 允许覆盖物在map.clearOverlays方法中被清除
         */
        enableMassClear(): void
        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除
         */
        disableMassClear(): void
        /**
         * 返回覆盖物所在的map对象
         */
        getMap(): Map
        /**
         * 添加事件监听函数
         * @param event 
         * @param handler 
         */
        addEventListener(event: String, handler: Function): void
        /**
         * 移除事件监听函数
         * @param event 
         * @param handler 
         */
        removeEventListener(event: String, handler: Function): void
    }
}