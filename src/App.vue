<template>
    <div class="page">
        <div class="sideleft">
            <div class="logo">Bmap-GL-Vue3</div>
            <side-menu></side-menu>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
import SideMenu from './views/SideMenu.vue'
</script>
<style lang="less">
html,
body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}
#app,
.page {
    height: 100%;
    width: 100%;
}
.page {
    display: flex;
}
.content {
    flex: 1;
    background-color: #fff;
}
.logo {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    padding: 24px 0;
    text-align: center;
}
.sideleft {
    width: 200px;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #eee;
}
.page-content {
    padding: 28px;
}
.map {
    width: 100%;
    height: 300px;
}
</style>
