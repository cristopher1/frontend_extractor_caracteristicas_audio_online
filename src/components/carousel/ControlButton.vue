<script setup>
const props = defineProps({
    buttonInfo: {
        carouselId: 'string',
        dataBsSlide: 'string',
        carouselControl: 'string'
    }
})

const { buttonInfo } = props

const button = {
    'type': 'button',
    'class': `carousel-control-${buttonInfo.carouselControl}`,
    'data-bs-target': `#${buttonInfo.carouselId}`,
    'data-bs-slide': buttonInfo.dataBsSlide
}

const span = {
    'class': `carousel-control-${buttonInfo.carouselControl}-icon`,
    'aria-hidden': true
}
</script>

<template>
    <button v-bind="button">
        <span v-bind="span"></span>
    </button>
</template>
