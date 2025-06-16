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
const AtomicProductDescription = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        new bueno.Schema({
            truncateAfter: new bueno.StringValue({
                constrainTo: ['none', '1', '2', '3', '4'],
            }),
            field: new bueno.StringValue({
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
            return index.h(initializationUtils.Hidden, null);
        }
        return (index.h(expandableText.ExpandableText, { isExpanded: this.isExpanded, isTruncated: this.isTruncated, truncateAfter: this.truncateAfter, onToggleExpand: (e) => this.onToggleExpand(e), showMoreLabel: this.bindings.i18n.t('show-more'), showLessLabel: this.bindings.i18n.t('show-less'), isCollapsible: this.isCollapsible }, index.h("atomic-product-text", { field: this.field })));
    }
    get hostElement() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductDescription.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductDescription.prototype, "product", void 0);
AtomicProductDescription.style = AtomicProductDescriptionStyle0;

exports.atomic_product_description = AtomicProductDescription;

//# sourceMappingURL=atomic-product-description.cjs.entry.js.map