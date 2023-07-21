<script setup>
  import GenericFeature from '../components/features/GenericFeature.vue';
</script>

<template>
  <!-- Team members section-->
  <section class="py-5 bg-light">
      <div class="container px-5 my-5">
          <div class="text-center">
              <h2 class="fw-bolder">Contacto</h2>
              <p class="lead fw-normal text-muted mb-5">Aplicación desarrollada para el ramo "Taller de proyectos web en python"</p>
          </div>
          <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
              <div class="col mb-5 mb-5 mb-xl-0">
                  <div class="text-center">
                      <img class="img-fluid rounded-circle mb-4 px-4" src="../assets/img/autor.png" />
                      <h5 class="fw-bolder">Cristopher Jiménez</h5>
                      <div class="fst-italic text-muted">Desarrollador &middot; Equipo 11</div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <div class="container px-5 text-center">
      <!-- Contact cards-->
      <div class="row gx-5 row-cols-2 row-cols-lg-3 py-5">
          <div class="col">
              <a class="text-decoration-none" target="_blank" href="https://www.linkedin.com/in/cristopherjimenez/">
                <GenericFeature iconClass="bi bi-linkedin" titleClass="mb-2 text-dark" descriptionClass="text-muted"
                  title="Linkedin" description="Mira el perfil en linkedin." />
              </a>
          </div>
          <div class="col">
              <a class="text-decoration-none" target="_blank" href="https://gitlab.labcomp.cl/cljimene">
                <GenericFeature iconClass="bi bi-github" titleClass="mb-2 text-dark" descriptionClass="text-muted"
                  title="Gitlab" description="Visita la cuenta de gitlab." />
              </a>
          </div>
          <div class="col">
              <a class="text-decoration-none" href="mailto:cristopher.jimene.13@sansano.usm.cl?subject=Duda%20aplicación%20desarrollo%20web%20python">
                <GenericFeature iconClass="bi bi-envelope" titleClass="mb-2 text-dark" descriptionClass="text-muted"
                  title="Email" description="¿Tienes dudas sobre la aplicación?. Contáctate con el desarrollador." />
              </a>
          </div>
      </div>
  </div>
</template>
