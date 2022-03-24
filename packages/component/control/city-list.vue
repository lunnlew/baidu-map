<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { watch, computed, useAttrs, ref, onUnmounted, inject, Ref } from 'vue'
import { addCityListControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import { BMapGLRef } from '../../lib/map'
const props = withDefaults(
    defineProps<{
        map?: BMapGL.Map | null
        anchor?: number
        offset?: [number, number]
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        anchor: 0,
        offset: () => [50, 80],
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const isShow = computed(() => currentMap.value && props.show)
const bm = ref<BMapGL.CityListControl | null>()
const inject_map = inject<Ref<BMapGL.Map>>('map')
const currentMap = computed<BMapGL.Map | undefined>(() => props.map || inject_map?.value)
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addCityListControl(currentMap.value, props), extractEmitEvents(attrs), emit)
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
onUnmounted(() => {
    bm.value && currentMap.value?.removeControl(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'CityListControl',
}
</script>
