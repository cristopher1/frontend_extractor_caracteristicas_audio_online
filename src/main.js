import './assets/css/views/main.css'

import { BootstrapVue } from 'bootstrap-vue'
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { apis } from './apis'
import { urlApp } from './urlApp'
import { ReactiveStorageFactory } from './storage'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const refStorage = ref({})
const reactiveLocalStorage = ReactiveStorageFactory.getReactiveStorage(refStorage, localStorage)
reactiveLocalStorage.activateAddEventListenerStorage(window)

const app = createApp(App)

app.use(router(reactiveLocalStorage))
app.use(BootstrapVue)

app.provide('apis', apis)
app.provide('urlApp', urlApp)
app.provide('reactiveLocalStorage', reactiveLocalStorage)

app.mount('#app')
