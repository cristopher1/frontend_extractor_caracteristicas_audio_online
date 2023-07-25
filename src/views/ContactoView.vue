<script setup>
import GenericFeature from '../components/features/GenericFeature.vue';
import DeveloperInfo from '../components/imgs/DeveloperInfo.vue';
import { autorImg } from '../assets/img/views/contacto'

const developerInfo = {
    classInfo: {
        containerClass: 'text-center',
        imgClass: 'img-fluid rounded-circle mb-4 px-4',
        titleClass: 'fw-bolder',
        descriptionClass: 'fst-italic text-muted'
    },
    developerInfo: {
        autorImg,
        nombre: 'Cristopher Luis Jiménez Meza',
        description: 'Desarrollador &middot; Equipo 11'
    }
}

const contacts = [
    {
        contactInfo: {
            title: 'Linkedin',
            description: 'Mira el perfil en linkedin.',
            iconClass: 'bi bi-linkedin'
        },
        redirect: 'https://www.linkedin.com/in/cristopherjimenez/'
    },
    {
        contactInfo: {
            title: 'Gitlab',
            description: 'Visita la cuenta de gitlab.',
            iconClass: 'bi bi-github'
        },
        redirect: 'https://gitlab.labcomp.cl/cljimene'
    },
    {
        contactInfo: {
            title: 'Email',
            description: '¿Tienes dudas sobre la aplicación?. Contáctate con el desarrollador.',
            iconClass: 'bi bi-envelope'
        },
        redirect: 'mailto:cristopher.jimene.13@sansano.usm.cl?subject=Duda%20aplicación%20desarrollo%20web%20python'
    }
]
</script>

<template>
    <!-- Team members section-->
    <section class="py-5 bg-light">
        <div class="container px-5 my-5">
            <div class="text-center">
                <h2 class="fw-bolder">Contacto</h2>
                <p class="lead fw-normal text-muted mb-5">Aplicación desarrollada para el ramo "Taller de proyectos web en
                    python"</p>
            </div>
            <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                <div class="col mb-5 mb-5 mb-xl-0">
                    <DeveloperInfo v-bind="developerInfo" />
                </div>
            </div>
        </div>
    </section>
    <div class="container px-5 text-center">
        <!-- Contact cards-->
        <div class="row gx-5 row-cols-2 row-cols-lg-3 py-5">
            <div class="col" v-for="contact in contacts" :key="contact">
                <a class="text-decoration-none" target="_blank" :href="contact.redirect">
                    <GenericFeature v-bind="contact.contactInfo" titleClass="mb-2 text-dark" descriptionClass="text-muted" />
                </a>
            </div>
        </div>
    </div>
</template>
