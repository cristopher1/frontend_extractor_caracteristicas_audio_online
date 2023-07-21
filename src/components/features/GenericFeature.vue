<script setup>
    const props = defineProps({
        title: 'string',
        description: 'string',
        titleClass: 'string',
        descriptionClass: 'string',
        iconClass: 'string'
    })
</script>

<template>
    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i :class="iconClass"></i></div>
    <h2 class="h5" :class="titleClass"> {{ title }} </h2>
    <p class="mb-0" :class="descriptionClass"> {{ description }} </p>
</template>