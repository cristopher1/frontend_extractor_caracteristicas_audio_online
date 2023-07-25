<script setup>
import SignIn from '../components/forms/SignIn.vue';
import { urlSignUpName } from '../lib/urlName'

const signIn = {
    toSignUpUrl: { name: urlSignUpName, hash: '#sign-up' },
    titleSignUpButton: "Registrarse ahora.",
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
