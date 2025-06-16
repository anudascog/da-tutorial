import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { buildBreadcrumbManager, ResultTemplatesHelpers } from '@coveo/headless';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { t as titleToKebab } from './utils-0a01e06c.js';
import { R as ResultContext } from './result-template-decorators-62ec8535.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';
import './item-decorators-c19409ab.js';

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
        registerInstance(this, hostRef);
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
        this.breadcrumbManager = buildBreadcrumbManager(this.bindings.engine);
    }
    get resultValues() {
        const value = ResultTemplatesHelpers.getResultProperty(this.result, this.field);
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
        const label = getFieldValueCaption(this.field, value, this.bindings.i18n);
        const kebabValue = titleToKebab(value);
        return (h("li", { key: value, part: "result-multi-value-text-value" }, h("slot", { name: `result-multi-value-text-value-${kebabValue}` }, label)));
    }
    renderSeparator(beforeValue, afterValue) {
        return (h("li", { "aria-hidden": "true", part: "result-multi-value-text-separator", key: `${beforeValue}~${afterValue}`, class: "separator" }));
    }
    renderMoreLabel(value) {
        return (h("li", { key: "more-field-values", part: "result-multi-value-text-value-more" }, this.bindings.i18n.t('n-more', { value })));
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
        return (h("ul", { part: "result-multi-value-text-list" }, ...this.renderListItems(this.sortedValues)));
    }
    get host() { return getElement(this); }
};
__decorate([
    InitializeBindings()
], AtomicResultMultiValueText.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultMultiValueText.prototype, "result", void 0);
AtomicResultMultiValueText.style = AtomicResultMultiValueTextStyle0;

export { AtomicResultMultiValueText as atomic_result_multi_value_text };

//# sourceMappingURL=atomic-result-multi-value-text.entry.js.map