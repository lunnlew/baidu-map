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
    }
}