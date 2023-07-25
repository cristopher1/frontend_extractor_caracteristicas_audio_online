<script setup>
    const props = defineProps({
        classInfo: {
            containerClass: 'string',
            imgClass: 'string',
            titleClass: 'string',
            descriptionClass: 'string'
        },
        developerInfo: {
            autorImg: 'string',
            nombre: 'string',
            description: 'string',
        }
    })
</script>

<template>
    <div :class="classInfo.containerClass">
        <img :class="classInfo.imgClass" :src="developerInfo.autorImg" />
        <h5 :class="classInfo.titleClass"> {{ developerInfo.nombre }} </h5>
        <div :class="classInfo.descriptionClass"> {{ developerInfo.description }} </div>
    </div>
</template>