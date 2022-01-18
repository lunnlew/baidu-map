import{d as g,r,b as m,e as v,g as n,h as e,u as t,w as c,B as i,i as l}from"./vendor.aa4ae620.js";var h=`<bm-polyline
    :points="points"
    :overallView="true"
    :show="true"
></bm-polyline>
<script setup lang="ts">
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
<\/script>`,y=`<bm-polygon
    :points="points"
    :overallView="true"
    :show="true"
></bm-polygon>
<script setup lang="ts">
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
<\/script>`,b=`<bm-circle :center="point" :overallView="true" :radius="1000" :show="true"></bm-circle>
<script setup lang="ts">
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
<\/script>`;const f={class:"page-content"},M={class:"code"},w=n("div",{class:"code-title"},[n("span",null,"\u793A\u4F8B:\u6298\u7EBF")],-1),A={class:"code-content"},B={class:"code-snippet"},F={class:"code"},C=n("div",{class:"code-title"},[n("span",null,"\u793A\u4F8B:\u591A\u8FB9\u5F62")],-1),L={class:"code-content"},T={class:"code-snippet"},V={class:"code"},k=n("div",{class:"code-title"},[n("span",null,"\u793A\u4F8B:\u5706\u5F62")],-1),x={class:"code-content"},P={class:"code-snippet"},D=g({setup(X){const o=r({lng:116.403963,lat:39.915119}),p=r([{lng:116.297611,lat:40.047363},{lng:116.302839,lat:40.048219},{lng:116.308301,lat:40.050566},{lng:116.305732,lat:40.054957},{lng:116.304754,lat:40.057953},{lng:116.306487,lat:40.058312},{lng:116.307223,lat:40.056379}]);return(N,j)=>{const s=l("highlightjs"),d=l("bm-polyline"),a=l("baidu-map"),u=l("bm-polygon"),_=l("bm-circle");return m(),v("div",f,[n("div",M,[w,n("div",A,[n("div",B,[e(s,{code:t(h)},null,8,["code"])])])]),e(a,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:o.value,enableMapClick:!0,enableWheelZoom:!0,mapType:t(i).MapTypeId.BMAP_NORMAL_MAP},{default:c(()=>[e(d,{points:p.value,overallView:!0,show:!0},null,8,["points"])]),_:1},8,["center","mapType"]),n("div",F,[C,n("div",L,[n("div",T,[e(s,{code:t(y)},null,8,["code"])])])]),e(a,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:o.value,enableMapClick:!0,enableWheelZoom:!0,mapType:t(i).MapTypeId.BMAP_NORMAL_MAP},{default:c(()=>[e(u,{points:p.value,overallView:!0,show:!0},null,8,["points"])]),_:1},8,["center","mapType"]),n("div",V,[k,n("div",x,[n("div",P,[e(s,{code:t(b)},null,8,["code"])])])]),e(a,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:o.value,enableMapClick:!0,enableWheelZoom:!0,mapType:t(i).MapTypeId.BMAP_NORMAL_MAP},{default:c(()=>[e(_,{center:o.value,overallView:!0,radius:1e3,show:!0},null,8,["center"])]),_:1},8,["center","mapType"])])}}});export{D as default};
