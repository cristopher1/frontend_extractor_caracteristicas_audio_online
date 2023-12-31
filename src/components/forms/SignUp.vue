<script setup>
import { toRefs, ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Swal from 'sweetalert2'

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    titleButtonSubmit: {
        type: String,
        required: true,
    }
})

const {
    title,
    description,
    titleButtonSubmit,
} = toRefs(props)

const signUpForm = ref({
    email: null,
    password: null,
})

const rules = computed(() => {
    return {
        email: {
            required,
            email,
        },
        password: { required },
    }
})

const $v = useValidate(rules, signUpForm, { $lazy: true, $autoDirty: true, })

const validateState = (name) => {
    const { $dirty, $error } = $v.value[name]
    return $dirty ? !$error : null
}

const apis = inject('apis')
const urlApp = inject('urlApp')
const reactiveLocalStorage = inject('reactiveLocalStorage')

const router = useRouter()

const signUpAction = async () => {
    try {
        await $v.value.$validate()
        if ($v.value.$error) {
            return;
        }
        const body = { ...signUpForm.value }
        const response = await apis.extractorCaracteristicas.request.auth.signUp({ body })
        if (response.status === 200) {
            const accessToken = response.data[apis.extractorCaracteristicas.tokens.accessToken.name]
            const refreshToken = response.data[apis.extractorCaracteristicas.tokens.refreshToken.name]
            reactiveLocalStorage.setItem(apis.extractorCaracteristicas.storage.accessTokenItem.name, accessToken)
            reactiveLocalStorage.setItem(apis.extractorCaracteristicas.storage.refreshTokenItem.name, refreshToken)
            router.push({
                name: urlApp.principal.name,
            })
        }
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'La aplicación ha tenido un problema',
            text: 'Ha ocurrido un problema con nuestro servidor.',
        })
    }
}
</script>

<template>
    <div class="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
        <div class="mb-4 mb-xl-0">
            <div class="fs-3 fw-bold text-white"> {{ title }} </div>
            <div class="text-white-50"> {{ description }} </div>
        </div>
        <div class="ms-xl-4">
            <b-form class="text-center text-white">
                <b-form-group class="mb-3">
                    <b-form-input type="email" class="form-control" placeholder="Correo electrónico" id="correo"
                        name="email" v-model="signUpForm.email" :state="validateState('email')"
                        aria-describedby="email-validation">
                    </b-form-input>
                    <b-form-invalid-feedback id="email-validation">
                        <span class="text-dark" v-for="error in $v.email.$errors" :key="error.$uid"> {{ error.$message
                        }} </span>
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="mb-3">
                    <b-form-input type="password" class="form-control" placeholder="Contraseña" id="contrasenna"
                        name="password" v-model="signUpForm.password" :state="validateState('password')"
                        aria-describedby="password-validation">
                    </b-form-input>
                    <b-form-invalid-feedback id="password-validation">
                        <span class="text-dark" v-for="error in $v.password.$errors" :key="error.$uid"> {{
                            error.$message }} </span>
                    </b-form-invalid-feedback>
                </b-form-group>
                <button class="btn btn-outline-light" type="button" @click="signUpAction">
                    {{ titleButtonSubmit }}
                </button>
            </b-form>
        </div>
    </div>
</template>