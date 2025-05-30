import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Album from '../views/Album.vue'
import AlbumDetail from '../views/AlbumDetail.vue'
import History from '../views/History.vue'
import Style from '../views/Style.vue'
import Actualites from '../views/Actualites.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/album',
    name: 'Album',
    component: Album
  },
  {
    path: '/album/:id',
    name: 'AlbumDetail',
    component: AlbumDetail
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/style',
    name: 'Style',
    component: Style
  },
  {
    path: '/actualities',
    name: 'Actualities',
    component: Actualites
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

