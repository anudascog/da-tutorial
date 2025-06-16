import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const AtomicTableElement$1 = /*@__PURE__*/ proxyCustomElement(class AtomicTableElement extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.label = undefined;
    }
}, [0, "atomic-table-element", {
        "label": [513]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-table-element"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-table-element":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicTableElement$1);
            }
            break;
    } });
}

const AtomicTableElement = AtomicTableElement$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicTableElement, defineCustomElement };

//# sourceMappingURL=atomic-table-element.js.map