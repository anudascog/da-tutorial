import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { a as defaultNumberFormatter } from './format-common.js';
import { P as ProductContext } from './product-template-decorators.js';
import { p as parseValue } from './product-utils.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicProductNumericFieldValue$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductNumericFieldValue extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.formatter = defaultNumberFormatter;
        this.valueToDisplay = null;
        this.error = undefined;
        this.field = undefined;
        this.formatter = defaultNumberFormatter;
        this.valueToDisplay = null;
    }
    setFormat(event) {
        event.preventDefault();
        event.stopPropagation();
        this.formatter = event.detail;
    }
    formatValue(value) {
        try {
            return this.formatter(value, this.bindings.i18n.languages);
        }
        catch (error) {
            this.error = error;
            return value.toString();
        }
    }
    updateValueToDisplay() {
        const value = parseValue(this.product, this.field);
        if (value !== null) {
            this.valueToDisplay = this.formatValue(value);
        }
    }
    componentWillRender() {
        this.updateValueToDisplay();
    }
    render() {
        if (this.valueToDisplay === null) {
            this.host.remove();
            return;
        }
        return this.valueToDisplay;
    }
    get host() { return this; }
}, [0, "atomic-product-numeric-field-value", {
        "field": [513],
        "error": [32],
        "formatter": [32],
        "valueToDisplay": [32]
    }, [[0, "atomic/numberFormat", "setFormat"]]]);
__decorate([
    InitializeBindings()
], AtomicProductNumericFieldValue$1.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductNumericFieldValue$1.prototype, "product", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-numeric-field-value"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-numeric-field-value":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductNumericFieldValue$1);
            }
            break;
    } });
}

const AtomicProductNumericFieldValue = AtomicProductNumericFieldValue$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductNumericFieldValue, defineCustomElement };

//# sourceMappingURL=atomic-product-numeric-field-value.js.map