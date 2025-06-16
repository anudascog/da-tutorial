'use strict';

const bueno = require('@coveo/bueno');
const index = require('./index-757bc886.js');
const utils = require('./utils-b6642872.js');

/**
 * @deprecated Use the `mapProperty` decorator instead.
 */
function MapProp(opts) {
    return (component, variableName) => {
        const { componentWillLoad } = component;
        if (!componentWillLoad) {
            console.error('The "componentWillLoad" lifecycle method has to be defined for the MapProp decorator to work.');
            return;
        }
        component.componentWillLoad = function () {
            const prefix = (opts && opts.attributePrefix) || variableName;
            const variable = this[variableName];
            const attributes = index.getElement(this).attributes;
            mapAttributesToProp(prefix, variable, Array.from(attributes), opts?.splitValues ?? false);
            componentWillLoad.call(this);
        };
    };
}
function ArrayProp() {
    return (component, variableName) => {
        const { componentWillLoad } = component;
        const attributeWithBrackets = utils.camelToKebab(variableName);
        component.componentWillLoad = function () {
            const value = this[variableName];
            if (!value || bueno.isArray(value)) {
                componentWillLoad?.call(this);
                return;
            }
            try {
                const valueAsArray = JSON.parse(value);
                if (bueno.isArray(valueAsArray)) {
                    this[variableName] = valueAsArray;
                }
                else {
                    console.error(`Property ${attributeWithBrackets} should be an array`, index.getElement(this));
                }
            }
            catch (e) {
                console.error(`Error while parsing attribute ${attributeWithBrackets} as array`, e);
            }
            componentWillLoad?.call(this);
        };
    };
}
function splitAttributeValueOnCommas(attributeValue) {
    const splitButIgnoreEscapeSymbolsExpression = /(?:\\.|[^,])+/g;
    const [...valuesWithEscapeSymbols] = attributeValue.matchAll(splitButIgnoreEscapeSymbolsExpression) ?? [];
    const removeEscapeSymbolsExpression = /\\(.)/g;
    return valuesWithEscapeSymbols.map(([valuesWithEscapeSymbols]) => valuesWithEscapeSymbols.replace(removeEscapeSymbolsExpression, '$1'));
}
function mapAttributesToProp(prefix, mapVariable, attributes, splitValues) {
    const map = attributesToStringMap(prefix, attributes);
    Object.assign(mapVariable, splitValues ? stringMapToStringArrayMap(map) : map);
}
function stringMapToStringArrayMap(map) {
    return Object.entries(map).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: splitAttributeValueOnCommas(value).map((subValue) => subValue.trim()),
    }), {});
}
function attributesToStringMap(prefix, attributes) {
    const mapVariable = {};
    const kebabPrefix = utils.camelToKebab(prefix) + '-';
    for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i];
        if (attribute.name.indexOf(kebabPrefix) !== 0) {
            continue;
        }
        const property = utils.kebabToCamel(attribute.name.replace(kebabPrefix, ''));
        mapVariable[property] = `${attribute.value}`;
    }
    return mapVariable;
}

exports.ArrayProp = ArrayProp;
exports.MapProp = MapProp;

//# sourceMappingURL=props-utils-66dfcd3a.js.map