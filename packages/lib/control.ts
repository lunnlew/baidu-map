
import { BMapGLRef } from './map'

/**
 * 添加比例尺控件
 * @param props
 */
export function addScaleControl(map: BMapGL.Map | undefined, props: Required<BmComponent.BmScaleControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.ScaleControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加缩放控件
 * @param props
 */
export function addZoomControl(map: BMapGL.Map | undefined, props: Required<BmComponent.BmZoomControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.ZoomControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加版权控件
 * @param props
 */
export function addCopyrightControl(map: BMapGL.Map | undefined, props: Required<BmComponent.BmCopyrightControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.CopyrightControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加缩放平移控件
 * @param props
 */
export function addNavigationControl(map: BMapGL.Map | undefined, props: Required<BmComponent.BmNavigationControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.NavigationControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
            type: props.type,
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加一个特定样式的地图平移缩放控件
 * @param props
 */
export function addNavigationControl3D(map: BMapGL.Map | undefined, props: Required<BmComponent.BmNavigationThreedControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.NavigationControl3D({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加定位控件
 * @param props
 */
export function addLocationControl(map: BMapGL.Map | undefined, props: Required<BmComponent.BmLocationControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.LocationControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加地图类型控件
 * @param props
 */
export function addMapTypeControl(map: BMapGL.Map | undefined, props: Required<BmComponent.BmMapTypeControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.MapTypeControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加城市列表控件
 * @param props
 */
export function addCityListControl(map: BMapGL.Map | undefined, props: Required<BmComponent.BmCityListControlProps>) {
    if (BMapGLRef.value && map) {
        let control = new BMapGLRef.value.CityListControl({
            anchor: props.anchor,
            offset: new BMapGLRef.value.Size(props.offset[0], props.offset[1]),
        })
        map.addControl(control)
        return control
    }
}

/**
 * 添加自定义控件
 * @param props
 */
export function addCustomControl(
    map: BMapGL.Map | undefined,
    props: Required<{
        dom?: HTMLElement
        anchor?: number
        offset?: [number, number]
    }>
) {
    if (BMapGLRef.value && map) {
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
        map.addControl(control)
        return control
    }
}
