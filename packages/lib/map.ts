import { ref } from 'vue'
import { BMapGL } from "types"

/**
 * 地图状态
 */
export const state = ref({
    /**
     * 地图是否初始化完成
     */
    inited: false,
});

/**
 * 百度地图JS API AK参数
 */
export const BMapAk = ref('');

/**
 * 百度地图容器
 */
export const containerRef = ref();

/**
 * 百度地图类
 */
export const BMapGLRef = ref<BMapGL.BMapGL>();

/**
 * 百度地图实例
 */
export const map = ref<BMapGL.Map>();

/**
 * 地图中心点坐标
 */
export const map_center = ref<{
    lng: number,
    lat: number,
}>({
    lng: 116.403963,
    lat: 39.915119
});

/**
 * 地图级别
 */
export const map_zoom = ref<number>(13);

/**
 * 初始化百度地图
 */
export async function MapInitializer(container: string | HTMLElement, opts: BMapGL.MapOptions): Promise<{
    BMap: BMapGL.BMapGL;
    map: BMapGL.Map;
    container: string | HTMLElement
}> {
    return new Promise((resolve, reject) => {
        containerRef.value = container;
        if (!state.value.inited) {
            if (!BMapAk.value) {
                throw Error("请提供百度地图APIKEY参数：apiKey");
            }
            // @ts-ignore
            // 地图脚本加载完成后执行的初始化函数 
            globalThis.initializeMap = function () {
                state.value.inited = true;
                // @ts-ignore
                BMapGLRef.value = globalThis.BMapGL as BMapGL.BMapGL;
                console.log('MapOptions', opts, map_center.value, map_zoom.value);
                if (!container) {
                    throw new Error("container is not defined");
                }
                map.value = new BMapGLRef.value.Map(container as string | HTMLElement, opts)
                map.value.centerAndZoom(new BMapGLRef.value.Point(map_center.value.lng, map_center.value.lat), map_zoom.value);
                resolve({
                    BMap: BMapGLRef.value,
                    map: map.value,
                    container: container as string | HTMLElement
                })
            }
            let script = document.createElement("script");
            script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${BMapAk.value}&callback=initializeMap`;
            script.onerror = function () {
                reject(new Error('BMap script load failed'))
            }
            document.body.appendChild(script);
        }
    })
}