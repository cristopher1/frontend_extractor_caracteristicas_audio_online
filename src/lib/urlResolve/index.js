import { NotExternalConstructorError, PathNotFoundError } from './Errors'

// Using into constructor
const {
    VITE_API_URL_BASE,
    VITE_API_TOKEN,
    VITE_API_TOKEN_REFRESH,
    VITE_API_SIGN_UP,
    VITE_API_CHARACTERISTICS,
    VITE_API_RECORDS
} = import.meta.env

export class UrlResolveSingleton {
    
    static urlResolve = null
    static #usingExternalCall = true

    #urlBase
    #paths

    constructor() {
        if (UrlResolveSingleton.#usingExternalCall) {
            throw new NotExternalConstructorError()
        }

        this.#urlBase = VITE_API_URL_BASE
        this.#paths = {
            'login': VITE_API_TOKEN,
            'refresh': VITE_API_TOKEN_REFRESH,
            'signUp': VITE_API_SIGN_UP,
            'characteristics': VITE_API_CHARACTERISTICS,
            'records': VITE_API_RECORDS
        }
    }

    // to active internall call
    static #changeExternalCall() {
        UrlResolveSingleton.#usingExternalCall = !UrlResolveSingleton.#usingExternalCall
    }

    static getInstance () {
        UrlResolveSingleton.#changeExternalCall()
        const instance = UrlResolveSingleton.ulrResolve ? UrlResolveSingleton.ulrResolve : new UrlResolveSingleton()
        UrlResolveSingleton.#changeExternalCall()
        return instance
    }

    resolve(namePath) {
        if (namePath in this.#paths) {
            return `${this.#urlBase}${this.#paths[namePath]}`
        }
        throw new PathNotFoundError(`The path "${namePath}" not exists. Intent with paths: ${Object.keys(this.#paths)}`)
    }
}
