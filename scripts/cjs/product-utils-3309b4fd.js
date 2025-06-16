'use strict';

const commerce = require('@coveo/headless/commerce');
const objectUtils = require('./object-utils-508205eb.js');
const error = require('./error-69b9a539.js');

function parseValue(product, field) {
    const value = commerce.ProductTemplatesHelpers.getProductProperty(product, field);
    if (value === null) {
        return null;
    }
    const valueAsNumber = parseFloat(`${value}`);
    if (Number.isNaN(valueAsNumber)) {
        throw new error.FieldValueIsNaNError(field, value);
    }
    return valueAsNumber;
}
function getStringValueFromProductOrNull(product, field) {
    const value = commerce.ProductTemplatesHelpers.getProductProperty(product, field);
    if (typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    return value;
}
function buildStringTemplateFromProduct(template, product, bindings) {
    return template.replace(/\${(.*?)}/g, (value) => {
        const key = value.substring(2, value.length - 1);
        let newValue = objectUtils.readFromObject(product, key);
        if (!newValue && typeof window !== 'undefined') {
            newValue = objectUtils.readFromObject(window, key);
        }
        if (!newValue) {
            bindings.engine.logger.warn(`${key} used in the href template is undefined for this product: ${product.permanentid} and could not be found in the window object.`);
            return '';
        }
        return newValue;
    });
}

exports.buildStringTemplateFromProduct = buildStringTemplateFromProduct;
exports.getStringValueFromProductOrNull = getStringValueFromProductOrNull;
exports.parseValue = parseValue;

//# sourceMappingURL=product-utils-3309b4fd.js.map