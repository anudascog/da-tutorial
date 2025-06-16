function readFromObject(object, key) {
    const keys = key.split('.');
    let current = object;
    for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
            current = current[k];
        }
        else {
            return undefined;
        }
    }
    return typeof current === 'string' ? current : undefined;
}

export { readFromObject as r };

//# sourceMappingURL=object-utils-b58b5b66.js.map