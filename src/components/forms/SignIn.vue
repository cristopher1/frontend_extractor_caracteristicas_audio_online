<script setup>
import { toRefs, computed, ref, inject } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { objectValidator } from 'vue-props-validation'
import Swal from 'sweetalert2'
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const props = defineProps({
    signInInfo: {
        type: Object,
        required: true,
        validator: objectValidator({
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
            titleButton: {
                type: String,
                required: true,
            },
        })
    },
    signUpInfo: {
        type: Object,
        required: true,
        validator: objectValidator({
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            url: {
                type: Object,
                required: true,
            },
            titleButton: {
                type: String,
                required: true,
            },
        })
    }
})

const {
    signInInfo,
    signUpInfo,
} = toRefs(props)

const signInForm = ref({
    email: null,
    password: null,
})

const rules = computed(() => {
    return {
        email: { required, email },
        password: { required },
    }
})

const $v = useVuelidate(rules, signInForm, { $lazy: true, $autoDirty: true })

const validateState = (name) => {
    const { $dirty, $error } = $v.value[name]
    return ($dirty) ? !$error : null
}

const apis = inject('apis')
const urlApp = inject('urlApp')
const reactiveLocalStorage = inject('reactiveLocalStorage')

const router = useRouter()

const signInAction = async () => {
    try {
        $v.value.$validate()
        if ($v.value.$error) {
            return
        }
        const body = { ...signInForm.value }
        const response = await apis.extractorCaracteristicas.request.auth.signIn({ body })
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
        console.log(err)
        Swal.fire({
            icon: 'error',
            title: 'La aplicación ha tenido un problema',
            text: 'Ha ocurrido un problema con nuestro servidor.',
        })
    }

}
</script>

<template>
    <div class="container mt-5 mb-5 pt-5 pb-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card-group mb-0">
                    <div class="card p-4">
                        <div class="card-body">
                            <b-form>
                                <h1> {{ signInInfo.title }} </h1>
                                <p class="text-muted"> {{ signInInfo.description }} </p>
                                <div class="mb-3">
                                    <b-input-group>
                                        <b-input-group-prepend>
                                            <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                                        </b-input-group-prepend>
                                        <b-form-input type="email" class="form-control" placeholder="Correo electrónico"
                                            name="email" v-model="signInForm.email" :state="validateState('email')"
                                            aria-describedby="email-validation">
                                        </b-form-input>
                                        <b-form-invalid-feedback id="email-validation">
                                            <span v-for="error in $v.email.$errors" :key="error.$uid">
                                                {{ error.$message }}
                                            </span>
                                        </b-form-invalid-feedback>
                                    </b-input-group>
                                </div>
                                <div class="mb-4">
                                    <b-input-group>
                                        <b-input-group-prepend>
                                            <span class="input-group-text"><i class="bi bi-lock-fill"></i></span>
                                        </b-input-group-prepend>
                                        <b-form-input type="password" class="form-control" placeholder="Contraseña"
                                            name="password" v-model="signInForm.password" :state="validateState('password')"
                                            aria-describedby="password-validation">
                                        </b-form-input>
                                        <b-form-invalid-feedback id="password-validation">
                                            <span v-for="error in $v.password.$errors" :key="error.$uid">
                                                {{ error.$message }}
                                            </span>
                                        </b-form-invalid-feedback>
                                    </b-input-group>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-primary px-4" @click="signInAction">
                                            {{ signInInfo.titleButton }}
                                        </button>
                                    </div>
                                </div>
                            </b-form>
                        </div>
                    </div>
                    <div class="card text-white bg-primary py-5 d-md-down-none">
                        <div class="card-body text-center">
                            <div>
                                <h2> {{ signUpInfo.title }} </h2>
                                <p> {{ signUpInfo.description }} </p>
                                <RouterLink :to="signUpInfo.url" class="btn btn-primary active mt-3">
                                    {{ signUpInfo.titleButton }} </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import '../../assets/css/forms/login.css';
</style>
