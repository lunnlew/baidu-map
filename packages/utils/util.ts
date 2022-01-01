import { BaiduMapProps, BmContextMenuProps, BmCircleProps, BmCityBoundaryProps, BmCityListControlProps, BmContextMenuItemProps, BmCopyrightControlProps, BmGroundOverlayImageProps, BmGroundOverlayProps, BmInfoWindowProps, BmLabelProps, BmLocationControlProps, BmMapTypeControlProps, BmMarkerIconProps, BmMarkerProps, BmMarkerThreedIconProps, BmNavigationControlProps, BmNavigationThreedControlProps, BmScaleControlProps, BmZoomControlProps, BmMarker3DProps, BmPolygonProps, BmPolylineProps, BmPrismProps } from "types"
import { withDefaults, defineProps } from "vue"
/**
 * 合并实际的属性值
 * @param used_props 
 * @param define_props 
 * @returns 
 */
export function mergePropsDefault(used_props: {
    [key: string]: any
}, define_props: {
    [key: string]: any
}) {
    if (!used_props) {
        used_props = {}
    }
    let props = {} as any
    for (let key in define_props) {
        if (key in used_props) {
            props[key] = used_props[key]
        } else {
            if (typeof define_props[key].default == 'function') {
                props[key] = define_props[key].default()
            } else {
                props[key] = define_props[key].default
            }
        }
    }
    return props
}
/**
 * 提取事件名称
 */
export function extractEmitEvents(attr: {
    [key: string]: any
}): string[] {
    let events = []
    for (let key in attr) {
        if (key.startsWith('on')) {
            events.push(key.substring(2).toLowerCase())
        }
    }
    return events
}
