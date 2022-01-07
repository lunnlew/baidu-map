import{d as h,r as n,h as t,b,e as f,g as e,i as o,w as c,u as v,B as k}from"./vendor.b0b43158.js";var g=`<bm-marker :point="point" :show="isShowMaker">
    <bm-marker-icon :size="[23, 25]" :anchor="[10, 15]" :imageOffset="[0, 0]"></bm-marker-icon>
</bm-marker>

<script setup lang="ts">
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const isShowMaker = ref(true)
<\/script>`,w=`<bm-label :position="point" :content="'\u6587\u672C\u6807\u6CE8'" :offset="[-25, -35]" :show="isShowLabel"> </bm-label>

<script setup lang="ts">
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const isShowLabel = ref(true)
<\/script>`;const C={class:"page-content"},M={class:"code"},B=e("div",{class:"code-title"},[e("span",null,"\u793A\u4F8B:\u70B9\u6807\u6CE8")],-1),y={class:"code-content"},L={class:"code-snippet"},S=e("div",{class:"code-title"},[e("span",null,"\u793A\u4F8B:\u6587\u672C\u6807\u6CE8")],-1),x={class:"code-content"},A={class:"code-snippet"},N=h({setup(E){const i=n(g),l=n(w),s=n({lng:116.403963,lat:39.915119}),r=n(!0),p=n(!0);return(F,j)=>{const a=t("highlightjs"),u=t("bm-marker-icon"),_=t("bm-marker"),d=t("bm-label"),m=t("baidu-map");return b(),f("div",C,[e("div",M,[B,e("div",y,[e("div",L,[o(a,{code:i.value},null,8,["code"])])]),S,e("div",x,[e("div",A,[o(a,{code:l.value},null,8,["code"])])])]),o(m,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:s.value,enableMapClick:!0,enableWheelZoom:!0,mapType:v(k).MapTypeId.BMAP_NORMAL_MAP},{default:c(()=>[o(_,{point:s.value,show:r.value},{default:c(()=>[o(u,{size:[23,25],anchor:[10,15],imageOffset:[0,0]})]),_:1},8,["point","show"]),o(d,{position:s.value,content:"\u6587\u672C\u6807\u6CE8",offset:[-25,-35],show:p.value},null,8,["position","show"])]),_:1},8,["center","mapType"])])}}});export{N as default};
