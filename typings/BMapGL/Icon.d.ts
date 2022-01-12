declare namespace BMapGL {
    /**
     * 此类表示Icon构造函数的可选参数。它没有构造函数，但可通过对象字面量形式表示。
     */
    interface IconOptions {
        /**
         * 图标的定位锚点。此点用来决定图标与地理位置的关系，是相对于图标左上角的偏移值，默认等于图标宽度和高度的中间值
         */
        anchor?: Size
        /**
         * 图片相对于可视区域的偏移值
         */
        imageOffset?: Size
    }
    /**
     * 此类表示标注覆盖物所使用的图标。
     */
    class Icon {
        /**
         * 图标的定位点相对于图标左上角的偏移值
         */
        anchor: Size
        /**
         * 图标可视区域的大小
         */
        size: Size
        /**
         * 图标所用的图片相对于可视区域的偏移值，此功能的作用等同于CSS中的background-position属性
         */
        imageOffset: Size
        /**
         * 图标所用的图片的大小，此功能的作用等同于CSS中的background-size属性。可用于实现高清屏的高清效果
         */
        imageSize: Size
        /**
         * 图标所用图像资源的位置
         */
        imageUrl: string
        /**
         * 设置icon打印图片的url，该打印图片只针对IE6有效，解决IE6使用PNG滤镜导致的错位问题。如果您的icon没有使用PNG格式图片或者没有使用CSS Sprites技术，则可忽略此配置
         */
        printImageUrl: string
        /**
         * 以给定的图像地址和大小创建图标对象实例
         * @param url
         * @param size
         * @param opts
         */
        constructor(url: string, size: Size, opts: IconOptions)
        /**
         * 设置图片资源的地址
         * @param imageUrl
         */
        setImageUrl(imageUrl: string): void
        /**
         * 设置图标可视区域的大小
         * @param size
         */
        setSize(size: Size): void
        /**
         * 设置图标的大小
         * @param offset
         */
        setImageSize(offset: Size): void
        /**
         * 设置图标定位点相对于其左上角的偏移值
         * @param anchor
         */
        setAnchor(anchor: Size): void
        /**
         * 设置图片相对于可视区域的偏移值
         * @param offset
         */
        setImageOffset(offset: Size): void
    }
}