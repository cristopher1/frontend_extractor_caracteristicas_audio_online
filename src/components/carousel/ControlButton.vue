<script setup>
const props = defineProps({
    carouselId: 'string',
    dataBsSlide: 'string',
    carouselControl: 'string'
})
</script>

<template>
    <button :class="`carousel-control-${carouselControl}`" type="button" :data-bs-target="`#${carouselId}`"
        :data-bs-slide="dataBsSlide">
        <span :class="`carousel-control-${carouselControl}-icon`" aria-hidden="true"></span>
    </button>
</template>
