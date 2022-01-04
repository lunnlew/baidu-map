<template>
    <div style="display: none">
        <div ref="control">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addCustomControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
const props = withDefaults(
    defineProps<{
        dom?: HTMLElement
        anchor?: number
        offset?: [number, number]
        show?: boolean
    }>(),
    {
        dom: undefined,
        anchor: 0,
        offset: () => [50, 80],
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const control = ref()
const emit = defineEmits({})
const isShow = computed(() => state.value.inited && props.show)
const options = computed(() => props)
const bm = ref()
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = { ...options.value }
            if (slots.default) {
                merge_props.dom = control.value
            }
            bm.value = bindEvents(addCustomControl(merge_props), extractEmitEvents(attrs), emit)
        } else {
            bm.value && map.value?.removeControl(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && map.value?.removeControl(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'Marker',
}
</script>
