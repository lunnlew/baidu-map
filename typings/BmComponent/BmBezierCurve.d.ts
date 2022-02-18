declare namespace BmComponent {

    interface BmBezierCurveProps {
        /**
         * 轨迹点
         */
        points: {
            lng: number
            lat: number
        }[]
        /**
         * 控制点
         */
        controlPoints: [
            [
                {
                    lng: number
                    lat: number
                },
                {
                    lng: number
                    lat: number
                }
            ],
            [
                {
                    lng: number
                    lat: number
                }
            ]
        ]
        /**
         * 是否总览显示
         */
        overallView?: boolean
        /**
         * 是否显示
         */
        show?: boolean
        /**
         * 折线颜色
         */
        strokeColor: string
        /**
         * 折线的宽度，以像素为单位
         */
        strokeWeight: number
        /**
         * 折线的透明度，取值范围0 - 1
         */
        strokeOpacity: number
        /**
         * 折线的样式，solid或dashed
         */
        strokeStyle: string
        /**
         * 是否在调用map.clearOverlays清除此覆盖物，默认为true
         */
        enableMassClear: boolean
    }
}