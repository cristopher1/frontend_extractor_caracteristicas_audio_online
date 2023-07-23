<script setup>
    const props = defineProps({
        cardTipe: 'string',
        cardTitle: 'string',
        cardDescription: 'string',
        imgSrc: 'string',
        soundSrc: 'string',
        soundFileExt: 'string',
    })
</script>

<template>
    <div class="card h-100 shadow border-0">
        <img class="card-img-top" :src="imgSrc" height="240" />
        <div class="card-body p-4">
            <div class="badge bg-primary bg-gradient rounded-pill mb-2"> {{ cardTipe }} </div>
            <a class="text-decoration-none link-dark stretched-link"><h5 class="card-title mb-3"> {{ cardTitle }} </h5></a>
            <p class="card-text mb-0"> {{ cardDescription }} </p>
        </div>
        <div class="card-footer p-4 pt-0 bg-transparent border-top-0">
            <div class="d-flex align-items-end justify-content-between">
                <div class="d-flex align-items-center">
                    <i class="bi bi-file-earmark-play-fill rounded-circle me-3"></i>
                    <div class="small">
                        <div class="fw-bold"> {{ soundSrc }} </div>
                        <div class="text-muted"> {{ soundFileExt }} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>