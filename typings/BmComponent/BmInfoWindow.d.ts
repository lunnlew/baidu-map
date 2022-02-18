declare namespace BmComponent {
    type BmInfoWindowProps = {
        /**
         * 信息窗口的坐标
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 信息窗口的内容，支持HTML内容
         */
        content: string
        /**
         * 信息窗口最大化时的内容，支持HTML内容
         */
        maxContent: string
        /**
         * 信息窗宽度，单位像素。取值范围：0, 220 - 730。如果您指定宽度为0，则信息窗口的宽度将按照其内容自动调整
         */
        width?: number
        /**
         * 信息窗高度，单位像素。取值范围：0, 60 - 650。如果您指定高度为0，则信息窗口的高度将按照其内容自动调整
         */
        height?: number
        /**
         * 信息窗最大化时的宽度，单位像素。取值范围：220 - 730
         */
        maxWidth?: number
        /**
         * 信息窗位置偏移值。默认情况下在地图上打开的信息窗底端的尖角将指向其地理坐标，在标注上打开的信息窗底端尖角的位置取决于标注所用图标的infoWindowOffset属性值，您可以为信息窗添加偏移量来改变默认位置
         */
        offset?: [number, number]
        /**
         * 信息窗标题文字，支持HTML内容
         */
        title?: string
        /**
         * 是否开启信息窗口打开时地图自动移动（默认开启）
         */
        enableAutoPan?: boolean
        /**
         * 是否开启最大化（默认关闭）
         */
        enableMaximize?: boolean
        /**
         * 是否开启点击地图关闭信息窗口（默认开启）
         */
        enableCloseOnClick?: boolean
        /**
         * 是否显示
         */
        show?: boolean
    }
}