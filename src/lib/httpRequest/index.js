import axios from 'axios'
import { UrlResolveSingleton } from '../urlResolve'
import { isTypeof } from '../genericFunctions'
import { IncorrectTypeError } from '../genericErrors'
import { NotThereIsUrlError } from './Errors'

const urlResolve = UrlResolveSingleton.getInstance()

const refreshToken = async (url, httpClient, nameRefreshTokenItem, nameAccessTokenItem) => {
    try {
        const refreshTokenData = { refresh: localStorage.getItem(nameRefreshTokenItem) }
        const response = await httpClient.post(url, refreshTokenData)
        if (response.status === 200) {
            const accessToken = response.data.access
            localStorage.setItem(nameAccessTokenItem, accessToken)
        } 
    } catch (error) {
        throw error
    }
}

const initCreateHttpRequest = (urlResolve, isType, httpClient, refreshToken) => {
    return function createHttpRequest(httpRequest, namePath = null, url = null) {
        if (!namePath && !url) {
            throw new NotThereIsUrlError(`Not there is url. You should use namePath or url parameters`)
        }
        if (!(isType(httpRequest, 'function'))) {
            throw new IncorrectTypeError('"httpRequest" paramater, must be a function')
        }
        const urlHttpRequest = (url && isType(url, 'string')) ? url :
            (isType(namePath, 'string') ? urlResolve.resolve(namePath) : null)
        if (!urlHttpRequest) {
            throw new IncorrectTypeError('url and namePath parameters, must be a string')
        }
        return async () => {
            try {
                try {
                    await httpRequest(urlHttpRequest, httpClient)
                }
                catch (err) {
                    refreshToken()
                    await httpRequest(urlHttpRequest, httpClient)
                }
            }
            catch (err) {
                console.error(err.response)
            }
        }
    }
}

export const createHttpRequest = initCreateHttpRequest(urlResolve, isTypeof, axios, refreshToken)