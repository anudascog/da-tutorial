import { b as buildCustomEvent } from './event-utils.js';

const dispatchNumberFormatEvent = (formatter, element) => {
    const event = buildCustomEvent('atomic/numberFormat', formatter);
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

export { defaultNumberFormatter as a, dispatchNumberFormatEvent as b, defaultCurrencyFormatter as d };

//# sourceMappingURL=format-common.js.map