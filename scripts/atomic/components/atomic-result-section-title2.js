import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionTitle = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionTitle extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-title"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-title"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-title":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionTitle);
            }
            break;
    } });
}

export { AtomicResultSectionTitle as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-section-title2.js.map