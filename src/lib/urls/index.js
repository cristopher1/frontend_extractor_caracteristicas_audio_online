const {
    VITE_API_URL_BASE,
    VITE_API_TOKEN,
    VITE_API_TOKEN_REFRESH,
    VITE_API_SIGN_UP,
    VITE_API_CHARACTERISTICS,
    VITE_API_RECORDS
} = import.meta.env

export const urlFormat = (base, path) => `${base}/${path}`

const URLS_API = {
    'base': VITE_API_URL_BASE,
    'login': urlFormat(VITE_API_URL_BASE, VITE_API_TOKEN),
    'refresh': urlFormat(VITE_API_URL_BASE, VITE_API_TOKEN_REFRESH),
    'signUp': urlFormat(VITE_API_URL_BASE, VITE_API_SIGN_UP),
    'characteristics': urlFormat(VITE_API_URL_BASE, VITE_API_CHARACTERISTICS),
    'records': urlFormat(VITE_API_URL_BASE, VITE_API_RECORDS),
}

export const URLS = {
    apiExtractorCaracteristicasAudio: URLS_API,
}
