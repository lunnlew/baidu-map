import{d as f,r as d,b as M,e as C,g as o,h as t,u as e,w as s,B as n,i as c,t as B}from"./vendor.cb1c36e0.js";var T=`<bm-zoom-control
    :offset="[50, 50]"
    :show="true"
    :anchor="BMapGLConstant.ControlAnchor.BMAP_ANCHOR_TOP_LEFT"
></bm-zoom-control>`,y=`
<bm-scale-control
    :show="true"
    :offset="[50, 30]"
    :anchor="BMapGLConstant.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT"
></bm-scale-control>`,b=`<bm-map-type-control
    :show="true"
    :offset="[80, 30]"
    :anchor="BMapGLConstant.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT"
></bm-map-type-control>`,F=`<bm-location-control
    :show="true"
    :anchor="BMapGLConstant.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
    :offset="[60, 60]"
></bm-location-control>`,O=`<bm-city-list-control
    :show="true"
    :anchor="BMapGLConstant.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT"
    :offset="[50, 30]"
></bm-city-list-control>`,P=`<bm-custom-control :show="true" :anchor="BMapGLConstant.ControlAnchor.BMAP_ANCHOR_TOP_RIGHT" :offset="[300, 90]">
    <div class="custom-control-content">
        <div class="custom-control-title">\u81EA\u5B9A\u4E49\u63A7\u4EF6</div>
        <div class="custom-control-body">
            <button @click="() => count++">\u8BA1\u6570:{{ count }}</button>
        </div>
    </div>
</bm-custom-control>
<script setup lang="ts">
    const count = ref(0)
<\/script>`;const L={class:"page-content"},R={class:"code"},E=o("div",{class:"code-title"},[o("span",null,"\u793A\u4F8B:\u7F29\u653E\u63A7\u4EF6")],-1),N={class:"code-content"},H={class:"code-snippet"},g={class:"code"},k=o("div",{class:"code-title"},[o("span",null,"\u793A\u4F8B:\u6BD4\u4F8B\u5C3A\u63A7\u4EF6")],-1),w={class:"code-content"},G={class:"code-snippet"},I={class:"code"},X=o("div",{class:"code-title"},[o("span",null,"\u793A\u4F8B:\u5730\u56FE\u7C7B\u578B\u63A7\u4EF6")],-1),z={class:"code-content"},x={class:"code-snippet"},D={class:"code"},K=o("div",{class:"code-title"},[o("span",null,"\u793A\u4F8B:\u5B9A\u4F4D\u63A7\u4EF6")],-1),U={class:"code-content"},W={class:"code-snippet"},Y={class:"code"},Z=o("div",{class:"code-title"},[o("span",null,"\u793A\u4F8B:\u57CE\u5E02\u5217\u8868\u63A7\u4EF6")],-1),j={class:"code-content"},V={class:"code-snippet"},S={class:"code"},q=o("div",{class:"code-title"},[o("span",null,"\u793A\u4F8B:\u81EA\u5B9A\u4E49\u63A7\u4EF6")],-1),J={class:"code-content"},Q={class:"code-snippet"},$={class:"custom-control-content"},oo=o("div",{class:"custom-control-title"},"\u81EA\u5B9A\u4E49\u63A7\u4EF6",-1),to={class:"custom-control-body"},so=f({setup(eo){const a=d({lng:116.403963,lat:39.915119}),r=d(0);return(no,u)=>{const l=c("highlightjs"),i=c("bm-zoom-control"),_=c("baidu-map"),p=c("bm-scale-control"),m=c("bm-map-type-control"),h=c("bm-location-control"),A=c("bm-city-list-control"),v=c("bm-custom-control");return M(),C("div",L,[o("div",R,[E,o("div",N,[o("div",H,[t(l,{code:e(T)},null,8,["code"])])])]),t(_,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:a.value,enableMapClick:!0,enableWheelZoom:!0,mapType:e(n).MapTypeId.BMAP_NORMAL_MAP},{default:s(()=>[t(i,{offset:[50,50],show:!0,anchor:e(n).ControlAnchor.BMAP_ANCHOR_TOP_LEFT},null,8,["anchor"])]),_:1},8,["center","mapType"]),o("div",g,[k,o("div",w,[o("div",G,[t(l,{code:e(y)},null,8,["code"])])])]),t(_,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:a.value,enableMapClick:!0,enableWheelZoom:!0,mapType:e(n).MapTypeId.BMAP_NORMAL_MAP},{default:s(()=>[t(p,{show:!0,offset:[50,30],anchor:e(n).ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT},null,8,["anchor"])]),_:1},8,["center","mapType"]),o("div",I,[X,o("div",z,[o("div",x,[t(l,{code:e(b)},null,8,["code"])])])]),t(_,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:a.value,enableMapClick:!0,enableWheelZoom:!0,mapType:e(n).MapTypeId.BMAP_NORMAL_MAP},{default:s(()=>[t(m,{show:!0,offset:[80,30],anchor:e(n).ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT},null,8,["anchor"])]),_:1},8,["center","mapType"]),o("div",D,[K,o("div",U,[o("div",W,[t(l,{code:e(F)},null,8,["code"])])])]),t(_,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:a.value,enableMapClick:!0,enableWheelZoom:!0,mapType:e(n).MapTypeId.BMAP_NORMAL_MAP},{default:s(()=>[t(h,{show:!0,anchor:e(n).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[60,60]},null,8,["anchor"])]),_:1},8,["center","mapType"]),o("div",Y,[Z,o("div",j,[o("div",V,[t(l,{code:e(O)},null,8,["code"])])])]),t(_,{class:"map1",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:a.value,enableMapClick:!0,enableWheelZoom:!0,mapType:e(n).MapTypeId.BMAP_NORMAL_MAP},{default:s(()=>[t(A,{show:!0,anchor:e(n).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[50,30]},null,8,["anchor"])]),_:1},8,["center","mapType"]),o("div",S,[q,o("div",J,[o("div",Q,[t(l,{code:e(P)},null,8,["code"])])])]),t(_,{class:"map",ref:"map",apiKey:"z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88",center:a.value,enableMapClick:!0,enableWheelZoom:!0,mapType:e(n).MapTypeId.BMAP_NORMAL_MAP},{default:s(()=>[t(v,{show:!0,anchor:e(n).ControlAnchor.BMAP_ANCHOR_TOP_RIGHT,offset:[300,90]},{default:s(()=>[o("div",$,[oo,o("div",to,[o("button",{onClick:u[0]||(u[0]=()=>r.value++)},"\u8BA1\u6570:"+B(r.value),1)])])]),_:1},8,["anchor"])]),_:1},8,["center","mapType"])])}}});export{so as default};
