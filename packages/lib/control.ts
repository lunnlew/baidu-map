import {
    BMapGL,
    BmCityListControlProps,
    BmCopyrightControlProps,
    BmLocationControlProps,
    BmMapTypeControlProps,
    BmNavigationControlProps,
    BmNavigationThreedControlProps,
    BmScaleControlProps,
    BmZoomControlProps,
} from 'typings'
import { BMapGLRef, map } from './map'

/**
 * 添加比例尺控件
 * @param props
 */
export function addScaleControl(props: Required<BmScaleControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.ScaleControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加缩放控件
 * @param props
 */
export function addZoomControl(props: Required<BmZoomControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.ZoomControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加版权控件
 * @param props
 */
export function addCopyrightControl(props: Required<BmCopyrightControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.CopyrightControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加缩放平移控件
 * @param props
 */
export function addNavigationControl(props: Required<BmNavigationControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.NavigationControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
            type: props.type,
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加一个特定样式的地图平移缩放控件
 * @param props
 */
export function addNavigationControl3D(props: Required<BmNavigationThreedControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.NavigationControl3D({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加定位控件
 * @param props
 */
export function addLocationControl(props: Required<BmLocationControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.LocationControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加地图类型控件
 * @param props
 */
export function addMapTypeControl(props: Required<BmMapTypeControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.MapTypeControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加城市列表控件
 * @param props
 */
export function addCityListControl(props: Required<BmCityListControlProps>) {
    if (BMapGLRef.value && map.value) {
        let control = new BMapGLRef.value.CityListControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.value.addControl(control)
        return control
    }
}

/**
 * 添加自定义控件
 * @param props
 */
export function addCustomControl(
    props: Required<{
        dom?: HTMLElement
        anchor?: number
        offset?: [number, number]
    }>
) {
    if (BMapGLRef.value && map.value) {
        const Control = function (this: any) {
            this.defaultAnchor = props.anchor
            if (BMapGLRef.value) {
                this.defaultOffset = new BMapGLRef.value.Size(props.offset[0], props.offset[1])
            }
        }
        Control.prototype = new BMapGLRef.value.Control({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        if (!props.dom) {
            console.error('自定义控件dom不能为空')
        }
        Control.prototype.initialize = (map: BMapGL.Map) => props.dom && map.getContainer().appendChild(props.dom)
        let control = new (Control as any)()
        map.value.addControl(control)
        return control
    }
}
