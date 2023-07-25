<script setup>
import SignUp from '../../forms/SignUp.vue'

const props = defineProps({
    componentInfo: {
        title: 'string',
        description: 'string',
        titleButtonSubmit: 'string'
    }
})

const { title, description, titleButtonSubmit } = props.componentInfo

const signUp = {
    componentInfo: {
        title,
        description,
        titleButtonSubmit
    }
 }
</script>

<template>
    <section id="sign-up" class="bg-primary bg-gradient p-4 p-sm-5 py-5 mx-3">
        <SignUp v-bind="signUp"/>
    </section>
</template>