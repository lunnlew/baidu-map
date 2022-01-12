declare namespace BaiduMapVue3 {
    interface BmNavigationControlProps {
        /**
         * 控件停靠位置
         */
        anchor?: BMapGL.ControlAnchor
        /**
         * 控件偏移量
         */
        offset?: [number, number]
        /**
         * 控件类型
         */
        type?: BMapGL.NavigationControlType
        /**
         * 是否显示
         */
        show?: boolean
    }
}