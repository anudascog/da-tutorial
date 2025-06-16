import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionExcerpt = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionExcerpt extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-excerpt"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-excerpt"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-excerpt":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionExcerpt);
            }
            break;
    } });
}

export { AtomicResultSectionExcerpt as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-section-excerpt2.js.map