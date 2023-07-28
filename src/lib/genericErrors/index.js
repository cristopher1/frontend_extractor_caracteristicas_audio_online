export class IncorrectTypeError extends Error {
    constructor(message) {
        super(message)
        this.name = 'IncorrectTypeError'
    }
}

export class NotExternalConstructorError extends Error {
    constructor() {
        super(`This constructor cannot called externally. Use getInstace method to obtain a instance`)
        this.name = 'NotExternalConstructorError'
    }
}
