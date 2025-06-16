import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionActions$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionActions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-actions"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionActions$1);
            }
            break;
    } });
}

const AtomicProductSectionActions = AtomicProductSectionActions$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionActions, defineCustomElement };

//# sourceMappingURL=atomic-product-section-actions.js.map