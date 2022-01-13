declare namespace BmComponent {
    interface BmCustomControlProps {
        /**
         * 控件dom
         */
        dom?: HTMLElement
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
    }
}