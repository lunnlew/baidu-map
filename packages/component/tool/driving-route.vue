<template>
    <div ref="container">
        <slot v-bind:points="points"></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, useAttrs, watch } from "vue";
import { BMapGLRef, state } from "@/lib/map";
import { addDrivingRoute } from "@/lib/tool";
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
    policy?: number
    onSearchComplete?: Function
    onMarkersSet?: Function
    onInfoHtmlSet?: Function
    onPolylinesSet?: Function
    show?: boolean,
}>(), {
    location: undefined,
    start: undefined,
    end: undefined,
    renderOptions: undefined,
    policy: 0,
    onSearchComplete: () => { },
    onMarkersSet: () => { },
    onInfoHtmlSet: () => { },
    onPolylinesSet: () => { },
    show: true,
})
/**
 * 使用时建议禁用 Map enableMapClick
 */
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
                addDrivingRoute(merge_props),
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
    name: "DrivingRoute",
}
</script>