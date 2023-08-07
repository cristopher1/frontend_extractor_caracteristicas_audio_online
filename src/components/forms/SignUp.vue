<script setup>
import { toRefs, ref, computed } from 'vue'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Swal from 'sweetalert2'
import { createHttpRequest } from '../../lib/httpRequest'

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
    form: {
        email: null,
        password: null
    }
})

const rules = computed(() => {
    return {
        form: {
            email: {
                required,
                email,
            },
            password: { required },
        }
    }
})

const $v = useValidate(rules, signUpForm)

const validateState = (name) => {
    const { $dirty, $error } = $v.value.form[name]
    return $dirty ? !$error : null
}

const httpRequestSignUp = async (url, httpClient) => {
    try {
        $v.value.form.$touch()
        if ($v.value.form.$error) {
            return;
        }
        const body = { ...signUpForm.value.form }
        const response = await httpClient.post(url, body)
        if (response.status === 200) {
            const accessToken = response.data.access
            const refreshToken = response.data.refresh
            localStorage.setItem('access', accessToken)
            localStorage.setItem('refresh', refreshToken)
        }
    } catch (err) {
        Swal.fire({
            icon: 'error',
            title: 'La aplicación ha tenido un problema',
            text: 'Ha ocurrido un problema con nuestro servidor.'
        })
    }
}

const signUpAction = createHttpRequest(httpRequestSignUp, 'signUp')

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
                        name="email" v-model="signUpForm.form.email" :state="validateState('email')"
                        @input="$v.form.email.$touch()" aria-describedby="email-validation">
                    </b-form-input>
                    <b-form-invalid-feedback id="email-validation">
                        <span class="text-dark" v-for="error in $v.form.email.$errors" :key="error.$uid"> {{ error.$message
                        }} </span>
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group class="mb-3">
                    <b-form-input type="password" class="form-control" placeholder="Contraseña" id="contrasenna"
                        name="password" v-model="signUpForm.form.password" :state="validateState('password')"
                        @input="$v.form.password.$touch()" aria-describedby="password-validation">
                    </b-form-input>
                    <b-form-invalid-feedback id="password-validation">
                        <span class="text-dark" v-for="error in $v.form.password.$errors" :key="error.$uid"> {{
                            error.$message }} </span>
                    </b-form-invalid-feedback>
                </b-form-group>
                <button class="btn btn-outline-light" type="submit" @click.prevent="signUpAction">
                    {{ titleButtonSubmit }}
                </button>
            </b-form>
        </div>
    </div>
</template>