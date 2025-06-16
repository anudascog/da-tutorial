'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const commerce = require('@coveo/headless/commerce');
const fieldUtils = require('./field-utils-a715deca.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const utils = require('./utils-b6642872.js');
const productTemplateDecorators = require('./product-template-decorators-2cf5920f.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./item-decorators-2c23030b.js');

const atomicProductMultiValueTextCss = ":host>ul{display:flex;list-style:none;margin:0;padding:0}:host>ul li{display:inline-block}.separator::before{display:inline;content:',\\00a0'}";
const AtomicProductMultiValueTextStyle0 = atomicProductMultiValueTextCss;

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
const AtomicProductMultiValueText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The maximum number of field values to display.
         * If there are _n_ more values than the specified maximum, the last displayed value will be "_n_ more...".
         */
        this.maxValuesToDisplay = 3;
        /**
         * The delimiter used to separate values when the field isn't indexed as a multi value field.
         */
        this.delimiter = null;
        this.sortedValues = null;
        this.error = undefined;
        this.field = undefined;
        this.maxValuesToDisplay = 3;
        this.delimiter = null;
    }
    initialize() {
        if (this.bindings.interfaceElement.type === 'product-listing') {
            this.searchOrListing = commerce.buildProductListing(this.bindings.engine);
        }
        else {
            this.searchOrListing = commerce.buildSearch(this.bindings.engine);
        }
        this.breadcrumbManager = this.searchOrListing.breadcrumbManager();
    }
    get productValues() {
        const value = commerce.ProductTemplatesHelpers.getProductProperty(this.product, this.field);
        if (value === null) {
            return null;
        }
        if (Array.isArray(value)) {
            return value.map((v) => `${v}`.trim());
        }
        if (typeof value !== 'string' || value.trim() === '') {
            this.error = new Error(`Could not parse "${value}" from field "${this.field}" as a string array.`);
            return null;
        }
        return this.delimiter
            ? value.split(this.delimiter).map((value) => value.trim())
            : [value];
    }
    get facetSelectedValues() {
        return this.breadcrumbManager.state.facetBreadcrumbs
            .filter((facet) => facet.field === this.field)
            .reduce((values, facet) => [
            ...values,
            ...facet.values.map(({ value }) => value.value),
        ], []);
    }
    updateSortedValues() {
        const allValues = this.productValues;
        if (allValues === null) {
            this.sortedValues = null;
            return;
        }
        const firstValues = this.facetSelectedValues.filter((value) => allValues.includes(value));
        this.sortedValues = Array.from(new Set([...firstValues, ...allValues]));
    }
    getShouldDisplayLabel(values) {
        return (this.maxValuesToDisplay > 0 && values.length > this.maxValuesToDisplay);
    }
    getNumberOfValuesToDisplay(values) {
        return Math.min(values.length, this.maxValuesToDisplay);
    }
    renderValue(value) {
        const label = fieldUtils.getFieldValueCaption(this.field, value, this.bindings.i18n);
        const kebabValue = utils.titleToKebab(value);
        return (index.h("li", { key: value, part: "product-multi-value-text-value" }, index.h("slot", { name: `product-multi-value-text-value-${kebabValue}` }, label)));
    }
    renderSeparator(beforeValue, afterValue) {
        return (index.h("li", { "aria-hidden": "true", part: "product-multi-value-text-separator", key: `${beforeValue}~${afterValue}`, class: "separator" }));
    }
    renderMoreLabel(value) {
        return (index.h("li", { key: "more-field-values", part: "product-multi-value-text-value-more" }, this.bindings.i18n.t('n-more', { value })));
    }
    renderListItems(values) {
        const numberOfValuesToDisplay = this.getNumberOfValuesToDisplay(values);
        const nodes = [];
        for (let i = 0; i < numberOfValuesToDisplay; i++) {
            if (i > 0) {
                nodes.push(this.renderSeparator(values[i - 1], values[i]));
            }
            nodes.push(this.renderValue(values[i]));
        }
        if (this.getShouldDisplayLabel(values)) {
            nodes.push(this.renderSeparator(values[numberOfValuesToDisplay - 1], 'more-field-values'));
            nodes.push(this.renderMoreLabel(values.length - numberOfValuesToDisplay));
        }
        return nodes;
    }
    componentWillRender() {
        this.updateSortedValues();
    }
    render() {
        if (this.sortedValues === null) {
            this.host.remove();
            return;
        }
        return (index.h("ul", { part: "product-multi-value-text-list" }, ...this.renderListItems(this.sortedValues)));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicProductMultiValueText.prototype, "bindings", void 0);
__decorate([
    productTemplateDecorators.ProductContext()
], AtomicProductMultiValueText.prototype, "product", void 0);
AtomicProductMultiValueText.style = AtomicProductMultiValueTextStyle0;

exports.atomic_product_multi_value_text = AtomicProductMultiValueText;

//# sourceMappingURL=atomic-product-multi-value-text.cjs.entry.js.map