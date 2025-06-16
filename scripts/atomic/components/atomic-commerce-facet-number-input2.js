import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { isUndefined } from '@coveo/bueno';
import { B as Button } from './stencil-button.js';

const atomicCommerceFacetNumberInputCss = "[part='input-form']{display:grid;grid-template-areas:'label-start label-end .'\n    'input-start input-end apply-button';grid-template-columns:1fr 1fr auto}[part='label-start']{grid-area:label-start}[part='label-end']{grid-area:label-end}[part='input-start']{grid-area:input-start}[part='input-end']{grid-area:input-end}[part='input-apply-button']{grid-area:apply-button}";
const AtomicCommerceFacetNumberInputStyle0 = atomicCommerceFacetNumberInputCss;

const AtomicCommerceFacetNumberInput = /*@__PURE__*/ proxyCustomElement(class AtomicCommerceFacetNumberInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyInput = createEvent(this, "atomic/numberInputApply", 7);
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
        return isUndefined(this.start) ? this.absoluteMinimum : this.start;
    }
    get maximumInputValue() {
        return isUndefined(this.end) ? Number.MAX_SAFE_INTEGER : this.end;
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
        return (h("form", { key: '957339b20ee1dd2ad3eb657bf6c7926bb3506290', class: "mt-4 gap-y-0.5 px-2", part: "input-form", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, h("label", { key: '39a2983aaf170c6a0560dd9e9e398cff65b9dd2b', part: "label-start", class: labelClasses, htmlFor: `${facetId}_start` }, minText), h("input", { key: '2a0a15acb9b7b0ba9a0c76444a998210d4f94a33', part: "input-start", id: `${facetId}_start`, type: "number", step: step, ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": minAria, required: true, min: this.absoluteMinimum, max: this.maximumInputValue, value: this.range?.start, onInput: (e) => (this.start = e.target.valueAsNumber) }), h("label", { key: 'b5e52ee4b228add01f4a341b7ee90c10bb2e9dde', part: "label-end", class: labelClasses, htmlFor: `${facetId}_end` }, maxText), h("input", { key: 'cfabe3fb219bc478831c3fd4c6e93513ce116b79', part: "input-end", id: `${facetId}_end`, type: "number", step: step, ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": maxAria, required: true, min: this.minimumInputValue, max: Number.MAX_SAFE_INTEGER, value: this.range?.end, onInput: (e) => (this.end = e.target.valueAsNumber) }), h(Button, { key: '4a7b8104fc8933b319459b557ae91ebdbe238ab0', style: "outline-primary", type: "submit", part: "input-apply-button", class: "flex-none truncate p-2.5", ariaLabel: applyAria, text: apply })));
    }
    static get style() { return AtomicCommerceFacetNumberInputStyle0; }
}, [0, "atomic-commerce-facet-number-input", {
        "bindings": [16],
        "label": [1],
        "range": [16],
        "facet": [16],
        "start": [32],
        "end": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-commerce-facet-number-input"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-commerce-facet-number-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicCommerceFacetNumberInput);
            }
            break;
    } });
}

export { AtomicCommerceFacetNumberInput as A, defineCustomElement as d };

//# sourceMappingURL=atomic-commerce-facet-number-input2.js.map