<template>
    <div class="sidemenu">
        <div
            class="sidemenu-item"
            v-for="(item, index) in menus"
            :key="index"
            @click="handleClick(item)"
            :class="{
                'sidemenu-item-active': $route.path === item.path,
            }"
        >
            <div class="sidemenu-item-icon">
                <img :src="item.icon" />
            </div>
            <div class="sidemenu-item-text">
                {{ item.title }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import router from '@/router'
const menus = ref<
    {
        icon: string
        title: string
        path: string
    }[]
>()
function handleClick(item: { icon: string; title: string }) {
    router.push(item.path)
}
onMounted(() => {
    menus.value = router.options.routes.map(item => {
        return {
            icon: item.meta?.icon || 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            title: item.meta?.title || item.name,
            path: item.path,
        }
    })
})
</script>
<style lang="less">
.sidemenu {
    width: 100%;
    overflow-y: auto;
}
.sidemenu-item {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
    &.sidemenu-item-active {
        background-color: #f2f2f2;
    }
}
.sidemenu-item-icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    img {
        width: 100%;
        height: 100%;
    }
}
.sidemenu-item-text {
    font-size: 14px;
}
</style>
