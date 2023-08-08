export const headers = {
    authentication: {
        jwt: {
            name: 'Authorization',
            generateBearerContent: (token) => `Bearer ${token}`,
        }
    },
}