<script setup>
  import { RouterLink } from 'vue-router'
  import SoundCharacteristics from '../components/cards/SoundCharacteristics.vue';
  import GenericFeature from '../components/features/GenericFeature.vue';

  const toInformacion = { name: 'informacion' }
</script>

<template>
  <!-- Header-->
  <header class="bg-dark py-5">
      <div class="container px-5">
          <div class="row gx-5 align-items-center justify-content-center">
              <div class="col-lg-8 col-xl-7 col-xxl-6">
                  <div class="my-5 text-center text-xl-start">
                      <h1 class="display-5 fw-bolder text-white mb-2">Extractor de características de audios online</h1>
                      <p class="lead fw-normal text-white-50 mb-4">Extraiga de manera sencilla información relevante de sus archivos de audios!</p>
                      <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                          <a class="btn btn-primary btn-lg px-4 me-sm-3" href="">Comenzar</a>
                          <RouterLink class="btn btn-outline-light btn-lg px-4" :to="toInformacion">Ver más</RouterLink>
                      </div>
                  </div>
              </div>
              <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                  <div id="carouselExampleDark" class="carousel carousel-dark slide pb-5 pl-5 pr-5 pt-3 mb-5 ml-5 mr-5 mt-3" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div class="carousel-inner">
                          <div class="carousel-item active" data-bs-interval="4000">
                          <img src="" class="d-block m-auto" width="640" height="320">
                          <div class="carousel-caption d-none d-md-block">
                              <h5>Extraiga características de audio</h5>
                              <p>Obtenga extracción de características.</p>
                          </div>
                          </div>
                          <div class="carousel-item" data-bs-interval="4000">
                          <img src="" class="d-block m-auto" width="640" height="320">
                          <div class="carousel-caption d-none d-md-block">
                              <h5>Obtenga varias características</h5>
                              <p>Espectrograma y MFCC.</p>
                          </div>
                          </div>
                          <div class="carousel-item" data-bs-interval="4000">
                          <img src="" class="d-block m-auto" width="640" height="320">
                          <div class="carousel-caption d-none d-md-block">
                              <h5>Todo en python</h5>
                              <p>Implementado en python.</p>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>
  <!-- Features section-->
  <section class="py-5" id="features">
      <div class="container px-5 my-5">
          <div class="row gx-5">
              <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">Algunas ventajas.</h2></div>
              <div class="col-lg-8">
                  <div class="row gx-5 row-cols-1 row-cols-md-2">
                      <div class="col mb-5 h-100">
                        <GenericFeature iconClass="bi bi-collection" title="Varias características"
                          description="Puede generar espectrogramas, espectrogramas de MEL,
                          series de tiempo de amplitud y coeficientes cepstrales en la frecuencia de MEL." />
                      </div>
                      <div class="col mb-5 h-100">
                        <GenericFeature iconClass="bi bi-download" title="Descargar Resultados"
                            description="Puede descargarlos como imágenes o archivos con objetos python." />
                      </div>
                      <div class="col mb-5 mb-md-0 h-100">
                        <GenericFeature iconClass="bi bi-file-earmark-code" title="Directamente en python"
                             description="Genere matrices de distribución
                            de energía que pueden ser cargados directamente en python usando los modúlos pickle y numpy." />
                      </div>
                      <div class="col h-100">
                        <GenericFeature iconClass="bi bi-check-all" title="Sencillo"
                             description="Ajuste los parámetros necesarios y genere resultados de manera rápida y sencilla." />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- Blog preview section-->
  <section class="py-5">
      <div class="container px-5 my-5">
          <div class="row gx-5 justify-content-center">
              <div class="col-lg-8 col-xl-6">
                  <div class="text-center">
                      <h2 class="fw-bolder">Nuestros resultados</h2>
                      <p class="lead fw-normal text-muted mb-5">De manera sencilla podrá tener resultados como los siguientes.</p>
                  </div>
              </div>
          </div>
          <div class="row gx-5">
              <div class="col-lg-4 mb-5">
                <SoundCharacteristics cardTipe="Imagen" cardTitle="Espectrograma"
                  cardDescription="Resultado obtenido a partir de 2 seg de audio." soundSrc="Generado con audio de abejas"
                  soundFileExt="Extensión: mp3 &middot; Muestreo: 44100" />
              </div>
              <div class="col-lg-4 mb-5">
                <SoundCharacteristics cardTipe="Imagen" cardTitle="Espectrograma de MEL"
                  cardDescription="Resultado obtenido a partir de 2 seg de audio." soundSrc="Generado con audio de abejas"
                  soundFileExt="Extensión: mp3 &middot; Muestreo: 44100" />
              </div>
              <div class="col-lg-4 mb-5">
                <SoundCharacteristics cardTipe="Imagen" cardTitle="Coeficientes cepstrales en la frecuencia de MEL"
                  cardDescription="Resultado obtenido a partir de 2 seg de audio." soundSrc="Generado con audio de abejas"
                  soundFileExt="Extensión: mp3 &middot; Muestreo: 44100" />
              </div>
          </div>
          <!-- Call to action-->
          <a name="registrarse"></a>
          <aside class="bg-primary bg-gradient rounded-3 p-4 p-sm-5 mt-5">
              <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
                  <div class="mb-4 mb-xl-0">
                      <div class="fs-3 fw-bold text-white">Registrate.</div>
                      <div class="text-white-50">Comience a usar las funcionalidades de la aplicación.</div>
                  </div>
                  <div class="ms-xl-4">
                      <form class="text-center text-white" method="POST" action="">
                          <div class="mb-3">
                              <input type="email" class="form-control" placeholder="Correo electrónico" id="correo" name="email">
                          </div>
                          <div class="mb-3">
                              <input type="password" class="form-control" placeholder="Contraseña" id="contrasenna" name="password">
                          </div>
                          <button class="btn btn-outline-light" id="button-newsletter" type="submit">Registrame</button>
                      </form>
                  </div>
              </div>
          </aside>
      </div>
  </section>
</template>
