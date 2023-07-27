export class NotExternalConstructorError extends Error {
    constructor() {
        super(`This constructor cannot called externally. Use getInstace method to obtain a instance`)
        this.name = 'NotExternalConstructorError'
    }
}

export class PathNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PathNotFoundError'
    }
}
