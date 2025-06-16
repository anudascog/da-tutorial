import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicProductSectionVisual$1 = /*@__PURE__*/ proxyCustomElement(class AtomicProductSectionVisual extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.imageSize = undefined;
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-product-section-visual", {
        "imageSize": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-product-section-visual"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-product-section-visual":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicProductSectionVisual$1);
            }
            break;
    } });
}

const AtomicProductSectionVisual = AtomicProductSectionVisual$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicProductSectionVisual, defineCustomElement };

//# sourceMappingURL=atomic-product-section-visual.js.map