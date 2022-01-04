<template>
    <baidu-map
        class="map"
        ref="container"
        :center="{
            lng: 116.403963,
            lat: 39.915119,
        }"
        :apiKey="'vXmMVFkypVjIvpowRNbd7RgRiPKECtLH'"
    >
    </baidu-map>
</template>
<script setup lang="ts">
import { BaiduMap } from 'baidu-map-vue3'
</script>
<style lang="less">
html,
body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}
#app {
    height: 100%;
    width: 100%;
}
.map {
    width: 100%;
    height: 100%;
}
</style>
