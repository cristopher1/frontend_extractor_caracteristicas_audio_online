<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    titleClass: {
        type: String,
        default: null,
    },
    descriptionClass: {
        type: String,
        default: null,
    },
    iconClass: {
        type: String,
        required: true,
    }
})

const {
    title,
    description,
    titleClass,
    descriptionClass,
    iconClass,
} = toRefs(props)

const div = {
    class: 'feature bg-primary bg-gradient text-white rounded-3 mb-3'
}

const icon = {
    class: iconClass.value
}

const h2 = {
    class: ['h5', titleClass.value]
}

const p = {
    class: ['mb-0', descriptionClass.value]
}

</script>

<template>
    <div v-bind="div"><i v-bind="icon"></i></div>
    <h2 v-bind="h2"> {{ title }} </h2>
    <p v-bind="p"> {{ description }} </p>
</template>