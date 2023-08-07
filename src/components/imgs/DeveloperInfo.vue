<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    autorImg: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    containerClass: {
        type: String,
        required: true,
    },
    imgClass: {
        type: String,
        required: true,
    },
    titleClass: {
        type: String,
        required: true,
    },
    descriptionClass: {
        type: String,
        required: true,
    },
})

const {
    autorImg,
    nombre,
    description,
    containerClass,
    imgClass,
    titleClass,
    descriptionClass,
} = toRefs(props)

const containerDiv = {
    class: containerClass.value,
}

const img = {
    class: imgClass.value,
    src: autorImg.value,
}

const h5 = {
    class: titleClass.value,
}

const div = {
    class: descriptionClass.value,
}
</script>

<template>
    <div v-bind="containerDiv">
        <img v-bind="img" />
        <h5 v-bind="h5"> {{ nombre }} </h5>
        <div v-bind="div"> {{ description }} </div>
    </div>
</template>