import { NotExternalConstructorError, IncorrectTypeError } from '../genericErrors'
import { PathNotFoundError } from './Errors'
import { isTypeof } from '../genericFunctions'

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
    #isType

    constructor(isType) {
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
        this.#isType = isType
    }

    // to active internall call
    static #changeExternalCall() {
        UrlResolveSingleton.#usingExternalCall = !UrlResolveSingleton.#usingExternalCall
    }

    static getInstance () {
        UrlResolveSingleton.#changeExternalCall()
        const instance = UrlResolveSingleton.ulrResolve ? UrlResolveSingleton.ulrResolve : new UrlResolveSingleton(isTypeof)
        UrlResolveSingleton.#changeExternalCall()
        return instance
    }

    resolve(namePath) {
        if (!(this.#isType(namePath, 'string'))) {
            throw new IncorrectTypeError('namePath must be a string')
        }
        if (!(namePath in this.#paths)) {
            throw new PathNotFoundError(`The path "${namePath}" not exists. Intent with paths: ${Object.keys(this.#paths)}`)
        }
        return `${this.#urlBase}${this.#paths[namePath]}`
    }
}
