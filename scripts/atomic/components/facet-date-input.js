import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { buildDateRange } from '@coveo/headless';
import { p as parseDate } from './date-utils.js';
import { B as Button } from './stencil-button.js';

const FacetDateInput = /*@__PURE__*/ proxyCustomElement(class FacetDateInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.applyInput = createEvent(this, "atomic/dateInputApply", 7);
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
        this.start = range ? parseDate(range.start).toDate() : undefined;
        this.end = range ? parseDate(range.end).toDate() : undefined;
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
        const rangeRequest = buildDateRange({
            start: this.start,
            end: this.end.setHours(23, 59, 59, 999),
        });
        this.rangeSetter(rangeRequest);
    }
    formattedDateValue(date) {
        if (!date) {
            return '';
        }
        return parseDate(date).format('YYYY-MM-DD');
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
        return (h("form", { key: 'd3c50385b27ffa80d2d34b67ab9bca14823406f7', class: "mt-4 grid grid-cols-[min-content_1fr] gap-2 px-2", onSubmit: (e) => {
                e.preventDefault();
                this.apply();
                return false;
            } }, h("label", { key: '1d8e3e495308b8afaf1dee3158ef421de00bfb35', part: "input-label", class: labelClasses, htmlFor: `${this.facetId}_start` }, startLabel, ":"), h("input", { key: '5402d1ac25a1b84924070674b5a93927ea9b62e2', id: `${this.facetId}_start`, part: "input-start", type: "date", ref: (ref) => (this.startRef = ref), class: inputClasses, "aria-label": startAria, placeholder: placeholder, pattern: pattern, required: true,
            // API/Index minimum supported date
            min: this.min || this.formattedDateValue('1401-01-01'), max: this.end ? this.formattedDateValue(this.end) : this.max, value: this.formattedDateValue(range?.start), onInput: (e) => (this.start = parseDate(e.target.value).toDate()) }), h("label", { key: '2b051dacd5307b4ce09bb2952887deab05f795f3', part: "input-label", class: labelClasses, htmlFor: `${this.facetId}_end` }, endLabel, ":"), h("input", { key: '75df74b2c7b0e9b8c9de2def45f55f38eb0ba749', id: `${this.facetId}_end`, part: "input-end", type: "date", ref: (ref) => (this.endRef = ref), class: inputClasses, "aria-label": endAria, placeholder: placeholder, pattern: pattern, required: true, min: this.formattedDateValue(this.start) || this.min, max: this.max, value: this.formattedDateValue(range?.end), onInput: (e) => (this.end = parseDate(e.target.value).toDate()) }), h(Button, { key: '8bb1a0946c522258e1bc3c32da1e011acb28b8d9', style: "outline-primary", type: "submit", part: "input-apply-button", class: "col-span-2 truncate p-2.5", ariaLabel: applyAria, text: apply })));
    }
}, [0, "atomic-facet-date-input", {
        "bindings": [16],
        "rangeGetter": [16],
        "rangeSetter": [16],
        "facetId": [1, "facet-id"],
        "label": [1],
        "min": [1],
        "max": [1],
        "start": [32],
        "end": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-facet-date-input"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-facet-date-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, FacetDateInput);
            }
            break;
    } });
}

export { FacetDateInput as F, defineCustomElement as d };

//# sourceMappingURL=facet-date-input.js.map