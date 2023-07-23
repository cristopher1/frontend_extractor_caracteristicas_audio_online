<script setup>
import { RouterLink } from 'vue-router'
import GenericFeature from '../components/features/GenericFeature.vue'
import Carousel from '../components/carousel/Carousel.vue';
import spectrogramZumbidos38SegImg from '../assets/img/espectrograma_zumbidos_abeja_38_seg.png'
import melSpectrogramZumbidos38SegImg from '../assets/img/espectrograma_mel_zumbidos_abeja_38_seg.png'
import mfcc13Zumbidos38SegImg from '../assets/img/mfcc13_zumbidos_abeja_38_seg.png'
import serieTiempoLadrido4SegImg from '../assets/img/serie_tiempo_ladrido_4_seg.png'
import spectrogramLadrido4SegImg from '../assets/img/espectrograma_ladrido_4_seg.png'
import melSpectrogramLadrido4SegImg from '../assets/img/espectrograma_mel_ladrido_4_seg.png'
import serieTiempoAcordeGuitarra4SegImg from '../assets/img/serie_tiempo_acordes_guitarra_4_seg.png'
import mfcc20SerieTiempoAcordeGuitarra4SegImg from '../assets/img/mfcc20_serie_tiempo_acordes_guitarra_4_seg.png'
import mfcc20MelAcordeGuitarra4SegImg from '../assets/img/mfcc20_mel_acordes_guitarra_4_seg.png'


const toInformacion = { name: 'informacion' }
const characteristicResults = [
  {
    cardTipe: "Imagen",
    cardTitle: "Espectrograma",
    cardDescription: "Resultado obtenido a partir de 38 seg de audio.",
    imgSrc: spectrogramZumbidos38SegImg,
    soundSrc: "Generado a partir de zumbidos de abejas",
    soundFileExt: "Extensión: mp3 &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle: "Espectrograma de MEL",
    cardDescription: "Resultado obtenido a partir de 38 seg de audio.",
    imgSrc: melSpectrogramZumbidos38SegImg,
    soundSrc: "Generado a partir de zumbidos de abejas",
    soundFileExt: "Extensión: mp3 &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle: "Coeficientes cepstrales en la frecuencia de MEL",
    cardDescription: "Resultado obtenido a partir de 38 seg de audio.",
    imgSrc: mfcc13Zumbidos38SegImg,
    soundSrc: "Generado a partir de zumbidos de abejas",
    soundFileExt: "Extensión: mp3 &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle:"Serie de tiempo",
    cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
    imgSrc: serieTiempoLadrido4SegImg,
    soundSrc: "Generado a partir de ladridos de perro",
    soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle: "Espectrograma",
    cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
    imgSrc: spectrogramLadrido4SegImg,
    soundSrc: "Generado a partir de ladridos de perro",
    soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle: "Espectrograma de MEL",
    cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
    imgSrc: melSpectrogramLadrido4SegImg,
    soundSrc: "Generado a partir de ladridos de perro",
    soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle: "Serie de tiempo",
    cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
    imgSrc: serieTiempoAcordeGuitarra4SegImg,
    soundSrc: "Generado a partir de acordes de guitarra",
    soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle: "Coeficientes cepstrales en la frecuencia de MEL",
    cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
    imgSrc: mfcc20SerieTiempoAcordeGuitarra4SegImg,
    soundSrc: "Generado a partir de acordes de guitarra",
    soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
  },
  {
    cardTipe: "Imagen",
    cardTitle: "Coeficientes cepstrales en la frecuencia de MEL",
    cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
    imgSrc: mfcc20MelAcordeGuitarra4SegImg,
    soundSrc: "Generado a partir de acordes de guitarra",
    soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
  }
]              
</script>

<template>
  <!-- Header-->
  <header class="bg-dark py-5">
    <div class="container px-5">
      <div class="row gx-5 align-items-center justify-content-center">
        <div class="col-lg-8 col-xl-7 col-xxl-6">
          <div class="my-5 text-center text-xl-start">
            <h1 class="display-5 fw-bolder text-white mb-2">Extractor de características de audios online</h1>
            <p class="lead fw-normal text-white-50 mb-4">Extraiga de manera sencilla información relevante de sus archivos
              de audios</p>
            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
              <a class="btn btn-primary btn-lg px-4 me-sm-3" href="">Comenzar</a>
              <RouterLink class="btn btn-outline-light btn-lg px-4" :to="toInformacion">Ver más</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
        </div>
      </div>
    </div>
  </header>
  <!-- Features section-->
  <section class="py-5" id="features">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h2 class="fw-bolder mb-0">Algunas ventajas.</h2>
        </div>
        <div class="col-lg-8">
          <div class="row gx-5 row-cols-1 row-cols-md-2">
            <div class="col mb-5 h-100">
              <GenericFeature iconClass="bi bi-collection" title="Varias características" description="Puede generar espectrogramas, espectrogramas de MEL,
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
            <h2 class="fw-bolder">Características extraídas</h2>
            <p class="lead fw-normal text-muted mb-5">De manera sencilla podrá tener resultados como los siguientes.</p>
          </div>
        </div>
      </div>
      <div class="row gx-5">
        <Carousel id="characteristics-result" pathDirectoryCarouselItem="cards" nameFileCarouselItem="SoundCharacteristics"
        :withIndicators="true" :withCarouselControl="true" :withRows="true" :data="characteristicResults"
        :dataBsInterval="4000" :nCols="3" colClass="col" carouselClass="carousel-fade"/>
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
