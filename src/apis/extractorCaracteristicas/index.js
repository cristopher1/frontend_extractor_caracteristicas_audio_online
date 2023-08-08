import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { urls } from './urls'
import authentication from './authentication'

const refreshToken = async (failedRequest) => {
    const refreshToken = localStorage.getItem('refresh')
    const body = { refresh: refreshToken }
    const response = await axios.post(urls.refresh, body)
    const accessToken = response.data.access
    localStorage.setItem('access', accessToken)
    failedRequest.response.config.headers['Authorization'] = `Bearer ${accessToken}`
}

createAuthRefreshInterceptor(axios, refreshToken)

const auth = authentication.configurateHttpClient(axios, urls)

export const extractorCaracteristicas = {
    auth,
}