import {
    BMapGL,
    BmDistanceToolProps,
    BmLushuAnimationProps,
    BmMarkerIconProps,
    BmTrackAnimationProps,
    BmViewAnimationKeyFramesProps,
    BmViewAnimationProps,
} from 'typings'
import { BMapGLRef, BMapGLLibRef, map, state } from './map'

/**
 * 添加视图动画
 * @param animation_params
 */
export function addViewAnimation(
    animation_params: {
        [key: string]: any
    } & Required<BmViewAnimationProps>
): BMapGL.ViewAnimation | undefined {
    if (BMapGLRef.value && map.value) {
        let animation_options = {} as {
            [key: string]: any
        } & BMapGL.ViewAnimationOptions
        for (let key in animation_params) {
            if (key !== 'keyFrames') {
                animation_options[key as string] = animation_params[key]
            }
        }
        let keyFrames = [] as BMapGL.ViewAnimationKeyFrames[]
        if (animation_params.keyFrames) {
            keyFrames = (animation_params.keyFrames as BmViewAnimationKeyFramesProps[]).map(item => {
                if (BMapGLRef.value) {
                    return {
                        center: new BMapGLRef.value.Point(item.center.lng, item.center.lat),
                        zoom: item.zoom,
                        heading: item.heading,
                        tilt: item.tilt,
                        percentage: item.percentage,
                    }
                }
            }) as unknown as BMapGL.ViewAnimationKeyFrames[]
        }
        let animation = new BMapGLRef.value.ViewAnimation(keyFrames, animation_options)
        return animation
    }
}

/**
 * 初始化轨迹动画库
 */
export function initTrackAnimation(): Promise<{
    BMapGLLib: BMapGL.BMapGLLib | undefined
}> {
    return new Promise((resolve, reject) => {
        if (!state.value.track_animation_lib_inited) {
            let script = document.createElement('script')
            script.src = `//api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js`
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            script.onload = function (this: any) {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    // @ts-ignore
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGL.BMapGLLib
                    state.value.track_animation_lib_inited = true
                    resolve({
                        BMapGLLib: BMapGLLibRef.value,
                    })
                }
                script.onload = null
            }
            document.body.appendChild(script)
        } else {
            resolve({
                BMapGLLib: BMapGLLibRef.value,
            })
        }
    })
}

/**
 * 添加轨迹动画
 * @param animation_params
 */
export function addTrackAnimation(
    animation_params: {
        [key: string]: any
    } & Required<BmTrackAnimationProps>
): BMapGL.TrackAnimation | undefined {
    if (BMapGLRef.value && map.value && BMapGLLibRef.value) {
        let animation_options = {} as {
            [key: string]: any
        } & BMapGL.TrackAnimationOptions
        for (let key in animation_params) {
            if (key !== 'points' && key !== 'polyline') {
                animation_options[key as string] = animation_params[key]
            }
        }

        let polyline_options = {} as {
            [key: string]: any
        } & BMapGL.PolylineOptions
        if (animation_params.polyline) {
            for (let key in animation_params.polyline) {
                if (key !== 'points') {
                    polyline_options[key as string] = animation_params.polyline[key]
                }
            }
        }

        let points = []
        if (animation_params.polyline?.points) {
            for (let point of animation_params.polyline.points) {
                points.push(new BMapGLRef.value.Point(point.lng, point.lat))
            }
        } else {
            for (let point of animation_params.points) {
                points.push(new BMapGLRef.value.Point(point.lng, point.lat))
            }
        }
        let pl = new BMapGLRef.value.Polyline(points, polyline_options)
        let animation = new BMapGLLibRef.value.TrackAnimation(map.value, pl, animation_options)
        return animation
    }
}

/**
 * 初始化路书动画库
 */
export function initLushu(): Promise<{
    BMapGLLib: BMapGL.BMapGLLib | undefined
}> {
    return new Promise((resolve, reject) => {
        if (!state.value.lushu_animation_lib_inited) {
            let script = document.createElement('script')
            script.src = `//bj.bcebos.com/v1/mapopen/github/BMapGLLib/Lushu/src/Lushu.min.js`
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            script.onload = function (this: any) {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    // @ts-ignore
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGL.BMapGLLib
                    state.value.lushu_animation_lib_inited = true
                    resolve({
                        BMapGLLib: BMapGLLibRef.value,
                    })
                }
                script.onload = null
            }
            document.body.appendChild(script)
        } else {
            resolve({
                BMapGLLib: BMapGLLibRef.value,
            })
        }
    })
}

/**
 * 添加路书动画
 * @param animation_params
 */
export function addLushu(
    animation_params: {
        [key: string]: any
    } & Required<BmLushuAnimationProps>
):
    | {
        animation: BMapGL.LushuAnimation | null
        overlay: BMapGL.Overlay | null
        clearOverlays: Function
    }
    | undefined {
    if (BMapGLRef.value && map.value && BMapGLLibRef.value) {
        let animation_options = {} as {
            [key: string]: any
        } & BMapGL.LushuAnimationOptions
        for (let key in animation_params) {
            if (key !== 'points' && key !== 'polyline' && key !== 'icon') {
                animation_options[key as string] = animation_params[key]
            }
        }

        let polyline_options = {} as {
            [key: string]: any
        } & BMapGL.PolylineOptions
        if (animation_params.polyline) {
            for (let key in animation_params.polyline) {
                if (key !== 'points') {
                    polyline_options[key as string] = animation_params.polyline[key]
                }
            }
        }

        if (typeof animation_params.icon === 'string') {
            if (animation_params.icon) {
                animation_options.icon = new BMapGLRef.value.Icon(
                    animation_params.icon,
                    new BMapGLRef.value.Size(48, 48),
                    {
                        anchor: new BMapGLRef.value.Size(24, 24),
                    }
                )
            }
        } else {
            let icon_props = animation_params.icon as unknown as Required<BmMarkerIconProps>
            animation_options.icon = new BMapGLRef.value.Icon(
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

        if (!animation_options.icon) {
            throw new Error('icon is required')
        }

        let points = []
        if (animation_params.polyline?.points) {
            for (let point of animation_params.polyline.points) {
                points.push(new BMapGLRef.value.Point(point.lng, point.lat))
            }
        } else {
            for (let point of animation_params.points) {
                points.push(new BMapGLRef.value.Point(point.lng, point.lat))
            }
        }
        let overlay = new BMapGLRef.value.Polyline(points, polyline_options)
        if (animation_params.show) {
            animation_params.overallView && map.value.setViewport(points)
        } else {
            overlay.hide()
        }
        map.value.addOverlay(overlay)
        let animation = new BMapGLLibRef.value.LuShu(map.value, points, animation_options)
        return {
            animation,
            overlay,
            clearOverlays: () => {
                map.value?.removeOverlay(overlay)
            },
        }
    }
}
