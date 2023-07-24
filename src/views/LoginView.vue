<script setup>
import SignIn from '../components/forms/SignIn.vue';
import { urlSignUpName } from '../lib/urlName'

const toSignUpUrl = { name: urlSignUpName, hash: '#sign-up' }
const titleSignUpButton = "Registrarse ahora."
</script>

<template>
    <SignIn :toSignUpUrl="toSignUpUrl" :titleSignUpButton="titleSignUpButton" />
</template>

<style>
    main {
        margin-top: 40px;
    }
</style>
