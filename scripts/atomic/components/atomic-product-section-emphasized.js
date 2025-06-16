import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionEmphasized$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionEmphasized extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-emphasized"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-emphasized"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-emphasized":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionEmphasized$1);
            }
            break;
    } });
}

const AtomicProductSectionEmphasized = AtomicProductSectionEmphasized$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionEmphasized, defineCustomElement };

//# sourceMappingURL=atomic-product-section-emphasized.js.map