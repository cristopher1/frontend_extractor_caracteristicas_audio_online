<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import { objectValidator } from 'vue-props-validation'

const props = defineProps({
    signInInfo: {
        type: Object,
        required: true,
        validator: objectValidator({
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
            titleButton: {
                type: String,
                required: true,
            },
        })
    },
    signUpInfo: {
        type: Object,
        required: true,
        validator: objectValidator({
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            url: {
                type: Object,
                required: true,
            },
            titleButton: {
                type: String,
                required: true,
            },
        })
    }
})

const {
    signInInfo,
    signUpInfo,
} = toRefs(props)
</script>

<template>
    <div class="container mt-5 mb-5 pt-5 pb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group mb-0">
                    <div class="card p-4">
                        <div class="card-body">
                            <form @submit.prevent>
                                <h1> {{ signInInfo.title }} </h1>
                                <p class="text-muted"> {{ signInInfo.description }} </p>
                                <div class="input-group mb-3">
                                    <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                                    <input type="email" class="form-control" placeholder="Correo electrónico" name="email">
                                </div>
                                <div class="input-group mb-4">
                                    <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                                    <input type="password" class="form-control" placeholder="Contraseña" name="password">
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <button type="submit" class="btn btn-primary px-4"> {{ signInInfo.titleButton }}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card text-white bg-primary py-5 d-md-down-none">
                        <div class="card-body text-center">
                            <div>
                                <h2> {{ signUpInfo.title }} </h2>
                                <p> {{ signUpInfo.description }} </p>
                                <RouterLink :to="signUpInfo.url" class="btn btn-primary active mt-3">
                                    {{ signUpInfo.titleButton }} </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../../assets/css/forms/login.css';
</style>
