import { BMapGLRef } from './map'
import CustomPolyline from './CustomPolyline'
import CustomLushu from './CustomLushu'

/**
 * 添加点标注
 * @param point
 * @param marker_params
 */
export function addMaker(
    map: BMapGL.Map | undefined,
    point: {
        lng: number
        lat: number
    },
    marker_params: {
        [key: string]: any
    } & Required<BmComponent.BmMarkerProps>
): BMapGL.Marker | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.MarkerOptions>

        if (typeof marker_params.icon === 'string') {
            if (marker_params.icon) {
                marker_options.icon = new BMapGLRef.value.Icon(marker_params.icon, new BMapGLRef.value.Size(48, 48), {
                    anchor: new BMapGLRef.value.Size(24, 24),
                })
            }
        } else if (marker_params.icon) {
            let icon_props = marker_params.icon as Required<BmComponent.BmMarkerIconProps>
            marker_options.icon = new BMapGLRef.value.Icon(
                icon_props.src,
                new BMapGLRef.value.Size(icon_props.size[0], icon_props.size[1]),
                {
                    anchor:
                        typeof icon_props.anchor === 'undefined'
                            ? new BMapGLRef.value.Size(icon_props.size[0] / 2, icon_props.size[1] / 2)
                            : new BMapGLRef.value.Size(icon_props.anchor[0], icon_props.anchor[1]),
                    imageOffset:
                        typeof icon_props.imageOffset === 'undefined'
                            ? new BMapGLRef.value.Size(0, 0)
                            : new BMapGLRef.value.Size(icon_props.imageOffset[0], icon_props.imageOffset[1]),
                }
            )
        }
        for (let key in marker_params) {
            if (key !== 'icon' && key !== 'offset') {
                marker_options[key as string] = marker_params[key]
            }
        }
        if (marker_params.offset) {
            marker_options.offset = new BMapGLRef.value.Size(marker_params.offset[0], marker_params.offset[1])
        } else {
            marker_options.offset = new BMapGLRef.value.Size(0, 0)
        }
        let marker = new BMapGLRef.value.Marker(new BMapGLRef.value.Point(point.lng, point.lat), marker_options)
        if (!marker_params.show) {
            marker.hide()
        }
        map.addOverlay(marker)
        return marker
    }
}

/**
 * 添加3D点标注
 * @param point
 * @param marker_params
 */
export function addMaker3D(
    map: BMapGL.Map | undefined,
    point: {
        lng: number
        lat: number
    },
    marker_params: {
        [key: string]: any
    } & Required<BmComponent.BmMarker3DProps>
): BMapGL.Marker3D | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.Marker3DOptions>
        if (marker_params.icon) {
            let icon_props = marker_params.icon as Required<BmComponent.BmMarkerIconProps>
            marker_options.icon = new BMapGLRef.value.Icon(
                icon_props.src,
                new BMapGLRef.value.Size(icon_props.size[0], icon_props.size[1]),
                {
                    anchor:
                        typeof icon_props.anchor === 'undefined'
                            ? new BMapGLRef.value.Size(icon_props.size[0] / 2, icon_props.size[1] / 2)
                            : new BMapGLRef.value.Size(icon_props.anchor[0], icon_props.anchor[1]),
                    imageOffset:
                        typeof icon_props.imageOffset === 'undefined'
                            ? new BMapGLRef.value.Size(0, 0)
                            : new BMapGLRef.value.Size(icon_props.imageOffset[0], icon_props.imageOffset[1]),
                }
            )
        }
        for (let key in marker_params) {
            if (key !== 'icon' && key !== 'height') {
                marker_options[key as string] = marker_params[key]
            }
        }
        let marker = new BMapGLRef.value.Marker3D(
            new BMapGLRef.value.Point(point.lng, point.lat),
            marker_params.height,
            marker_options
        )
        map.addOverlay(marker)
        return marker
    }
}

