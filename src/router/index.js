import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const logout = (to, from) => {
  localStorage.removeItem('access')
  localStorage.removeItem('refresh')
  return { name: 'home' }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
    {
      path: '/informacion',
      name: 'informacion',
      component: () => import('../views/DescripcionView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      beforeEnter: [logout]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0}
    }
  }
})

export default router
