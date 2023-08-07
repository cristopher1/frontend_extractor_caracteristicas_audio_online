<script setup>
import { toRefs } from 'vue';
import SignUp from '../../forms/SignUp.vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    titleButtonSubmit: {
        type: String,
        required: true,
    },
})

const {
    title,
    description,
    titleButtonSubmit,
} = toRefs(props)

const signUp = {
    title,
    description,
    titleButtonSubmit,
}
</script>

<template>
    <section id="sign-up" class="bg-primary bg-gradient p-4 p-sm-5 py-5 mx-3">
        <SignUp v-bind="signUp" />
    </section>
</template>