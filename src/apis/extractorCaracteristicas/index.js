import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import { api } from './configuration'
import authentication from './authentication'

const refreshToken = async (failedRequest) => {
    const refreshToken = localStorage.getItem(api.storage.accessTokenItem.name)
    const body = {}
    body[api.tokens.refreshToken.name] = refreshToken
    const response = await axios.post(api.urls.refreshToken, body)
    const accessToken = response.data[api.tokens.accessToken.name]
    localStorage.setItem(api.storage.refreshTokenItem.name, accessToken)
    failedRequest.response.config.headers[api.headers.authorization.jwt.name]
        = api.headers.authorization.jwt.generateBearerContent(accessToken)
}

createAuthRefreshInterceptor(axios, refreshToken)

const auth = authentication.configurateHttpClient(axios, api)

export const extractorCaracteristicas = {
    storage: api.storage,
    tokens: api.tokens,
    request: {
        auth
    },
}