import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const AtomicNumericRange$1 = /*@__PURE__*/ proxyCustomElement(class AtomicNumericRange extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Specifies whether the end value should be included in the range.
         */
        this.endInclusive = false;
        this.label = undefined;
        this.start = undefined;
        this.end = undefined;
        this.endInclusive = false;
    }
    get host() { return this; }
}, [0, "atomic-numeric-range", {
        "label": [513],
        "start": [514],
        "end": [514],
        "endInclusive": [516, "end-inclusive"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-numeric-range"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-numeric-range":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicNumericRange$1);
            }
            break;
    } });
}

const AtomicNumericRange = AtomicNumericRange$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicNumericRange, defineCustomElement };

//# sourceMappingURL=atomic-numeric-range.js.map