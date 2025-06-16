import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { a as defaultNumberFormatter } from './format-common-6436d8ea.js';
import { P as ProductContext } from './product-template-decorators-b5df4e57.js';
import { p as parseValue } from './product-utils-872ab82b.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './item-decorators-c19409ab.js';
import '@coveo/headless/commerce';
import './object-utils-b58b5b66.js';
import './error-64f0ec13.js';

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
const AtomicProductNumericFieldValue = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicProductNumericFieldValue.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductNumericFieldValue.prototype, "product", void 0);

export { AtomicProductNumericFieldValue as atomic_product_numeric_field_value };

//# sourceMappingURL=atomic-product-numeric-field-value.entry.js.map