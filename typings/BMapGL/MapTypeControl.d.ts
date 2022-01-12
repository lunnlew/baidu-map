declare namespace BMapGL {
    /**
     * 类表示MapTypeControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface MapTypeControlOptions {
        /**
         * 控件的停靠位置
         */
        anchor?: ControlAnchor
        /**
         * 控件的偏移值
         */
        offset?: Size
    }

    type MapTypeControlEvent = 'maptypechange'

    /**
     * 此类表示地图类型控件。
     */
    class MapTypeControl extends Control {
        /**
         * 创建一个地图类型控件
         * @param opts
         */
        constructor(opts: MapTypeControlOptions)
    }
}