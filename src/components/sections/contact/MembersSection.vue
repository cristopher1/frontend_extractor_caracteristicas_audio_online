<script setup>
import { toRefs } from 'vue'
import DeveloperInfo from '../../imgs/DeveloperInfo.vue'
import { autorImg } from '../../../assets/img/views/contacto'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const {
    title,
    description,
} = toRefs(props)

const developerInfo = {
    autorImg,
    nombre: 'Cristopher Luis Jiménez Meza',
    description: 'Desarrollador • Equipo 11',
    containerClass: 'text-center',
    imgClass: 'img-fluid rounded-circle mb-4 px-4',
    titleClass: 'fw-bolder',
    descriptionClass: 'fst-italic text-muted',
}
</script>

<template>
    <section id="members" class="py-5 bg-light">
        <div class="container px-5 my-5">
            <div class="text-center">
                <h2 class="fw-bolder"> {{ title }} </h2>
                <p class="lead fw-normal text-muted mb-5"> {{ description }} </p>
            </div>
            <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                <div class="col mb-5 mb-5 mb-xl-0">
                    <DeveloperInfo v-bind="developerInfo" />
                </div>
            </div>
        </div>
    </section>
</template>