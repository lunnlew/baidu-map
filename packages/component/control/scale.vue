<template>
    <div></div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, watch } from 'vue'
import { addScaleControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import { BMapGLRef } from '../../lib/map'
import { BMapGLConstant } from '../../lib/BMapGL'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        anchor?: number
        offset?: [number, number]
        show?: boolean
        unit?: BMapGLConstant.LengthUnit
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        anchor: 0,
        offset: () => [50, 80],
        show: true,
        unit: BMapGLConstant.LengthUnit.BMAP_UNIT_METRIC,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const isShow = computed(() => currentMap.value && props.show)
const bm = ref<BMapGL.ScaleControl | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addScaleControl(currentMap.value, props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
        } else {
            bm.value && currentMap.value?.removeControl(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
watch(
    () => props.anchor,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setAnchor(val)
        }
    }
)
watch(
    () => props.offset,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setOffset(new (BMapGLRef.value as any).Size(val[0], val[1]))
        }
    }
)
watch(
    () => props.unit,
    val => {
        if (isShow.value) {
            bm.value && bm.value?.setUnit(val)
        }
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.removeControl(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'ScaleControl',
}
</script>
