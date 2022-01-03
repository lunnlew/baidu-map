<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from "vue";
import { state } from "@/lib/map";
import { addBezierCurve } from "@/lib/overlay";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
    points: {
        lng: number;
        lat: number;
    }[]
    controlPoints: [[{
        lng: number;
        lat: number;
    }, {
        lng: number;
        lat: number;
    }], [{
        lng: number;
        lat: number;
    }]],
    overallView?: boolean,
    show?: boolean
}>(), {
    points: () => [],
    controlPoints: () => [[{
        lng: 0,
        lat: 0
    }, {
        lng: 0,
        lat: 0
    }], [{
        lng: 0,
        lat: 0
    }]],
    overallView: true,
    show: true
})
const attrs = useAttrs();
const emit = defineEmits({});
const bm = ref()
const isShow = computed(() => state.value.inited && props.show && props.points.length > 0);
const options = computed(() => props)
watch(
    () => isShow.value,
    (val) => {
        if (val) {
            bm.value = bindEvents(
                addBezierCurve(options.value),
                extractEmitEvents(attrs),
                emit
            );
        }
    },
    {
        immediate: true,
    }
);
onUnmounted(() => {
  bm.value = null
})
</script>
<script lang="ts">
export default {
    name: "BezierCurve",
}
</script>