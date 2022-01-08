<template>
    <div class="page-content">
        <div class="code">
            <div class="code-title">
                <span>示例:折线</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_polyline"></highlightjs>
                </div>
            </div>
        </div>
        <baidu-map
            class="map"
            ref="map"
            :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
            :center="point"
            :enableMapClick="true"
            :enableWheelZoom="true"
            :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
        >
            <bm-polyline :points="points" :overallView="true" :show="true"></bm-polyline>
        </baidu-map>
        <div class="code">
            <div class="code-title">
                <span>示例:多边形</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_polygon"></highlightjs>
                </div>
            </div>
        </div>
        <baidu-map
            class="map"
            ref="map"
            :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
            :center="point"
            :enableMapClick="true"
            :enableWheelZoom="true"
            :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
        >
            <bm-polygon :points="points" :overallView="true" :show="true"></bm-polygon>
        </baidu-map>
        <div class="code">
            <div class="code-title">
                <span>示例:圆形</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_circle"></highlightjs>
                </div>
            </div>
        </div>
        <baidu-map
            class="map"
            ref="map"
            :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
            :center="point"
            :enableMapClick="true"
            :enableWheelZoom="true"
            :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
        >
            <bm-circle :center="point" :overallView="true" :radius="1000" :show="true"></bm-circle>
        </baidu-map>
    </div>
</template>
<script setup lang="ts">
import { BMapGL } from 'baidu-map-vue3'
import { ref } from 'vue'
import code_polyline from '../code/bm-polyline.txt?raw'
import code_polygon from '../code/bm-polygon.txt?raw'
import code_circle from '../code/bm-circle.txt?raw'
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const points = ref([
    {
        lng: 116.297611,
        lat: 40.047363,
    },
    {
        lng: 116.302839,
        lat: 40.048219,
    },
    {
        lng: 116.308301,
        lat: 40.050566,
    },
    {
        lng: 116.305732,
        lat: 40.054957,
    },
    {
        lng: 116.304754,
        lat: 40.057953,
    },
    {
        lng: 116.306487,
        lat: 40.058312,
    },
    {
        lng: 116.307223,
        lat: 40.056379,
    },
])
</script>
<style lang="less">
.map {
    width: 100%;
    height: 200px;
}
</style>
