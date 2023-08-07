<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imgSrc: {
        type: String,
        required: true,
    },
    soundObtainedFrom: {
        type: String,
        required: true,
    },
    soundFileExtension: {
        type: String,
        required: true,
    }
})

const {
    type,
    title,
    description,
    imgSrc,
    soundObtainedFrom,
    soundFileExtension,
} = toRefs(props)
</script>

<template>
    <div class="card h-100 shadow border-0">
        <img class="card-img-top" :src="imgSrc" height="240" />
        <div class="card-body p-4">
            <div class="badge bg-primary bg-gradient rounded-pill mb-2"> {{ type }} </div>
            <a class="text-decoration-none link-dark stretched-link">
                <h5 class="card-title mb-3"> {{ title }} </h5>
            </a>
            <p class="card-text mb-0"> {{ description }} </p>
        </div>
        <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
            <div class="d-flex align-items-end justify-content-between">
                <div class="d-flex align-items-center">
                    <i class="bi bi-file-earmark-play-fill rounded-circle me-3"></i>
                    <div class="small">
                        <div class="fw-bold"> {{ soundObtainedFrom }} </div>
                        <div class="text-muted"> {{ soundFileExtension }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>