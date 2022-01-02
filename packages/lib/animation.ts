import { BMapGL, BmViewAnimationKeyFramesProps, BmViewAnimationProps } from 'types';
import { BMapGLRef, map } from './map';

/**
 * 添加动画
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
        var animation = new BMapGLRef.value.ViewAnimation(keyFrames, animation_options);
        map.value.startViewAnimation(animation);
        return animation
    }
}