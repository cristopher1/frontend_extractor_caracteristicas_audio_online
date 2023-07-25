<script setup>
import MembersSection from '../components/sections/contact/Members.vue'
import ContactSection from '../components/sections/contact/Contact.vue';

const membersSection = {
    componentInfo: {
        title: 'Contacto',
        description: 'Aplicación desarrollada para el ramo "Taller de proyectos web en python'
    }
}
</script>

<template>
    <!-- Team members section-->
    <MembersSection v-bind="membersSection" />
    <!-- Contact section -->
    <ContactSection />
</template>
