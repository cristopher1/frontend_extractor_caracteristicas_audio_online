<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
    headerInfo: {
        title: 'string',
        description: 'string'
    },
    signInInfo: {
        url: 'Object',
        message: 'string'
    },
    informationInfo: {
        url: 'Object',
        message: 'string'
    }
})

</script>

<template>
    <header class="bg-dark py-5">
        <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <div class="my-5 text-center text-xl-start">
                        <h1 class="display-5 fw-bolder text-white mb-2"> {{ headerInfo.title }} </h1>
                        <p class="lead fw-normal text-white-50 mb-4"> {{ headerInfo.description }} </p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                            <RouterLink class="btn btn-primary btn-lg px-4 me-sm-3" :to="signInInfo.url"> {{
                                signInInfo.message }}
                            </RouterLink>
                            <RouterLink class="btn btn-outline-light btn-lg px-4" :to="informationInfo.url"> {{
                                informationInfo.message }} </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                </div>
            </div>
        </div>
    </header>
</template>