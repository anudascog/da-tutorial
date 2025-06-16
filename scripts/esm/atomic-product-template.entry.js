import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { M as MapProp } from './props-utils-525cbc5b.js';
import { P as ProductTemplateCommon, a as makeMatchConditions } from './stencil-product-template-common-a7193a37.js';
import '@coveo/bueno';
import './utils-0a01e06c.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';
import '@coveo/headless/commerce';
import './table-element-utils-49d22ec6.js';
import './sections-332d182a.js';

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
const AtomicProductTemplate = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * A function that must return true on products for the product template to apply.
         * Set programmatically before initialization, not via attribute.
         *
         * For example, the following targets a template and sets a condition to make it apply only to products whose `ec_name` contains `singapore`:
         * `document.querySelector('#target-template').conditions = [(product) => /singapore/i.test(product.ec_name)];`
         */
        this.conditions = [];
        /**
         * The field and values that define which result items the condition must be applied to. For example, a template with the following attribute
         * only applies to result items whose `filetype` is `lithiummessage` or `YouTubePlaylist`: `must-match-filetype="lithiummessage,YouTubePlaylist"
         * `;type: Record<string, string[]> ;default: {}
         */
        this.mustMatch = {};
        /**
         * The field and values that define which result items the condition must not be applied to. For example, a template with the following attribute
         * only applies to result items whose `filetype` is not `lithiummessage`: `must-not-match-filetype="lithiummessage";type: Record<string, string[]> ;default: {}
         */
        this.mustNotMatch = {};
        this.error = undefined;
        this.conditions = [];
        this.mustMatch = {};
        this.mustNotMatch = {};
    }
    connectedCallback() {
        this.productTemplateCommon = new ProductTemplateCommon({
            host: this.host,
            setError: (err) => {
                this.error = err;
            },
            validParents: [
                'atomic-commerce-product-list',
                'atomic-commerce-recommendation-list',
                'atomic-commerce-search-box-instant-products',
            ],
            allowEmpty: true,
        });
    }
    componentWillLoad() {
        this.productTemplateCommon.matchConditions = makeMatchConditions(this.mustMatch, this.mustNotMatch);
    }
    /**
     * Gets the product template to apply based on the evaluated conditions.
     */
    async getTemplate() {
        return this.productTemplateCommon.getTemplate(this.conditions, this.error);
    }
    render() {
        return this.productTemplateCommon.renderIfError(this.error);
    }
    get host() { return getElement(this); }
};
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate.prototype, "mustNotMatch", void 0);

export { AtomicProductTemplate as atomic_product_template };

//# sourceMappingURL=atomic-product-template.entry.js.map