declare namespace BMapGL {
    /**
     * Circle类构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface CircleOptions {
        /**
         * 圆形边线颜色
         */
        strokeColor: string
        /**
         * 圆形填充颜色。当参数为空时，圆形将没有填充效果
         */
        fillColor: string
        /**
         * 圆形边线的宽度，以像素为单位
         */
        strokeWeight: number
        /**
         * 圆形边线透明度，取值范围0 - 1
         */
        strokeOpacity: number
        /**
         * 圆形填充的透明度，取值范围0 - 1
         */
        fillOpacity: number
        /**
         * 圆形边线的样式，solid或dashed
         */
        strokeStyle: string
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
    }

    /**
     * 此类表示地图上的圆覆盖物。
     */
    class Circle extends Overlay {
        /**
         * 创建圆覆盖物
         * @param center Point
         * @param radius Number
         * @param opts CircleOptions
         */
        constructor(center: Point, radius: number, opts: CircleOptions)
        /**
         * 设置圆形的中心点坐标
         * @param center
         */
        setCenter(center: Point): void
        /**
         * 返回圆形的中心点坐标
         */
        getCenter(): Point
        /**
         * 设置圆形的半径，单位为米
         * @param radius
         */
        setRadius(radius: number): void
        /**
         * 返回圆形的半径，单位为米
         */
        getRadius(): number
        /**
         * 返回圆形的地理区域范围
         */
        getBounds(): Bounds
        /**
         * 设置圆形的边线颜色，参数为合法的CSS颜色值
         * @param color
         */
        setStrokeColor(color: string): void
        /**
         * 返回圆形的边线颜色
         */
        getStrokeColor(): string
        /**
         * 设置圆形的填充颜色，参数为合法的CSS颜色值。当参数为空字符串时，圆形覆盖物将没有填充效果
         * @param color
         */
        setFillColor(color: string): void
        /**
         * 返回圆形的填充颜色
         */
        getFillColor(): string
        /**
         * 设置圆形的边线透明度，取值范围0 - 1
         * @param opacity
         */
        setStrokeOpacity(opacity: number): void
        /**
         * 返回圆形的边线透明度
         */
        getStrokeOpacity(): number
        /**
         * 设置圆形的填充透明度，取值范围0 - 1
         * @param opacity
         */
        setFillOpacity(opacity: number): void
        /**
         * 返回圆形的填充透明度
         */
        getFillOpacity(): number
        /**
         * 设置圆形边线的宽度，取值为大于等于1的整数
         * @param weight
         */
        setStrokeWeight(weight: number): void
        /**
         * 返回圆形边线的宽度
         */
        getStrokeWeight(): number
        /**
         * 设置圆形边线样式为实线或虚线，取值solid或dashed
         * @param style
         */
        setStrokeStyle(style: string): void
        /**
         * 返回圆形边线样式
         */
        getStrokeStyle(): string
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