const authentication = {
    configurateHttpClient: (httpClient, urls) => ({
        signUp: async (args) => { 
            const { body } = args
            return await httpClient.post(urls.signUp, body, { skipAuthRefresh: true })
        }
    })
}

export default authentication