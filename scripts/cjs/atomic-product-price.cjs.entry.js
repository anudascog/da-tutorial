'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const commerce = require('@coveo/headless/commerce');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const formatCommon = require('./format-common-4aa8aa88.js');
const productTemplateDecorators = require('./product-template-decorators-2cf5920f.js');
const productUtils = require('./product-utils-3309b4fd.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./item-decorators-2c23030b.js');
require('./object-utils-508205eb.js');
require('./error-69b9a539.js');

const atomicProductPriceCss = ".display-grid atomic-product-price{display:flex;flex-wrap:wrap;flex-direction:column}.display-grid atomic-product-price .original-price{line-height:1}";
const AtomicProductPriceStyle0 = atomicProductPriceCss;

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
const AtomicProductPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    initialize() {
        this.context = commerce.buildContext(this.bindings.engine);
    }
    formatValue(value) {
        try {
            const { currency } = this.contextState;
            const formatter = formatCommon.defaultCurrencyFormatter(currency);
            return formatter(value, this.bindings.i18n.languages);
        }
        catch (error) {
            this.error = error;
            return value.toString();
        }
    }
    parse(field) {
        try {
            return productUtils.parseValue(this.product, field);
        }
        catch (error) {
            this.error = error;
            return null;
        }
    }
    getFormattedValue(field) {
        const value = this.parse(field);
        if (value !== null) {
            return this.formatValue(value);
        }
    }
    get hasPromotionalPrice() {
        return (this.product.ec_promo_price !== null &&
            this.product.ec_price !== null &&
            this.product.ec_promo_price < this.product.ec_price);
    }
    render() {
        const mainPrice = this.getFormattedValue(this.hasPromotionalPrice ? 'ec_promo_price' : 'ec_price');
        const originalPrice = this.hasPromotionalPrice
            ? this.getFormattedValue('ec_price')
            : null;
        return (index.h(index.Host, { key: '8aac839e8bbf103b8c316d58bd64f01dd2f062f5', class: "flex flex-wrap gap-1" }, index.h("div", { key: 'd090dba5f486f1fd86e23f50e3b213f7ee3abb9c', class: `truncate break-keep ${this.hasPromotionalPrice && 'text-error'}` }, mainPrice), index.h("div", { key: 'c6a2a61aae550c87567a85d9dd1159c9146e267c', class: 'original-price content-center truncate text-xl break-keep line-through' +
                (!originalPrice ? ' invisible' : '') }, originalPrice ?? '​')));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductPrice.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductPrice.prototype, "product", void 0);
__decorate([
    initializationUtils.BindStateToController('context')
], AtomicProductPrice.prototype, "contextState", void 0);
AtomicProductPrice.style = AtomicProductPriceStyle0;

exports.atomic_product_price = AtomicProductPrice;

//# sourceMappingURL=atomic-product-price.cjs.entry.js.map