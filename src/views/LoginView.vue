<script setup>
import { inject } from 'vue'
import SignIn from '../components/forms/SignIn.vue';

const urlApp = inject('urlApp')

const signIn = {
    signInInfo: {
        title: 'Iniciar sesión',
        description: 'Ingresa tus datos e inicia sesión',
        url: 'string',
        titleButton: 'Iniciar sesión',
    },
    signUpInfo: {
        title: '¿Estás registrado?',
        description: 'Crea una cuenta e inicia sesión para acceder a las funcionalidades de la aplicación.',
        url: { name: urlApp.signUp.name, hash: urlApp.signUp.hash, },
        titleButton: 'Registrarse ahora.',
    },
}
</script>

<template>
    <SignIn v-bind="signIn" />
</template>

<style>
main {
    margin-top: 40px;
}
</style>
