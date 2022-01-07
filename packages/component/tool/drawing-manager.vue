<template>
    <div ref="container">
        <slot>
            <ul class="drawing-panel">
                <li
                    :class="'bmap-btn bmap-' + item"
                    v-for="item in btns"
                    :style="{
                        backgroundPositionY: currentType === item ? '-52px' : '0px',
                    }"
                    @click="draw(item)"
                ></li>
            </ul>
        </slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch, inject } from 'vue'
import { addDrawingManager, initDrawingManager } from '../../lib/tool'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        drawingType?: string
        isOpen?: boolean
        enableCalculate?: boolean
        enableSorption?: boolean
        enableGpc?: boolean
        enableLimit?: boolean
        limitOptions?: {
            area?: number
            distance?: number
        }
        sorptiondistance?: number
        circleOptions?: BaiduMapVue3.DrawingStyleOptions
        polylineOptions?: BaiduMapVue3.DrawingStyleOptions
        polygonOptions?: BaiduMapVue3.DrawingStyleOptions
        rectangleOptions?: BaiduMapVue3.DrawingStyleOptions
        labelOptions?: BaiduMapVue3.DrawingLabelOptions
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        isOpen: false,
        drawingType: 'marker',
        enableCalculate: false,
        enableSorption: true,
        enableGpc: false,
        enableLimit: false,
        limitOptions: () => ({
            area: 50000000,
            distance: 30000,
        }),
        sorptiondistance: 20,
        circleOptions: () => ({
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        }),
        polylineOptions: () => ({
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        }),
        polygonOptions: () => ({
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        }),
        rectangleOptions: () => ({
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        }),
        labelOptions: () => ({
            borderRadius: '2px',
            background: '#FFFBCC',
            border: '1px solid #E1E1E1',
            color: '#703A04',
            fontSize: '12px',
            letterSpacing: '0',
            padding: '5px',
        }),
        show: true,
        onReady: (el: any) => {},
    }
)
/**
 * 使用时建议禁用 Map enableMapClick
 */
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.DrawingManager | null>()
const btns = ref(['marker', 'polyline', 'rectangle', 'polygon', 'circle'])
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => isShow.value,
    val => {
        let merge_props = { ...options.value }
        if (val) {
            initDrawingManager().then(result => {
                bm.value = bindEvents(addDrawingManager(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
                emit('ready', {
                    bmobj: bm.value,
                    open: () => bm.value && bm.value.open(),
                    close: () => bm.value && bm.value._isOpen && bm.value.close(),
                })
                bm.value && merge_props.isOpen && bm.value.open()
            })
        } else {
            bm.value && bm.value._isOpen && bm.value.close()
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.isOpen,
    val => {
        bm.value && (val ? bm.value.open() : bm.value._isOpen && bm.value.close())
    },
    {
        immediate: true,
    }
)
const currentType = ref()
if (props.isOpen) {
    currentType.value = 'marker'
}
function draw(type: string) {
    // 进行绘制
    if (bm.value) {
        if (bm.value._isOpen && bm.value.getDrawingMode() === type) {
            currentType.value = ''
            bm.value.close()
        } else {
            currentType.value = type
            bm.value.setDrawingMode(type)
            bm.value.open()
        }
    }
}
onUnmounted(() => {
    bm.value && bm.value.close()
    bm.value = null
})
defineExpose({
    open: () => bm.value && bm.value.open(),
    close: () => bm.value && bm.value._isOpen && bm.value.close(),
})
</script>
<script lang="ts">
export default {
    name: 'DrawingManager',
}
</script>
<style lang="less">
ul li {
    list-style: none;
}
.info {
    z-index: 999;
    width: auto;
    min-width: 22rem;
    padding: 0.75rem 1.25rem;
    margin-left: 1.25rem;
    position: fixed;
    top: 1rem;
    background-color: #fff;
    border-radius: 0.25rem;
    font-size: 14px;
    color: #666;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
}
.drawing-panel {
    z-index: 999;
    position: fixed;
    bottom: 3.5rem;
    margin-left: 2.5rem;
    padding-left: 0;
    border-radius: 0.25rem;
    height: 47px;
    box-shadow: 0 2px 6px 0 rgba(27, 142, 236, 0.5);
}
.bmap-btn {
    border-right: 1px solid #d2d2d2;
    float: left;
    width: 64px;
    height: 100%;
    background-image: url(//api.map.baidu.com/library/DrawingManager/1.4/src/bg_drawing_tool.png);
    cursor: pointer;
}
.drawing-panel .bmap-marker {
    background-position: -65px 0;
}
.drawing-panel .bmap-polyline {
    background-position: -195px 0;
}
.drawing-panel .bmap-rectangle {
    background-position: -325px 0;
}
.drawing-panel .bmap-polygon {
    background-position: -260px 0;
}
.drawing-panel .bmap-circle {
    background-position: -130px 0;
}
</style>
