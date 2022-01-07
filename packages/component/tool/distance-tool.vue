<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { state, map } from '../../lib/map'
import { addDistanceTool, initDistanceTool } from '../../lib/tool'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        map?: BaiduMapVue3.BMapGL.Map | null
        show?: boolean
        onReady?: (el: any) => void
    }>(),
    {
        map: null,
        show: true,
        onReady: (el: any) => {},
    }
)
/**
 * 使用时建议禁用 Map enableMapClick
 */
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.DistanceTool | null>()
const currentMap = computed(() => props.map || map.value)
watch(
    () => isShow.value,
    val => {
        let merge_props = { ...options.value }
        if (val) {
            initDistanceTool().then(result => {
                bm.value = bindEvents(addDistanceTool(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
                emit('ready', {
                    bmobj: bm.value,
                    open: () => bm.value && bm.value.open(),
                    close: () => bm.value && bm.value.close(),
                })
            })
        } else {
            bm.value && bm.value.close()
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && bm.value.close()
    bm.value = null
})
defineExpose({
    open: () => bm.value && bm.value.open(),
    close: () => bm.value && bm.value.close(),
})
</script>
<script lang="ts">
export default {
    name: 'DistanceTool',
}
</script>
