import { ProductTemplatesHelpers } from '@coveo/headless/commerce';
import { r as readFromObject } from './object-utils.js';
import { F as FieldValueIsNaNError } from './error.js';

function parseValue(product, field) {
    const value = ProductTemplatesHelpers.getProductProperty(product, field);
    if (value === null) {
        return null;
    }
    const valueAsNumber = parseFloat(`${value}`);
    if (Number.isNaN(valueAsNumber)) {
        throw new FieldValueIsNaNError(field, value);
    }
    return valueAsNumber;
}
function getStringValueFromProductOrNull(product, field) {
    const value = ProductTemplatesHelpers.getProductProperty(product, field);
    if (typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    return value;
}
function buildStringTemplateFromProduct(template, product, bindings) {
    return template.replace(/\${(.*?)}/g, (value) => {
        const key = value.substring(2, value.length - 1);
        let newValue = readFromObject(product, key);
        if (!newValue && typeof window !== 'undefined') {
            newValue = readFromObject(window, key);
        }
        if (!newValue) {
            bindings.engine.logger.warn(`${key} used in the href template is undefined for this product: ${product.permanentid} and could not be found in the window object.`);
            return '';
        }
        return newValue;
    });
}

export { buildStringTemplateFromProduct as b, getStringValueFromProductOrNull as g, parseValue as p };

//# sourceMappingURL=product-utils.js.map