declare namespace BMapGL {
    /**
     * 此类用于设置polyline上的符号显示。
     */
    class IconSequence {
        /**
         * 创建线上的符号类。symbol为符号样式;offset为符号相对于线起点的位置，取值可以是百分比也可以是像素位置，默认为"100%";repeat为符号在线上重复显示的距离，可以是百分比也可以是距离值，同时设置repeat与offset时，以repeat为准;fixedRotation设置图标的旋转角度是否与线走向一致，默认为true
         */
        constructor(symbol: Symbol, offset: string, repeat: string, fixedRotation: boolean)
    }
    /**
     * 此类表示Marker构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示
     */
    interface MarkerOptions {
        /**
         * 标注的位置偏移值
         */
        offset?: Size
        /**
         * 标注所用的图标对象
         */
        icon?: Icon
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用拖拽，默认为false
         */
        enableDragging?: boolean
        /**
         * 是否响应点击事件。默认为true
         */
        enableClicking?: boolean
        /**
         * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
         */
        raiseOnDrag?: boolean
        /**
         * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
         */
        draggingCursor?: string
        /**
         * 旋转角度
         */
        rotation?: number
        /**
         * 鼠标移到marker上的显示内容
         */
        title?: string
    }

    /**
     * 此类表示地图上的一个图像标注。
     */
    class Marker extends Overlay {
        /**
         * 创建一个图像标注实例。point参数指定了图像标注所在的地理位置
         * @param point
         * @param opts
         */
        constructor(point: Point, opts: MarkerOptions)
        /**
         * 设置标注所用的图标对象
         * @param icon
         */
        setIcon(icon: Icon): void
        /**
         * 返回标注所用的图标对象
         */
        getIcon(): Icon
        /**
         * 设置标注的地理坐标
         * @param position
         */
        setPosition(position: Point): void
        /**
         * 返回标注的地理坐标
         */
        getPosition(): Point
        /**
         * 设置标注的偏移值
         * @param offset
         */
        setOffset(offset: Size): void
        /**
         * 返回标注的偏移值
         */
        getOffset(): Size
        /**
         * 设置标注的标题，当鼠标移至标注上时显示此标题
         * @param title
         */
        setTitle(title: String): void
        /**
         * 返回标注的标题
         */
        getTitle(): String
        /**
         * 为标注添加文本标注
         * @param label
         */
        setLabel(label: Label): void
        /**
         * 返回标注的文本内容
         */
        getLabel(): Label
        /**
         * 开启标注拖拽功能
         */
        enableDragging(): void
        /**
         * 关闭标注拖拽功能
         */
        disableDragging(): void
        /**
         * 允许覆盖物在map.clearOverlays方法中被清除
         */
        enableMassClear(): void
        /**
         * 禁止覆盖物在map.clearOverlays方法中被清除
         */
        disableMassClear(): void
        /**
         * 设置覆盖物的zIndex
         * @param zIndex
         */
        setZIndex(zIndex: Number): void
        /**
         * 返回覆盖物所在的map对象
         */
        getMap(): Map
        /**
         * 设置点的旋转角度
         * @param rotation
         */
        setRotation(rotation: Number): void
        /**
         * 获取点的旋转角度
         */
        getRotation(): Number
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