<template>
    <div class="page-content">
        <div class="code">
            <div class="code-title">
                <span>示例:点标注</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="usecode"></highlightjs>
                </div>
            </div>
            <div class="code-title">
                <span>示例:文本标注</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="usecode1"></highlightjs>
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
            <bm-marker :point="point" :show="isShowMaker">
                <bm-marker-icon :size="[23, 25]" :anchor="[10, 15]" :imageOffset="[0, 0]"></bm-marker-icon>
            </bm-marker>
            <bm-label :position="point" :content="'文本标注'" :offset="[-25, -35]" :show="isShowLabel"> </bm-label>
        </baidu-map>
    </div>
</template>
<script setup lang="ts">
import { BMapGL } from 'baidu-map-vue3'
import { ref } from 'vue'
import code_marker from '../code/baidu-map-marker.txt?raw'
import code_label from '../code/baidu-map-label.txt?raw'
const usecode = ref(code_marker)
const usecode1 = ref(code_label)
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const isShowMaker = ref(true)
const isShowLabel = ref(true)
</script>
<style lang="less">
.map {
    width: 100%;
    height: 200px;
}
</style>
