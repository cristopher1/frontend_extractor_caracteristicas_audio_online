<script setup>
import { toRefs } from 'vue';
import { RouterLink } from 'vue-router'
import { objectValidator, arrayValidator } from 'vue-props-validation'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    data: {
        type: Array,
        required: true,
        validator: arrayValidator({
            type: Object,
            required: true,
            validator: objectValidator({
                id: {
                    type: Number,
                    required: true,
                },
                url: {
                    type: Object,
                    required: true,
                },
                message: {
                    type: String,
                    required: true,
                },
                linkClass: {
                    type: String,
                    required: true,
                },
            })
        })
    },
})

const {
    title,
    description,
    data,
} = toRefs(props)
</script>

<template>
    <header class="bg-dark py-5">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <div class="my-5 text-center text-xl-start">
                        <h1 class="display-5 fw-bolder text-white mb-2"> {{ title }} </h1>
                        <p class="lead fw-normal text-white-50 mb-4"> {{ description }} </p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                            <RouterLink v-for="{ id, url, message, linkClass } in data" :key="id" v-bind="{
                                class: linkClass,
                                to: url
                            }"> {{ message }} </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                </div>
            </div>
        </div>
    </header>
</template>