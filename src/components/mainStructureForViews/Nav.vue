<script setup>
    import { RouterLink } from 'vue-router'
    
    const toHome = { name: 'home' }
    const toRegistrarse = { name: 'home' }
    const toContacto = { name: 'contacto' }
    const toCaracteristicas = { name: 'home' }
    const toCerrarSesion = { name: 'home' }
</script>

<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><RouterLink class="nav-link" :to="toHome">Inicio</RouterLink></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toRegistrarse">Registrarse</RouterLink></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toContacto">Contacto</RouterLink></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toCaracteristicas">Características</RouterLink></li>
                    <li class="nav-item"><span class="nav-link">Registrado como: </span></li>
                    <li class="nav-item"><RouterLink class="nav-link" :to="toCerrarSesion">Cerrar sesión</RouterLink></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
