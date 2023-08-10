<script setup>
import { inject, computed } from 'vue'
import { RouterLink } from 'vue-router'
import jwt_decode from 'jwt-decode'

const urlApp = inject('urlApp')
const apis = inject('apis')
const reactiveLocalStorage = inject('reactiveLocalStorage')

const home = {
    message: 'Inicio',
    url: { name: urlApp.home.name, }
}
const signUp = {
    message: 'Registrarse',
    url: { name: urlApp.signUp.name, hash: urlApp.signUp.hash, }
}
const contact = {
    message: 'Contacto',
    url: { name: urlApp.contact.name, }
}
const characteristics = {
    message: 'Características',
    url: { name: urlApp.characteristics.name, }
}
const logout = {
    message: 'Cerrar sesión',
    url: { name: urlApp.logout.name, }
}

const thereIsUser = computed(() => {
    return reactiveLocalStorage.getItem(apis.extractorCaracteristicas.storage.accessTokenItem.name)
})

const obtainInfoUser = computed(() => {
    const accessToken = reactiveLocalStorage.getItem(apis.extractorCaracteristicas.storage.accessTokenItem.name)
    if (accessToken) {
        return jwt_decode(accessToken).user_id
    }
    return null
})
</script>

<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container px-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li v-if="thereIsUser" class="nav-item"><span class="nav-link">Registrado como: {{ obtainInfoUser }}</span></li>
                    <li v-if="thereIsUser" class="nav-item"><RouterLink class="nav-link" :to="characteristics.url"> {{ characteristics.message }} </RouterLink></li>
                    <li v-if="!thereIsUser" class="nav-item"><RouterLink class="nav-link" :to="home.url"> {{ home.message }} </RouterLink></li>
                    <li v-if="!thereIsUser" class="nav-item"><RouterLink class="nav-link" :to="signUp.url"> {{ signUp.message }} </RouterLink></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="contact.url"> {{ contact.message }} </RouterLink></li>
                    <li v-if="thereIsUser" class="nav-item"><RouterLink class="nav-link" :to="logout.url"> {{ logout.message }} </RouterLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
