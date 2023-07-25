<script setup>
const props = defineProps({
    classInfo: {
        containerClass: 'string',
        imgClass: 'string',
        titleClass: 'string',
        descriptionClass: 'string'
    },
    componentInfo: {
        autorImg: 'string',
        nombre: 'string',
        description: 'string',
    }
})

const { containerClass, imgClass, titleClass, descriptionClass } = props.classInfo
const { autorImg, nombre, description } = props.componentInfo

const img = {
    src: autorImg
}

</script>

<template>
    <div :class="containerClass">
        <img :class="imgClass" v-bind="img" />
        <h5 :class="titleClass"> {{ nombre }} </h5>
        <div :class="descriptionClass"> {{ description }} </div>
    </div>
</template>