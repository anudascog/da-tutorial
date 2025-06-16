'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const fieldUtils = require('./field-utils-a715deca.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const utils = require('./utils-b6642872.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./item-decorators-2c23030b.js');

const atomicResultMultiValueTextCss = ":host>ul{display:flex;list-style:none;margin:0;padding:0}:host>ul li{display:inline-block}.separator::before{display:inline;content:',\\00a0'}";
const AtomicResultMultiValueTextStyle0 = atomicResultMultiValueTextCss;

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
const AtomicResultMultiValueText = class {
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
        this.breadcrumbManager = headless.buildBreadcrumbManager(this.bindings.engine);
    }
    get resultValues() {
        const value = headless.ResultTemplatesHelpers.getResultProperty(this.result, this.field);
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
        const allValues = this.resultValues;
        if (allValues === null) {
            this.sortedValues = null;
            return;
        }
        const allValuesSet = new Set(allValues);
        const firstValues = this.facetSelectedValues.filter((value) => allValuesSet.has(value));
        this.sortedValues = Array.from(allValues.reduce((set, value) => set.add(value), new Set(firstValues)));
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
        return (index.h("li", { key: value, part: "result-multi-value-text-value" }, index.h("slot", { name: `result-multi-value-text-value-${kebabValue}` }, label)));
    }
    renderSeparator(beforeValue, afterValue) {
        return (index.h("li", { "aria-hidden": "true", part: "result-multi-value-text-separator", key: `${beforeValue}~${afterValue}`, class: "separator" }));
    }
    renderMoreLabel(value) {
        return (index.h("li", { key: "more-field-values", part: "result-multi-value-text-value-more" }, this.bindings.i18n.t('n-more', { value })));
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
        return (index.h("ul", { part: "result-multi-value-text-list" }, ...this.renderListItems(this.sortedValues)));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultMultiValueText.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultMultiValueText.prototype, "result", void 0);
AtomicResultMultiValueText.style = AtomicResultMultiValueTextStyle0;

exports.atomic_result_multi_value_text = AtomicResultMultiValueText;

//# sourceMappingURL=atomic-result-multi-value-text.cjs.entry.js.map