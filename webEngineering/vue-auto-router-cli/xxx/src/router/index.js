import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
      path: '/aboutview.',
      name: 'aboutview.',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/abc',
      name: 'abc',
      component: () => import('../views/abc.vue')
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

