<script setup>
  import { RouterView } from 'vue-router'
  import MainNav from './components/mainStructureForViews/MainNav.vue'
  import MainFooter from './components/mainStructureForViews/MainFooter.vue'
</script>

<template>
  <MainNav />
  <main>
    <RouterView />
  </main>
  <MainFooter />
</template>
