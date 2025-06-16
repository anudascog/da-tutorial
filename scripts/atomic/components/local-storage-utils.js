var StorageItems;
(function (StorageItems) {
    StorageItems["RECENT_QUERIES"] = "coveo-recent-queries";
    StorageItems["STANDALONE_SEARCH_BOX_DATA"] = "coveo-standalone-search-box-data";
    StorageItems["GENERATED_ANSWER_DATA"] = "coveo-generated-answer-data";
})(StorageItems || (StorageItems = {}));
class SafeStorage {
    constructor() { }
    clear() {
        return this.tryAccessLocalStorageOrWarn(() => localStorage.clear(), () => { });
    }
    getItem(key) {
        return this.tryAccessLocalStorageOrWarn(() => localStorage.getItem(key), () => null);
    }
    getParsedJSON(key, fallback) {
        const item = this.getItem(key);
        if (!item) {
            return fallback;
        }
        return this.tryJSONOrWarn(key, () => JSON.parse(item), () => fallback);
    }
    key(index) {
        return this.tryAccessLocalStorageOrWarn(() => localStorage.key(index), () => null);
    }
    get length() {
        return this.tryOrElse(() => localStorage.length, () => 0);
    }
    removeItem(key) {
        return this.tryAccessLocalStorageOrWarn(() => localStorage.removeItem(key), () => { });
    }
    setItem(key, value) {
        return this.tryAccessLocalStorageOrWarn(() => localStorage.setItem(key, value), () => { });
    }
    setJSON(key, obj) {
        const stringified = this.tryJSONOrWarn(key, () => JSON.stringify(obj), () => JSON.stringify({}));
        return this.setItem(key, stringified);
    }
    tryAccessLocalStorageOrWarn(tryTo, orElse) {
        return this.tryOrElse(tryTo, () => {
            console.warn('Error while trying to read or modify local storage. This can be caused by browser specific settings.');
            return orElse();
        });
    }
    tryJSONOrWarn(key, tryTo, orElse) {
        return this.tryOrElse(tryTo, () => {
            console.warn(`Error while trying to do JSON manipulation with local storage entry. ${key}`);
            return orElse();
        });
    }
    tryOrElse(tryTo, orElse) {
        try {
            return tryTo();
        }
        catch (e) {
            console.warn(e);
            return orElse();
        }
    }
}

export { StorageItems as S, SafeStorage as a };

//# sourceMappingURL=local-storage-utils.js.map