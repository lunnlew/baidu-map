declare namespace BMapGL {
    /**
     * 类表示NavigationControl3D构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface NavigationControl3DOptions {
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
     *此类表示地图的3D控件，可以对地图进行旋转以及切换地图2D、3D展示效果。
     */
    class NavigationControl3D extends Control {
        /**
         * 创建一个特定样式的地图平移缩放控件
         * @param opts
         */
        constructor(opts: NavigationControl3DOptions)
    }
}