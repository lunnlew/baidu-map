<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, useAttrs, watch } from "vue";
import { state } from "@/lib/map";
import { addTrackAnimation, initTrackAnimation } from "@/lib/animation";
import { bindEvents, extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
    points: {
        lng: number
        lat: number
    }[]
    overallView?: boolean,
    tilt?: number,
    duration?: number,
    delay?: number,
    show?: boolean
}>(), {
    points: () => [],
    overallView: true,
    tilt: 30,
    duration: 20000,
    delay: 3000,
    show: true
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
            initTrackAnimation().then((result) => {
                bm.value = bindEvents(
                    addTrackAnimation(options.value),
                    extractEmitEvents(attrs),
                    emit
                );
            });
        } else {
            bm.value && bm.value?.cancel()
        }
    },
    {
        immediate: true,
    }
);
</script>
<script lang="ts">
export default {
    name: "ViewAnimation",
}
</script>