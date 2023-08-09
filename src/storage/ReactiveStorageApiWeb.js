import { ReactiveStorage } from "./ReactiveStorage"

export class ReactiveStorageApiWeb extends ReactiveStorage {
    constructor(reactiveStorage, storage) {
        super(reactiveStorage)
        this.storage = storage
    }

    activateAddEventListenerStorage(window) {
        if (!(window instanceof Window)) {
            throw new Error('"window" parameter must be instaceof Window')
        }
        const removeReactiveStorageItem = super.removeItemFromEvent
        const reactiveStorage = this.reactiveStorage
        const eventListener = function storageEventListener({ key, newValue }) {
            if (!newValue) {
                removeReactiveStorageItem(key, reactiveStorage)
            }
        }
        window.addEventListener('storage', eventListener)
    }

    setItem(key, item) {
        super.setItem(key, item)
        this.storage.setItem(key, item)
    }

    getItem(key) {
        let value = super.getItem(key)
        if (!value && (value = this.storage.getItem(key))) {
            super.setItem(key, value)
        }
        return value
    }

    removeItem(key) {
        super.removeItem(key)
        this.storage.removeItem(key)
    }
}