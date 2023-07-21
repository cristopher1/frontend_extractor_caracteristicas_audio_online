<script setup>
    import { RouterLink } from 'vue-router'
    
    const toContacto = { name: 'contacto' }
</script>

<template>
    <!-- Footer-->
    <footer class="bg-dark py-4 mt-auto">
      <div class="container px-5">
          <div class="row align-items-center justify-content-between flex-column flex-sm-row">
              <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Extractor de características de audios online 2021</div></div>
              <div class="col-auto">
                  <RouterLink class="link-light small" :to="toContacto">Contacto</RouterLink>
              </div>
          </div>
      </div>
    </footer>
</template>