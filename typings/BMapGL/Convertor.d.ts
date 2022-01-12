declare namespace BMapGL {
    /**
     * 坐标类型
     */
    enum CoordPointType {
        /**
         * 大地坐标系
         */
        COORDINATES_WGS84 = 1,
        /**
         * 大地坐标系墨卡托米制坐标
         */
        COORDINATES_WGS84_MC = 2,
        /**
         * 火星坐标系
         */
        COORDINATES_GCJ02 = 3,
        /**
         * 火星坐标系墨卡托米制坐标
         */
        COORDINATES_GCJ02_MC = 4,
        /**
         * 百度坐标系
         */
        COORDINATES_BD09 = 5,
        /**
         * 百度坐标系墨卡托米制坐标
         */
        COORDINATES_BD09_MC = 6,
        /**
         * mapbar地图坐标
         */
        COORDINATES_MAPBAR = 7,
        /**
         * 51地图坐标
         */
        COORDINATES_51 = 8,
    }
    /**
     * 其他坐标转百度坐标
     */
    class Convertor {
        /**
         * 其他坐标转百度坐标
         * @param points 其他坐标
         * @param from_type 要转换的坐标类型
         * @param to_type 要得到的坐标类型
         * @param translateCallback 接收转换结果的回调函数
         */
        constructor(
            points: Array<Point>,
            from_type: CoordPointType,
            to_type: CoordPointType,
            translateCallback: Function
        )
    }
}