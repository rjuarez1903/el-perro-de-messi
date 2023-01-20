import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/farmacia',
    name: 'pharmacy',
    component: () => import('../views/PharmacyView.vue')
  },
  {
    path: '/juguetes',
    name: 'pharmacy',
    component: () => import('../views/PharmacyView.vue')
  },
  {
    path: '/farmacia',
    name: 'pharmacy',
    component: () => import('../views/ToysView.vue')
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
