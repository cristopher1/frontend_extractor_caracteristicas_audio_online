<script setup>
import { RouterLink } from 'vue-router'
import { urlHomeName, urlSignUpName, urlContactName, urlCharacteristicsName, urlLogoutName } from '../../lib/urlName'

const redirections = [
    {
        message: 'Inicio',
        url: { name: urlHomeName }
    },
    {
        message: 'Registrarse',
        url: { name: urlSignUpName, hash: '#sign-up' }
    },
    {
        message: 'Contacto',
        url: { name: urlContactName }
    },
    {
        message: 'Características',
        url: { name: urlCharacteristicsName }
    },
    {
        message: 'Cerrar sesión',
        url: { name: urlLogoutName }
    }
]
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
                    <li class="nav-item"><span class="nav-link">Registrado como: </span></li>
                    <li v-for="{ message, url } in redirections" class="nav-item">
                        <RouterLink class="nav-link" :to="url"> {{ message }} </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
