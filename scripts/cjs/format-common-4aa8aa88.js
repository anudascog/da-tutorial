'use strict';

const eventUtils = require('./event-utils-9bfcf3c5.js');

const dispatchNumberFormatEvent = (formatter, element) => {
    const event = eventUtils.buildCustomEvent('atomic/numberFormat', formatter);
    const canceled = element.dispatchEvent(event);
    if (canceled) {
        throw new Error('The Atomic number format component was not handled, as it is not a child of a compatible component');
    }
};
const defaultNumberFormatter = (value, languages) => value.toLocaleString(languages);
const defaultCurrencyFormatter = (currency) => (value, languages) => {
    return value.toLocaleString(languages, {
        style: 'currency',
        currency,
    });
};

exports.defaultCurrencyFormatter = defaultCurrencyFormatter;
exports.defaultNumberFormatter = defaultNumberFormatter;
exports.dispatchNumberFormatEvent = dispatchNumberFormatEvent;

//# sourceMappingURL=format-common-4aa8aa88.js.map