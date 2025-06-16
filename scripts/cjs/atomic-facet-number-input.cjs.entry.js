'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');
require('./ripple-fb3f3438.js');
require('./event-utils-9bfcf3c5.js');
require('./stencil-button-style-ba779fe2.js');

const atomicFacetNumberInputCss = "[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\n    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}";
const AtomicFacetNumberInputStyle0 = atomicFacetNumberInputCss;

const FacetNumberInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyInput = index.createEvent(this, "atomic/numberInputApply", 7);
        this.start = undefined;
        this.end = undefined;
        this.bindings = undefined;
        this.type = undefined;
        this.filter = undefined;
        this.filterState = undefined;
        this.label = undefined;
    }
    connectedCallback() {
        this.start = this.filterState.range?.start;
        this.end = this.filterState.range?.end;
    }
    apply() {
        if (!this.startRef.validity.valid || !this.endRef.validity.valid) {
            return;
        }
        this.applyInput.emit();
        this.filter.setRange({
            start: this.start,
            end: this.end,
        });
    }
    render() {
        const label = this.bindings.i18n.t(this.label);
        const minText = this.bindings.i18n.t('min');
        const maxText = this.bindings.i18n.t('max');
        const minAria = this.bindings.i18n.t('number-input-minimum', { label });
        const maxAria = this.bindings.i18n.t('number-input-maximum', { label });
        const apply = this.bindings.i18n.t('apply');
        const applyAria = this.bindings.i18n.t('number-input-apply', { label });
        const inputClasses = 'p-2.5 input-primary placeholder-neutral-dark min-w-0 mr-1';
        const labelClasses = 'text-neutral-dark text-sm';
        const step = this.type === 'integer' ? '1' : 'any';
        return (index.h("form", { key: '319478ce87dcc7d73f145e7f4c3d8184bb5d7b57', class: "mt-4 gap-y-0.5 px-2", part: "input-form", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, index.h("label", { key: '3003be271098047ebcbe2817b8fedaf5477b35e1', part: "label-start", class: labelClasses, htmlFor: `${this.filterState.facetId}_start` }, minText), index.h("input", { key: '2a08a23efbbb364967a81b0dc65cc03cd74edc60', part: "input-start", id: `${this.filterState.facetId}_start`, type: "number", step: step, ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": minAria, required: true, min: Number.MIN_SAFE_INTEGER, max: this.end, value: this.filterState.range?.start, onInput: (e) => (this.start = e.target.valueAsNumber) }), index.h("label", { key: '323807d6cd0b35143ae652a3aa8cf26efce61449', part: "label-end", class: labelClasses, htmlFor: `${this.filterState.facetId}_end` }, maxText), index.h("input", { key: '09de37085c18fc11e2b0271ef9713d9283a569e0', part: "input-end", id: `${this.filterState.facetId}_end`, type: "number", step: step, ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": maxAria, required: true, min: this.start, max: Number.MAX_SAFE_INTEGER, value: this.filterState.range?.end, onInput: (e) => (this.end = e.target.valueAsNumber) }), index.h(stencilButton.Button, { key: '58c99c56e8c9d73605e9ab138fd09e0e21909d11', style: "outline-primary", type: "submit", part: "input-apply-button", class: "flex-none truncate p-2.5", ariaLabel: applyAria, text: apply })));
    }
};
FacetNumberInput.style = AtomicFacetNumberInputStyle0;

exports.atomic_facet_number_input = FacetNumberInput;

//# sourceMappingURL=atomic-facet-number-input.cjs.entry.js.map