declare namespace BMapGL {
    /**
     * NavigationControl控件的类型
     */
    enum NavigationControlType {
        /**
         * 标准的平移缩放控件（包括平移、缩放按钮和滑块）
         */
        BMAP_NAVIGATION_CONTROL_LARGE = 0,
        /**
         * 仅包含平移和缩放按钮
         */
        BMAP_NAVIGATION_CONTROL_SMALL = 1,
        /**
         * 仅包含平移按钮
         */
        BMAP_NAVIGATION_CONTROL_PAN = 2,
        /**
         * 仅包含缩放按钮
         */
        BMAP_NAVIGATION_CONTROL_ZOOM = 3,
        /**
         *
         */
        BMAP_NAVIGATION_CONTROL_ANIM = 4,
    }

    /**
     * 类表示NavigationControl构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface NavigationControlOptions {
        /**
         * 控件的停靠位置
         */
        anchor?: ControlAnchor
        /**
         * 控件的偏移值
         */
        offset?: Size
        /**
         * 控件的类型
         */
        type?: NavigationControlType
    }

    /**
     * 此类表示缩放平移控件。
     */
    class NavigationControl extends Control {
        /**
         * 创建一个缩放平移控件
         * @param opts
         */
        constructor(opts: NavigationControlOptions)
    }
}