import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';

const AtomicLayoutSection$1 = /*@__PURE__*/ proxyCustomElement(class AtomicLayoutSection extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.section = undefined;
        this.minWidth = undefined;
        this.maxWidth = undefined;
    }
}, [0, "atomic-layout-section", {
        "section": [513],
        "minWidth": [513, "min-width"],
        "maxWidth": [513, "max-width"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-layout-section"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-layout-section":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicLayoutSection$1);
            }
            break;
    } });
}

const AtomicLayoutSection = AtomicLayoutSection$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicLayoutSection, defineCustomElement };

//# sourceMappingURL=atomic-layout-section.js.map