'use strict';

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

exports.readFromObject = readFromObject;

//# sourceMappingURL=object-utils-508205eb.js.map