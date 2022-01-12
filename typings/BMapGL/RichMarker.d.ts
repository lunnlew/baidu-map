declare namespace BMapGL {
    /**
     * 富文本标注选项
     */
    interface RichMarkerOptions {
        "anchor"?: Size,
        "enableDragging"?: boolean
    }

    /**
     * 富文本标注
     */
    class RichMarker extends Overlay {
        /**
         * 创建一个富文本标注对象
         * @param html 
         * @param point 
         * @param opts 
         */
        constructor(html: string, point: Point, opts?: RichMarkerOptions)
    }
}