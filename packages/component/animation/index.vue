<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from "vue";
import { map, state } from "@/lib/map";
import { addViewAnimation } from "@/lib/animation";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
    keyFrames: {
        center: {
            lng: number;
            lat: number;
        },
        zoom: number,
        tilt: number,
        heading: number,
        percentage: number
    }[],
    duration?: number,
    delay?: number,
    interation?: number | string,
    anchor?: number,
    overallView?: boolean,
    show?: boolean,
}>(), {
    keyFrames: () => [],
    duration: 10000,
    delay: 3000,
    interation: 2,
    overallView: true,
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
        if (val) {
            bm.value = bindEvents(
                addViewAnimation(options.value),
                extractEmitEvents(attrs),
                emit
            );
        } else {
            bm.value && map.value?.cancelViewAnimation(bm.value)
        }
    },
    {
        immediate: true,
    }
);
onUnmounted(() => {
    bm.value && map.value?.cancelViewAnimation(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
    start: () => map.value && bm.value && map.value.startViewAnimation(bm.value),
    cancel: () => map.value && bm.value && map.value.cancelViewAnimation(bm.value),
})
</script>
<script lang="ts">
export default {
    name: "ViewAnimation",
}
</script>