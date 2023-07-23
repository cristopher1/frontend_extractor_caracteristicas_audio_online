<script setup>
import { defineAsyncComponent } from 'vue'
import Indicator from './Indicator.vue'
import ControlButton from './ControlButton.vue'

const props = defineProps({
    id: 'string',
    pathDirectoryCarouselItem: 'string',
    nameFileCarouselItem: 'string',
    data: 'Array',
    dataBsInterval: 'int',
    carouselClass: 'string',
    withIndicators: 'bool',
    withCarouselControl: 'bool',
    withRows: 'bool',
    nCols: 'int',
    colClass: 'string'
})

const controlSlides = ['prev', 'next']

const nSlide = (withRows, nItems, nCols) => (withRows) ? Math.ceil(nItems / nCols) : nItems
const isActive = (n) => (n === 1) ? true : null
const isAriaCurrent = (n) => (n === 1) ? true : null
const itemIndex = (n, nCol, nCols) => n * nCols + nCol
const obtainItem = (data, n, ...args) => {
    let index = n
    // Se sobrepasa la cantidad de elementos que hay en el arreglo.
    if (args.length !== 0 && (index = itemIndex(n, ...args)) > data.length - 1) {
        return null;
    }
    return data[index]
}

const carouselItem = defineAsyncComponent(() => {
    return import(`../${props.pathDirectoryCarouselItem}/${props.nameFileCarouselItem}.vue`)
})
</script>

<template>
    <div :id="id" class="carousel carousel-dark slide" :class="carouselClass" data-bs-ride="carousel">
        <div class="carousel-indicators" v-if="withIndicators">
            <Indicator v-for="n in nSlide(withRows, data.length, nCols)" :key="n" :class="{ active: isActive(n) }"
                :carouselId="id" :indexSlide="n - 1" :ariaCurrent="isAriaCurrent(n)" :ariaLabel="`Slide ${n - 1}`" />
        </div>
        <div class="carousel-inner">
            <div v-for="n in nSlide(withRows, data.length, nCols)" :key="n" class="carousel-item"
                :class="{ active: isActive(n) }" :data-bs-interval="dataBsInterval">
                <template v-if="withRows">
                    <div class="row pb-5 pt-5 px-5 py-5">
                        <div v-for="nCol in nCols" :key="nCol" :class="colClass">
                            <carouselItem v-if="item = obtainItem(data, n - 1, nCol - 1, nCols)" :cardTipe="item.cardTipe"
                                :cardTitle="item.cardTitle" :cardDescription="item.cardDescription" :imgSrc="item.imgSrc"
                                :soundSrc="item.soundSrc" :soundFileExt="item.soundFileExt" />
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="pb-5 pt-5 px-5 py-5">
                        <carouselItem v-if="item = obtainItem(data, n - 1)" :cardTipe="item.cardTipe"
                            :cardTitle="item.cardTitle" :cardDescription="item.cardDescription" :imgSrc="item.imgSrc"
                            :soundSrc="item.soundSrc" :soundFileExt="item.soundFileExt" />
                    </div>
                </template>
            </div>
        </div>
        <template v-if="withCarouselControl">
            <ControlButton v-for="controlSlide in controlSlides" :carouselControl="controlSlide" :dataBsSlide="controlSlide"
                :carouselId="id" />
        </template>
    </div>
</template>