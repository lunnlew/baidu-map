import { createApp } from 'vue'
import App from './App.vue'
import BaiduMapVue3 from 'baidu-map-vue3'
import router from './router'

import 'highlight.js/styles/github.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App)
app.use(router)
app.use(BaiduMapVue3, {
    apiKey: 'z7ngXdkrDCY1oFfaFLxyvL6UtiXu0f88',
});
app.use(hljsVuePlugin)
app.mount('#app')
