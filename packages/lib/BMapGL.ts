class BMapGL {}

namespace BMapGL {
    /**
     * 地图类型类
     */
    export enum MapTypeId {
        /**
         * 此地图类型展示普通街道视图
         */
        BMAP_NORMAL_MAP = 'B_NORMAL_MAP',
        /**
         * 此地图类型展示地球卫星视图
         */
        BMAP_EARTH_MAP = 'B_EARTH_MAP',
        /**
         * 此地图类型展示空地图
         */
        BMAP_NONE_MAP = 'B_NONE_MAP',
        /**
         * 此地图类型展示卫星视图
         */
        BMAP_SATELLITE_MAP = 'B_SATELLITE_MAP',
        /**
         * 此地图类型展示普通街道视图
         */
        BMAP_STREET_MAP = 'B_STREET_MAP',
    }

    /**
     * 此常量表示控件的定位。
     */
    export enum ControlAnchor {
        /**
         * 控件将定位到地图的左上角
         */
        BMAP_ANCHOR_TOP_LEFT = 0,
        /**
         * 控件将定位到地图的右上角
         */
        BMAP_ANCHOR_TOP_RIGHT = 1,
        /**
         * 控件将定位到地图的左下角
         */
        BMAP_ANCHOR_BOTTOM_LEFT = 2,
        /**
         * 控件将定位到地图的右下角
         */
        BMAP_ANCHOR_BOTTOM_RIGHT = 3,
    }

    /**
     * NavigationControl控件的类型
     */
    export enum NavigationControlType {
        BMAP_NAVIGATION_CONTROL_LARGE = 0,
        BMAP_NAVIGATION_CONTROL_SMALL = 1,
        BMAP_NAVIGATION_CONTROL_PAN = 2,
        BMAP_NAVIGATION_CONTROL_ZOOM = 3,
        BMAP_NAVIGATION_CONTROL_ANIM = 4,
    }

    /**
     * 点的形状
     */
    export enum Marker3DShapeType {
        /**
         * 圆形
         */
        BMAP_SHAPE_CIRCLE = 1,
        /**
         * 正方形
         */
        BMAP_SHAPE_RECT = 2,
    }

    /**
     * 定位结果状态
     */
    export enum StatusCode {
        BMAP_STATUS_SUCCESS = 0,
        BMAP_STATUS_UNKNOWN_LOCATION = 2,
        BMAP_STATUS_PERMISSION_DENIED = 6,
        BMAP_STATUS_TIMEOUT = 8,
    }

    /**
     * 坐标类型
     */
    export enum CoordPointType {
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
}
export default BMapGL
