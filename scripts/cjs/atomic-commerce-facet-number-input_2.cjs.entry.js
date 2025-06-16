'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const bueno = require('@coveo/bueno');
const stencilButton = require('./stencil-button-ac56f2c3.js');
const headless = require('@coveo/headless');
const dateUtils = require('./date-utils-ee316e1d.js');
require('./ripple-fb3f3438.js');
require('./event-utils-9bfcf3c5.js');
require('./stencil-button-style-ba779fe2.js');
require('./dayjs.min-8b80e6d1.js');
require('./_commonjsHelpers-b3309d7b.js');

const atomicCommerceFacetNumberInputCss = "[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\n    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}";
const AtomicCommerceFacetNumberInputStyle0 = atomicCommerceFacetNumberInputCss;

const AtomicCommerceFacetNumberInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyInput = index.createEvent(this, "atomic/numberInputApply", 7);
        this.start = undefined;
        this.end = undefined;
        this.bindings = undefined;
        this.label = undefined;
        this.range = undefined;
        this.facet = undefined;
    }
    connectedCallback() {
        this.start = this.range?.start;
        this.end = this.range?.end;
    }
    apply() {
        if (!this.startRef.validity.valid || !this.endRef.validity.valid) {
            return;
        }
        this.applyInput.emit({
            start: this.start,
            end: this.end,
        });
    }
    get absoluteMinimum() {
        const { field } = this.facet.state;
        const isPriceField = ['ec_price', 'ec_promo_price'].includes(field);
        return isPriceField ? 0 : Number.MIN_SAFE_INTEGER;
    }
    get minimumInputValue() {
        return bueno.isUndefined(this.start) ? this.absoluteMinimum : this.start;
    }
    get maximumInputValue() {
        return bueno.isUndefined(this.end) ? Number.MAX_SAFE_INTEGER : this.end;
    }
    render() {
        const { facetId } = this.facet.state;
        const label = this.bindings.i18n.t(this.label);
        const minText = this.bindings.i18n.t('min');
        const maxText = this.bindings.i18n.t('max');
        const minAria = this.bindings.i18n.t('number-input-minimum', { label });
        const maxAria = this.bindings.i18n.t('number-input-maximum', { label });
        const apply = this.bindings.i18n.t('apply');
        const applyAria = this.bindings.i18n.t('number-input-apply', { label });
        const inputClasses = 'p-2.5 input-primary placeholder-neutral-dark min-w-0 mr-1';
        const labelClasses = 'text-neutral-dark text-sm';
        const step = 'any';
        return (index.h("form", { key: '957339b20ee1dd2ad3eb657bf6c7926bb3506290', class: "mt-4 gap-y-0.5 px-2", part: "input-form", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, index.h("label", { key: '39a2983aaf170c6a0560dd9e9e398cff65b9dd2b', part: "label-start", class: labelClasses, htmlFor: `${facetId}_start` }, minText), index.h("input", { key: '2a0a15acb9b7b0ba9a0c76444a998210d4f94a33', part: "input-start", id: `${facetId}_start`, type: "number", step: step, ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": minAria, required: true, min: this.absoluteMinimum, max: this.maximumInputValue, value: this.range?.start, onInput: (e) => (this.start = e.target.valueAsNumber) }), index.h("label", { key: 'b5e52ee4b228add01f4a341b7ee90c10bb2e9dde', part: "label-end", class: labelClasses, htmlFor: `${facetId}_end` }, maxText), index.h("input", { key: 'cfabe3fb219bc478831c3fd4c6e93513ce116b79', part: "input-end", id: `${facetId}_end`, type: "number", step: step, ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": maxAria, required: true, min: this.minimumInputValue, max: Number.MAX_SAFE_INTEGER, value: this.range?.end, onInput: (e) => (this.end = e.target.valueAsNumber) }), index.h(stencilButton.Button, { key: '4a7b8104fc8933b319459b557ae91ebdbe238ab0', style: "outline-primary", type: "submit", part: "input-apply-button", class: "flex-none truncate p-2.5", ariaLabel: applyAria, text: apply })));
    }
};
AtomicCommerceFacetNumberInput.style = AtomicCommerceFacetNumberInputStyle0;

const FacetDateInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyInput = index.createEvent(this, "atomic/dateInputApply", 7);
        this.start = undefined;
        this.end = undefined;
        this.bindings = undefined;
        this.rangeGetter = undefined;
        this.rangeSetter = undefined;
        this.facetId = undefined;
        this.label = undefined;
        this.min = undefined;
        this.max = undefined;
    }
    connectedCallback() {
        const range = this.rangeGetter();
        this.start = range ? dateUtils.parseDate(range.start).toDate() : undefined;
        this.end = range ? dateUtils.parseDate(range.end).toDate() : undefined;
    }
    componentDidUpdate() {
        if (!this.startRef.value && !this.endRef.value) {
            this.startRef.min = this.min || this.formattedDateValue('1401-01-01');
            this.endRef.max = this.max || '';
            this.startRef.max = this.max || '';
            this.endRef.min = this.min || '';
        }
    }
    apply() {
        if (!this.startRef.validity.valid || !this.endRef.validity.valid) {
            return;
        }
        this.applyInput.emit({
            start: this.start,
            end: this.end,
        });
        const rangeRequest = headless.buildDateRange({
            start: this.start,
            end: this.end.setHours(23, 59, 59, 999),
        });
        this.rangeSetter(rangeRequest);
    }
    formattedDateValue(date) {
        if (!date) {
            return '';
        }
        return dateUtils.parseDate(date).format('YYYY-MM-DD');
    }
    render() {
        const label = this.bindings.i18n.t(this.label);
        const startLabel = this.bindings.i18n.t('start');
        const endLabel = this.bindings.i18n.t('end');
        const startAria = this.bindings.i18n.t('date-input-start', { label });
        const endAria = this.bindings.i18n.t('date-input-end', { label });
        const apply = this.bindings.i18n.t('apply');
        const applyAria = this.bindings.i18n.t('date-input-apply', { label });
        const inputClasses = 'input-primary p-2.5';
        const labelClasses = 'text-neutral-dark self-center';
        const placeholder = 'yyyy-mm-dd';
        // Fallback for Safari < 14.1, date with format yyyy-mm-dd over 1400 (API limit)
        const pattern = '^(1[4-9]\\d{2}|2\\d{3})-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$';
        const range = this.rangeGetter();
        return (index.h("form", { key: 'd3c50385b27ffa80d2d34b67ab9bca14823406f7', class: "mt-4 grid grid-cols-[min-content_1fr] gap-2 px-2", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, index.h("label", { key: '1d8e3e495308b8afaf1dee3158ef421de00bfb35', part: "input-label", class: labelClasses, htmlFor: `${this.facetId}_start` }, startLabel, ":"), index.h("input", { key: '5402d1ac25a1b84924070674b5a93927ea9b62e2', id: `${this.facetId}_start`, part: "input-start", type: "date", ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": startAria, placeholder: placeholder, pattern: pattern, required: true,
            // API/Index minimum supported date
            min: this.min || this.formattedDateValue('1401-01-01'), max: this.end ? this.formattedDateValue(this.end) : this.max, value: this.formattedDateValue(range?.start), onInput: (e) => (this.start = dateUtils.parseDate(e.target.value).toDate()) }), index.h("label", { key: '2b051dacd5307b4ce09bb2952887deab05f795f3', part: "input-label", class: labelClasses, htmlFor: `${this.facetId}_end` }, endLabel, ":"), index.h("input", { key: '75df74b2c7b0e9b8c9de2def45f55f38eb0ba749', id: `${this.facetId}_end`, part: "input-end", type: "date", ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": endAria, placeholder: placeholder, pattern: pattern, required: true, min: this.formattedDateValue(this.start) || this.min, max: this.max, value: this.formattedDateValue(range?.end), onInput: (e) => (this.end = dateUtils.parseDate(e.target.value).toDate()) }), index.h(stencilButton.Button, { key: '8bb1a0946c522258e1bc3c32da1e011acb28b8d9', style: "outline-primary", type: "submit", part: "input-apply-button", class: "col-span-2 truncate p-2.5", ariaLabel: applyAria, text: apply })));
    }
};

exports.atomic_commerce_facet_number_input = AtomicCommerceFacetNumberInput;
exports.atomic_facet_date_input = FacetDateInput;

//# sourceMappingURL=atomic-commerce-facet-number-input_2.cjs.entry.js.map