<script setup>
    import { RouterLink } from 'vue-router'
    import { urlHomeName, urlSignUpName, urlContactName, urlCharacteristicsName, urlLogoutName } from '../../lib/urlName'

    const toHome = { name: urlHomeName }
    const toSignUp = { name: urlSignUpName, hash: '#sign-up' }
    const toContact = { name: urlContactName }
    const toCharacteristics = { name: urlCharacteristicsName }
    const toLogout = { name: urlLogoutName }
</script>

<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container px-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><RouterLink class="nav-link" :to="toHome">Inicio</RouterLink></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toSignUp">Registrarse</RouterLink></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toContact">Contacto</RouterLink></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toCharacteristics">Características</RouterLink></li>
                    <li class="nav-item"><span class="nav-link">Registrado como: </span></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toLogout">Cerrar sesión</RouterLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
