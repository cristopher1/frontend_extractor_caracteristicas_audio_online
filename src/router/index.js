import { createRouter, createWebHistory } from 'vue-router'
import { urlApp } from '../urlApp'
import { apis } from '../apis'
import HomeView from '../views/HomeView.vue'

const obtainRouter = (reactiveLocalStorage) => {
  const logout = (to, from, next) => {
    reactiveLocalStorage.removeItem(apis.extractorCaracteristicas.storage.accessTokenItem.name)
    reactiveLocalStorage.removeItem(apis.extractorCaracteristicas.storage.refreshTokenItem.name)
    next({ name: urlApp.home.name, })
  }

  const isAuthenticated = (to, from, next) => {
    if (reactiveLocalStorage.getItem(apis.extractorCaracteristicas.storage.accessTokenItem.name)) {
      next()
    } else {
      next({ name: urlApp.home.name, })
    }
  }

  const isNotAuthenticated = (to, from, next) => {
    if (!reactiveLocalStorage.getItem(apis.extractorCaracteristicas.storage.accessTokenItem.name)) {
      next()
    } else {
      next({ name: urlApp.principal.name })
    }
  }

  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: urlApp.home.path,
        name: urlApp.home.name,
        beforeEnter: [isNotAuthenticated],
        component: HomeView,
      },
      {
        path: urlApp.contact.path,
        name: urlApp.contact.name,
        component: () => import('../views/ContactoView.vue'),
      },
      {
        path: urlApp.information.path,
        name: urlApp.information.name,
        beforeEnter: [isNotAuthenticated],
        component: () => import('../views/DescripcionView.vue'),
      },
      {
        path: urlApp.login.path,
        name: urlApp.login.name,
        beforeEnter: [isNotAuthenticated],
        component: () => import('../views/LoginView.vue'),
      },
      {
        path: urlApp.principal.path,
        name: urlApp.principal.name,
        beforeEnter: [isAuthenticated],
        component: () => import('../views/PrincipalView.vue'),
      },
      {
        path: urlApp.logout.path,
        name: urlApp.logout.name,
        beforeEnter: [isAuthenticated, logout]
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
