
<template>
  <baidu-map
    class="map"
    ref="map"
    @ready="mapReady"
    :apiKey="'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88'"
    :center="point"
    :zoom="13"
    :enableMapClick="false"
    :mapType="BMapGL.MapTypeId.BMAP_NORMAL_MAP"
  >
    <!-- <bm-zoom-control :offset="[50, 50]"></bm-zoom-control> -->
    <!-- <bm-scale-control :offset="[50, 150]" :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT"></bm-scale-control> -->
    <!-- <bm-copyright-control :offset="[240, 50]"></bm-copyright-control> -->
    <!-- <bm-city-list-control :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT" :offset="[80, 50]"></bm-city-list-control> -->
    <!-- <bm-location-control :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT" :offset="[100, 100]"></bm-location-control> -->
    <!-- <bm-map-type-control></bm-map-type-control> -->
    <!-- <bm-navigation-control :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT" :type="1"></bm-navigation-control> -->
    <!-- <bm-navigation-threed-control :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT" :type="2"></bm-navigation-threed-control> -->
    <!-- <bm-marker
      :point="point"
      @click="click1"
      :show="isShow"
      :enableDragging="true"
      @dragend="dragend"
    >
      <bm-marker-icon :size="[23, 25]" :anchor="[10, 15]" :imageOffset="[0, 0]"></bm-marker-icon>
      <bm-info-window
        :point="point"
        :show="isShow"
        @close="isShow = false"
        :title="'标题'"
        :content="'内容'"
      >
        <button @click="click">点击{{ count }}</button>
        <template v-slot:title>标题slot{{ count }}</template>
      </bm-info-window>
    </bm-marker>-->
    <!-- <bm-polygon
      :points="points"
      @click="click"
    ></bm-polygon>-->
    <!-- <bm-polyline
      :enableEditing="true"
      :points="points"
    ></bm-polyline>-->
    <!-- <bm-marker-threed :point="point" :height="200" :size="80" @click="click">
      <bm-marker-threed-icon
        :src="'http://webmap0.bdimg.com/image/api/marker_red.png'"
        :size="[40, 40]"
        :anchor="[0, 0]"
        :imageOffset="[0, 0]"
      ></bm-marker-threed-icon>
    </bm-marker-threed>-->
    <!-- <bm-city-boundary :str="'广东省广州市白云区'" @click="click">
      <bm-polygon :fillColor="'#f00'" :show="false"></bm-polygon>
    </bm-city-boundary>-->
    <!-- <bm-prism
      @click="mouseover"
      :points="points"
    >
      <bm-info-window
        :point="point"
        :show="isShow"
        @close="isShow = false"
        :title="'标题'"
        :content="'内容'"
      >
        <button @click="click">点击{{ count }}</button>
        <template v-slot:title>标题slot{{ count }}</template>
      </bm-info-window>
    </bm-prism>-->
    <!-- <bm-ground-overlay
      :startPoint="point"
      :endPoint="point"
      :url="'http://localhost:3000/shouhuimap.png'"
    >
      <bm-ground-overlay-image :url="'http://localhost:3000/shouhuimap.png'"></bm-ground-overlay-image>
    </bm-ground-overlay>-->
    <!-- <bm-label
      :position="point"
      :width="100"
      :content="'文本标注'"
      :styles="{
        color: '#000',
        fontSize: '30px',
        border: '2px solid #1E90FF'
      }"
    >{{ count }}</bm-label>-->
    <bm-context-menu>
      <bm-context-menu-item @click="click"></bm-context-menu-item>
      <bm-context-menu-item @click="click"></bm-context-menu-item>
      <bm-context-menu-item @click="click"></bm-context-menu-item>
      <bm-context-menu-item @click="click"></bm-context-menu-item>
      <bm-context-menu-item @click="click"></bm-context-menu-item>
    </bm-context-menu>
    <!-- <bm-circle :center="point" :enableEditing="true" :radius="1000"></bm-circle> -->
    <!-- <bm-info-window :title="'标题'" :content="'内容'">
      <button @click="click">点击{{ count }}</button>
      <template v-slot:title>标题slot{{ count }}</template>
    </bm-info-window>-->
    <!-- <bm-custom-control :anchor="BMapGL.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT" :offset="[100, 100]">
      <button @click="lushu.search()">开始</button>
      <button @click="track.start()">开始1</button>
    </bm-custom-control>-->
    <!-- <bm-view-animation :keyFrames="keyFrames" :show="isShow"></bm-view-animation> -->
    <!-- <bm-track-animation :points="points" ref="track">
      <bm-polyline :points="points" :show="false" :strokeColor="'red'"></bm-polyline>
    </bm-track-animation>-->
    <!-- <bm-lushu :defaultContent="'起飞啦'" :show="true" :speed="500" ref="lushu">
      <bm-marker-icon :src="fly" :size="[100, 100]"></bm-marker-icon>
      <bm-polyline :points="points" :show="true" :strokeColor="'red'"></bm-polyline>
    </bm-lushu>-->
    <!-- <bm-distance-tool ref="lushu"></bm-distance-tool> -->
    <!-- <bm-bezier-curve
      :points="[
        {
          lng: 116.399,
          lat: 39.910
        }, {
          lng: 113.399,
          lat: 39.910
        }, {
          lng: 110.399,
          lat: 39.910
        }
      ]"
      :controlPoints="[[
        {
          lng: 115.399,
          lat: 40.910
        }, {
          lng: 114.399,
          lat: 38.910
        }], [{
          lng: 112.399,
          lat: 38.910
        }
      ]]"
    ></bm-bezier-curve>-->
    <!-- <bm-transit-route
      :location="'北京'"
      :start="{
        lng: 116.404844,
        lat: 40
      }"
      :end="{
        lng: 116.308102,
        lat: 40.056057
      }"
      :onSearchComplete="onSearchComplete"
      ref="lushu"
      v-slot="{ points }"
    >
      <bm-lushu
        :points="points"
        :defaultContent="'起飞啦'"
        :autoCenter="true"
        :show="points && points.length > 0"
        :speed="500"
        ref="track"
      >
        <bm-marker-icon :src="fly" :size="[100, 100]"></bm-marker-icon>
        <bm-polyline :points="points" :show="points && points.length > 0" :strokeColor="'red'"></bm-polyline>
      </bm-lushu>
    </bm-transit-route>-->
  </baidu-map>
