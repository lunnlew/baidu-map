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
        <div class="code-title">
            <span>展示示例</span>
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
            <button @click="toggleCustomControl">{{ toggleCustomControlText }}</button>
            <button @click="toggleCityBoundary">{{ toggleCityBoundaryText }}</button>
            <button @click="togglePolygon">{{ togglePolygonText }}</button>
            <button @click="togglePolyline">{{ togglePolylineText }}</button>
            <button @click="toggleCircle">{{ toggleCircleText }}</button>
            <button @click="toggleContextMenu">{{ toggleContextMenuText }}</button>
            <button @click="toggleViewAnimation">{{ toggleViewAnimationText }}</button>
            <button @click="toggleTrackAnimation">{{ toggleTrackAnimationText }}</button>
            <button @click="toggleLushuAnimation">{{ toggleLushuAnimationText }}</button>
        </div>
        <baidu-map
            class="map"
            ref="map"
            :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
            :center="point"
            :zoom="zoomVal"
            :zoomCenter="zoomCenter"
            :enableMapClick="true"
            :enableWheelZoom="true"
            :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
            @zoom_changed="zoomChange"
            @center_changed="centerChange"
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
            <bm-custom-control
                :show="isShowCustomControl"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :offset="[300, 90]"
            >
                <div class="custom-control-content">
                    <div class="custom-control-title">自定义控件</div>
                    <div class="custom-control-body">
                        <button @click="toggleCustomControlCount">计数:{{ count }}</button>
                        <button @click="isShowCustomControl = false">隐藏</button>
                    </div>
                </div>
            </bm-custom-control>
            <bm-navigation-threed-control
                :show="isShowNavigationThreeControl"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :type="BMapGL.NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL"
            ></bm-navigation-threed-control>
            <bm-city-boundary
                :show="isShowCityBoundary"
                :name="'北京市'"
                :overallView="true"
                :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
                :offset="[60, 60]"
            ></bm-city-boundary>
            <bm-polygon :points="points" :overallView="true" :show="isShowPolygon" @click="onPolygonClick"></bm-polygon>
            <bm-polyline
                :points="points"
                :overallView="true"
                :show="isShowPolyline"
                @click="onPolylineClick"
            ></bm-polyline>
            <bm-circle
                :center="point"
                :overallView="true"
                :radius="1000"
                :show="isShowCircle"
                @click="onCircleClick"
            ></bm-circle>
            <bm-context-menu :show="isShowContextMenu" @click="onCircleClick">
                <bm-context-menu-item @click="onContextMenuClick"></bm-context-menu-item>
                <bm-context-menu-item @click="onContextMenuClick"></bm-context-menu-item>
                <bm-context-menu-item @click="onContextMenuClick"></bm-context-menu-item>
                <bm-context-menu-item @click="onContextMenuClick"></bm-context-menu-item>
                <bm-context-menu-item @click="onContextMenuClick"></bm-context-menu-item>
            </bm-context-menu>
            <bm-view-animation
                :show="isShowViewAnimation"
                :keyFrames="keyFrames"
                @ready="(el:any)=>el.start()"
            ></bm-view-animation>
            <bm-track-animation :show="isShowTrackAnimation" @ready="(el:any)=>el.start()">
                <bm-polyline :points="points" :show="false" :init="false"></bm-polyline>
            </bm-track-animation>
            <bm-driving-route
                :location="'北京'"
                :start="{
                    lng: 116.404844,
                    lat: 40,
                }"
                :end="{
                    lng: 116.308102,
                    lat: 40.056057,
                }"
                :onSearchComplete="onSearchComplete"
                @ready="(el:any)=>el.search()"
                v-slot="{ points }"
            >
                <bm-lushu
                    :defaultContent="'起飞啦'"
                    :overallView="true"
                    :show="isShowLushuAnimation"
                    @ready="(el:any)=>el.start()"
                >
                    <bm-polyline :points="points" :show="false" :init="false"></bm-polyline>
                    <bm-marker-icon :src="fly" :size="[80, 80]" :imageOffset="[0, 0]"></bm-marker-icon>
                </bm-lushu>
            </bm-driving-route>
        </baidu-map>
    </div>
