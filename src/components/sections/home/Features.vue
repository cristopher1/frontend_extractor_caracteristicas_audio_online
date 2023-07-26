<script setup>
import GenericFeature from '../../features/GenericFeature.vue'

const props = defineProps({
    componentInfo: {
        title: 'string'
    }
})

const {
    title
} = props.componentInfo

const features = [
    {
        info: {
            classInfo: {
                iconClass: 'bi bi-collection'
            },
            componentInfo: {
                title: 'Varias características',
                description: `Puede generar espectrogramas, espectrogramas de MEL,
                  series de tiempo de amplitud y coeficientes cepstrales
                  en la frecuencia de MEL.`
            },
        },
        containerClass: 'col mb-5 h-100'
    },
    {
        info: {
            classInfo: {
                iconClass: 'bi bi-download'
            },
            componentInfo: {
                title: 'Descargar Resultados',
                description: 'Puede descargarlos como imágenes o archivos con objetos python.'
            },
        },
        containerClass: 'col mb-5 h-100'
    },
    {
        info: {
            classInfo: {
                iconClass: 'bi bi-file-earmark-code'
            },
            componentInfo: {
                title: 'Directamente en python',
                description: `Genere matrices de distribución
                  de energía que pueden ser cargados directamente
                  en python usando los modúlos pickle y numpy.`
            },
        },
        containerClass: 'col mb-5 mb-md-0 h-100'
    },
    {
        info: {
            classInfo: {
                iconClass: 'bi bi-check-all',
            },
            componentInfo: {
                title: 'Sencillo',
                description: `Ajuste los parámetros necesarios y genere
                  resultados de manera rápida y sencilla.`
            },
        },
        containerClass: 'col h-100'
    }
]
</script>

<template>
    <section id="features" class="px-5 py-5">
        <div class="container px-5 my-5">
            <div class="row gx-5">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h2 class="fw-bolder mb-0"> {{ title }} </h2>
                </div>
                <div class="col-lg-8">
                    <div class="row gx-5 row-cols-1 row-cols-md-2">
                        <div v-for="{ info, containerClass } in features" :key="info" :class="containerClass">
                            <GenericFeature v-bind="info" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>