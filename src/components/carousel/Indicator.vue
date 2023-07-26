<script setup>
const props = defineProps({
    componentInfo: {
        carouselId: 'string',
        indexSlide: 'int',
        ariaCurrent: 'bool',
        ariaLabel: 'string'
    }
})

const {
    carouselId,
    indexSlide,
    ariaCurrent,
    ariaLabel
} = props.componentInfo

const button = {
    'type': "button",
    'data-bs-target': `#${carouselId}`,
    'data-bs-slide-to': indexSlide,
    'aria-current': ariaCurrent,
    'aria-label': ariaLabel
}
</script>

<template>
    <button v-bind="button"></button>
</template>