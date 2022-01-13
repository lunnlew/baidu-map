declare namespace BmComponent {
    class CustomPolyline extends BMapGL.Overlay {
        /**
         * 返回折线的点数组
         */
        getPath(): BMapGL.Point[]
    }
}