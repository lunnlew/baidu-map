declare namespace BMapGL {
    /**
     * 此常量表示控件的定位。
     */
    enum ControlAnchor {
        /**
         * 控件将定位到地图的左上角
         */
        BMAP_ANCHOR_TOP_LEFT = 0,
        /**
         * 控件将定位到地图的右上角
         */
        BMAP_ANCHOR_TOP_RIGHT = 1,
        /**
         * 控件将定位到地图的左下角
         */
        BMAP_ANCHOR_BOTTOM_LEFT = 2,
        /**
         * 控件将定位到地图的右下角
         */
        BMAP_ANCHOR_BOTTOM_RIGHT = 3,
    }
    /**
     * 此类是所有控件的基类，您可以通过此类来实现自定义控件。所有控件均包含Control类的属性、方法和事件。通过Map.addControl()方法可将控件添加到地图上。
     */
    class Control {
        /**
         * 控件默认的停靠位置。自定义控件时需要提供此属性，作为控件的默认停靠位置
         */
        defaultAnchor: ControlAnchor
        /**
         * 控件默认的位置偏移值。自定义控件时需要提供此属性，作为控件的默认偏移位置
         */
        defaultOffset: Size
        /**
         * 创建一个控件原型实例，通过该原型实例可创建自定义控件
         */
        constructor()
        /**
         * 抽象方法。调用Map.addControl()方法添加控件时将调用此方法，从而实现该控件的初始化。自定义控件时需要实现此方法，并将元素的DOM元素在该方法中返回。DOM元素需要添加到地图的容器中，使用map.getContainer()方法可获得地图容器元素
         * @param map
         */
        initialize(map: Map): HTMLElement
        /**
         * 设置控件停靠的位置
         * @param anchor
         */
        setAnchor(anchor: ControlAnchor): void
        /**
         * 返回控件停靠的位置
         */
        getAnchor(): ControlAnchor
        /**
         * 设置控件停靠的偏移量
         * @param offset
         */
        setOffset(offset: Size): void
        /**
         * 返回控件停靠的偏移量
         */
        getOffset(): Size
        /**
         * 显示控件
         */
        show(): void
        /**
         * 隐藏控件
         */
        hide(): void
        /**
         * 判断控件的可见性
         */
        isVisible(): boolean
    }
    /**
     * 此类表示自定义控件
     */
    interface CustomControlOptions {
        /**
         * 控件的停靠位置
         */
        anchor?: ControlAnchor
        /**
         * 控件的偏移值
         */
        offset?: Size
    }
}