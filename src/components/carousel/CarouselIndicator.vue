<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    carouselId: {
        type: String,
        required: true,
    },
    indexSlide: {
        type: Number,
        required: true,
    },
    ariaCurrent: {
        type: Boolean,
        required: true,
    },
    ariaLabel: {
        type: String,
        required: true,
    }
})

const {
    carouselId,
    indexSlide,
    ariaCurrent,
    ariaLabel,
} = toRefs(props)

const button = {
    'type': "button",
    'data-bs-target': `#${carouselId.value}`,
    'data-bs-slide-to': indexSlide.value,
    'aria-current': ariaCurrent.value,
    'aria-label': ariaLabel.value
}
</script>

<template>
    <button v-bind="button"></button>
</template>