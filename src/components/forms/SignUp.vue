<script setup>
const props = defineProps({
    componentInfo: {
        title: 'string',
        description: 'string',
        titleButtonSubmit: 'string'
    }
})

const {
    title,
    description,
    titleButtonSubmit
} = props.componentInfo
</script>

<template>
    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
        <div class="mb-4 mb-xl-0">
            <div class="fs-3 fw-bold text-white"> {{ title }} </div>
            <div class="text-white-50"> {{ description }} </div>
        </div>
        <div class="ms-xl-4">
            <form class="text-center text-white" method="POST" action="">
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Correo electrónico" id="correo" name="email">
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Contraseña" id="contrasenna" name="password">
                </div>
                <button class="btn btn-outline-light" id="button-newsletter" type="submit"> {{ titleButtonSubmit }}
                </button>
            </form>
        </div>
    </div>
</template>