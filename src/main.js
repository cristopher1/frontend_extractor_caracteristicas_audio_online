import './assets/css/views/main.css'

import { BootstrapVue } from 'bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue)

app.mount('#app')
