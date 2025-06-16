'use strict';

class FieldValueIsNaNError extends Error {
    constructor(field, value) {
        super(`Could not parse "${value}" from field "${field}" as a number.`);
        this.name = 'FieldValueIsNaNError';
    }
}

exports.FieldValueIsNaNError = FieldValueIsNaNError;

//# sourceMappingURL=error-69b9a539.js.map