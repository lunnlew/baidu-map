<template>
    <div class="page-content">
        <div class="code">
            <div class="code-title">
                <span>代码示例</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs language="typescript" :code="usecode"></highlightjs>
                </div>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs language="css" :code="usecode1"></highlightjs>
                </div>
            </div>
        </div>
        <baidu-map
            class="map"
            ref="map"
            :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
            :center="{
                lng: 116.403963,
                lat: 39.915119,
            }"
            :zoom="13"
            :enableMapClick="true"
            :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
        >
        </baidu-map>
    </div>
</template>
<script setup lang="ts">
import { BMapGL } from 'baidu-map-vue3'
import { ref } from 'vue'
const usecode = ref(`<baidu-map
    class="map"
    ref="map"
    :apiKey="apiKey"
    :center="{
        lng: 116.403963,
        lat: 39.915119,
    }"
    :zoom="13"
    :enableMapClick="true"
    :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
    >
</baidu-map>`)
const usecode1 = ref(`.map {
    width: 100%;
    height: 300px;
}`)
</script>