</template>
<script setup lang="ts">
import { BMapGL } from 'baidu-map-vue3'
import code_baidu_map from '../code/baidu-map.txt?raw'
import code_baidu_map_style from '../code/baidu-map-style.txt?raw'
import { computed, ref } from 'vue'
const usecode = ref(code_baidu_map)
const usecode1 = ref(code_baidu_map_style)
const center = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const zoom = ref(13)
const zoomCenter = ref({
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
const point = ref(center.value)
const zoomVal = ref(zoom.value)
function zoomChange(e: any) {
    zoomVal.value = e.target.getZoom()
}
function centerChange(e: any) {
    center.value = e.target.getCenter()
}
const backCenter = function () {
    center.value = {
        lng: 116.403963,
        lat: 39.915119,
    }
    zoom.value = 13
    point.value = center.value
    setTimeout(() => {
        zoomCenter.value = center.value
        zoomVal.value = zoom.value
    }, 300)
}
const isShowMaker = ref(true)
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

const isShowCustomControl = ref(false)
const toggleCustomControlText = computed(() => (isShowCustomControl.value ? '隐藏自定义控件' : '显示自定义控件'))
const toggleCustomControl = function () {
    isShowCustomControl.value = !isShowCustomControl.value
}
const count = ref(0)
const toggleCustomControlCount = function () {
    count.value++
}

const isShowCityBoundary = ref(false)
const toggleCityBoundaryText = computed(() => (isShowCityBoundary.value ? '隐藏城市边界' : '显示城市边界'))
const toggleCityBoundary = function () {
    isShowCityBoundary.value = !isShowCityBoundary.value
}
const isShowPolygon = ref(false)
const togglePolygonText = computed(() => (isShowPolygon.value ? '隐藏多边形' : '显示多边形'))
const togglePolygon = function () {
    isShowPolygon.value = !isShowPolygon.value
}
function onPolygonClick(e: any) {
    isShowPolygon.value = false
}
const isShowPolyline = ref(false)
const togglePolylineText = computed(() => (isShowPolyline.value ? '隐藏折线' : '显示折线'))
const togglePolyline = function () {
    isShowPolyline.value = !isShowPolyline.value
}
function onPolylineClick(e: any) {
    isShowPolyline.value = false
}
const isShowCircle = ref(false)
const toggleCircleText = computed(() => (isShowCircle.value ? '隐藏圆形' : '显示圆形'))
const toggleCircle = function () {
    point.value = {
        lng: 116.403963,
        lat: 39.915119,
    }
    isShowCircle.value = !isShowCircle.value
}
function onCircleClick(e: any) {
    isShowCircle.value = false
}
const isShowContextMenu = ref(false)
const toggleContextMenuText = computed(() => (isShowContextMenu.value ? '禁用右键菜单' : '启用右键菜单'))
const toggleContextMenu = function () {
    isShowContextMenu.value = !isShowContextMenu.value
}
function onContextMenuClick(e: any) {
    isShowContextMenu.value = false
}
const isShowViewAnimation = ref(false)
const toggleViewAnimationText = computed(() => (isShowViewAnimation.value ? '禁用视图动画' : '启用视图动画'))
const toggleViewAnimation = function () {
    isShowViewAnimation.value = !isShowViewAnimation.value
}
const keyFrames = ref([
    {
        center: {
            lng: 116.403963,
            lat: 39.915119,
        },
        zoom: 18,
        tilt: 60,
        heading: 0,
        percentage: 0,
    },
    {
        center: {
            lng: 116.403963,
            lat: 39.915119,
        },
        zoom: 18,
        tilt: 60,
        heading: 180,
        percentage: 0.5,
    },
    {
        center: {
            lng: 116.403963,
            lat: 39.915119,
        },
        zoom: 18,
        tilt: 60,
        heading: 360,
        percentage: 1,
    },
])

const isShowTrackAnimation = ref(false)
const toggleTrackAnimationText = computed(() => (isShowTrackAnimation.value ? '禁用轨迹动画' : '启用轨迹动画'))
const toggleTrackAnimation = function () {
    isShowTrackAnimation.value = !isShowTrackAnimation.value
}

const isShowLushuAnimation = ref(false)
const toggleLushuAnimationText = computed(() => (isShowLushuAnimation.value ? '禁用路书动画' : '启用路书动画'))
const toggleLushuAnimation = function () {
    isShowLushuAnimation.value = !isShowLushuAnimation.value
}
const fly = ref(
    'data:image/png;base64,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'
)
function onSearchComplete(bm: any, res: any) {
    if (bm.getStatus() == 0) {
        var plan = res.getPlan(0)
        var arrPois = [] as any
        for (var j = 0; j < plan.getNumRoutes(); j++) {
            var route = plan.getRoute(j)
            arrPois = arrPois.concat(route.getPath())
        }
    }
    return {
        points: arrPois,
    }
}
</script>
<style lang="less">
.map {
    width: 100%;
    height: 400px;
}
</style>
