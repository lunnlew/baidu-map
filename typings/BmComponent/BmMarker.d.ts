declare namespace BmComponent {
    /**
     * 地图覆盖物
     */
    interface BmMarkerProps {
        /**
         * 标注坐标
         */
        point: {
            lng: number
            lat: number
        }
        /**
         * 标注的位置偏移值
         */
        offset?: [number, number]

        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear?: boolean
        /**
         * 是否启用拖拽，默认为false
         */
        enableDragging?: boolean
        /**
         * 是否响应点击事件。默认为true
         */
        enableClicking?: boolean
        /**
         * 拖拽标注时，标注是否开启离开地图表面效果。默认为false
         */
        raiseOnDrag?: boolean
        /**
         * 拖拽标注时的鼠标指针样式。此属性值需遵循CSS的cursor属性规范
         */
        draggingCursor?: string
        /**
         * 标注图标
         */
        icon?: string
        /**
         * 旋转角度
         */
        rotation?: number
        /**
         * 鼠标移到marker上的显示内容
         */
        title?: string
        /**
         * 文本标注内容
         */
        label?: string
        /**
         * 文本标注选项
         */
        labelOptions?: {
            offset?: [number, number]
            position?: {
                lng: number
                lat: number
            }
            enableMassClear?: boolean
            styles?: object
        }
        /**
         * 覆盖物的zIndex
         * @param zIndex
         */
        zIndex?: number
        /**
         * 是否显示
         */
        show?: boolean
    }
}