<template>
    <div class="page-content">
        <div class="code">
            <div class="code-title">
                <span>安装</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_install"></highlightjs>
                </div>
            </div>
            <div class="code-title">
                <span>全局引入</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_global_use"></highlightjs>
                </div>
            </div>
            <div class="code-title">
                <span>组件引入</span>
            </div>
            <div class="code-content">
                <div class="code-snippet">
                    <highlightjs :code="code_component_use"></highlightjs>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import code_install from '../code/install.txt?raw'
import code_global_use from '../code/global_use.txt?raw'
import code_component_use from '../code/component_use.txt?raw'
</script>
<style lang="less">
.map {
    width: 100%;
    height: 400px;
}
</style>
