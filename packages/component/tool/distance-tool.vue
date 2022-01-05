<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, watch } from 'vue'
import { state } from '../../lib/map'
import { addDistanceTool, initDistanceTool } from '../../lib/animation'
import { bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../typings'
const props = withDefaults(
    defineProps<{
        show?: boolean
    }>(),
    {
        show: true,
    }
)
/**
 * 使用时建议禁用 Map enableMapClick
 */
const emit = defineEmits({})
const attrs = useAttrs()
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.DistanceTool | null>()
watch(
    () => isShow.value,
    val => {
        let merge_props = { ...options.value }
        if (val) {
            initDistanceTool().then(result => {
                bm.value = bindEvents(addDistanceTool(merge_props), extractEmitEvents(attrs), emit)
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
    bmobj: bm.value,
    open: () => bm.value && bm.value.open(),
    close: () => bm.value && bm.value.close(),
})
</script>
<script lang="ts">
export default {
    name: 'DistanceTool',
}
</script>
