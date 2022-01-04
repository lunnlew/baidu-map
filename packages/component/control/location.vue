<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { map, state } from '@/lib/map'
import { addLocationControl } from '@/lib/control'
import { bindEvents, extractEmitEvents } from '@/utils/util'
const props = withDefaults(
    defineProps<{
        anchor?: number
        offset?: [number, number]
        show?: boolean
    }>(),
    {
        anchor: 0,
        offset: () => [50, 80],
        show: true,
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const isShow = computed(() => state.value.inited && props.show)
const options = computed(() => props)
const bm = ref()
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addLocationControl(options.value), extractEmitEvents(attrs), emit)
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    map.value?.removeControl(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'LocationControl',
}
</script>
