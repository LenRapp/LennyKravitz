import {createRouter, createWebHistory} from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import HomePage from "../views/HomePage.vue"
import Album from "@/views/Album.vue"
import History from "@/views/History.vue"

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: "Home",
        component: HomePage
    },
    {
        path: '/album',
        name: "Album",
        component: Album
    },
    {
        path: '/history',
        name: "History",
        component: History
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

