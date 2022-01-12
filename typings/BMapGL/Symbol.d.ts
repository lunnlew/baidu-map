declare namespace BMapGL {
    /**
     * 此类表示Symbol构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface SymbolOptions {
        /**
         * 符号的位置偏移值
         */
        anchor: Size
        /**
         * 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
         */
        fillColor: string
        /**
         * 设置矢量图标填充透明度,范围0~1
         */
        fillOpacity: number
        /**
         * 设置矢量图标的缩放比例
         */
        scale: number
        /**
         * 设置矢量图标的旋转角度,参数为角度
         */
        rotation: number
        /**
         * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
         */
        strokeColor: string
        /**
         * 设置矢量图标线的透明度,opacity范围0~1
         */
        strokeOpacity: number
        /**
         * 旋设置线宽。如果此属性没有指定，则线宽跟scale数值相同
         */
        strokeWeight: number
    }
    /**
     * 此枚举类型表示矢量图标类预设的图标样式。
     */
    enum SymbolShapeType {
        /**
         * 圆形，默认半径为1px
         */
        BMap_Symbol_SHAPE_CIRCLE = 'BMap_Symbol_SHAPE_CIRCLE',
        /**
         * 矩形，默认宽度4px、高度2px
         */
        BMap_Symbol_SHAPE_RECTANGLE = 'BMap_Symbol_SHAPE_RECTANGLE',
        /**
         * 菱形，默认外接圆半径10px
         */
        BMap_Symbol_SHAPE_RHOMBUS = 'BMap_Symbol_SHAPE_RHOMBUS',
        /**
         * 五角星，五角星外接圆半径为10px
         */
        BMap_Symbol_SHAPE_STAR = 'BMap_Symbol_SHAPE_STAR',
        /**
         * 箭头方向向下的闭合箭头
         */
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW = 'BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW',
        /**
         * 箭头方向向上的闭合箭头
         */
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW = 'BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW',
        /**
         * 箭头方向向下的非闭合箭头
         */
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW = 'BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW',
        /**
         * 箭头方向向上的非闭合箭头
         */
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW = 'BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW',
        /**
         * 定位点图标
         */
        BMap_Symbol_SHAPE_POINT = 'BMap_Symbol_SHAPE_POINT',
        /**
         * 预设的飞机形状
         */
        BMap_Symbol_SHAPE_PLANE = 'BMap_Symbol_SHAPE_PLANE',
        /**
         * 预设的照相机形状
         */
        BMap_Symbol_SHAPE_CAMERA = 'BMap_Symbol_SHAPE_CAMERA',
        /**
         * 预设的警告符号
         */
        BMap_Symbol_SHAPE_WARNING = 'BMap_Symbol_SHAPE_WARNING',
        /**
         * 预设的笑脸形状
         */
        BMap_Symbol_SHAPE_SMILE = 'BMap_Symbol_SHAPE_SMILE',
        /**
         * 预设的钟表形状
         */
        BMap_Symbol_SHAPE_CLOCK = 'BMap_Symbol_SHAPE_CLOCK',
    }

    /**
     * 未知的定义 SymbolShape
     */
    interface SymbolShape { }

    /**
     * 此类表示通过svg的path string创建的矢量图标类。
     */
    class Symbol {
        /**
         * 创建一个矢量图标实例。path为svg中的path字符串或者已定义的符号常量,opts为矢量图标的样式
         * @param path
         * @param opts
         */
        constructor(path: string | SymbolShapeType, opts: SymbolOptions)
        /**
         * 设置矢量图标的路径
         * @param path
         */
        setPath(path: string | SymbolShape): void
        /**
         * 设置矢量图标的定位点,该定位点的位置以图标自身为基准
         * @param anchor
         */
        setAnchor(anchor: Size): void
        /**
         * 设置矢量图标的旋转角度,参数为角度
         * @param rotation
         */
        setRotation(rotation: number): void
        /**
         * 设置矢量图标的缩放比例
         * @param scale
         */
        setScale(scale: number): void
        /**
         * 设置矢量图标的线宽
         * @param strokeWeight
         */
        setStrokeWeight(strokeWeight: number): void
        /**
         * 设置矢量图标的线填充颜色,支持颜色常量字符串、十六进制、RGB、RGBA等格式
         * @param color
         */
        setStrokeColor(color: string): void
        /**
         * 设置矢量图标线的透明度,opacity范围0~1
         * @param opacity
         */
        setStrokeOpacity(opacity: number): void
        /**
         * 设置矢量图标填充透明度,opacity范围0~1
         * @param opacity
         */
        setFillOpacity(opacity: number): void
        /**
         * 设置矢量图标的填充颜色。支持颜色常量字符串、十六进制、RGB、RGBA等格式
         * @param color
         */
        setFillColor(color: string): void
    }
}