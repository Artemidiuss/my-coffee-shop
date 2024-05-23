import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import BeansView from './views/BeansView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/beans',
    name: 'beans',
    component: BeansView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

export default router
