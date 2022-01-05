import { BMapGL, BmDistanceToolProps, BmDrawingManagerProps, BmDrivingRouteProps, BmRidingRouteProps, BmTransitRouteProps, BmWalkingRouteProps } from 'typings'
import { BMapGLLibRef, BMapGLRef, map, state } from './map'

/**
 * 添加驾驶线路规划
 */
export function addDrivingRoute(
    params: {
        [key: string]: any
    } & Required<BmDrivingRouteProps>
): BMapGL.DrivingRoute | undefined {
    if (BMapGLRef.value && map.value) {
        let options = {} as {
            [key: string]: any
        } & Required<BMapGL.DrivingRouteOptions>
        for (let key in params) {
            if (key !== 'location' && key !== 'start' && key !== 'end') {
                options[key as string] = params[key]
            }
        }
        if (typeof params.location == 'string') {
            options.location = params.location
        } else if (location instanceof BMapGLRef.value.Map) {
            options.location = params.location
        } else if ('lng' in location && 'lat' in location) {
            let location = params.location as {
                lng: number
                lat: number
            }
            options.location = new BMapGLRef.value.Point(location.lng, location.lat)
        } else {
            options.location = map.value
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map.value
            }
        }
        let dr = new BMapGLRef.value.DrivingRoute(options.location, options)
        return dr
    }
}

/**
 * 添加公交线路规划
 */
export function addTransitRoute(
    params: {
        [key: string]: any
    } & Required<BmTransitRouteProps>
): BMapGL.TransitRoute | undefined {
    if (BMapGLRef.value && map.value) {
        let options = {} as {
            [key: string]: any
        } & Required<BMapGL.TransitRouteOptions>
        for (let key in params) {
            if (key !== 'location' && key !== 'start' && key !== 'end') {
                options[key as string] = params[key]
            }
        }
        if (typeof params.location == 'string') {
            options.location = params.location
        } else if (location instanceof BMapGLRef.value.Map) {
            options.location = params.location
        } else if ('lng' in location && 'lat' in location) {
            let location = params.location as {
                lng: number
                lat: number
            }
            options.location = new BMapGLRef.value.Point(location.lng, location.lat)
        } else {
            options.location = map.value
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map.value
            }
        }
        let dr = new BMapGLRef.value.TransitRoute(options.location, options)
        return dr
    }
}

/**
 * 添加步行线路规划
 */
export function addWalkingRoute(
    params: {
        [key: string]: any
    } & Required<BmWalkingRouteProps>
): BMapGL.WalkingRoute | undefined {
    if (BMapGLRef.value && map.value) {
        let options = {} as {
            [key: string]: any
        } & Required<BMapGL.WalkingRouteOptions>
        for (let key in params) {
            if (key !== 'location' && key !== 'start' && key !== 'end') {
                options[key as string] = params[key]
            }
        }
        if (typeof params.location == 'string') {
            options.location = params.location
        } else if (location instanceof BMapGLRef.value.Map) {
            options.location = params.location
        } else if ('lng' in location && 'lat' in location) {
            let location = params.location as {
                lng: number
                lat: number
            }
            options.location = new BMapGLRef.value.Point(location.lng, location.lat)
        } else {
            options.location = map.value
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map.value
            }
        }
        let dr = new BMapGLRef.value.WalkingRoute(options.location, options)
        return dr
    }
}

/**
 * 添加骑行线路规划
 */
export function addRidingRoute(
    params: {
        [key: string]: any
    } & Required<BmRidingRouteProps>
): BMapGL.RidingRoute | undefined {
    if (BMapGLRef.value && map.value) {
        let options = {} as {
            [key: string]: any
        } & Required<BMapGL.RidingRouteOptions>
        for (let key in params) {
            if (key !== 'location' && key !== 'start' && key !== 'end') {
                options[key as string] = params[key]
            }
        }
        if (typeof params.location == 'string') {
            options.location = params.location
        } else if (location instanceof BMapGLRef.value.Map) {
            options.location = params.location
        } else if ('lng' in location && 'lat' in location) {
            let location = params.location as {
                lng: number
                lat: number
            }
            options.location = new BMapGLRef.value.Point(location.lng, location.lat)
        } else {
            options.location = map.value
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map.value
            }
        }
        let dr = new BMapGLRef.value.RidingRoute(options.location, options)
        return dr
    }
}

/**
 * 初始化测距工具库
 */
export function initDistanceTool(): Promise<{
    BMapGLLib: BMapGL.BMapGLLib | undefined
}> {
    return new Promise((resolve, reject) => {
        if (!state.value.distance_tool_lib_inited) {
            let script = document.createElement('script')
            script.src = `//mapopen.cdn.bcebos.com/github/BMapGLLib/DistanceTool/src/DistanceTool.min.js`
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            script.onload = function (this: any) {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    // @ts-ignore
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGL.BMapGLLib
                    state.value.distance_tool_lib_inited = true
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
 * 添加测距工具库
 * @param tool_params
 */
export function addDistanceTool(
    tool_params: {
        [key: string]: any
    } & Required<BmDistanceToolProps>
): BMapGL.DistanceTool | undefined {
    if (BMapGLRef.value && map.value && BMapGLLibRef.value) {
        let tool = new BMapGLLibRef.value.DistanceTool(map.value)
        return tool
    }
}

/**
 * 初始化绘制工具库
 */
export function initDrawingManager(): Promise<{
    BMapGLLib: BMapGL.BMapGLLib | undefined
}> {
    return new Promise((resolve, reject) => {
        if (!state.value.drawing_tool_lib_inited) {
            var style = document.createElement('link');
            style.href = '//mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.css';
            style.rel = 'stylesheet';
            style.type = 'text/css';
            document.getElementsByTagName('HEAD')?.item(0)?.appendChild(style);


            let script = document.createElement('script')
            script.src = `//mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js`
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            script.onload = function (this: any) {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    // @ts-ignore
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGL.BMapGLLib
                    state.value.drawing_tool_lib_inited = true
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
 * 添加测距工具库
 * @param tool_params
 */
export function addDrawingManager(
    tool_params: {
        [key: string]: any
    } & Required<BmDrawingManagerProps>
): BMapGL.DrawingManager | undefined {
    if (BMapGLRef.value && map.value && BMapGLLibRef.value) {
        let tool = new BMapGLLibRef.value.DrawingManager(map.value)
        return tool
    }
}