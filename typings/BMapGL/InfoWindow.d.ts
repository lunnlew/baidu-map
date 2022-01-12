declare namespace BMapGL {

    /**
     * 此类表示InfoWindow构造函数的可选参数，它没有构造函数，但可通过对象字面量形式表示。
     */
    interface InfoWindowOptions {
        /**
         * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
         */
        width: number
        /**
         * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
         */
        height: number
        /**
         * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
         */
        maxWidth: number
        /**
         * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
         */
        offset: Size
        /**
         * 信息窗标题文字，支持HTML内容
         */
        title: string
        /**
         * 是否开启信息窗口打开时地图自动移动（默认开启）
         */
        enableAutoPan: boolean
        /**
         * 是否开启最大化（默认关闭）
         */
        enableMaximize: boolean
        /**
         * 是否开启点击地图关闭信息窗口（默认开启）
         */
        enableCloseOnClick: boolean
    }

    /**
     *  InfoWindow 事件
     */
    interface InfoWindowEventEventMap {
        /**
         * 信息窗口被关闭时触发此事件
         */
        close: InfoWindowPayload
        /**
         * 信息窗口被打开时触发此事件
         */
        open: InfoWindowPayload
        /**
         * 信息窗口最大化后触发此事件
         */
        maximize: InfoWindowPayload
        /**
         * 信息窗口还原时触发此事件
         */
        restore: InfoWindowPayload
        /**
         * 点击信息窗口的关闭按钮时触发此事件
         */
        clickclose: InfoWindowPayload
    }
    type InfoWindowEvent = keyof InfoWindowEventEventMap
    type InfoWindowPayload = { type: string; target: InfoWindow }
    type OnInfoWindowEventPayload<T extends InfoWindowEvent> = InfoWindowEventEventMap[T]
    /**
     * 此类表示地图上包含信息的窗口。
     */
    class InfoWindow {
        /**
         * 创建一个信息窗实例，其中content支持HTML内容。
         * @param content
         * @param opts
         */
        constructor(content: string | HTMLElement, opts: InfoWindowOptions)
        /**
         * 设置信息窗口的宽度，单位像素。取值范围：220 - 730
         * @param width
         */
        setWidth(width: number): void
        /**
         * 设置信息窗口的高度，单位像素。取值范围：60 - 650
         * @param height
         */
        setHeight(height: number): void
        /**
         * 重绘信息窗口，当信息窗口内容发生变化时进行调用
         */
        redraw(): void
        /**
         * 设置信息窗口标题。支持HTML内容。1.2版本开始title参数支持传入DOM结点
         * @param title
         */
        setTitle(title: string | HTMLElement): void
        /**
         * 返回信息窗口标题
         */
        getTitle(): string | HTMLElement
        /**
         * 设置信息窗口内容。支持HTML内容。1.2版本开始content参数支持传入DOM结点
         * @param content
         */
        setContent(content: string | HTMLElement): void
        /**
         * 返回信息窗口内容
         */
        getContent(): string | HTMLElement
        /**
         * 返回信息窗口的位置
         */
        getPosition(): Point
        /**
         * 启用窗口最大化功能。需要设置最大化后信息窗口里的内容，该接口才生效
         */
        enableMaximize(): void
        /**
         * 禁用窗口最大化功能
         */
        disableMaximize(): void
        /**
         * 返回信息窗口的打开状态
         */
        isOpen(): boolean
        /**
         * 信息窗口最大化时所显示内容，支持HTML内容
         * @param content
         */
        setMaxContent(content: string): void
        /**
         * 最大化信息窗口
         */
        maximize(): void
        /**
         * 还原信息窗口
         */
        restore(): void
        /**
         * 开启打开信息窗口时地图自动平移
         */
        enableAutoPan(): void
        /**
         * 关闭打开信息窗口时地图自动平移
         */
        disableAutoPan(): void
        /**
         * 开启点击地图时关闭信息窗口
         */
        enableCloseOnClick(): void
        /**
         * 关闭点击地图时关闭信息窗口
         */
        disableCloseOnClick(): void
        /**
         * 添加事件监听函数
         * @param event
         * @param handler
         */
        addEventListener<T extends InfoWindowEvent>(
            event: T,
            handler: (data: OnInfoWindowEventPayload<T>) => void
        ): void
        /**
         * 移除事件监听函数
         * @param event
         * @param handler
         */
        removeEventListener<T extends InfoWindowEvent>(
            event: T,
            handler: (data: OnInfoWindowEventPayload<T>) => void
        ): void
        /**
         * 事件处理函数
         * @param event
         * @param listener
         */
        on<T extends InfoWindowEvent>(event: T, listener: (data: OnInfoWindowEventPayload<T>) => void): this
    }
}