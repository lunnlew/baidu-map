declare namespace BMapGL {
    /**
     * 此类表示Polyline构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface PolylineOptions {
        /**
         * 指定路径两端的形状
         */
        strokeLineCap: 'butt' | 'round' | 'square' | 'inherit'
        /**
         * 指定路径转角处使用的形状
         */
        strokeLineJoin: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'
        /**
         * 显示大地线
         */
        geodesic: boolean

        clip: boolean
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
         * 折线末端的样式，支持以下样式：
         */
        lineCap: 'butt' | 'round' | 'square' | 'inherit'
        /**
         * 折线的连接的样式，支持以下样式：
         */
        lineJoin: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round'
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear: boolean
        /**
         * 是否启用线编辑，默认为false
         */
        enableEditing: boolean
        /**
         * 是否响应点击事件，默认为true
         */
        enableClicking: boolean
        /**
         * 配置贴合折线的图标
         */
        icons: Array<IconSequence>
    }
    /**
     * 使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层。
     */
    class Polyline extends Overlay {
        /**
         * 创建折线覆盖物对象
         * @param points
         * @param opts
         */
        constructor(points: Array<Point>, opts: PolylineOptions)
        /**
         * 设置折线的点数组
         * @param path
         */
        setPath(path: Array<Point>): void
        /**
         * 返回折线的点数组
         */
        getPath(): Array<Point>
        /**
         * 设置折线的颜色
         * @param color
         */
        setStrokeColor(color: string): void
        /**
         * 返回折线的颜色
         */
        getStrokeColor(): string
        /**
         * 设置透明度，取值范围0 - 1
         * @param opacity
         */
        setStrokeOpacity(opacity: number): void
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
        setStrokeStyle(style: string): void
        /**
         * 返回当前线样式状态，实线或者虚线
         */
        getStrokeStyle(): string
        /**
         * 返回覆盖物的地理区域范围
         */
        getBounds(): Bounds
        /**
         * 开启编辑功能
         */
        enableEditing(): void
        /**
         * 关闭编辑功能
         */
        disableEditing(): void
        /**
         * 允许覆盖物在map.clearOverlays方法中被清除
         */
        enableMassClear(): void
        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除
         */
        disableMassClear(): void
        /**
         * 修改指定位置的坐标。索引index从0开始计数。例如setPointAt(2, point)代表将折线的第3个点的坐标设为point
         * @param index
         * @param point
         */
        setPositionAt(index: number, point: Point): void
        /**
         * 返回覆盖物所在的map对象
         */
        getMap(): Map
        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         */
        addEventListener<T extends OverlayEvent>(event: T, handler: (data: OnOverlayEventPayload<T>) => void): void
        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         */
        removeEventListener<T extends OverlayEvent>(
            event: T,
            handler: (data: OnOverlayEventPayload<T>) => void
        ): void
        /**
         * 事件处理函数
         * @param event
         * @param listener
         */
        on<T extends OverlayEvent>(event: T, listener: (data: OnOverlayEventPayload<T>) => void): this
    }
}