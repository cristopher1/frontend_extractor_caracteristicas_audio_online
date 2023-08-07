<script setup>
import GenericFeature from '../../features/GenericFeature.vue'

const contacts = [
    {
        id: 1,
        componentInfo: {
            title: 'Linkedin',
            description: 'Mira el perfil en linkedin.',
            iconClass: 'bi bi-linkedin',
            titleClass: "mb-2 text-dark",
            descriptionClass: "text-muted",
        },
        urlRedirect: 'https://www.linkedin.com/in/cristopherjimenez/',
    },
    {
        id: 2,
        componentInfo: {
            title: 'Github',
            description: 'Visita la cuenta de github.',
            iconClass: 'bi bi-github',
            titleClass: "mb-2 text-dark",
            descriptionClass: "text-muted",
        },
        urlRedirect: 'https://github.com/cristopher1',
    },
    {
        id: 3,
        componentInfo: {
            title: 'Email',
            description: '¿Tienes dudas sobre la aplicación?. Contáctate con el desarrollador.',
            iconClass: 'bi bi-envelope',
            titleClass: "mb-2 text-dark",
            descriptionClass: "text-muted",
        },
        urlRedirect: 'mailto:cristopher.jimene.13@sansano.usm.cl?subject=Duda%20aplicación%20desarrollo%20web%20python',
    },
]
</script>

<template>
    <section id="contact">
        <div class="container px-5 text-center">
            <!-- Contact cards-->
            <div class="row gx-5 row-cols-2 row-cols-lg-3 py-5">
                <div class="col" v-for="{ id, componentInfo, urlRedirect } in contacts" :key="id">
                    <a class="text-decoration-none" target="_blank" :href="urlRedirect">
                        <GenericFeature v-bind="componentInfo" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>