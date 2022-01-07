<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addNavigationControl } from '../../lib/control'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        anchor?: number
        offset?: [number, number]
        type?: number
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        anchor: 0,
        offset: () => [50, 80],
        type: 1,
        show: true,
        onReady: (el: any) => {},
    }
)
const attrs = useAttrs()
const emit = defineEmits({})
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.NavigationControl | null>()
watch(
    () => isShow.value,
    val => {
        if (val) {
            bm.value = bindEvents(addNavigationControl(options.value), extractEmitEvents(attrs), emit)
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
    name: 'NavigationControl',
}
</script>
