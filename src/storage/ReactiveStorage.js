import { isReactive, isRef } from "vue"

export class ReactiveStorage {
    constructor(reactiveStorage) {
        if (this.constructor == ReactiveStorage) {
            throw new Error('This is an abstract class')
        }
        if (!(isReactive(reactiveStorage)) && !(isRef(reactiveStorage))) {
            throw new Error('storage must be a reactive or ref object')
        }
        this.reactiveStorage = reactiveStorage
    }

    setItem(key, item) {
        if (isRef(this.reactiveStorage)) {
            this.reactiveStorage.value[key] = item
        } else {
            this.reactiveStorage[key] = item
        }
    }

    getItem(key) {
        if (isRef(this.reactiveStorage)) {
            return this.reactiveStorage.value[key]
        }
        return this.reactiveStorage[key]
    }

    removeItem(key) {
        if (isRef(this.reactiveStorage) && Object.prototype.hasOwnProperty.call(this.reactiveStorage.value, key)) {
            delete this.reactiveStorage.value[key]
        } else if (Object.prototype.hasOwnProperty.call(this.reactiveStorage, key)) {
            delete this.reactiveStorage[key]
        }
    }

    /*
     * Using to remove item from an event, for example in ReactiveStorageApiWeb.activateStorageEventListener
     */
    removeItemFromEvent(key, reactiveStorage) {
        if (isRef(reactiveStorage) && Object.prototype.hasOwnProperty.call(reactiveStorage.value, key)) {
            delete reactiveStorage.value[key]
        } else if (Object.prototype.hasOwnProperty.call(reactiveStorage, key)) {
            delete reactiveStorage[key]
        }
    }
}