<template>
    <div class="page-content">
        <div class="code">
            <div class="code-title">
                <span>代码示例</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="usecode"></highlightjs>
                </div>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="usecode1"></highlightjs>
                </div>
            </div>
        </div>
        <div class="btns">
            <button @click="backCenter">回到默认点</button>
            <button @click="toggleMaker">{{ toggleMakerText }}</button>
            <button @click="toggleMakerInfo">{{ toggleMakerInfoText }}</button>
            <button @click="toggle3DMaker">{{ toggle3DMakerText }}</button>
            <button @click="toggleZoomControl">{{ toggleZoomControlText }}</button>
            <button @click="toggleScaleControl">{{ toggleScaleControlText }}</button>
            <button @click="toggleCityListControl">{{ toggleCityListControlText }}</button>
            <button @click="toggleMapTypeControl">{{ toggleMapTypeControlText }}</button>
            <button @click="toggleLocationControl">{{ toggleLocationControlText }}</button>
            <button @click="toggleNavigationControl">{{ toggleNavigationControlText }}</button>
            <button @click="toggleNavigationThreeControl">{{ toggleNavigationThreeControlText }}</button>
            <button @click="toggleCityBoundary">{{ toggleCityBoundaryText }}</button>
        </div>
        <baidu-map
            class="map"
            ref="map"
            :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
            :center="point"
            :zoom="zoom"
            :enableMapClick="true"
            :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
        >
            <bm-marker :point="point" :show="isShowMaker" @click="isShowMakerInfo = !isShowMakerInfo">
                <bm-marker-icon :size="[23, 25]" :anchor="[10, 15]" :imageOffset="[0, 0]"></bm-marker-icon>
                <bm-info-window
                    :point="point"
                    :show="isShowMakerInfo"
                    @close="isShowMakerInfo = false"
                    :title="'标题'"
                    :content="'内容'"
                >
                    <button @click="OnMakerInfoClick">点击</button>
                    <template v-slot:title>标题</template>
                </bm-info-window>
            </bm-marker>
            <bm-marker-threed
                :show="isShow3DMaker"
                :point="point"
                :height="200"
                :size="80"
                @click="isShow3DMaker = !isShow3DMaker"
            >
                <bm-marker-threed-icon
                    :src="'http://webmap0.bdimg.com/image/api/marker_red.png'"
                    :size="[40, 40]"
                    :anchor="[0, 0]"
                    :imageOffset="[0, 0]"
                ></bm-marker-threed-icon>
            </bm-marker-threed>
            <bm-zoom-control :offset="[50, 50]" :show="isShowZoomControl"></bm-zoom-control>
            <bm-scale-control
                :show="isShowScaleControl"
                :offset="[50, 30]"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT"
            ></bm-scale-control>
            <bm-city-list-control
                :show="isShowCityListControl"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :offset="[20, 20]"
            ></bm-city-list-control>
            <bm-map-type-control :show="isShowMapTypeControl"></bm-map-type-control>
            <bm-location-control
                :show="isShowLocationControl"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :offset="[60, 60]"
            ></bm-location-control>
            <bm-navigation-control
                :show="isShowNavigationControl"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :type="BMapGL.NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL"
            ></bm-navigation-control>
            <bm-navigation-threed-control
                :show="isShowNavigationThreeControl"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :type="BMapGL.NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL"
            ></bm-navigation-threed-control>
            <bm-city-boundary
                :show="isShowCityBoundary"
                :name="'北京市'"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :offset="[60, 60]"
            ></bm-city-boundary>
        </baidu-map>
    </div>
</template>
<script setup lang="ts">
import { BMapGL } from 'baidu-map-vue3'
import { computed, ref } from 'vue'
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
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const zoom = ref(13)

const backCenter = function () {
    zoom.value = 13
    point.value = {
        lng: 116.403963,
        lat: 39.915119,
    }
}

const isShowMaker = ref(false)
const toggleMaker = function () {
    isShowMaker.value = !isShowMaker.value
}
const toggleMakerText = computed(() => (isShowMaker.value ? '隐藏Marker' : '显示Marker'))

const isShow3DMaker = ref(false)
const toggle3DMaker = function () {
    isShow3DMaker.value = !isShow3DMaker.value
}
const toggle3DMakerText = computed(() => (isShow3DMaker.value ? '隐藏3DMarker' : '显示3DMarker'))

const isShowMakerInfo = ref(false)
const toggleMakerInfo = function () {
    isShowMakerInfo.value = !isShowMakerInfo.value
}
const toggleMakerInfoText = computed(() => (isShowMakerInfo.value ? '隐藏Marker Info' : '显示Marker Info'))
const OnMakerInfoClick = function () {
    isShowMakerInfo.value = !isShowMakerInfo.value
}

const isShowZoomControl = ref(false)
const toggleZoomControlText = computed(() => (isShowZoomControl.value ? '隐藏缩放控件' : '显示缩放控件'))
const toggleZoomControl = function () {
    isShowZoomControl.value = !isShowZoomControl.value
}

const isShowScaleControl = ref(false)
const toggleScaleControlText = computed(() => (isShowScaleControl.value ? '隐藏比例尺控件' : '显示比例尺控件'))
const toggleScaleControl = function () {
    isShowScaleControl.value = !isShowScaleControl.value
}

const isShowCityListControl = ref(false)
const toggleCityListControlText = computed(() =>
    isShowCityListControl.value ? '隐藏城市列表控件' : '显示城市列表控件'
)
const toggleCityListControl = function () {
    isShowCityListControl.value = !isShowCityListControl.value
}

const isShowMapTypeControl = ref(false)
const toggleMapTypeControlText = computed(() => (isShowMapTypeControl.value ? '隐藏地图类型控件' : '显示地图类型控件'))
const toggleMapTypeControl = function () {
    isShowMapTypeControl.value = !isShowMapTypeControl.value
}

const isShowLocationControl = ref(false)
const toggleLocationControlText = computed(() => (isShowLocationControl.value ? '隐藏定位控件' : '显示定位控件'))
const toggleLocationControl = function () {
    isShowLocationControl.value = !isShowLocationControl.value
}

const isShowNavigationControl = ref(false)
const toggleNavigationControlText = computed(() => (isShowNavigationControl.value ? '隐藏导航控件' : '显示导航控件'))
const toggleNavigationControl = function () {
    isShowNavigationControl.value = !isShowNavigationControl.value
}

const isShowNavigationThreeControl = ref(false)
const toggleNavigationThreeControlText = computed(() =>
    isShowNavigationThreeControl.value ? '隐藏3D导航控件' : '显示3D导航控件'
)
const toggleNavigationThreeControl = function () {
    isShowNavigationThreeControl.value = !isShowNavigationThreeControl.value
}

const isShowCityBoundary = ref(false)
const toggleCityBoundaryText = computed(() => (isShowCityBoundary.value ? '隐藏城市边界' : '显示城市边界'))
const toggleCityBoundary = function () {
    isShowCityBoundary.value = !isShowCityBoundary.value
}
</script>
<style lang="less">
.map {
    width: 100%;
    height: 400px;
}
</style>
