'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const formatCommon = require('./format-common-4aa8aa88.js');
require('./event-utils-9bfcf3c5.js');

const AtomicFormatCurrency = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.error = undefined;
        this.currency = undefined;
    }
    componentWillLoad() {
        this.format = formatCommon.defaultCurrencyFormatter(this.currency);
        try {
            formatCommon.dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (index.h("atomic-component-error", { key: '210b37eeebfb611f2679cf7c721644d6d8a701f1', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_format_currency = AtomicFormatCurrency;

//# sourceMappingURL=atomic-format-currency.cjs.entry.js.map