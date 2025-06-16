import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { buildContext } from '@coveo/headless/commerce';
import { I as InitializeBindings, B as BindStateToController } from './initialization-utils.js';
import { d as defaultCurrencyFormatter } from './format-common.js';
import { P as ProductContext } from './product-template-decorators.js';
import { p as parseValue } from './product-utils.js';

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
const AtomicProductPrice$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductPrice extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    static get style() { return AtomicProductPriceStyle0; }
}, [0, "atomic-product-price"]);
__decorate([
    InitializeBindings()
], AtomicProductPrice$1.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductPrice$1.prototype, "product", void 0);
__decorate([
    BindStateToController('context')
], AtomicProductPrice$1.prototype, "contextState", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-price"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-price":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductPrice$1);
            }
            break;
    } });
}

const AtomicProductPrice = AtomicProductPrice$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductPrice, defineCustomElement };

//# sourceMappingURL=atomic-product-price.js.map