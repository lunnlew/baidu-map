import { createApp } from 'vue'
import App from './App.vue'
import BaiduMapVue3 from 'baidu-map-vue3'
import router from './router'
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import 'highlight.js/styles/github.css';
hljs.registerLanguage('typescript', typescript);
const app = createApp(App)
app.use(router)
app.use(BaiduMapVue3)
app.use(hljsVuePlugin)
app.mount('#app')
