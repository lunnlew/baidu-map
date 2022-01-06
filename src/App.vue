<template>
    <div class="page">
        <div class="sideleft">
            <div class="sidefixed">
                <div class="logo">Bmap-GL-Vue3</div>
                <side-menu></side-menu>
            </div>
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
body,
#app {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}
.page {
    display: flex;
    width: 100%;
    min-height: 100%;
}
.content {
    flex: 1;
    background-color: #fff;
    padding-bottom: 64px;
}
.logo {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding: 20px 0;
    text-align: center;
}
.sideleft {
    width: 200px;
    box-sizing: border-box;
    border-right: 1px solid #eee;
}
.sidefixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;
}
.page-content {
    padding: 10px 28px;
}
.map {
    width: 100%;
    height: 300px;
}
.code {
    padding: 20px 0;
}
.code-title {
    font-size: 14px;
    font-weight: bold;
    padding-bottom: 10px;
}
.code-content {
    padding: 0;
}
.code-snippet {
    border-radius: 4px;
    overflow: hidden;
}
.code-snippet pre {
    border: 0;
    font-size: 16px;
}
.code-snippet code {
    padding: 10px;
    background-color: #f2f2f2;
}
.btns {
    justify-content: space-between;
    padding: 20px 0;
    box-sizing: border-box;
    button {
        margin-left: 10px;
        margin-top: 10px;
    }
}
</style>
