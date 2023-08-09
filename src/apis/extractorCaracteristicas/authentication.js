const authentication = {
    configurateHttpClient: (httpClient, api) => ({
        signUp: async (args) => { 
            const { body } = args
            return await httpClient.post(api.urls.signUp, body, { skipAuthRefresh: true })
        },
        signIn: async (args) => {
            const { body } = args
            return await httpClient.post(api.urls.signIn, body, { skipAuthRefresh: true })
        },
    })
}

export default authentication