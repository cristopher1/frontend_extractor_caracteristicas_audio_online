<script setup>
import HomeHeader from '../components/headers/HomeHeader.vue';
import CharacteristicsResultsSection from '../components/sections/home/CharacteristicsResultsSection.vue'
import SignUpSection from '../components/sections/home/SignUpSection.vue';
import FeaturesSection from '../components/sections/home/FeaturesSection.vue';
import { urlInformationName, urlSignInName } from '../lib/urlName'

const homeHeader = {
  title: "Extractor de características de audios online",
  description: `Extraiga de manera sencilla información relevante
                de sus archivos de audios`,
  data: [
    {
      id: 1,
      url: { name: urlSignInName, },
      message: 'Comenzar',
      linkClass: 'btn btn-primary btn-lg px-4 me-sm-3',
    },
    {
      id: 2,
      url: { name: urlInformationName, },
      message: 'Ver más',
      linkClass: 'btn btn-outline-light btn-lg px-4',
    },
  ]
}

const sectionCharacteristicsResults = {
  title: 'Características extraídas',
  description: 'De manera sencilla podrá tener resultados como los siguientes.',
}

const sectionSignIn = {
  title: "Registrate.",
  description: "Comience a usar las funcionalidades de la aplicación.",
  titleButtonSubmit: "Registrame",
}

const sectionFeatures = {
  title: 'Algunas ventajas.',
}
</script>

<template>
  <!-- Header-->
  <HomeHeader v-bind="homeHeader" />
  <!-- Characteristics results preview section-->
  <CharacteristicsResultsSection v-bind="sectionCharacteristicsResults" />
  <!-- Call to action-->
  <SignUpSection v-bind="sectionSignIn" />
  <!-- Features section-->
  <FeaturesSection v-bind="sectionFeatures" />
</template>
