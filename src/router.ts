import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
        meta: {
            title: "开始使用"
        }
    },
    {
        path: "/map",
        name: "map",
        component: () => import(/* webpackChunkName: "home" */ './views/Map.vue'),
        meta: {
            title: "展示地图"
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router