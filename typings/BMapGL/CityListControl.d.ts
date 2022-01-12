declare namespace BMapGL {
    /**
     * 类表示CityListControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface CityListControlOptions {
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
     * 此类表示城市选择控件。
     */
    class CityListControl extends Control {
        /**
         * 创建一个城市选择控件
         * @param opts
         */
        constructor(opts: CityListControlOptions)
    }
}