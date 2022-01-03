import { BMapGL } from "types"
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

interface AllEventMap {
    Map: BMapGL.MapEvent;
    Marker: BMapGL.OverlayEvent;
    Label: BMapGL.OverlayEvent;
    Polyline: BMapGL.OverlayEvent;
    Polygon: BMapGL.OverlayEvent;
    Circle: BMapGL.OverlayEvent;
    Prism: BMapGL.OverlayEvent;
    InfoWindow: BMapGL.InfoWindowEvent;
    ZoomControl: BMapGL.ZoomControlEvent;
    ScaleControl: BMapGL.ScaleControlEvent;
    MapTypeControl: BMapGL.MapTypeControlEvent;
    ViewAnimation: BMapGL.ViewAnimationEvent;
    DistanceTool: BMapGL.DistanceToolEvent;
}
type AllEvent = keyof AllEventMap;
type OnBMapGLEventPayload<T extends AllEvent> = AllEventMap[T]
type AllBMapGLType = keyof BMapGL.BMapGL;
type OnBMapGLPayload<U extends AllBMapGLType> = BMapGL.BMapGL[U]
type EventL = {
    addEventListener<U extends AllBMapGLType, T extends PickEvent<AllEventMap>>(event: T, handler: (e: any, obj: OnBMapGLPayload<U>) => void): void
    removeEventListener<U extends AllBMapGLType, T extends PickEvent<AllEventMap>>(event: T, handler: (e: any, obj: OnBMapGLPayload<U>) => void): void
};
type ValueOf<T> = T[keyof T]
type PickEvent<U> = ValueOf<U>[keyof ValueOf<U>]
type DataKey<T> = T[keyof T]

/**
 * 提取事件名称
 */
export function extractEmitEvents<T, U extends DataKey<T>>(attr: T): U {
    let events = []
    for (let key in attr) {
        if (key.startsWith('on')) {
            events.push(key.substring(2).toLowerCase())
        }
    }
    return events as unknown as U
}

/**
 * 绑定事件
 * @param obj keyof BMapGL.BMapGL
 * @param events AllEvent
 * @param emit Function
 */
export function bindEvents<U, T extends PickEvent<AllEventMap>>(obj: U, events: T[], emit: (event: T, ...args: any[]) => void): U {
    if (obj) {
        for (let eName of events) {
            (obj as unknown as EventL).addEventListener(eName, (e) => {
                /**
                 * 重新绑定百度地图事件代理中缺失的方法
                 */
                e.preventDefault = e.preventDefault || e.domEvent?.preventDefault.bind(e.domEvent)
                e.stopPropagation = e.stopPropagation || e.domEvent?.stopPropagation.bind(e.domEvent)
                emit(eName, e, obj)
            });
        }
    }
    return obj
}