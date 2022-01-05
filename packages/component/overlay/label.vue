<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { BMapGLRef, map, state } from '../../lib/map'
import { addLabel } from '../../lib/overlay'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../types'
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
const bm = ref<BaiduMapVue3.BMapGL.Label | null>()
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addLabel(options.value), extractEmitEvents(attrs), emit)
        } else {
            bm.value && map.value?.removeOverlay(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.position,
    val => {
        if (bm.value && BMapGLRef.value) {
            bm.value.setPosition(new BMapGLRef.value.Point(val.lng, val.lat))
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && map.value?.removeOverlay(bm.value)
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
