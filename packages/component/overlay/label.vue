<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '@/lib/map'
import { addLabel } from '@/lib/overlay'
import { bindEvents, extractEmitEvents } from '@/utils/util'
const props = withDefaults(
    defineProps<{
        content: string
        position: {
            lng: number
            lat: number
        }
        offset?: [number, number]
        enableMassClear?: boolean
        styles?: Object
        show?: boolean
    }>(),
    {
        content: '',
        position: () => ({
            lng: 0,
            lat: 0,
        }),
        offset: () => [0, 0],
        enableMassClear: true,
        styles: () => ({}),
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const bm = ref()
const isShow = computed(() => state.value.inited && props.show)
const options = computed(() => props)
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addLabel(options.value), extractEmitEvents(attrs), emit)
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.position,
    val => {
        if (bm.value) {
            bm.value.setPosition(val)
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    map.value?.removeOverlay(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'Label',
}
</script>
