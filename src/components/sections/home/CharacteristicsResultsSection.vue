<script setup>
import { toRefs } from 'vue'
import GenericCarousel from '../../carousel/GenericCarousel.vue'
import {
    spectrogramZumbidos38SegImg,
    melSpectrogramZumbidos38SegImg,
    mfcc13Zumbidos38SegImg,
    serieTiempoLadrido4SegImg,
    spectrogramLadrido4SegImg,
    melSpectrogramLadrido4SegImg,
    serieTiempoAcordeGuitarra4SegImg,
    mfcc20SerieTiempoAcordeGuitarra4SegImg,
    mfcc20MelAcordeGuitarra4SegImg
} from '../../../assets/img/views/home'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const {
    title,
    description,
} = toRefs(props)

const characteristicResults = [
    {
        type: "Imagen",
        title: "Espectrograma",
        description: "Resultado obtenido a partir de 38 seg de audio.",
        imgSrc: spectrogramZumbidos38SegImg,
        soundObtainedFrom: "Generado a partir de zumbidos de abejas",
        soundFileExtension: "Extensión: mp3 • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Espectrograma de MEL",
        description: "Resultado obtenido a partir de 38 seg de audio.",
        imgSrc: melSpectrogramZumbidos38SegImg,
        soundObtainedFrom: "Generado a partir de zumbidos de abejas",
        soundFileExtension: "Extensión: mp3 • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Coeficientes cepstrales en la frecuencia de MEL",
        description: "Resultado obtenido a partir de 38 seg de audio.",
        imgSrc: mfcc13Zumbidos38SegImg,
        soundObtainedFrom: "Generado a partir de zumbidos de abejas",
        soundFileExtension: "Extensión: mp3 • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Serie de tiempo",
        description: "Resultado obtenido a partir de 4 seg de audio.",
        imgSrc: serieTiempoLadrido4SegImg,
        soundObtainedFrom: "Generado a partir de ladridos de perro",
        soundFileExtension: "Extensión: wav • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Espectrograma",
        description: "Resultado obtenido a partir de 4 seg de audio.",
        imgSrc: spectrogramLadrido4SegImg,
        soundObtainedFrom: "Generado a partir de ladridos de perro",
        soundFileExtension: "Extensión: wav • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Espectrograma de MEL",
        description: "Resultado obtenido a partir de 4 seg de audio.",
        imgSrc: melSpectrogramLadrido4SegImg,
        soundObtainedFrom: "Generado a partir de ladridos de perro",
        soundFileExtension: "Extensión: wav • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Serie de tiempo",
        description: "Resultado obtenido a partir de 4 seg de audio.",
        imgSrc: serieTiempoAcordeGuitarra4SegImg,
        soundObtainedFrom: "Generado a partir de acordes de guitarra",
        soundFileExtension: "Extensión: wav • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Coeficientes cepstrales en la frecuencia de MEL",
        description: "Resultado obtenido a partir de 4 seg de audio.",
        imgSrc: mfcc20SerieTiempoAcordeGuitarra4SegImg,
        soundObtainedFrom: "Generado a partir de acordes de guitarra",
        soundFileExtension: "Extensión: wav • Muestreo: 44100",
    },
    {
        type: "Imagen",
        title: "Coeficientes cepstrales en la frecuencia de MEL",
        description: "Resultado obtenido a partir de 4 seg de audio.",
        imgSrc: mfcc20MelAcordeGuitarra4SegImg,
        soundObtainedFrom: "Generado a partir de acordes de guitarra",
        soundFileExtension: "Extensión: wav • Muestreo: 44100",
    }
]

const carousel = {
    id: "characteristics",
    pathDirectoryCarouselItem: "cards",
    nameFileCarouselItem: "SoundCharacteristics",
    data: characteristicResults,
    dataBsInterval: 4000,
    nCols: 3,
    withIndicators: true,
    withCarouselControl: true,
    withRows: true,
    carouselClass: "carousel-fade",
    colClass: "col-lg-4 col-md-12",
}
</script>

<template>
    <section id="results">
        <div class="container px-5 my-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-8 col-xl-6">
                    <div class="text-center">
                        <h2 class="fw-bolder"> {{ title }} </h2>
                        <p class="lead fw-normal text-muted mb-5"> {{ description }} </p>
                    </div>
                </div>
            </div>
            <div class="row gx-5">
                <GenericCarousel v-bind="carousel" />
            </div>
        </div>
    </section>
</template>