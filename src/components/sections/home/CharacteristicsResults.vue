<script setup>
import Carousel from '../../carousel/Carousel.vue'
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
    componentInfo: {
        title: 'string',
        description: 'string'
    }
})

const {
    title,
    description
} = props.componentInfo

const characteristicResults = [
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Espectrograma",
            cardDescription: "Resultado obtenido a partir de 38 seg de audio.",
            imgSrc: spectrogramZumbidos38SegImg,
            soundSrc: "Generado a partir de zumbidos de abejas",
            soundFileExt: "Extensión: mp3 &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Espectrograma de MEL",
            cardDescription: "Resultado obtenido a partir de 38 seg de audio.",
            imgSrc: melSpectrogramZumbidos38SegImg,
            soundSrc: "Generado a partir de zumbidos de abejas",
            soundFileExt: "Extensión: mp3 &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Coeficientes cepstrales en la frecuencia de MEL",
            cardDescription: "Resultado obtenido a partir de 38 seg de audio.",
            imgSrc: mfcc13Zumbidos38SegImg,
            soundSrc: "Generado a partir de zumbidos de abejas",
            soundFileExt: "Extensión: mp3 &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Serie de tiempo",
            cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
            imgSrc: serieTiempoLadrido4SegImg,
            soundSrc: "Generado a partir de ladridos de perro",
            soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Espectrograma",
            cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
            imgSrc: spectrogramLadrido4SegImg,
            soundSrc: "Generado a partir de ladridos de perro",
            soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Espectrograma de MEL",
            cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
            imgSrc: melSpectrogramLadrido4SegImg,
            soundSrc: "Generado a partir de ladridos de perro",
            soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Serie de tiempo",
            cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
            imgSrc: serieTiempoAcordeGuitarra4SegImg,
            soundSrc: "Generado a partir de acordes de guitarra",
            soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Coeficientes cepstrales en la frecuencia de MEL",
            cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
            imgSrc: mfcc20SerieTiempoAcordeGuitarra4SegImg,
            soundSrc: "Generado a partir de acordes de guitarra",
            soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
        }
    },
    {
        componentInfo: {
            cardTipe: "Imagen",
            cardTitle: "Coeficientes cepstrales en la frecuencia de MEL",
            cardDescription: "Resultado obtenido a partir de 4 seg de audio.",
            imgSrc: mfcc20MelAcordeGuitarra4SegImg,
            soundSrc: "Generado a partir de acordes de guitarra",
            soundFileExt: "Extensión: wav &middot; Muestreo: 44100"
        }
    }
]

const carousel = {
    classInfo: {
        carouselClass: "carousel-fade",
        colClass: "col-lg-4 col-md-12"
    },
    componentInfo: {
        id: "characteristics",
        pathDirectoryCarouselItem: "cards",
        nameFileCarouselItem: "SoundCharacteristics",
        data: characteristicResults,
        dataBsInterval: 4000,
        nCols: 3,
        withIndicators: true,
        withCarouselControl: true,
        withRows: true
    }
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
                <Carousel v-bind="carousel" />
            </div>
        </div>
    </section>
</template>