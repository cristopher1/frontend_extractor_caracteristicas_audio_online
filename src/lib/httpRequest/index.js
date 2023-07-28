import { IncorrectTypeError } from '../genericErrors'
import { NotThereIsUrlError } from './Errors'
import { UrlResolveSingleton } from '../urlResolve'
import { isTypeof } from '../genericFunctions'

const urlResolve = UrlResolveSingleton.getInstance()

const initCreateHttpRequest = (urlResolve, isType) => {
    return (httpRequest, namePath = null, url = null) => {
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
            return await httpRequest(urlHttpRequest)
        }
    }
}

export const createHttpRequest = initCreateHttpRequest(urlResolve, isTypeof)