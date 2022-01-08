<template>
    <div class="page-content">
        <div class="code">
            <div class="code-title">
                <span>示例:缩放控件</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_zoom"></highlightjs>
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
            <bm-zoom-control
                :offset="[50, 50]"
                :show="true"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_LEFT"
            ></bm-zoom-control>
        </baidu-map>
        <div class="code">
            <div class="code-title">
                <span>示例:比例尺控件</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_scale"></highlightjs>
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
            <bm-scale-control
                :show="true"
                :offset="[50, 30]"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT"
            ></bm-scale-control>
        </baidu-map>
        <div class="code">
            <div class="code-title">
                <span>示例:地图类型控件</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_map_type"></highlightjs>
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
            <bm-map-type-control
                :show="true"
                :offset="[80, 30]"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT"
            ></bm-map-type-control>
        </baidu-map>
        <div class="code">
            <div class="code-title">
                <span>示例:定位控件</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_location"></highlightjs>
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
            <bm-location-control
                :show="true"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :offset="[60, 60]"
            ></bm-location-control>
        </baidu-map>
        <div class="code">
            <div class="code-title">
                <span>示例:城市列表控件</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_citylist"></highlightjs>
                </div>
            </div>
        </div>
        <baidu-map
            class="map1"
            ref="map"
            :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
            :center="point"
            :enableMapClick="true"
            :enableWheelZoom="true"
            :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
        >
            <bm-city-list-control
                :show="true"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :offset="[50, 30]"
            ></bm-city-list-control>
        </baidu-map>
        <div class="code">
            <div class="code-title">
                <span>示例:自定义控件</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_customctl"></highlightjs>
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
            <bm-custom-control :show="true" :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT" :offset="[300, 90]">
                <div class="custom-control-content">
                    <div class="custom-control-title">自定义控件</div>
                    <div class="custom-control-body">
                        <button @click="() => count++">计数:{{ count }}</button>
                    </div>
                </div>
            </bm-custom-control>
        </baidu-map>
    </div>
</template>
<script setup lang="ts">
import { BMapGL } from 'baidu-map-vue3'
import { ref } from 'vue'
import code_zoom from '../code/bm-zoom.txt?raw'
import code_scale from '../code/bm-scale.txt?raw'
import code_map_type from '../code/bm-map-type.txt?raw'
import code_location from '../code/bm-location.txt?raw'
import code_citylist from '../code/bm-citylist.txt?raw'
import code_customctl from '../code/bm-customctl.txt?raw'
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const count = ref(0)
</script>
<style lang="less">
.map {
    width: 100%;
    height: 200px;
}
.map1 {
    width: 100%;
    height: 400px;
}
</style>
