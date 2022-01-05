import { BMapGLRef, map } from './map'
import {
    BMapGL,
    BmMarkerIconProps,
    BmMarkerProps,
    BmMarker3DProps,
    BmPolygonProps,
    BmPolylineProps,
    BmCityBoundaryProps,
    BmPrismProps,
    BmGroundOverlayProps,
    BmLabelProps,
    BmContextMenuProps,
    BmCircleProps,
    BmInfoWindowProps,
    BmBezierCurveProps,
} from 'types'

/**
 * 添加点标注
 * @param point
 * @param marker_params
 */
export function addMaker(
    point: {
        lng: number
        lat: number
    },
    marker_params: {
        [key: string]: any
    } & Required<BmMarkerProps>
): BMapGL.Marker | undefined {
    if (BMapGLRef.value && map.value) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.MarkerOptions>

        if (typeof marker_params.icon === 'string') {
            if (marker_params.icon) {
                marker_options.icon = new BMapGLRef.value.Icon(marker_params.icon, new BMapGLRef.value.Size(48, 48), {
                    anchor: new BMapGLRef.value.Size(24, 24),
                })
            }
        } else {
            let icon_props = marker_params.icon as Required<BmMarkerIconProps>
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
        marker_options.offset = new BMapGLRef.value.Size(marker_params.offset[0], marker_params.offset[1])
        let marker = new BMapGLRef.value.Marker(new BMapGLRef.value.Point(point.lng, point.lat), marker_options)
        map.value.addOverlay(marker)
        return marker
    }
}

/**
 * 添加3D点标注
 * @param point
 * @param marker_params
 */
export function addMaker3D(
    point: {
        lng: number
        lat: number
    },
    marker_params: {
        [key: string]: any
    } & Required<BmMarker3DProps>
): BMapGL.Marker3D | undefined {
    if (BMapGLRef.value && map.value) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.Marker3DOptions>
        if (marker_params.icon) {
            let icon_props = marker_params.icon as Required<BmMarkerIconProps>
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
        map.value.addOverlay(marker)
        return marker
    }
}

/**
 * 添加折线
 * @param points
 * @param polyline_params
 */
export function addPolyline(
    points: {
        lng: number
        lat: number
    }[],
    polyline_params: {
        [key: string]: any
    } & Required<BmPolylineProps>
): BMapGL.Polyline | undefined {
    if (BMapGLRef.value && map.value) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.PolylineOptions>
        for (let key in polyline_params) {
            if (key !== 'points') {
                marker_options[key as string] = polyline_params[key]
            }
        }
        let polyline_points = []
        for (let point of points) {
            polyline_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let polyline = new BMapGLRef.value.Polyline(polyline_points, marker_options)
        if (polyline_params.overallView) {
            map.value.setViewport(polyline_points)
        }
        map.value.addOverlay(polyline)
        return polyline
    }
}

/**
 * 添加多边形
 * @param points
 * @param polygon_params
 */
export function addPolygon(
    points: {
        lng: number
        lat: number
    }[],
    polygon_params: {
        [key: string]: any
    } & Required<BmPolygonProps>
): BMapGL.Polygon | undefined {
    if (BMapGLRef.value && map.value) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.PolygonOptions>
        for (let key in polygon_params) {
            if (key !== 'points') {
                marker_options[key as string] = polygon_params[key]
            }
        }
        let polygon_points = []
        for (let point of points) {
            polygon_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let polygon = new BMapGLRef.value.Polygon(polygon_points, marker_options)
        if (polygon_params.overallView) {
            map.value.setViewport(polygon_points)
        }
        map.value.addOverlay(polygon)
        return polygon
    }
}

/**
 * 城市区域镂空多边形
 * @param points
 * @param polygon_params
 */
