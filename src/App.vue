<script setup>
  import { RouterView } from 'vue-router'
  import MainNav from './components/mainStructureForViews/Nav.vue';
  import MainFooter from './components/mainStructureForViews/Footer.vue';
</script>

<template>
  <MainNav />
  <RouterView />
  <MainFooter />
</template>

<style scoped>

</style>
