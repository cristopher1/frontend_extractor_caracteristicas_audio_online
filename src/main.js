import './assets/css/views/main.css'

import { BootstrapVue } from 'bootstrap-vue'
import { createApp } from 'vue'
import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import App from './App.vue'
import router from './router'
import { URLS } from './lib/urls'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const refreshToken = async (failedRequest) => {
    const refreshToken = localStorage.getItem('refresh')
    const body = { refresh: refreshToken }
    const response = await axios.post(URLS.apiExtractorCaracteristicasAudio.refresh, body)
    const accessToken = response.data.access
    localStorage.setItem('access', accessToken)
    failedRequest.response.config.headers['Authorization'] = `Bearer ${accessToken}`
}

createAuthRefreshInterceptor(axios, refreshToken)

const app = createApp(App)

app.use(router)
app.use(BootstrapVue)
app.provide('axios', axios)
app.provide('externalUrls', URLS)
app.mount('#app')
