import{d,r as o,h as t,b as i,e as l,g as e,i as a,u as _,B as u}from"./vendor.ebd5ff10.js";const r={class:"page-content"},m={class:"code"},h=e("div",{class:"code-title"},[e("span",null,"\u4EE3\u7801\u793A\u4F8B")],-1),g={class:"code-content"},f={class:"code-snippet"},v={class:"code-content"},M={class:"code-snippet"},L=d({setup(y){const c=o(`<baidu-map
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
</baidu-map>`),n=o(`.map {
    width: 100%;
    height: 300px;
}`);return(B,b)=>{const s=t("highlightjs"),p=t("baidu-map");return i(),l("div",r,[e("div",m,[h,e("div",g,[e("div",f,[a(s,{language:"typescript",code:c.value},null,8,["code"])])]),e("div",v,[e("div",M,[a(s,{language:"css",code:n.value},null,8,["code"])])])]),a(p,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:{lng:116.403963,lat:39.915119},zoom:13,enableMapClick:!0,mapType:_(u).MapTypeId.BMAP_NORMAL_MAP},null,8,["center","mapType"])])}}});export{L as default};
