import { BMapGLLibRef, BMapGLRef, state } from './map'

/**
 * 添加驾驶线路规划
 */
export function addDrivingRoute(
    map: BMapGL.Map | undefined,
    params: {
        [key: string]: any
    } & Required<BaiduMapVue3.BmDrivingRouteProps>
): BMapGL.DrivingRoute | undefined {
    if (BMapGLRef.value && map) {
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
            options.location = map
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map
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
    map: BMapGL.Map | undefined,
    params: {
        [key: string]: any
    } & Required<BaiduMapVue3.BmTransitRouteProps>
): BMapGL.TransitRoute | undefined {
    if (BMapGLRef.value && map) {
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
            options.location = map
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map
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
    map: BMapGL.Map | undefined,
    params: {
        [key: string]: any
    } & Required<BaiduMapVue3.BmWalkingRouteProps>
): BMapGL.WalkingRoute | undefined {
    if (BMapGLRef.value && map) {
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
            options.location = map
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map
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
    map: BMapGL.Map | undefined,
    params: {
        [key: string]: any
    } & Required<BaiduMapVue3.BmRidingRouteProps>
): BMapGL.RidingRoute | undefined {
    if (BMapGLRef.value && map) {
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
            options.location = map
        }

        if (typeof options.renderOptions !== 'undefined') {
            if (typeof options.renderOptions.map === 'undefined') {
                options.renderOptions.map = map
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
    BMapGLLib: BMapGLLib | undefined
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
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGLLib
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
    map: BMapGL.Map | undefined,
    tool_params: {
        [key: string]: any
    } & Required<BaiduMapVue3.BmDistanceToolProps>
): BMapGL.DistanceTool | undefined {
    if (BMapGLRef.value && map && BMapGLLibRef.value) {
        let tool = new BMapGLLibRef.value.DistanceTool(map)
        return tool
    }
}

/**
 * 初始化绘制工具库
 */
export function initDrawingManager(): Promise<{
    BMapGLLib: BMapGLLib | undefined
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
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGLLib
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
    map: BMapGL.Map | undefined,
    tool_params: {
        [key: string]: any
    } & Required<BaiduMapVue3.BmDrawingManagerProps>
): BMapGL.DrawingManager | undefined {
    if (BMapGLRef.value && map && BMapGLLibRef.value) {
        let tool = new BMapGLLibRef.value.DrawingManager(map)
        return tool
    }
}

/**
 * 初始化富文本标记库
 */
export function initRichMarker(): Promise<{
    BMapGLLib: BMapGLLib | undefined
}> {
    return new Promise((resolve, reject) => {
        if (!state.value.richmarker_lib_inited) {
            let script = document.createElement('script')
            script.src = `//mapopen.bj.bcebos.com/github/BMapGLLib/RichMarker/src/RichMarker.min.js`
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            script.onload = function (this: any) {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    // @ts-ignore
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGLLib
                    state.value.richmarker_lib_inited = true
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
 * 添加富文本标记库
 * @param tool_params
 */
export function addRichMarker(
    map: BMapGL.Map | undefined,
    tool_params: {
        [key: string]: any
    } & Required<BaiduMapVue3.BmRichMarkerProps>
): BMapGL.RichMarker | undefined {
    if (BMapGLRef.value && map && BMapGLLibRef.value) {
        let tool = new BMapGLLibRef.value.RichMarker(tool_params.html, new BMapGLRef.value.Point(tool_params.point.lng, tool_params.point.lat), {
            anchor: new BMapGLRef.value.Size(tool_params.anchor[0], tool_params.anchor[1]),
            enableDragging: tool_params.enableDragging,
        })
        if (!tool_params.show) {
            tool.hide()
        }
        map.addOverlay(tool);
        return tool
    }
}

/**
 * 初始地理工具库库
 */
export function initGeoUtils(): Promise<{
    BMapGLLib: BMapGLLib | undefined
}> {
    return new Promise((resolve, reject) => {
        if (!state.value.geoutils_lib_inited) {
            let script = document.createElement('script')
            script.src = `//mapopen.bj.bcebos.com/github/BMapGLLib/GeoUtils/src/GeoUtils.min.js`
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            script.onload = function (this: any) {
                if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                    // @ts-ignore
                    BMapGLLibRef.value = globalThis.BMapGLLib as BMapGLLib
                    state.value.geoutils_lib_inited = true
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