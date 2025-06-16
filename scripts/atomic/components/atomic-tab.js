import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const AtomicTab$1 = /*@__PURE__*/ proxyCustomElement(class AtomicTab extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The [constant query expression (`cq`)](https://docs.coveo.com/en/2830/searching-with-coveo/about-the-query-expression#constant-query-expression-cq) to apply when the tab is the active one.
         */
        this.expression = '';
        this.label = undefined;
        this.name = undefined;
        this.expression = '';
    }
    get host() { return this; }
}, [0, "atomic-tab", {
        "label": [1],
        "name": [1],
        "expression": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-tab"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicTab$1);
            }
            break;
    } });
}

const AtomicTab = AtomicTab$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicTab, defineCustomElement };

//# sourceMappingURL=atomic-tab.js.map