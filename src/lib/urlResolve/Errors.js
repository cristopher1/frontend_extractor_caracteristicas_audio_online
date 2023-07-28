export class PathNotFoundError extends Error {
    constructor(message) {
        super(message)
        this.name = 'PathNotFoundError'
    }
}