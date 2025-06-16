import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { d as defaultCurrencyFormatter, b as dispatchNumberFormatEvent } from './format-common-6436d8ea.js';
import './event-utils-8de63ec3.js';

const AtomicFormatCurrency = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.error = undefined;
        this.currency = undefined;
    }
    componentWillLoad() {
        this.format = defaultCurrencyFormatter(this.currency);
        try {
            dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '210b37eeebfb611f2679cf7c721644d6d8a701f1', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicFormatCurrency as atomic_format_currency };

//# sourceMappingURL=atomic-format-currency.entry.js.map