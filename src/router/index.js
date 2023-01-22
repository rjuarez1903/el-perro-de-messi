import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'El Perro de Messi | Home'
    }
  },
  {
    path: '/farmacia',
    name: 'pharmacy',
    component: () => import('../views/PharmacyView.vue'),
    meta: {
      title: 'El Perro de Messi | Farmacia'
    }
  },
  {
    path: '/juguetes',
    name: 'toys',
    component: () => import('../views/PharmacyView.vue'),
    meta: {
      title: 'El Perro de Messi | Juguetes'
    }
  },
  {
    path: '/farmacia',
    name: 'pharmacy',
    component: () => import('../views/ToysView.vue'),
    meta: {
      title: 'El Perro de Messi | Farmacia'
    }
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'El Perro de Messi | Contacto'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router
