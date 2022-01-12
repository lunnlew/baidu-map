declare namespace BMapGL {
    /**
     *  Overlay 事件
     */
    interface OverlayEventEventMap {
        /**
         * 点击文本标注后会触发此事件
         */
        click: OverlayEventPayload
        /**
         * 双击文本标注后会触发此事件
         */
        dblclick: OverlayEventPayload
        /**
         * 鼠标在文本标注上按下触发此事件
         */
        mousedown: OverlayEventPayload
        /**
         * 鼠标在文本标注释放触发此事件
         */
        mouseup: OverlayEventPayload
        /**
         * 鼠标离开文本标注时触发此事件
         */
        mouseout: OverlayEventPayload
        /**
         * 当鼠标进入文本标注区域时会触发此事件
         */
        mouseover: OverlayEventPayload
        /**
         * 移除文本标注时触发
         */
        remove: OverlayEventPayload
        /**
         * 右键点击标注时触发此事件
         */
        rightclick: OverlayEventPayload
        /**
         * 拖动开始触发此事件
         */
        dragstart: OverlayEventPayload
        /**
         * 拖动中触发此事件
         */
        dragging: OverlayEventPayload
        /**
         * 拖动结束触发此事件
         */
        dragend: OverlayEventPayload
        /**
         * 移动开始触发此事件
         */
        movestart: OverlayEventPayload
        /**
         * 鼠标移动触发此事件
         */
        mousemove: OverlayEventPayload
        /**
         * 移动结束触发此事件
         */
        moveend: OverlayEventPayload
        /**
         * 移动中
         */
        moving: OverlayEventPayload
    }
    type OverlayEvent = keyof OverlayEventEventMap
    type OverlayEventPayload = {
        cancelBubble: boolean
        currentTarget: keyof BMapGL
        domEvent: any
        latLng: Point
        pixel: Pixel
        point: Point
        returnValue: boolean
        srcElement: keyof BMapGL
        target: keyof BMapGL
        type: string
    }
    type OnOverlayEventPayload<T extends OverlayEvent> = OverlayEventEventMap[T]

    /**
     * 覆盖物的抽象基类，所有覆盖物均继承基类的方法。此类不可实例化。
     */
    abstract class Overlay {
        /**抽象方法，用于初始化覆盖物，当调用map.addOverlay时，API将调用此方法。自定义覆盖物时需要实现此方法。自定义覆盖物时需要将覆盖物对应的HTML元素返回
         *
         * @param map
         */
        initialize(map: Map): HTMLElement
        /**
         * 判断覆盖物是否可见
         */
        isVisible(): boolean
        /**
         * 抽象方法，当地图状态发生变化时，由系统调用对覆盖物进行绘制。自定义覆盖物需要实现此方法
         */
        draw(): void
        /**
         * 显示覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为空
         */
        show(): void
        /**
         * 隐藏覆盖物。对于自定义覆盖物，此方法会自动将initialize方法返回的HTML元素样式的display属性设置为none
         */
        hide(): void
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