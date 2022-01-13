declare namespace BmComponent {
    interface BmDrawingManagerProps {
        /**
         * 是否开启绘制模式
         */
        isOpen?: boolean
        /**
         * 绘制是否进行测距测面
         */
        enableCalculate?: boolean
        /**
         * 是否开启边界吸附功能
         */
        enableSorption?: boolean
        /**
         * 是否开启延边裁剪功能
         */
        enableGpc?: boolean,
        /**
         * 是否开启超限提示
         */
        enableLimit?: boolean,
        /**
         * 超限值
         */
        limitOptions?: {
            /**
             * 面积超限值
             */
            area?: number,
            /**
             * 距离超限值
             */
            distance?: number
        },
        /**
         * 边界吸附距离
         */
        sorptiondistance?: number
        /**
         * 圆的样式
         */
        circleOptions?: BMapGLLib.DrawingStyleOptions
        /**
         * 线的样式
         */
        polylineOptions?: BMapGLLib.DrawingStyleOptions
        /**
         * 多边形的样式
         */
        polygonOptions?: BMapGLLib.DrawingStyleOptions
        /**
         * 矩形的样式
         */
        rectangleOptions?: BMapGLLib.DrawingStyleOptions
        /**
         * label样式
         */
        labelOptions?: BMapGLLib.DrawingLabelOptions
        /**
         * 是否显示
         */
        show?: boolean
    }
}