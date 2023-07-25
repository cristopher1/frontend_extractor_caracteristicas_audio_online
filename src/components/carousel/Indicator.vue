<script setup>
const props = defineProps({
    buttonInfo: {
        carouselId: 'string',
        indexSlide: 'int',
        ariaCurrent: 'bool',
        ariaLabel: 'string'
    }
})

const { buttonInfo } = props

const button = {
    'type': "button",
    'data-bs-target': `#${buttonInfo.carouselId}`,
    'data-bs-slide-to': buttonInfo.indexSlide,
    'aria-current': buttonInfo.ariaCurrent,
    'aria-label': buttonInfo.ariaLabel
}
</script>

<template>
    <button v-bind="button"></button>
</template>