<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { map, state } from '../../lib/map'
import { addContextMenu } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
import BaiduMapVue3 from '../../../types'
const props = withDefaults(
    defineProps<{
        show?: boolean
    }>(),
    {
        show: true,
    }
)
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => state.value.map_inited && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.ContextMenu | null>()
watch(
    () => isShow.value,
    val => {
        if (val) {
            let merge_props = Object.assign({}, options.value, {
                menus: [],
            } as any)
            if (slots.default) {
                let ContextMenuItems = slots.default().filter(s => (s.type as any).name == 'ContextMenuItem')
                for (let item of ContextMenuItems) {
                    let merge_item_props = mergePropsDefault(item.props as any, (item.type as any).props)
                    if (merge_item_props.onClick && !merge_item_props.callback) {
                        merge_item_props.callback = merge_item_props.onClick
                    }
                    merge_props.menus.push(merge_item_props)
                }
            }
            bm.value = bindEvents(addContextMenu(merge_props), extractEmitEvents(attrs), emit)
        } else {
            bm.value && map.value?.removeContextMenu(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && map.value?.removeContextMenu(bm.value)
    bm.value = null
})
defineExpose({
    bmobj: bm.value,
})
</script>
<script lang="ts">
export default {
    name: 'ContextMenu',
}
</script>
