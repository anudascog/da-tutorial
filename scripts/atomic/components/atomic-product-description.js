import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { Schema, StringValue } from '@coveo/bueno';
import { I as InitializeBindings, H as Hidden } from './initialization-utils.js';
import { E as ExpandableText } from './expandable-text.js';
import { P as ProductContext } from './product-template-decorators.js';
import { d as defineCustomElement$3 } from './atomic-commerce-text2.js';
import { d as defineCustomElement$2 } from './atomic-product-text2.js';

const atomicProductDescriptionCss = "/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */.expandable-text{line-height:var(--line-height)}.min-lines-1{min-height:calc(var(--line-height) * 1)}.min-lines-2{min-height:calc(var(--line-height) * 2)}.min-lines-3{min-height:calc(var(--line-height) * 3)}.min-lines-4{min-height:calc(var(--line-height) * 4)}";
const AtomicProductDescriptionStyle0 = atomicProductDescriptionCss;

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
const AtomicProductDescription$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductDescription extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.isExpanded = false;
        this.isTruncated = false;
        /**
         * The number of lines after which the product description should be truncated. A value of "none" will disable truncation.
         */
        this.truncateAfter = '2';
        /**
         * The name of the description field to use.
         */
        this.field = 'ec_shortdesc';
        /**
         * Whether the description should be collapsible after being expanded.
         */
        this.isCollapsible = true;
        this.isExpanded = false;
        this.isTruncated = false;
        this.truncateAfter = '2';
        this.field = 'ec_shortdesc';
        this.isCollapsible = true;
        this.resizeObserver = new ResizeObserver(() => {
            if (this.descriptionText &&
                this.descriptionText.scrollHeight > this.descriptionText.clientHeight) {
                this.isTruncated = true;
            }
            else {
                this.isTruncated = false;
            }
        });
        this.validateProps();
    }
    validateProps() {
        new Schema({
            truncateAfter: new StringValue({
                constrainTo: ['none', '1', '2', '3', '4'],
            }),
            field: new StringValue({
                constrainTo: ['ec_shortdesc', 'ec_description'],
            }),
        }).validate({
            truncateAfter: this.truncateAfter,
            field: this.field,
        });
    }
    componentDidLoad() {
        this.descriptionText = this.hostElement.querySelector('.expandable-text');
        if (this.descriptionText) {
            this.resizeObserver.observe(this.descriptionText);
        }
    }
    onToggleExpand(e) {
        if (e) {
            e.stopPropagation();
        }
        this.isExpanded = !this.isExpanded;
    }
    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }
    render() {
        const productDescription = this.product[this.field] ?? null;
        if (!productDescription) {
            return h(Hidden, null);
        }
        return (h(ExpandableText, { isExpanded: this.isExpanded, isTruncated: this.isTruncated, truncateAfter: this.truncateAfter, onToggleExpand: (e) => this.onToggleExpand(e), showMoreLabel: this.bindings.i18n.t('show-more'), showLessLabel: this.bindings.i18n.t('show-less'), isCollapsible: this.isCollapsible }, h("atomic-product-text", { field: this.field })));
    }
    get hostElement() { return this; }
    static get style() { return AtomicProductDescriptionStyle0; }
}, [0, "atomic-product-description", {
        "truncateAfter": [1, "truncate-after"],
        "field": [1],
        "isCollapsible": [4, "is-collapsible"],
        "isExpanded": [32],
        "isTruncated": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicProductDescription$1.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductDescription$1.prototype, "product", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-description", "atomic-commerce-text", "atomic-product-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-description":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductDescription$1);
            }
            break;
        case "atomic-commerce-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-product-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicProductDescription = AtomicProductDescription$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductDescription, defineCustomElement };

//# sourceMappingURL=atomic-product-description.js.map