export class NotThereIsUrlError extends Error {
    constructor(message) {
        super(message)
        this.name = 'NotThereIsUrlError'
    }
}
