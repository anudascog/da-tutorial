import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionBadges$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionBadges extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-badges"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-badges"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-badges":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionBadges$1);
            }
            break;
    } });
}

const AtomicProductSectionBadges = AtomicProductSectionBadges$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionBadges, defineCustomElement };

//# sourceMappingURL=atomic-product-section-badges.js.map