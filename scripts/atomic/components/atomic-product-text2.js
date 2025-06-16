import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { ProductTemplatesHelpers, HighlightUtils } from '@coveo/headless/commerce';
import { g as getFieldValueCaption } from './field-utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { I as ItemTextFallback, a as ItemTextHighlighted } from './stencil-item-text-highlighted.js';
import { P as ProductContext } from './product-template-decorators.js';
import { g as getStringValueFromProductOrNull } from './product-utils.js';
import { d as defineCustomElement$1 } from './atomic-commerce-text2.js';

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
const AtomicProductText = /*@__PURE__*/ proxyCustomElement(class AtomicProductText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    get host() { return this; }
}, [0, "atomic-product-text", {
        "field": [513],
        "shouldHighlight": [516, "should-highlight"],
        "default": [513],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicProductText.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductText.prototype, "product", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-text", "atomic-commerce-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductText);
            }
            break;
        case "atomic-commerce-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicProductText as A, defineCustomElement as d };

//# sourceMappingURL=atomic-product-text2.js.map