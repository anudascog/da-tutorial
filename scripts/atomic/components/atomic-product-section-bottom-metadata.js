import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionBottomMetadata$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionBottomMetadata extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-bottom-metadata"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-bottom-metadata"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-bottom-metadata":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionBottomMetadata$1);
            }
            break;
    } });
}

const AtomicProductSectionBottomMetadata = AtomicProductSectionBottomMetadata$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionBottomMetadata, defineCustomElement };

//# sourceMappingURL=atomic-product-section-bottom-metadata.js.map