<script setup>
import HomeHeader from '../components/headers/Home.vue';
import CharacteristicsResultsSection from '../components/sections/home/CharacteristicsResults.vue'
import SignUpSection from '../components/sections/home/SignUp.vue';
import FeaturesSection from '../components/sections/home/Features.vue';
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
  componentInfo: {
    title: 'Características extraídas',
    description: 'De manera sencilla podrá tener resultados como los siguientes.'
  }
}

const sectionSignIn = {
  componentInfo: {
    title: "Registrate.",
    description: "Comience a usar las funcionalidades de la aplicación.",
    titleButtonSubmit: "Registrame"
  }
}

const sectionFeatures = {
  componentInfo : {
    title: 'Algunas ventajas.'
  }
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
  <FeaturesSection v-bind="sectionFeatures"/>  
</template>
