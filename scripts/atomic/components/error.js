class FieldValueIsNaNError extends Error {
    constructor(field, value) {
        super(`Could not parse "${value}" from field "${field}" as a number.`);
        this.name = 'FieldValueIsNaNError';
    }
}

export { FieldValueIsNaNError as F };

//# sourceMappingURL=error.js.map