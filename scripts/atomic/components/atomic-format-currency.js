import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defaultCurrencyFormatter, b as dispatchNumberFormatEvent } from './format-common.js';

const AtomicFormatCurrency$1 = /*@__PURE__*/ proxyCustomElement(class AtomicFormatCurrency extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get host() { return this; }
}, [1, "atomic-format-currency", {
        "currency": [513],
        "error": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-format-currency"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-format-currency":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFormatCurrency$1);
            }
            break;
    } });
}

const AtomicFormatCurrency = AtomicFormatCurrency$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicFormatCurrency, defineCustomElement };

//# sourceMappingURL=atomic-format-currency.js.map