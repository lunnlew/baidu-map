<template>
    <div ref="container">
        <slot v-bind:points="points"></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from "vue";
import { BMapGLRef, state } from "@/lib/map";
import { addWalkingRoute } from "@/lib/tool";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
    location?: string | {
        lat: number;
        lng: number;
    } | Object,
    start?: {
        lat: number;
        lng: number;
    } | Object,
    end?: {
        lat: number;
        lng: number;
    } | Object,
    renderOptions?: {
        map?: Object;
        panel?: string | HTMLElement
        selectFirstResult?: boolean
        autoViewport?: boolean
    }
    onSearchComplete?: Function
    onMarkersSet?: Function
    onInfoHtmlSet?: Function
    onPolylinesSet?: Function
    onResultsHtmlSet?: Function
    show?: boolean,
}>(), {
    location: undefined,
    start: undefined,
    end: undefined,
    renderOptions: undefined,
    onSearchComplete: () => { },
    onMarkersSet: () => { },
    onInfoHtmlSet: () => { },
    onPolylinesSet: () => { },
    onResultsHtmlSet: () => { },
    show: true,
})
const emit = defineEmits({})
const attrs = useAttrs();
const isShow = computed(() => state.value.inited && props.show);
const options = computed(() => props)
const bm = ref()
watch(
    () => isShow.value,
    (val) => {
        let merge_props = { ...options.value };
        if (val) {
            // 自定义选择路线结果
            merge_props.onSearchComplete = function (e: any) {
                if (typeof props.onSearchComplete === "function") {
                    let result = props.onSearchComplete(bm.value, e)
                    points.value = result.points
                }
            }
            bm.value = bindEvents(
                addWalkingRoute(merge_props),
                extractEmitEvents(attrs),
                emit
            );
        }
    },
    {
        immediate: true,
    }
);
const points = ref([])
onUnmounted(() => {
    bm.value = null
})
defineExpose({
    search: () => {
        if (BMapGLRef.value && bm.value) {
            let start = props.start
            let end = props.end
            if ('lng' in props.start && 'lat' in props.start) {
                start = new BMapGLRef.value.Point(props.start.lng, props.start.lat)
            }
            if ('lng' in props.end && 'lat' in props.end) {
                end = new BMapGLRef.value.Point(props.end.lng, props.end.lat)
            }
            bm.value.search(start, end)
        }
    },
})
</script>
<script lang="ts">
export default {
    name: "WalkingRoute",
}
</script>