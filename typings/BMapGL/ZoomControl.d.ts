declare namespace BMapGL {
    /**
     * 类表示ZoomControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface ZoomControlOptions {
        /**
         * 控件的停靠位置
         */
        anchor?: ControlAnchor
        /**
         * 控件的偏移值
         */
        offset?: Size
    }

    type ZoomControlEvent = 'zoomchange' | 'zoomstart' | 'zoomend'

    /**
     * 此类表示缩放控件。
     */
    class ZoomControl extends Control {
        /**
         * 创建一个缩放控件
         * @param opts
         */
        constructor(opts: ZoomControlOptions)
    }
}