/**
 * 添加折线
 * @param points
 * @param polyline_params
 */
export function addPolyline(
    map: BMapGL.Map | undefined,
    points: {
        lng: number
        lat: number
    }[],
    polyline_params: {
        [key: string]: any
    } & Required<BmComponent.BmPolylineProps>
): {
    polyline: BMapGL.Polyline | null
    removeOverlay: Function,
    overallView: (points?: BMapGL.Point[]) => void,
} | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.PolylineOptions>
        for (let key in polyline_params) {
            if (key !== 'points' && key !== 'icons') {
                marker_options[key as string] = polyline_params[key]
            }
        }
        if (polyline_params.icons) {
            marker_options.icons = []
            for (let icon of polyline_params.icons) {
                if (!BMapGLRef.value.IconSequence) {
                    console.error('BMapGL 暂不支持 IconSequence')
                    break
                }
                marker_options.push(
                    new BMapGLRef.value.IconSequence(new BMapGLRef.value.Symbol(icon.symbol, icon), icon.offset, icon.repeat, icon.fixedRotation)
                )
            }
        }
        let polyline_points = [] as BMapGL.Point[]
        for (let point of points) {
            polyline_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let polyline = new BMapGLRef.value.Polyline(polyline_points, marker_options)
        polyline.hide()
        map.addOverlay(polyline)
        return {
            polyline,
            removeOverlay: () => {
                map.removeOverlay(polyline)
            },
            overallView: (new_points) => {
                map.setViewport(new_points || polyline_points)
            }
        }
    }
}

/**
 * 添加多边形
 * @param points
 * @param polygon_params
 */
export function addPolygon(
    map: BMapGL.Map | undefined,
    points: {
        lng: number
        lat: number
    }[],
    polygon_params: {
        [key: string]: any
    } & Required<BmComponent.BmPolygonProps>
): {
    polygon: BMapGL.Polygon | null
    removeOverlay: Function,
    overallView: (points?: BMapGL.Point[]) => void,
} | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.PolygonOptions>
        for (let key in polygon_params) {
            if (key !== 'points') {
                marker_options[key as string] = polygon_params[key]
            }
        }
        let polygon_points = [] as BMapGL.Point[]
        for (let point of points) {
            polygon_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let polygon = new BMapGLRef.value.Polygon(polygon_points, marker_options)
        polygon.hide()
        map.addOverlay(polygon)
        return {
            polygon,
            removeOverlay: () => {
                map.removeOverlay(polygon)
            },
            overallView: (new_points) => {
                map.setViewport(new_points || polygon_points)
            }
        }
    }
}

/**
 * 获取轮廓数据
 * @param name 
 */
export function initBoundariesResult(
    map: BMapGL.Map | undefined,
    name: string, boundary?: BMapGL.Boundary): Promise<{
        boundary: BMapGL.Boundary,
        rs: { boundaries: string[] }
    }> {
    return new Promise((resolve, reject) => {
        if (BMapGLRef.value && map) {
            boundary = boundary || new BMapGLRef.value.Boundary()
            boundary.get(name, function (rs: { boundaries: string[] }) {
                resolve({
                    boundary: boundary as BMapGL.Boundary,
                    rs
                })
            })
        }
    })
}

/**
 * 城市区域镂空多边形
 * @param points
 * @param polygon_params
 */
