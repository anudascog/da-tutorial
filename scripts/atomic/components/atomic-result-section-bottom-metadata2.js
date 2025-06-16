import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionBottomMetadata = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionBottomMetadata extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-bottom-metadata"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-bottom-metadata"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-bottom-metadata":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionBottomMetadata);
            }
            break;
    } });
}

export { AtomicResultSectionBottomMetadata as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-section-bottom-metadata2.js.map