import { ref, getCurrentInstance } from 'vue'
import { BaiduMapProps, BMapGL } from 'typings'

/**
 * 地图状态
 */
export const state = ref({
    /**
     * 地图JS环境是否加载完成
     */
    map_loaded: false,
    /**
     * 地图是否初始化完成
     */
    map_inited: false,
    /**
     * 轨迹动画库是否初始化完成
     */
    track_animation_lib_inited: false,
    /**
     * 路书动画库是否初始化完成
     */
    lushu_animation_lib_inited: false,
    /**
     *测距工具库是否初始化完成
     */
    distance_tool_lib_inited: false,
    /**
     *绘制工具库是否初始化完成
     */
    drawing_tool_lib_inited: false,
    /**
     *富文本标注库是否初始化完成
     */
    richmarker_lib_inited: false,
})

/**
 * 百度地图容器
 */
export const containerRef = ref()

/**
 * 百度地图类
 */
export const BMapGLRef = ref<BMapGL.BMapGL>()

/**
 * 百度地图三方库
 */
export const BMapGLLibRef = ref<BMapGL.BMapGLLib>()

/**
 * 百度地图实例
 */
export const map = ref<BMapGL.Map>()

/**
 * 初始化百度地图JS
 * @param apiKey 百度地图API Key
 */
export function initMap(apiKey: string): Promise<{
    BMapGL: BMapGL.BMapGL | undefined
}> {
    return new Promise((resolve, reject) => {
        let instance = getCurrentInstance()
        if (!state.value.map_loaded || !BMapGLRef.value) {
            // @ts-ignore
            if (!globalThis.BMapGL) {
                if (!apiKey) {
                    apiKey = instance?.appContext.config.globalProperties.$bm_apikey
                    if (!apiKey) {
                        throw Error('请提供百度地图APIKEY参数：apiKey')
                    }
                }
                // @ts-ignore
                // 地图脚本加载完成后执行的初始化函数
                globalThis.initializeMap = function () {
                    state.value.map_loaded = true
                    // @ts-ignore
                    BMapGLRef.value = globalThis.BMapGL as BMapGL.BMapGL
                    instance ? instance.appContext.config.globalProperties.$BMapGL = BMapGLRef.value : ''
                    resolve({
                        BMapGL: BMapGLRef.value,
                    })
                }
                let script = document.createElement('script')
                script.src = `//api.map.baidu.com/api?v=1.0&type=webgl&ak=${apiKey}&callback=initializeMap`
                script.onerror = function () {
                    reject(new Error('BMap script load failed'))
                }
                document.body.appendChild(script)
            } else {
                state.value.map_loaded = true
                // @ts-ignore
                BMapGLRef.value = globalThis.BMapGL as BMapGL.BMapGL
                instance ? instance.appContext.config.globalProperties.$BMapGL = BMapGLRef.value : ''
                resolve({
                    BMapGL: BMapGLRef.value,
                })
            }
        } else {
            instance ? instance.appContext.config.globalProperties.$BMapGL = BMapGLRef.value : ''
            resolve({
                BMapGL: BMapGLRef.value,
            })
        }
    })
}

/**
 * 添加百度地图
 * @param container string | HTMLElement
 * @param map_params
 */
export function addMap(
    container: string | HTMLElement,
    map_params: {
        [key: string]: any
    } & Required<BaiduMapProps>
):
    | {
        BMap: BMapGL.BMapGL | undefined
        map: BMapGL.Map | undefined
        container: string | HTMLElement
    }
    | undefined {
    if (BMapGLRef.value) {
        console.log('MapOptions', map_params)
        if (!container) {
            throw new Error('container is not defined')
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
        map.value.centerAndZoom(
            new BMapGLRef.value.Point(map_params.center.lng, map_params.center.lat),
            map_params.zoom
        )
        state.value.map_inited = true
        return {
            BMap: BMapGLRef.value,
            map: map.value,
            container: container as string | HTMLElement,
        }
    }
}