export function addCityBoundary(
    map: BMapGL.Map | undefined,
    name: string,
    boundary_params: {
        [key: string]: any
    } & Required<BmComponent.BmCityBoundaryProps>,
    init_data: {
        boundary: BMapGL.Boundary,
        rs: { boundaries: string[] }
    } | undefined
): Promise<{
    boundary: BMapGL.Boundary | null,
    overlay: BMapGL.Overlay | null,
    removeOverlay: Function,
    overallView: (points?: BMapGL.Point[]) => void,
}> | undefined {
    return new Promise(async (resolve, reject) => {
        if (BMapGLRef.value && map) {
            let marker_options = {} as {
                [key: string]: any
            }
            if (boundary_params.polygon) {
                for (let key in boundary_params.polygon) {
                    if (key !== 'points') {
                        marker_options[key as string] = boundary_params.polygon[key]
                    }
                }
            }
            let boundaries_result = init_data
            if (!boundary_params.firstLoad || !init_data?.rs?.boundaries?.length) {
                let { rs, boundary } = await initBoundariesResult(map, name, init_data?.boundary)
                if (!boundaries_result) {
                    boundaries_result = {
                        boundary,
                        rs
                    }
                } else {
                    boundaries_result.boundary = boundary
                    boundaries_result.rs = rs
                }
            }

            let hole: BMapGL.Overlay
            if ((boundaries_result?.rs?.boundaries || []).length >= 1) {
                hole = new BMapGLRef.value.Polygon([boundaries_result?.rs.boundaries[0]] as any, marker_options)
            } else {
                return resolve({
                    boundary: boundaries_result?.boundary || null,
                    overlay: null,
                    removeOverlay: () => { },
                    overallView: (new_points) => {
                        map.setViewport(new_points || [])
                    }
                })
            }
            let points = (boundaries_result?.rs.boundaries[0] as any).split(';').map(function (point: string) {
                let lnglat = point.split(',') as any
                if (BMapGLRef.value) {
                    return new BMapGLRef.value.Point(lnglat[0], lnglat[1])
                }
            })
            hole.hide()
            map.addOverlay(hole)
            resolve({
                boundary: boundaries_result?.boundary || null,
                overlay: hole,
                removeOverlay: () => {
                    map.removeOverlay(hole)
                },
                overallView: (new_points) => {
                    map.setViewport(new_points || points)
                }
            })
        } else {
            reject(new Error('获取城市边界失败'))
        }
    })
}

/**
 * 添加棱柱
 * @param points
 * @param prism_params
 */
export function addPrism(
    map: BMapGL.Map | undefined,
    points: {
        lng: number
        lat: number
    }[],
    prism_params: {
        [key: string]: any
    } & Required<BmComponent.BmPrismProps>
): {
    prism: BMapGL.Prism | null
    removeOverlay: Function,
    overallView: (points?: BMapGL.Point[]) => void,
} | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.PrismOptions>
        for (let key in prism_params) {
            if (key !== 'points' && key !== 'altitude') {
                marker_options[key as string] = prism_params[key]
            }
        }
        let prism_points = [] as BMapGL.Point[]
        for (let point of points) {
            prism_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let prism = new BMapGLRef.value.Prism(prism_points, prism_params.altitude, marker_options)
        prism.hide()
        map.addOverlay(prism)
        return {
            prism,
            removeOverlay: () => {
                map.removeOverlay(prism)
            },
            overallView: (new_points) => {
                map.setViewport(new_points || prism_points)
            }
        }
    }
}

/**
 * 添加地面叠加层
 * @param ground_params
 */
export function addGroundOverlay(
    map: BMapGL.Map | undefined,
    startPoint: {
        lng: number
        lat: number
    },
    endPoint: {
        lng: number
        lat: number
    },
    ground_params: {
        [key: string]: any
    } & Required<BmComponent.BmGroundOverlayProps>
): BMapGL.GroundOverlay | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.GroundOverlayOptions>
        for (let key in ground_params) {
            if (key !== 'startPoint' && key !== 'endPoint') {
                marker_options[key as string] = ground_params[key]
            }
        }
        let pStart = new BMapGLRef.value.Point(startPoint.lng, startPoint.lat)
        let pEnd = new BMapGLRef.value.Point(endPoint.lng, endPoint.lat)
        let bounds = new BMapGLRef.value.Bounds(
            new BMapGLRef.value.Point(pStart.lng, pEnd.lat),
            new BMapGLRef.value.Point(pEnd.lng, pStart.lat)
        )
        let imgOverlay = new BMapGLRef.value.GroundOverlay(bounds, marker_options)
        if (!ground_params.show) {
            imgOverlay.hide()
        }
        map.addOverlay(imgOverlay)
        return imgOverlay
    }
}

