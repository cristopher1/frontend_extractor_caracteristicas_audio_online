<script setup>
import HomeHeader from '../components/headers/Home.vue';
import SectionCharacteristicsResults from '../components/sections/home/CharacteristicsResults.vue'
import GenericFeature from '../components/features/GenericFeature.vue'
import SignUp from '../components/forms/SignUp.vue'
import { urlInformationName, urlSignInName } from '../lib/urlName'

const homeHeader = {
  headerInfo: {
    title: "Extractor de características de audios online",
    description: `Extraiga de manera sencilla información relevante
                de sus archivos de audios`,
  },
  signInInfo: {
    url: { name: urlSignInName },
    message: 'Comenzar'
  },
  informationInfo: {
    url: { name: urlInformationName },
    message: 'Ver más'
  }
}

const sectionCharacteristicsResults = {
  sectionInfo: {
    title: 'Características extraídas',
    description: 'De manera sencilla podrá tener resultados como los siguientes.'
  }
}

const features = [
  {
    featureInfo: {
      iconClass: 'bi bi-collection',
      title: 'Varias características',
      description: `Puede generar espectrogramas, espectrogramas de MEL,
                    series de tiempo de amplitud y coeficientes cepstrales
                    en la frecuencia de MEL.`
    },
    containerClass: 'col mb-5 h-100'
  },
  {
    featureInfo: {
      iconClass: 'bi bi-download',
      title: 'Descargar Resultados',
      description: 'Puede descargarlos como imágenes o archivos con objetos python.'
    },
    containerClass: 'col mb-5 h-100'
  },
  {
    featureInfo: {
      iconClass: 'bi bi-file-earmark-code',
      title: 'Directamente en python',
      description: `Genere matrices de distribución
                  de energía que pueden ser cargados directamente
                  en python usando los modúlos pickle y numpy.`
    },
    containerClass: 'col mb-5 mb-md-0 h-100'
  },
  {
    featureInfo: {
      iconClass: 'bi bi-check-all',
      title: 'Sencillo',
      description: `Ajuste los parámetros necesarios y genere
                  resultados de manera rápida y sencilla.`
    },
    containerClass: 'col h-100'
  }
]
</script>

<template>
  <!-- Header-->
  <HomeHeader v-bind="homeHeader" />
  <!-- Characteristics results preview section-->
  <SectionCharacteristicsResults v-bind="sectionCharacteristicsResults"/>
  <!-- Call to action-->
  <section id="sign-up" class="bg-primary bg-gradient p-4 p-sm-5 py-5 mx-3">
    <SignUp title="Registrate." description="Comience a usar las funcionalidades de la aplicación."
      titleButtonSubmit="Registrame" />
  </section>
  <!-- Features section-->
  <section id="features" class="px-5 py-5">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h2 class="fw-bolder mb-0">Algunas ventajas.</h2>
        </div>
        <div class="col-lg-8">
          <div class="row gx-5 row-cols-1 row-cols-md-2">
            <div v-for="feature in features" :key="feature" :class="feature.containerClass">
              <GenericFeature v-bind="feature.featureInfo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
