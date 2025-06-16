import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionMetadata$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionMetadata extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-metadata"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-metadata"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-metadata":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionMetadata$1);
            }
            break;
    } });
}

const AtomicProductSectionMetadata = AtomicProductSectionMetadata$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionMetadata, defineCustomElement };

//# sourceMappingURL=atomic-product-section-metadata.js.map