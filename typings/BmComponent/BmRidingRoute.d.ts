declare namespace BmComponent {
    interface BmRidingRouteProps {
        /**
         * 检索区域，类型可为地图实例、坐标点或城市名称的字符串
         */
        location:
        | Object
        | {
            lng: number
            lat: number
        }
        | String
        /**
         * 起点
         */
        start?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 终点
         */
        end?:
        | {
            lat: number
            lng: number
        }
        | Object
        /**
         * 结果呈现设置
         */
        renderOptions?: {
            /**
             * 展现结果的地图实例。当指定此参数后，搜索结果的标注、线路等均会自动添加到此地图上
             */
            map?: Object
            /**
             * 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。此属性对LocalCity无效。驾车路线规划无效
             */
            panel?: string | HTMLElement
            /**
             * 是否选择第一个检索结果。此属性仅对LocalSearch有效
             */
            selectFirstResult?: boolean
            /**
             * 检索结束后是否自动调整地图视野。此属性对LocalCity无效
             */
            autoViewport?: boolean
        }
        /**
         * 检索完成后的回调函数。 参数： results: RidingRouteResult
         */
        onSearchComplete: Function
        /**
         * 标注添加完成后的回调函数。 参数： pois: Array ，起点和目的地点数组，。通过marker属性可得到其对应的标注
         */
        onMarkersSet: Function
        /**
         * 折线添加完成后的回调函数。 参数： routes: Array ，骑行线路数组，通过Route.getPolyline()方法可得到对应的折线覆盖物
         */
        onPolylinesSet: Function
        /**
         * 标注气泡内容创建后的回调函数。 参数： poi: LocalResultPoi，通过其marker属性可得到当前的标注。 html: HTMLElement，气泡内的DOM元素
         */
        onInfoHtmlSet: Function
        /**
         * 结果列表添加完成后的回调函数。 参数： container: 结果列表所用的HTML元素
         */
        onResultsHtmlSet: Function
    }
}