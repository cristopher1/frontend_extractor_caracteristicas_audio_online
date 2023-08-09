import { ReactiveStorageApiWeb } from './ReactiveStorageApiWeb'

export class ReactiveStorageFactory {
    static getReactiveStorage(refStorage, storage) {
        if (storage instanceof Storage) {
            return new ReactiveStorageApiWeb(refStorage, storage)
        }
    }
}