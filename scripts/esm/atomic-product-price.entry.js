import { r as registerInstance, h, H as Host } from './index-3f35faca.js';
import { buildContext } from '@coveo/headless/commerce';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils-ff3edf9a.js';
import { d as defaultCurrencyFormatter } from './format-common-6436d8ea.js';
import { P as ProductContext } from './product-template-decorators-b5df4e57.js';
import { p as parseValue } from './product-utils-872ab82b.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './item-decorators-c19409ab.js';
import './object-utils-b58b5b66.js';
import './error-64f0ec13.js';

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
        registerInstance(this, hostRef);
    }
    initialize() {
        this.context = buildContext(this.bindings.engine);
    }
    formatValue(value) {
        try {
            const { currency } = this.contextState;
            const formatter = defaultCurrencyFormatter(currency);
            return formatter(value, this.bindings.i18n.languages);
        }
        catch (error) {
            this.error = error;
            return value.toString();
        }
    }
    parse(field) {
        try {
            return parseValue(this.product, field);
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
        return (h(Host, { key: '8aac839e8bbf103b8c316d58bd64f01dd2f062f5', class: "flex flex-wrap gap-1" }, h("div", { key: 'd090dba5f486f1fd86e23f50e3b213f7ee3abb9c', class: `truncate break-keep ${this.hasPromotionalPrice && 'text-error'}` }, mainPrice), h("div", { key: 'c6a2a61aae550c87567a85d9dd1159c9146e267c', class: 'original-price content-center truncate text-xl break-keep line-through' +
                (!originalPrice ? ' invisible' : '') }, originalPrice ?? '​')));
    }
};
__decorate([
    InitializeBindings()
], AtomicProductPrice.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductPrice.prototype, "product", void 0);
__decorate([
    BindStateToController('context')
], AtomicProductPrice.prototype, "contextState", void 0);
AtomicProductPrice.style = AtomicProductPriceStyle0;

export { AtomicProductPrice as atomic_product_price };

//# sourceMappingURL=atomic-product-price.entry.js.map