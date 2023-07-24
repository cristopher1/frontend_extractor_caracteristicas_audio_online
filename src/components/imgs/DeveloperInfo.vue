<script setup>
    const props = defineProps({
        autorImg: 'string',
        imgClass: 'string',
        title: 'string',
        description: 'string',
        titleClass: 'string',
        descriptionClass: 'string'
    })
</script>

<template>
    <div class="$attrs.class">
        <img :class="imgClass" :src="autorImg" />
        <h5 :class="titleClass"> {{ title }} </h5>
        <div :class="descriptionClass"> {{ description }} </div>
    </div>
</template>