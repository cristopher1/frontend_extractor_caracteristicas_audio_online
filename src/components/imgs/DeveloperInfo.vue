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

const {
    containerClass,
    imgClass,
    titleClass,
    descriptionClass
} = props.classInfo

const {
    autorImg,
    nombre,
    description
} = props.componentInfo

const containerDiv = {
    class: containerClass
}

const img = {
    class: imgClass,
    src: autorImg
}

const h5 = {
    class: titleClass
}

const div = {
    class: descriptionClass
}
</script>

<template>
    <div v-bind="containerDiv">
        <img v-bind="img" />
        <h5 v-bind="h5"> {{ nombre }} </h5>
        <div v-bind="div"> {{ description }} </div>
    </div>
</template>