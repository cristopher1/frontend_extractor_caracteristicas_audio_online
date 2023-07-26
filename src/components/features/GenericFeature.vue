<script setup>
const props = defineProps({
    classInfo: {
        titleClass: 'string',
        descriptionClass: 'string',
        iconClass: 'string'
    },
    componentInfo: {
        title: 'string',
        description: 'string',
    }
})

const {
    titleClass,
    descriptionClass,
    iconClass
} = props.classInfo

const {
    title,
    description
} = props.componentInfo

const div = {
    class: 'feature bg-primary bg-gradient text-white rounded-3 mb-3'
}

const icon = {
    class: iconClass
}

const h2 = {
    class: [ 'h5', titleClass ]
}

const p = {
    class: [ 'mb-0', descriptionClass ]
}

</script>

<template>
    <div v-bind="div"><i v-bind="icon"></i></div>
    <h2 v-bind="h2"> {{ title }} </h2>
    <p v-bind="p"> {{ description }} </p>
</template>