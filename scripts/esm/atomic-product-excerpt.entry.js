import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { Schema, StringValue } from '@coveo/bueno';
import { I as InitializeBindings, H as Hidden } from './initialization-utils-ff3edf9a.js';
import { E as ExpandableText } from './expandable-text-4eebe177.js';
import { P as ProductContext } from './product-template-decorators-b5df4e57.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './plus-00840ff6.js';
import './stencil-button-45a5cdb4.js';
import './ripple-81f137d8.js';
import './stencil-button-style-0bc80040.js';
import './item-decorators-c19409ab.js';

const atomicProductExcerptCss = "/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */.expandable-text{line-height:var(--line-height)}.min-lines-1{min-height:calc(var(--line-height) * 1)}.min-lines-2{min-height:calc(var(--line-height) * 2)}.min-lines-3{min-height:calc(var(--line-height) * 3)}.min-lines-4{min-height:calc(var(--line-height) * 4)}";
const AtomicProductExcerptStyle0 = atomicProductExcerptCss;

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
const AtomicProductExcerpt = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isExpanded = false;
        this.isTruncated = false;
        /**
         * The number of lines after which the product excerpt should be truncated. A value of "none" will disable truncation.
         */
        this.truncateAfter = '2';
        /**
         * Whether the excerpt should be collapsible after being expanded.
         */
        this.isCollapsible = false;
        this.isExpanded = false;
        this.isTruncated = false;
        this.truncateAfter = '2';
        this.isCollapsible = false;
        this.resizeObserver = new ResizeObserver(() => {
            if (this.excerptText &&
                this.excerptText.scrollHeight > this.excerptText.offsetHeight) {
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
        }).validate({
            truncateAfter: this.truncateAfter,
        });
    }
    componentDidLoad() {
        this.excerptText = this.hostElement.querySelector('.expandable-text');
        if (this.excerptText) {
            this.resizeObserver.observe(this.excerptText);
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
        const productExcerpt = this.product['excerpt'] ?? null;
        if (!productExcerpt) {
            return h(Hidden, null);
        }
        return (h(ExpandableText, { isExpanded: this.isExpanded, isTruncated: this.isTruncated, truncateAfter: this.truncateAfter, onToggleExpand: (e) => this.onToggleExpand(e), showMoreLabel: this.bindings.i18n.t('show-more'), showLessLabel: this.bindings.i18n.t('show-less'), isCollapsible: this.isCollapsible }, h("atomic-product-text", { field: "excerpt" })));
    }
    get hostElement() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicProductExcerpt.prototype, "bindings", void 0);
__decorate([
    ProductContext()
], AtomicProductExcerpt.prototype, "product", void 0);
AtomicProductExcerpt.style = AtomicProductExcerptStyle0;

export { AtomicProductExcerpt as atomic_product_excerpt };

//# sourceMappingURL=atomic-product-excerpt.entry.js.map