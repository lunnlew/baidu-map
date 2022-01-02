import { BMapGL, BmTrackAnimationProps, BmViewAnimationKeyFramesProps, BmViewAnimationProps } from 'types';
import { BMapGLRef, BMapGLLibRef, map, state } from './map';

/**
 * 添加视图动画
 * @param animation_params
 */
export function addViewAnimation(animation_params: {
    [key: string]: any
} & Required<BmViewAnimationProps>): BMapGL.ViewAnimation | undefined {
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
            keyFrames = (animation_params.keyFrames as BmViewAnimationKeyFramesProps[]).map((item) => {
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
        let animation = new BMapGLRef.value.ViewAnimation(keyFrames, animation_options);
        map.value.startViewAnimation(animation);
        return animation
    }
}


/**
 * 初始化轨迹动画库
 */
export function initTrackAnimation(): Promise<{
    BMapGLLib: BMapGL.BMapGLLib | undefined;
}> {
    return new Promise((resolve, reject) => {
        if (!state.value.track_animation_lib_inited) {
            let script = document.createElement("script");
            script.src = `https://api.map.baidu.com/library/TrackAnimation/src/TrackAnimation_min.js`;
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            script.onload = function (this: any) {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    // @ts-ignore
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGL.BMapGLLib;
                    state.value.track_animation_lib_inited = true;
                    resolve({
                        BMapGLLib: BMapGLLibRef.value
                    })
                }
                script.onload = null;
            }
            document.body.appendChild(script);
        } else {
            resolve({
                BMapGLLib: BMapGLLibRef.value
            })
        }
    })
}

/**
 * 添加轨迹动画
 * @param animation_params
 */
export function addTrackAnimation(animation_params: {
    [key: string]: any
} & Required<BmTrackAnimationProps>): BMapGL.TrackAnimation | undefined {
    if (BMapGLRef.value && map.value && BMapGLLibRef.value) {
        let animation_options = {} as {
            [key: string]: any
        } & BMapGL.TrackAnimationOptions
        for (let key in animation_params) {
            if (key !== 'points') {
                animation_options[key as string] = animation_params[key]
            }
        }
        let points = [];
        for (let point of animation_params.points) {
            points.push(new BMapGLRef.value.Point(point.lng, point.lat))
        }
        let pl = new BMapGLRef.value.Polyline(points);
        let animation = new BMapGLLibRef.value.TrackAnimation(map.value, pl, animation_options);
        animation.start();
        return animation
    }
}