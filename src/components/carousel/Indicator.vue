<script setup>
    const props = defineProps({
        carouselId: 'string',
        indexSlide: 'int',
        ariaCurrent: 'bool',
        ariaLabel: 'string'
    })
</script>

<template>
    <button type="button" :data-bs-target="`#${carouselId}`" :data-bs-slide-to="indexSlide"
        :aria-current="ariaCurrent" :aria-label="ariaLabel"></button>
</template>