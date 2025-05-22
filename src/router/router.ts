import {createRouter, createWebHistory} from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import HomePage from "../views/HomePage.vue"
import VideoDetail from "@/views/VideoDetail.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: "Home",
        component: HomePage
    },
    {
        path: '/video/:id',
        name: "Video",
        component: VideoDetail
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

