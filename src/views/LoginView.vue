<script setup>
import SignIn from '../components/forms/SignIn.vue';
import { urlSignUpName } from '../lib/urlName'

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
        url: { name: urlSignUpName, hash: '#sign-up', },
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