/**
 * 添加文本标注
 * @param prism_params
 */
export function addLabel(
    map: BMapGL.Map | undefined,
    label_params: {
        [key: string]: any
    } & Required<BmComponent.BmLabelProps>
): BMapGL.Label | undefined {
    if (BMapGLRef.value && map) {
        let label = new BMapGLRef.value.Label(label_params.content, {
            position: new BMapGLRef.value.Point(label_params.position.lng, label_params.position.lat),
            offset: new BMapGLRef.value.Size(label_params.offset[0], label_params.offset[1]),
            styles: Object.assign(
                {
                    backgroundColor: '#fff',
                    border: '1px solid #f00',
                    padding: '1px',
                    whiteSpace: 'nowrap',
                    fontSize: '12px',
                    zIndex: '80',
                    MozUserSelect: 'none',
                },
                label_params.styles || {}
            ),
        })
        if (!label_params.show) {
            label.hide()
        }
        map.addOverlay(label)
        return label
    }
}

/**
 * 添加右键菜单
 * @param menu_params
 */
export function addContextMenu(
    map: BMapGL.Map | undefined,
    menu_params: {
        [key: string]: any
    } & Required<BmComponent.BmContextMenuProps>
): BMapGL.ContextMenu | undefined {
    if (BMapGLRef.value && map) {
        let context_menu = new BMapGLRef.value.ContextMenu()
        for (var i = 0; i < menu_params.menus.length; i++) {
            let menu = menu_params.menus[i]
            if (menu.show) {
                context_menu.addItem(
                    new BMapGLRef.value.MenuItem(
                        menu.text || '菜单-' + i,
                        (e: any) => menu.callback && menu.callback(e, map, BMapGLRef.value),
                        {
                            width: menu.width,
                            id: menu.id || 'id-' + i,
                        }
                    )
                )
            }
        }
        map.addContextMenu(context_menu)
        return context_menu
    }
}

/**
 * 添加圆形
 * @param center
 * @param radius
 * @param circle_params
 */
export function addCircle(
    map: BMapGL.Map | undefined,
    center: {
        lng: number
        lat: number
    },
    radius: number,
    circle_params: {
        [key: string]: any
    } & Required<BmComponent.BmCircleProps>
): BMapGL.Circle | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.CircleOptions>
        for (let key in circle_params) {
            if (key !== 'center' && key !== 'radius') {
                marker_options[key as string] = circle_params[key]
            }
        }
        let circle = new BMapGLRef.value.Circle(
            new BMapGLRef.value.Point(center.lng, center.lat),
            radius,
            marker_options
        )
        if (!circle_params.show) {
            circle.hide()
        }
        map.addOverlay(circle)
        return circle
    }
}

/**
 * 添加信息窗口
 * @param info_params
 */
export function addInfoWindow(
    map: BMapGL.Map | undefined,
    info_params: {
        [key: string]: any
    } & Required<BmComponent.BmInfoWindowProps>
): BMapGL.InfoWindow | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & BMapGL.InfoWindowOptions
        for (let key in info_params) {
            if (key !== 'content' && key !== 'offset') {
                marker_options[key as string] = info_params[key]
            }
        }
        marker_options.offset = new BMapGLRef.value.Size(info_params.offset[0], info_params.offset[1])
        let info = new BMapGLRef.value.InfoWindow(info_params.content, marker_options)
        map.openInfoWindow(info, new BMapGLRef.value.Point(info_params.point.lng, info_params.point.lat))
        return info
    }
}

