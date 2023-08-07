<script setup>
import { toRefs, defineAsyncComponent } from 'vue'
import CarouselIndicator from './CarouselIndicator.vue'
import CarouselControl from './CarouselControl.vue'

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    pathDirectoryCarouselItem: {
        type: String,
        required: true,
    },
    nameFileCarouselItem: {
        type: String,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
    dataBsInterval: {
        type: Number,
        required: true,
    },
    nCols: {
        type: Number,
        default: 2,
    },
    withIndicators: {
        type: Boolean,
    },
    withCarouselControl: {
        type: Boolean,
    },
    withRows: {
        type: Boolean,
    },
    carouselClass: {
        type: String,
        default: null,
    },
    colClass: {
        type: String,
        dafault: null,
    }
})

const {
    id,
    pathDirectoryCarouselItem,
    nameFileCarouselItem,
    data,
    dataBsInterval,
    nCols,
    withIndicators,
    withCarouselControl,
    withRows,
    carouselClass,
    colClass,
} = toRefs(props)

const calculateNSlide = (withRows, nItems, nCols) => (withRows) ? Math.ceil(nItems / nCols) : nItems

const isActive = (n) => (n === 1) ? true : null

const isAriaCurrent = (n) => (n === 1) ? true : null

const obtainItemIndex = (n, nCol, nCols) => n * nCols + nCol

const obtainItem = (data, n, ...args) => {
    let index = n
    // Se sobrepasa la cantidad de elementos que hay en el arreglo.
    if (args.length !== 0 && (index = obtainItemIndex(n, ...args)) > data.length - 1) {
        return null;
    }
    return data[index]
}

const carouselItem = defineAsyncComponent(() => {
    return import(`../${pathDirectoryCarouselItem.value}/${nameFileCarouselItem.value}.vue`)
})

const containerDiv = {
    'id': id.value,
    'class': ["carousel carousel-dark slide", carouselClass.value],
    'data-bs-ride': "carousel"
}

const carouselInner = {
    'data-bs-interval': dataBsInterval.value
}

const row = {
    class: colClass.value
}

const controlSlides = ['prev', 'next']

</script>

<template>
    <div v-if="nSlides = calculateNSlide(withRows, data.length, nCols)" v-bind="containerDiv">
        <div class="carousel-indicators" v-if="withIndicators">
            <CarouselIndicator v-for="n in nSlides" :key="n - 1" v-bind="{
                class: { active: isActive(n) },
                carouselId: id,
                indexSlide: n - 1,
                ariaCurrent: isAriaCurrent(n),
                ariaLabel: `Slide ${n - 1}`
            }" />
        </div>
        <div class="carousel-inner">
            <div v-for="n in nSlides" :key="n" class="carousel-item" :class="{ active: isActive(n) }"
                v-bind="carouselInner">
                <div v-if="withRows" class="row pb-5 pt-5 px-5 py-5">
                    <div v-for="nCol in nCols" :key="nCol" v-bind="row">
                        <carouselItem v-if="item = obtainItem(data, n - 1, nCol - 1, nCols)" v-bind="item" />
                    </div>
                </div>
                <div v-else class="pb-5 pt-5 px-5 py-5">
                    <carouselItem v-if="item = obtainItem(data, n - 1)" v-bind="item" />
                </div>
            </div>
        </div>
        <template v-if="withCarouselControl">
            <CarouselControl v-for="controlSlide in controlSlides" :key="controlSlide" v-bind="{
                carouselId: id,
                carouselControl: controlSlide,
                dataBsSlide: controlSlide,
            }" />
        </template>
    </div>
</template>
