import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const AtomicTimeframe$1 = /*@__PURE__*/ proxyCustomElement(class AtomicTimeframe extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The relative period of time to now.
         */
        this.period = 'past';
        /**
         * The amount of units from which to count.
         *
         * E.g., 10 days, 1 year, etc.
         */
        this.amount = 1;
        this.period = 'past';
        this.unit = undefined;
        this.amount = 1;
        this.label = undefined;
    }
}, [0, "atomic-timeframe", {
        "period": [513],
        "unit": [513],
        "amount": [514],
        "label": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-timeframe"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-timeframe":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicTimeframe$1);
            }
            break;
    } });
}

const AtomicTimeframe = AtomicTimeframe$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicTimeframe, defineCustomElement };

//# sourceMappingURL=atomic-timeframe.js.map