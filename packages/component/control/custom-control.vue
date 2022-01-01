<template>
    <div style="display: none">
        <div ref="control">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, useAttrs, useSlots, watch } from "vue";
import { state } from "@/lib/map";
import { bindEvents } from "@/lib/overlay";
import { addCustomControl } from "@/lib/control";
import { extractEmitEvents } from "@/utils/util";
const props = withDefaults(defineProps<{
    dom?: HTMLElement,
    anchor?: number,
    offset?: [number, number],
}>(), {
    dom: undefined,
    anchor: 0,
    offset: () => [50, 80],
})
let options = { ...props };
const attrs = useAttrs();
const slots = useSlots()
const control = ref();
const emit = defineEmits({});
watch(
    state.value,
    (val) => {
        if (val.inited) {
            if (slots.default) {
                options.dom = control.value;
            }
            bindEvents(
                addCustomControl(options),
                extractEmitEvents(attrs),
                emit
            );
        }
    },
    {
        immediate: true,
    }
);
</script>
<script lang="ts">
export default {
    name: "Marker",
}
</script>