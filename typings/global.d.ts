// GlobalComponents for Volar

declare module 'vue' {
    export interface GlobalComponents {
        BaiduMap: typeof import('baidu-map-vue3')['BaiduMap']
    }
}

export { }