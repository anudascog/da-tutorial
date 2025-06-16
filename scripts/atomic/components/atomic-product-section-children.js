import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionChildren$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionChildren extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-children"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-children"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-children":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionChildren$1);
            }
            break;
    } });
}

const AtomicProductSectionChildren = AtomicProductSectionChildren$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionChildren, defineCustomElement };

//# sourceMappingURL=atomic-product-section-children.js.map