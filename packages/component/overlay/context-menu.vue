<template>
    <div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import { computed, inject, onUnmounted, ref, useAttrs, useSlots, watch } from 'vue'
import { addContextMenu } from '../../lib/overlay'
import { mergePropsDefault, bindEvents, extractEmitEvents } from '../../utils/util'
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
const attrs = useAttrs()
const slots = useSlots()
const emit = defineEmits({})
const isShow = computed(() => currentMap.value && props.show)
const options = computed(() => props)
const bm = ref<BaiduMapVue3.BMapGL.ContextMenu | null>()
const inject_map = inject('map') as any
const currentMap = computed(() => props.map || inject_map.value)
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
            bm.value = bindEvents(addContextMenu(currentMap.value, merge_props), extractEmitEvents(attrs), emit)
            emit('ready', {
                bmobj: bm.value,
            })
        } else {
            bm.value && currentMap.value?.removeContextMenu(bm.value)
            bm.value = null
        }
    },
    {
        immediate: true,
    }
)
onUnmounted(() => {
    bm.value && currentMap.value?.removeContextMenu(bm.value)
    bm.value = null
})
</script>
<script lang="ts">
export default {
    name: 'ContextMenu',
}
</script>
