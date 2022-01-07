<template>
    <div></div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addScaleControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        anchor?: number
        offset?: [number, number]
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        anchor: 0,
        offset: () => [50, 80],
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.ScaleControl | null>()
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addScaleControl(options.value), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
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
</script>
<script lang="ts">
export default {
    name: 'ScaleControl',
}
</script>
