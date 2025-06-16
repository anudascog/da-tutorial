import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionName$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionName extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-name"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-name"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-name":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionName$1);
            }
            break;
    } });
}

const AtomicProductSectionName = AtomicProductSectionName$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionName, defineCustomElement };

//# sourceMappingURL=atomic-product-section-name.js.map