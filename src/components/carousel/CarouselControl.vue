<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    carouselId: {
        type: String,
        required: true,
    },
    dataBsSlide: {
        type: String,
        required: true,
    },
    carouselControl: {
        type: String,
        required: true,
    }
})

const {
    carouselId,
    dataBsSlide,
    carouselControl,
} = toRefs(props)

const button = {
    'type': 'button',
    'class': `carousel-control-${carouselControl.value}`,
    'data-bs-target': `#${carouselId.value}`,
    'data-bs-slide': dataBsSlide.value
}

const span = {
    'class': `carousel-control-${carouselControl.value}-icon`,
    'aria-hidden': true
}
</script>

<template>
    <button v-bind="button">
        <span v-bind="span"></span>
    </button>
</template>
