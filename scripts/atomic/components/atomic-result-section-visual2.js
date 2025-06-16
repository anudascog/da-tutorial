import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionVisual = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionVisual extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.imageSize = undefined;
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-visual", {
        "imageSize": [513, "image-size"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-visual"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-visual":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionVisual);
            }
            break;
    } });
}

export { AtomicResultSectionVisual as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-section-visual2.js.map