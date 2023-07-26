<script setup>
const props = defineProps({
    componentInfo: {
        carouselId: 'string',
        dataBsSlide: 'string',
        carouselControl: 'string'
    }
})

const {
    carouselId,
    dataBsSlide,
    carouselControl
} = props.componentInfo

const button = {
    'type': 'button',
    'class': `carousel-control-${carouselControl}`,
    'data-bs-target': `#${carouselId}`,
    'data-bs-slide': dataBsSlide
}

const span = {
    'class': `carousel-control-${carouselControl}-icon`,
    'aria-hidden': true
}
</script>

<template>
    <button v-bind="button">
        <span v-bind="span"></span>
    </button>
</template>
