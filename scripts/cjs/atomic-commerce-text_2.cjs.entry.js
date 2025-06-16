'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const commerce = require('@coveo/headless/commerce');
const fieldUtils = require('./field-utils-a715deca.js');
const stencilItemTextHighlighted = require('./stencil-item-text-highlighted-91fd0fe8.js');
const productTemplateDecorators = require('./product-template-decorators-2cf5920f.js');
const productUtils = require('./product-utils-3309b4fd.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('@coveo/bueno');
require('./item-decorators-2c23030b.js');
require('./object-utils-508205eb.js');
require('./error-69b9a539.js');

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
        index.registerInstance(this, hostRef);
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
    initializationUtils.InitializeBindings()
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
        index.registerInstance(this, hostRef);
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
        const productValueAsString = productUtils.getStringValueFromProductOrNull(this.product, this.field);
        if (productValueAsString === null) {
            return (index.h(stencilItemTextHighlighted.ItemTextFallback, { field: this.field, host: this.host, logger: this.bindings.engine.logger, defaultValue: this.default, item: this.product, getProperty: commerce.ProductTemplatesHelpers.getProductProperty }, index.h("atomic-commerce-text", { value: fieldUtils.getFieldValueCaption(this.field, this.default, this.bindings.i18n) })));
        }
        const textValue = `${productValueAsString}`;
        const highlightKeywords = commerce.ProductTemplatesHelpers.getProductProperty(this.product, this.field === 'ec_name' ? 'nameHighlights' : 'excerptHighlights');
        return this.shouldRenderHighlights && highlightKeywords ? (index.h(stencilItemTextHighlighted.ItemTextHighlighted, { textValue: textValue, highlightKeywords: highlightKeywords, highlightString: commerce.HighlightUtils.highlightString, onError: (error) => (this.error = error) })) : (index.h("atomic-commerce-text", { value: fieldUtils.getFieldValueCaption(this.field, textValue, this.bindings.i18n) }));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductText.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductText.prototype, "product", void 0);

exports.atomic_commerce_text = AtomicCommerceText;
exports.atomic_product_text = AtomicProductText;

//# sourceMappingURL=atomic-commerce-text_2.cjs.entry.js.map