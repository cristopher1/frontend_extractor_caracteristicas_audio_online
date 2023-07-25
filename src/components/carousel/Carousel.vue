<script setup>
import { defineAsyncComponent } from 'vue'
import Indicator from './Indicator.vue'
import ControlButton from './ControlButton.vue'

const props = defineProps({
    classInfo: {
        carouselClass: 'string',
        colClass: 'string'
    },
    carouselInfo: {
        id: 'string',
        pathDirectoryCarouselItem: 'string',
        nameFileCarouselItem: 'string',
        data: 'Array',
        dataBsInterval: 'int',
        nCols: 'int',
        withIndicators: 'bool',
        withCarouselControl: 'bool',
        withRows: 'bool'
    }
})

const { carouselClass, colClass } = props.classInfo
const {
    id, pathDirectoryCarouselItem, nameFileCarouselItem, data,
    dataBsInterval, nCols, withIndicators,
    withCarouselControl, withRows
} = props.carouselInfo

const containerDiv = {
    'id': id,
    'class': "carousel carousel-dark slide",
    'data-bs-ride': "carousel"
}

const carouselInner = {
    'data-bs-interval': dataBsInterval
}

const controlSlides = ['prev', 'next']

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
    return import(`../${pathDirectoryCarouselItem}/${nameFileCarouselItem}.vue`)
})
</script>

<template>
    <div v-if="nSlides = calculateNSlide(withRows, data.length, nCols)" :class="carouselClass" v-bind="containerDiv">
        <div class="carousel-indicators" v-if="withIndicators">
            <Indicator v-for="n in nSlides" :key="n" :class="{ active: isActive(n) }" v-bind="{
                buttonInfo: {
                    carouselId: id,
                    indexSlide: n - 1,
                    ariaCurrent: isAriaCurrent(n),
                    ariaLabel: `Slide ${n - 1}`
                }
            }" />
        </div>
        <div class="carousel-inner">
            <div v-for="n in nSlides" :key="n" class="carousel-item" :class="{ active: isActive(n) }"
                v-bind="carouselInner">
                <div v-if="withRows" class="row pb-5 pt-5 px-5 py-5">
                    <div v-for="nCol in nCols" :key="nCol" :class="colClass">
                        <carouselItem v-if="item = obtainItem(data, n - 1, nCol - 1, nCols)" v-bind="item" />
                    </div>
                </div>
                <div v-else class="pb-5 pt-5 px-5 py-5">
                    <carouselItem v-if="item = obtainItem(data, n - 1)" v-bind="item" />
                </div>
            </div>
        </div>
        <template v-if="withCarouselControl">
            <ControlButton v-for="controlSlide in controlSlides" v-bind="{
                buttonInfo: {
                    carouselId: id,
                    carouselControl: controlSlide,
                    dataBsSlide: controlSlide,
                }
            }" />
        </template>
    </div>
</template>
