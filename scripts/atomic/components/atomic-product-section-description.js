import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionDescription$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionDescription extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-description"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-description"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-description":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionDescription$1);
            }
            break;
    } });
}

const AtomicProductSectionDescription = AtomicProductSectionDescription$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionDescription, defineCustomElement };

//# sourceMappingURL=atomic-product-section-description.js.map