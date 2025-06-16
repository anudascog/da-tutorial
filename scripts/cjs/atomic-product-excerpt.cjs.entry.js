'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const bueno = require('@coveo/bueno');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const expandableText = require('./expandable-text-36fe9f8d.js');
const productTemplateDecorators = require('./product-template-decorators-2cf5920f.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./plus-07843914.js');
require('./stencil-button-ac56f2c3.js');
require('./ripple-fb3f3438.js');
require('./stencil-button-style-ba779fe2.js');
require('./item-decorators-2c23030b.js');

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
        index.registerInstance(this, hostRef);
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
        new bueno.Schema({
            truncateAfter: new bueno.StringValue({
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
            return index.h(initializationUtils.Hidden, null);
        }
        return (index.h(expandableText.ExpandableText, { isExpanded: this.isExpanded, isTruncated: this.isTruncated, truncateAfter: this.truncateAfter, onToggleExpand: (e) => this.onToggleExpand(e), showMoreLabel: this.bindings.i18n.t('show-more'), showLessLabel: this.bindings.i18n.t('show-less'), isCollapsible: this.isCollapsible }, index.h("atomic-product-text", { field: "excerpt" })));
    }
    get hostElement() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductExcerpt.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductExcerpt.prototype, "product", void 0);
AtomicProductExcerpt.style = AtomicProductExcerptStyle0;

exports.atomic_product_excerpt = AtomicProductExcerpt;

//# sourceMappingURL=atomic-product-excerpt.cjs.entry.js.map