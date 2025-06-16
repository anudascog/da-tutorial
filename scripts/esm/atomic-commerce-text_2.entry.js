import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { ProductTemplatesHelpers, HighlightUtils } from '@coveo/headless/commerce';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { I as ItemTextFallback, a as ItemTextHighlighted } from './stencil-item-text-highlighted-0e1c6c08.js';
import { P as ProductContext } from './product-template-decorators-b5df4e57.js';
import { g as getStringValueFromProductOrNull } from './product-utils-872ab82b.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import '@coveo/bueno';
import './item-decorators-c19409ab.js';
import './object-utils-b58b5b66.js';
import './error-64f0ec13.js';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicCommerceText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.strings = {
            value: () => this.bindings.i18n.t(this.value, {
                count: this.count,
            }),
        };
        this.error = undefined;
        this.value = undefined;
        this.count = undefined;
    }
    connectedCallback() {
        if (!this.value) {
            this.error = new Error('The "value" attribute must be defined.');
        }
    }
    render() {
        return this.strings.value();
    }
};
__decorate$1([
    InitializeBindings()
], AtomicCommerceText.prototype, "bindings", void 0);

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
const AtomicProductText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * When this is set to `true`, the component attempts to highlight text based on the highlighting properties provided by the search API response.
         * This property only works for the product excerpt and the ec_name field.
         */
        this.shouldHighlight = true;
        this.error = undefined;
        this.field = undefined;
        this.shouldHighlight = true;
        this.default = undefined;
    }
    get shouldRenderHighlights() {
        return this.shouldHighlight && this.isFieldSupportedForHighlighting();
    }
    isFieldSupportedForHighlighting() {
        return ['ec_name', 'excerpt'].includes(this.field);
    }
    render() {
        const productValueAsString = getStringValueFromProductOrNull(this.product, this.field);
        if (productValueAsString === null) {
            return (h(ItemTextFallback, { field: this.field, host: this.host, logger: this.bindings.engine.logger, defaultValue: this.default, item: this.product, getProperty: ProductTemplatesHelpers.getProductProperty }, h("atomic-commerce-text", { value: getFieldValueCaption(this.field, this.default, this.bindings.i18n) })));
        }
        const textValue = `${productValueAsString}`;
        const highlightKeywords = ProductTemplatesHelpers.getProductProperty(this.product, this.field === 'ec_name' ? 'nameHighlights' : 'excerptHighlights');
        return this.shouldRenderHighlights && highlightKeywords ? (h(ItemTextHighlighted, { textValue: textValue, highlightKeywords: highlightKeywords, highlightString: HighlightUtils.highlightString, onError: (error) => (this.error = error) })) : (h("atomic-commerce-text", { value: getFieldValueCaption(this.field, textValue, this.bindings.i18n) }));
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicProductText.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductText.prototype, "product", void 0);

export { AtomicCommerceText as atomic_commerce_text, AtomicProductText as atomic_product_text };

//# sourceMappingURL=atomic-commerce-text_2.entry.js.map