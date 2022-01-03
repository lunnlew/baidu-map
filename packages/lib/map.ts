import { ref } from 'vue'
import { BaiduMapProps, BMapGL } from "types"

/**
 * 地图状态
 */
export const state = ref({
    /**
     * 地图是否初始化完成
     */
    inited: false,
    /**
     * 轨迹动画库是否初始化完成
     */
    track_animation_lib_inited: false,
    /**
     * 路书动画库是否初始化完成
     */
    lushu_animation_lib_inited: false,
});

/**
 * 百度地图容器
 */
export const containerRef = ref();

/**
 * 百度地图类
 */
export const BMapGLRef = ref<BMapGL.BMapGL>();

/**
 * 百度地图三方库
 */
export const BMapGLLibRef = ref<BMapGL.BMapGLLib>();

/**
 * 百度地图实例
 */
export const map = ref<BMapGL.Map>();

/**
 * 初始化百度地图
 */
export function initMap(container: string | HTMLElement, map_params: {
    [key: string]: any
} & Required<BaiduMapProps>): undefined | Promise<{
    BMap: BMapGL.BMapGL;
    map: BMapGL.Map;
    container: string | HTMLElement
}> {
    return new Promise((resolve, reject) => {
        containerRef.value = container;
        if (!state.value.inited) {
            if (!map_params.apiKey) {
                throw Error("请提供百度地图APIKEY参数：apiKey");
            }
            // @ts-ignore
            // 地图脚本加载完成后执行的初始化函数 
            globalThis.initializeMap = function () {
                state.value.inited = true;
                // @ts-ignore
                BMapGLRef.value = globalThis.BMapGL as BMapGL.BMapGL;
                console.log('MapOptions', map_params);
                if (!container) {
                    throw new Error("container is not defined");
                }
                let map_options = {} as {
                    [key: string]: any
                } & Required<BMapGL.MapOptions>
                for (let key in map_params) {
                    if (key !== 'apiKey' && key !== 'center' && key !== 'zoom') {
                        map_options[key as string] = map_params[key]
                    }
                }
                map.value = new BMapGLRef.value.Map(container as string | HTMLElement, map_options)
                map.value.centerAndZoom(new BMapGLRef.value.Point(map_params.center.lng, map_params.center.lat), map_params.zoom);
                resolve({
                    BMap: BMapGLRef.value,
                    map: map.value,
                    container: container as string | HTMLElement
                })
            }
            let script = document.createElement("script");
            script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${map_params.apiKey}&callback=initializeMap`;
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            document.body.appendChild(script);
        }
    })
}