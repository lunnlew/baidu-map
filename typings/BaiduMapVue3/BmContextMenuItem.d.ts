declare namespace BaiduMapVue3 {
    interface BmContextMenuItemProps {
        /**
         * 子菜单ID
         */
        id: string
        /**
         * 菜单宽度
         */
        width: number
        /**
         * 菜单文本
         */
        text: string
        /**
         * 菜单点击回调
         */
        callback: Function
        /**
         * 是否显示
         */
        show?: boolean
    }
}