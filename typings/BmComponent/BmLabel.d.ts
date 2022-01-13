declare namespace BmComponent {
    /**
         * 文本标注
         */
    interface BmLabelProps {
        /**
         * 文本
         */
        content: string
        /**
         * 文本标注的地理位置
         */
        position: {
            lng: number
            lat: number
        }
        /**
         * 文本标注的位置偏移值
         */
        offset?: [number, number]
        /**
         * 是否在调用map.clearOverlays时清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 样式表
         */
        styles?: Object
        /**
         * 是否显示
         */
        show?: boolean
    }
}