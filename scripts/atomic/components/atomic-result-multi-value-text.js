import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { buildBreadcrumbManager, ResultTemplatesHelpers } from '@coveo/headless';
import { g as getFieldValueCaption } from './field-utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { t as titleToKebab } from './utils.js';
import { R as ResultContext } from './result-template-decorators.js';

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
const AtomicResultMultiValueText$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultMultiValueText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get host() { return this; }
    static get style() { return AtomicResultMultiValueTextStyle0; }
}, [1, "atomic-result-multi-value-text", {
        "field": [513],
        "maxValuesToDisplay": [514, "max-values-to-display"],
        "delimiter": [513],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultMultiValueText$1.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultMultiValueText$1.prototype, "result", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-multi-value-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-multi-value-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultMultiValueText$1);
            }
            break;
    } });
}

const AtomicResultMultiValueText = AtomicResultMultiValueText$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultMultiValueText, defineCustomElement };

//# sourceMappingURL=atomic-result-multi-value-text.js.map