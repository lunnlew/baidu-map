declare namespace BMapGL {
    /**
     * 类表示LocationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface LocationControlOptions {
        /**
         * 控件的停靠位置
         */
        anchor?: ControlAnchor
        /**
         * 控件的偏移值
         */
        offset?: Size
    }

    /**
     * 此类表示定位控件。
     */
    class LocationControl extends Control {
        /**
         * 创建一个定位控件
         * @param opts
         */
        constructor(opts: LocationControlOptions)
    }
}