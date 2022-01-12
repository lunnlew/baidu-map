declare namespace BMapGL {
    /**
     * 此类表示Polygon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface PolygonOptions {
        /**
         * 边线颜色
         */
        strokeColor?: string
        /**
         * 填充颜色。当参数为空时，折线覆盖物将没有填充效果
         */
        fillColor?: string
        /**
         * 边线的宽度，以像素为单位
         */
        strokeWeight?: number
        /**
         * 边线透明度，取值范围0 - 1
         */
        strokeOpacity?: number
        /**
         * 填充的透明度，取值范围0 - 1
         */
        fillOpacity?: number
        /**
         * 边线的样式，solid或dashed
         */
        strokeStyle?: string
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用线编辑，默认为false
         */
        enableEditing?: boolean
        /**
         * 是否响应点击事件，默认为true
         */
        enableClicking?: boolean
    }

    /**
     * 此类表示一个多边形覆盖物。
     */
    class Polygon extends Overlay {
        /**
         * 创建多边形覆盖物
         * @param points Array<Point>
         * @param opts PolygonOptions
         */
        constructor(points: Array<Point>, opts: PolygonOptions)
        /**
         *
         * @param path 设置多边型的点数组
         */
        setPath(path: Array<Point>): void
        /**
         * 返回多边型的点数组
         */
        getPath(): Array<Point>
        /**
         *
         * @param color 设置多边型的边线颜色，参数为合法的CSS颜色值
         */
        setStrokeColor(color: string): void
        /**
         * 返回多边型的边线颜色
         */
        getStrokeColor(): string
        /**
         * 设置多边形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，折线覆盖物将没有填充效果
         * @param color
         */
        setFillColor(color: string): void
        /**
         * 返回多边形的填充颜色
         */
        getFillColor(): string
        /**
         * 设置多边形的边线透明度，取值范围0 - 1
         * @param opacity
         */
        setStrokeOpacity(opacity: number): void
        /**
         * 返回多边形的边线透明度
         */
        getStrokeOpacity(): number
        /**
         *  设置多边形的填充透明度，取值范围0 - 1
         * @param opacity
         */
        setFillOpacity(opacity: number): void
        /**
         * 返回多边形的填充透明度
         */
        getFillOpacity(): number
        /**
         * 设置多边形边线的宽度，取值为大于等于1的整数
         * @param weight
         */
        setStrokeWeight(weight: number): void
        /**
         * 返回多边形边线的宽度
         */
        getStrokeWeight(): number
        /**
         * 设置多边形边线样式为实线或虚线，取值solid或dashed
         * @param style
         */
        setStrokeStyle(style: string): void
        /**
         * 返回多边形边线样式
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
         * 修改指定位置的坐标。索引index从0开始计数。例如setPositionAt(2, point)代表将折线的第3个点的坐标设为point
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