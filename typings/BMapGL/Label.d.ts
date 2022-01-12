declare namespace BMapGL {
    /**
         * 此类表示Lable构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
         */
    interface LabelOptions {
        /**
         * 文本标注的位置偏移值
         */
        offset?: Size
        /**
         * 文本标注的地理位置
         */
        position: Point
        /**
         * 是否在调用map.clearOverlays时清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 样式表
         */
        styles?: Object
    }
    /**
         * 此类表示地图上的文本标注。
         */
    class Label extends Overlay {
        /**
         * 创建一个文本标注实例。point参数指定了文本标注所在的地理位置
         * @param content
         * @param opts
         */
        constructor(content: string, opts?: LabelOptions)
        /**
         * 设置文本标注样式，该样式将作用于文本标注的容器元素上。其中styles为JavaScript对象常量，比如： setStyle({ color : "red", fontSize : "12px" }) 注意：如果css的属性名中包含连字符，需要将连字符去掉并将其后的字母进行大写处理，例如：背景色属性要写成：backgroundColor
         * @param styles
         */
        setStyle(styles: Object): void
        /**
         * 设置文本标注的内容。支持HTML
         * @param content
         */
        setContent(content: string): void
        /**
         * 设置文本标注坐标。仅当通过Map.addOverlay()方法添加的文本标注有效
         * @param position
         */
        setPosition(position: Point): void
        /**
         * 获取Label的地理坐标
         */
        getPosition(): Point
        /**
         * 设置文本标注的偏移值
         * @param offset
         */
        setOffset(offset: Size): void
        /**
         * 返回文本标注的偏移值
         */
        getOffset(): Size
        /**
         * 设置文本标注的标题，当鼠标移至标注上时显示此标题
         * @param title
         */
        setTitle(title: string): void
        /**
         * 返回文本标注的标题
         */
        getTitle(): string
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
        setZIndex(zIndex: number): void
        /**
         * 设置地理坐标
         * @param position
         */
        setPosition(position: Point): void
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