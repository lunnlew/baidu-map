import{d as f,r as n,b as v,e as k,g as e,h as o,w as a,u as l,B as r,i as t}from"./vendor.cb1c36e0.js";var g=`<bm-marker :point="point" :show="isShowMaker">
    <bm-marker-icon :size="[23, 25]" :anchor="[10, 15]" :imageOffset="[0, 0]"></bm-marker-icon>
</bm-marker>

<script setup lang="ts">
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const isShowMaker = ref(true)
<\/script>`,M=`<bm-label :position="point" :content="'\u6587\u672C\u6807\u6CE8'" :offset="[-25, -35]" :show="isShowLabel"> </bm-label>

<script setup lang="ts">
const point = ref({
    lng: 116.403963,
    lat: 39.915119,
})
const isShowLabel = ref(true)
<\/script>`;const w={class:"page-content"},C={class:"code"},y=e("div",{class:"code-title"},[e("span",null,"\u793A\u4F8B:\u70B9\u6807\u6CE8")],-1),B={class:"code-content"},L={class:"code-snippet"},A={class:"code"},x=e("div",{class:"code-title"},[e("span",null,"\u793A\u4F8B:\u6587\u672C\u6807\u6CE8")],-1),F={class:"code-content"},S={class:"code-snippet"},O=f({setup(T){const p=n(g),u=n(M),s=n({lng:116.403963,lat:39.915119}),_=n(!0),d=n(!0);return(z,E)=>{const c=t("highlightjs"),m=t("bm-marker-icon"),h=t("bm-marker"),i=t("baidu-map"),b=t("bm-label");return v(),k("div",w,[e("div",C,[y,e("div",B,[e("div",L,[o(c,{code:p.value},null,8,["code"])])])]),o(i,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:s.value,enableMapClick:!0,enableWheelZoom:!0,mapType:l(r).MapTypeId.BMAP_NORMAL_MAP},{default:a(()=>[o(h,{point:s.value,show:_.value},{default:a(()=>[o(m,{size:[23,25],anchor:[10,15],imageOffset:[0,0]})]),_:1},8,["point","show"])]),_:1},8,["center","mapType"]),e("div",A,[x,e("div",F,[e("div",S,[o(c,{code:u.value},null,8,["code"])])])]),o(i,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:s.value,enableMapClick:!0,enableWheelZoom:!0,mapType:l(r).MapTypeId.BMAP_NORMAL_MAP},{default:a(()=>[o(b,{position:s.value,content:"\u6587\u672C\u6807\u6CE8",offset:[-25,-35],show:d.value},null,8,["position","show"])]),_:1},8,["center","mapType"])])}}});export{O as default};