</template>
<script setup lang="ts">
// import { BMapGL } from 'baidu-map-vue3';
import { nextTick, ref } from 'vue';
import {
  BaiduMap, BMapGL, BmScaleControl,
  BmZoomControl, BmCopyrightControl, BmNavigationControl, BmLocationControl,
  BmMapTypeControl,
  BmNavigationThreedControl,
  BmCityListControl,
  BmCustomControl,
  BmMarker,
  BmMarkerIcon,
  BmPolyline,
  BmPolygon,
  BmMarkerThreed,
  BmMarkerThreedIcon,
  BmCityBoundary,
  BmPrism,
  BmGroundOverlay,
  BmGroundOverlayImage,
  BmLabel,
  BmContextMenu,
  BmContextMenuItem,
  BmCircle,
  BmInfoWindow,
  BmViewAnimation,
  BmTrackAnimation,
  BmLushu,
  BmDistanceTool,
  BmBezierCurve,
  BmDrivingRoute,
  BmTransitRoute
} from '../packages/main';//../packages/main
const map = ref();
function mapReady(state: {
  BMap: BMapGL.BMapGL,
  map: BMapGL.Map,
  container: HTMLElement,
}) {
  const { BMap, map } = state
  console.log(BMap)
  map.enableScrollWheelZoom();
  map.resize()
  // map.setTilt(75)
  map.setMapType(BMapGL.MapTypeId.BMAP_NORMAL_MAP)
  // var drv = new BMap.DrivingRoute('北京', {
  //   onSearchComplete: function (res) {
  //     if (drv.getStatus() == BMapGL.GeolocationStatusCode.BMAP_STATUS_SUCCESS) {
  //       var plan = res.getPlan(0);
  //       var arrPois = [];
  //       for (var j = 0; j < plan.getNumRoutes(); j++) {
  //         var route = plan.getRoute(j);
  //         arrPois = arrPois.concat(route.getPath());
  //       }
  //       points.value = arrPois;
  //       isShow.value = true
  //       console.log(lushu.value)
  //     }
  //   }
  // })
  // var start = new BMap.Point(116.404844, 40);
  // var end = new BMap.Point(116.308102, 40.056057);
  // drv.search(start, end);
}
const count = ref(0)
const point = ref<{
  lng: number,
  lat: number,
}>({
  lng: 116.403963,
  lat: 39.915119,
})
const points = ref([{
  'lng': 116.297611,
  'lat': 40.047363
}, {
  'lng': 116.302839,
  'lat': 40.048219
}, {
  'lng': 116.308301,
  'lat': 40.050566
}, {
  'lng': 116.305732,
  'lat': 40.054957
}, {
  'lng': 116.304754,
  'lat': 40.057953
}, {
  'lng': 116.306487,
  'lat': 40.058312
}, {
  'lng': 116.307223,
  'lat': 40.056379
}])
const click = (e) => {
  console.log('click',e)
  nextTick(() => {
    isShow.value = true
  })
}
const click1 = () => {
  console.log('click1')
}
const mouseover = (e) => {
  console.log(e)
  count.value++
  nextTick(() => {
    isShow.value = true
  })
}
const mapMoveEnd = (e) => {
  console.log('mapMoveEnd')
  point.value = {
    lng: 116.403963,
    lat: 39.915119,
  }
}
const dragend = (e) => {
  console.log(e)
  point.value = e.latLng
}
const isShow = ref(false)

const keyFrames = ref([
  {
    center: {
      lng: 116.403963,
      lat: 39.915119,
    },
    zoom: 18,
    tilt: 60,
    heading: 0,
    percentage: 0
  },
  {
    center: {
      lng: 116.403963,
      lat: 39.915119,
    },
    zoom: 18,
    tilt: 60,
    heading: 180,
    percentage: 0.5
  },
  {
    center: {
      lng: 116.403963,
      lat: 39.915119,
    },
    zoom: 18,
    tilt: 60,
    heading: 360,
    percentage: 1
  }
])
const fly = ref("data:image/png;base64,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")
const lushu = ref()
const track = ref()
const onSearchComplete = (drv: any, res: any) => {
  if (drv.getStatus() == BMapGL.StatusCode.BMAP_STATUS_SUCCESS) {
    var plan = res.getPlan(0);
    var arrPois = [];
    for (var j = 0; j < plan.getNumLines(); j++) {
      var route = plan.getLine(j);
      arrPois = arrPois.concat(route.getPath());
    }
    return {
      points: arrPois
    }
  }
  return {
    points: []
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  width: 100%;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.map {
  width: 100%;
  height: 100%;
}
</style>
