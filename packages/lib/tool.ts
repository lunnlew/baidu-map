import { BMapGL, BmDrivingRouteProps, BmRidingRouteProps, BmTransitRouteProps, BmWalkingRouteProps } from 'types'
import { BMapGLRef, map } from './map'

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
