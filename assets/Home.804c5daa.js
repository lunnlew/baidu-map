import{d as o,h as a,b as p,e as c,g as e,i as s,u as t}from"./vendor.51b555a8.js";var i=`npm install --save baidu-map-vue3
// \u6216\u8005
yarn add baidu-map-vue3`,d=`import { createApp } from 'vue'
import App from './App.vue'
import BaiduMapVue3 from 'baidu-map-vue3'

const app = createApp(App)
app.use(BaiduMapVue3, {
    apiKey: apiKey,
});
app.mount('#app')`,l=`<template>
    <baidu-map
        class="map"
        ref="map"
        :apiKey="apiKey"
        :point="point"
        >
    </baidu-map>
</template>

<script setup lang="ts">
import { BaiduMap } from 'baidu-map-vue3'
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
<\/script>
<style lang="less">
.map {
    width: 100%;
    height: 400px;
}
</style>`;const u={class:"page-content"},_={class:"code"},r=e("div",{class:"code-title"},[e("span",null,"\u5B89\u88C5")],-1),m={class:"code-content"},v={class:"code-snippet"},h=e("div",{class:"code-title"},[e("span",null,"\u5168\u5C40\u5BFC\u5165")],-1),g={class:"code-content"},f={class:"code-snippet"},b=e("div",{class:"code-title"},[e("span",null,"\u5C40\u90E8\u5BFC\u5165")],-1),y={class:"code-content"},B={class:"code-snippet"},V=o({setup(C){return(A,x)=>{const n=a("highlightjs");return p(),c("div",u,[e("div",_,[r,e("div",m,[e("div",v,[s(n,{code:t(i)},null,8,["code"])])]),h,e("div",g,[e("div",f,[s(n,{code:t(d)},null,8,["code"])])]),b,e("div",y,[e("div",B,[s(n,{code:t(l)},null,8,["code"])])])])])}}});export{V as default};
