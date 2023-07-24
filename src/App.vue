<script setup>
  import { RouterView } from 'vue-router'
  import MainNav from './components/mainStructureForViews/Nav.vue';
  import MainFooter from './components/mainStructureForViews/Footer.vue';
</script>

<template>
  <MainNav />
  <div class="content">
    <RouterView />
  </div>
  <MainFooter />
</template>

<style>
  .content {
    margin-top: 56px;
  }
</style>
