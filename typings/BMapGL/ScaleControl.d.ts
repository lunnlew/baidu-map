declare namespace BMapGL {
    /**
     * 类表示ScaleControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface ScaleControlOptions {
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
     * 常量表示长度单位制
     */
    enum LengthUnit {
        /**
         * 公制单位
         */
        BMAP_UNIT_METRIC = 'metric',
        /**
         * 英制单位
         */
        BMAP_UNIT_IMPERIAL = 'us',
    }

    type ScaleControlEvent = 'zoom_changed' | 'zoomstart' | 'zoomend'

    /**
     * 此类表示比例尺控件。
     */
    class ScaleControl extends Control {
        /**
         * 创建一个比例尺控件
         * @param opts
         */
        constructor(opts?: ScaleControlOptions)
        /**
         * 返回比例尺单位制
         */
        getUnit(): LengthUnit
        /**
         * 设置比例尺单位制
         * @param unit
         */
        setUnit(unit: LengthUnit): void
    }
}