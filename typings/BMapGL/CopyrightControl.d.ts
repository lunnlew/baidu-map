declare namespace BMapGL {
    /**
     * 类表示CopyrightControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface CopyrightControlOptions {
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
     * 此类表示版权控件。
     */
    class CopyrightControl extends Control {
        /**
         * 创建一个版权控件
         * @param opts
         */
        constructor(opts: CopyrightControlOptions)
    }
}