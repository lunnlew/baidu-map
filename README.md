## BaiduMap Vue3 GL Map Component

### 安装

```sh
npm install --save baidu-map-vue3
// 或者
yarn add baidu-map-vue3
```

### 全局导入

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import BaiduMapVue3 from 'baidu-map-vue3'

const app = createApp(App)
app.use(BaiduMapVue3, {
    apiKey: apiKey,
})
app.mount('#app')
```

### Volar 支持

如果您使用`Volar`，需要在`tsconfig.json`中通过`compilerOptions.types`指定全局组件类型。

```json
// tsconfig.json
{
    "compilerOptions": {
        // ...
        "types": ["baidu-map-vue3/typings/global"]
    }
}
```

### 局部导入

```typescript
<template>
    <baidu-map
        class="map"
        ref="map"
        :apiKey="apiKey"
        :center="point"
        >
    </baidu-map>
</template>

<script setup lang="ts">
import { BaiduMap } from 'baidu-map-vue3'
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
</script>
<style lang="less">
.map {
    width: 100%;
    height: 400px;
}
</style>
```

## License

Licensed under the [MIT](./LICENSE) License
