import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { M as MapProp } from './props-utils.js';
import { P as ProductTemplateCommon, a as makeMatchConditions } from './stencil-product-template-common.js';

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
const AtomicProductTemplate$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductTemplate extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get host() { return this; }
}, [1, "atomic-product-template", {
        "conditions": [16],
        "mustMatch": [16],
        "mustNotMatch": [16],
        "error": [32],
        "getTemplate": [64]
    }]);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate$1.prototype, "mustMatch", void 0);
__decorate([
    MapProp({ splitValues: true })
], AtomicProductTemplate$1.prototype, "mustNotMatch", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-template"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-template":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductTemplate$1);
            }
            break;
    } });
}

const AtomicProductTemplate = AtomicProductTemplate$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductTemplate, defineCustomElement };

//# sourceMappingURL=atomic-product-template.js.map