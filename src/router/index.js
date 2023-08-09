import { createRouter, createWebHistory } from 'vue-router'
import { urlApp } from '../urlApp'
import { apis } from '../apis'
import HomeView from '../views/HomeView.vue'

const obtainRouter = (reactiveLocalStorage) => {
  const logout = (to, from) => {
    reactiveLocalStorage.removeItem(apis.extractorCaracteristicas.storage.accessTokenItem.name)
    reactiveLocalStorage.removeItem(apis.extractorCaracteristicas.storage.refreshTokenItem.name)
    return { name: urlApp.name.home }
  }

  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: urlApp.path.home,
        name: urlApp.name.home,
        component: HomeView
      },
      {
        path: urlApp.path.contact,
        name: urlApp.name.contact,
        component: () => import('../views/ContactoView.vue')
      },
      {
        path: urlApp.path.information,
        name: urlApp.name.information,
        component: () => import('../views/DescripcionView.vue')
      },
      {
        path: urlApp.path.login,
        name: urlApp.name.login,
        component: () => import('../views/LoginView.vue')
      },
      {
        path: urlApp.path.logout,
        name: urlApp.name.logout,
        beforeEnter: [logout]
      }
    ],
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      } else if (savedPosition) {
        return savedPosition
      } else {
        return { left: 0, top: 0 }
      }
    }
  })
}

export default obtainRouter