export function addCityBoundary(
    name: string,
    boundary_params: {
        [key: string]: any
    } & Required<BmCityBoundaryProps>
): Promise<{
    boundary: BMapGL.Boundary,
    overlay: BMapGL.Overlay,
}> | undefined {
    return new Promise((resolve, reject) => {
        if (BMapGLRef.value && map.value) {
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
            let boundary = new BMapGLRef.value.Boundary()
            boundary.get(name, function (rs: { boundaries: BMapGL.Point[] }) {
                if (BMapGLRef.value && map.value && rs.boundaries.length > 0) {
                    if (boundary_params.overallView) {
                        map.value.setViewport((rs.boundaries[0] as any).split(';').map(function (point: string) {
                            let lnglat = point.split(',') as any
                            if (BMapGLRef.value) {
                                return new BMapGLRef.value.Point(lnglat[0], lnglat[1])
                            }
                        }))
                    }
                    let hole
                    if (
                        rs.boundaries.length == 2 ||
                        !boundary_params.polygon ||
                        !boundary_params.polygon.points ||
                        boundary_params.polygon.points.length == 0
                    ) {
                        hole = new BMapGLRef.value.Polygon(rs.boundaries, marker_options)
                    } else {
                        hole = new BMapGLRef.value.Polygon(
                            [rs.boundaries[0], boundary_params.polygon.points.map((v: number[]) => v.join(', ')).join(';')],
                            marker_options
                        )
                    }
                    map.value.addOverlay(hole)
                    resolve({
                        boundary,
                        overlay: hole,
                    })
                } else {
                    reject(new Error('获取城市边界失败'))
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
    points: {
        lng: number
        lat: number
    }[],
    prism_params: {
        [key: string]: any
    } & Required<BmPrismProps>
): BMapGL.Prism | undefined {
    if (BMapGLRef.value && map.value) {
        let marker_options = {} as {
            [key: string]: any
        } & Required<BMapGL.PrismOptions>
        for (let key in prism_params) {
            if (key !== 'points' && key !== 'altitude') {
                marker_options[key as string] = prism_params[key]
            }
        }
        let prism_points = []
        for (let point of points) {
            prism_points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let prism = new BMapGLRef.value.Prism(prism_points, prism_params.altitude, marker_options)
        if (prism_params.overallView) {
            map.value.setViewport(prism_points)
        }
        map.value.addOverlay(prism)
        return prism
    }
}

/**
 * 添加地面叠加层
 * @param ground_params
 */
export function addGroundOverlay(
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
    } & Required<BmGroundOverlayProps>
): BMapGL.GroundOverlay | undefined {
    if (BMapGLRef.value && map.value) {
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
        map.value.addOverlay(imgOverlay)
        return imgOverlay
    }
}

/**
 * 添加文本标注
 * @param prism_params
 */
export function addLabel(
    label_params: {
        [key: string]: any
    } & Required<BmLabelProps>
): BMapGL.Label | undefined {
    if (BMapGLRef.value && map.value) {
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
        map.value.addOverlay(label)
        return label
    }
}

/**
 * 添加右键菜单
 * @param menu_params
 */
export function addContextMenu(
    menu_params: {
        [key: string]: any
    } & Required<BmContextMenuProps>
): BMapGL.ContextMenu | undefined {
    if (BMapGLRef.value && map.value) {
        let context_menu = new BMapGLRef.value.ContextMenu()
        for (var i = 0; i < menu_params.menus.length; i++) {
            let menu = menu_params.menus[i]
            if (menu.show) {
                context_menu.addItem(
                    new BMapGLRef.value.MenuItem(
                        menu.text || '菜单-' + i,
                        (e: any) => menu.callback && menu.callback(e, map.value, BMapGLRef.value),
                        {
                            width: menu.width,
                            id: menu.id || 'id-' + i,
                        }
                    )
                )
            }
        }
        map.value.addContextMenu(context_menu)
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
    center: {
        lng: number
        lat: number
    },
    radius: number,
    circle_params: {
        [key: string]: any
    } & Required<BmCircleProps>
): BMapGL.Circle | undefined {
    if (BMapGLRef.value && map.value) {
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
        map.value.addOverlay(circle)
        return circle
    }
}

/**
 * 添加信息窗口
 * @param info_params
 */
export function addInfoWindow(
    info_params: {
        [key: string]: any
    } & Required<BmInfoWindowProps>
): BMapGL.InfoWindow | undefined {
    if (BMapGLRef.value && map.value) {
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
        map.value.openInfoWindow(info, new BMapGLRef.value.Point(info_params.point.lng, info_params.point.lat))
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
    params: {
        [key: string]: any
    } & Required<BmBezierCurveProps>
): BMapGL.BezierCurve | undefined {
    if (BMapGLRef.value && map.value) {
        let points = []
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
        if (params.overallView) {
            map.value.setViewport(points)
        }
        map.value.addOverlay(bc)
        return bc
    }
}