/**
 * 添加贝塞尔曲线
 * @param center
 * @param radius
 * @param circle_params
 */
export function addBezierCurve(
    map: BMapGL.Map | undefined,
    params: {
        [key: string]: any
    } & Required<BmComponent.BmBezierCurveProps>
): {
    bc: BMapGL.BezierCurve | null
    removeOverlay: Function,
    overallView: (points?: BMapGL.Point[]) => void,
} | undefined {
    if (BMapGLRef.value && map) {
        let points = [] as BMapGL.Point[]
        for (let point of params.points) {
            points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let control_points_arr = []
        for (let control_points of params.controlPoints) {
            let control_point_arr = []
            for (let control_point of control_points) {
                control_point_arr.push(new BMapGLRef.value.Point(control_point.lng, control_point.lat))
            }
            control_points_arr.push(control_point_arr)
        }
        let bc = new BMapGLRef.value.BezierCurve(points, control_points_arr)
        bc.hide()
        map.addOverlay(bc)
        return {
            bc,
            removeOverlay: () => {
                map.removeOverlay(bc)
            },
            overallView: (new_points) => {
                map.setViewport(new_points || points)
            }
        }
    }
}

/**
 * 添加自定义折线覆盖物实现
 * @param points
 * @param polyline_params
 */
export function addCustomPolyline(
    map: BMapGL.Map | undefined,
    points: {
        lng: number
        lat: number
    }[],
    polyline_params: {
        [key: string]: any
    } & Required<BmComponent.BmCustomPolylineProps>
): {
    polyline: BmComponent.CustomPolyline | null
    removeOverlay: Function,
    overallView: (points?: BMapGL.Point[]) => void,
} | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.PolylineOptions>
        for (let key in polyline_params) {
            if (key !== 'points' && key !== 'icons') {
                marker_options[key as string] = polyline_params[key]
            }
        }
        if (polyline_params.icons) {
            marker_options.icons = []
            for (let icon of polyline_params.icons) {
                if (!BMapGLRef.value.IconSequence) {
                    console.error('BMapGL 暂不支持 IconSequence')
                    break
                }
                marker_options.push(
                    new BMapGLRef.value.IconSequence(new BMapGLRef.value.Symbol(icon.symbol, icon), icon.offset, icon.repeat, icon.fixedRotation)
                )
            }
        }
        let polyline_points = [] as BMapGL.Point[]
        for (let point of points) {
            polyline_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        CustomPolyline.prototype = new (BMapGLRef.value as BMapGL.BMapGL).Overlay()
        let polyline = new (CustomPolyline as any)(polyline_points, marker_options)
        polyline.hide()
        map.addOverlay(polyline)
        return {
            polyline,
            removeOverlay: () => {
                map.removeOverlay(polyline)
            },
            overallView: (new_points) => {
                map.setViewport(new_points || polyline_points)
            }
        }
    }
}

/**
 * 添加自定义路书实现
 * @param points
 * @param polyline_params
 */
export function addCustomLushu(
    map: BMapGL.Map | undefined,
    points: {
        lng: number
        lat: number
    }[],
    lushu_params: {
        [key: string]: any
    } & BmComponent.BmCustomLushuProps
): {
    lushu: BmComponent.CustomLushu | null
} | undefined {
    if (BMapGLRef.value && map) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BmComponent.CustomLushuOptions>
        for (let key in lushu_params) {
            if (key !== 'points' && key !== 'icons') {
                marker_options[key as string] = lushu_params[key]
            }
        }
        let lushu_points = [] as BMapGL.Point[]
        for (let point of points) {
            lushu_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        CustomLushu.prototype = new (BMapGLRef.value as BMapGL.BMapGL).Overlay()
        let lushu = new (CustomLushu as any)(lushu_points, lushu_params)
        lushu.hide()
        map.addOverlay(lushu)
        return {
            lushu: lushu as BmComponent.CustomLushu,
        }
    }
    return
}