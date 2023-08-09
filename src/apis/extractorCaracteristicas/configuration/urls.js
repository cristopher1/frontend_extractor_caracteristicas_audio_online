const {
    VITE_API_URL_BASE,
    VITE_API_TOKEN,
    VITE_API_TOKEN_REFRESH,
    VITE_API_SIGN_UP,
    VITE_API_CHARACTERISTICS,
    VITE_API_RECORDS
} = import.meta.env

const urlFormat = (base, path) => `${base}${path}`

export const urls = {
    'base': VITE_API_URL_BASE,
    'signIn': urlFormat(VITE_API_URL_BASE, VITE_API_TOKEN),
    'refreshToken': urlFormat(VITE_API_URL_BASE, VITE_API_TOKEN_REFRESH),
    'signUp': urlFormat(VITE_API_URL_BASE, VITE_API_SIGN_UP),
    'characteristics': urlFormat(VITE_API_URL_BASE, VITE_API_CHARACTERISTICS),
    'records': urlFormat(VITE_API_URL_BASE, VITE_API_RECORDS),
}