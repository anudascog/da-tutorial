import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionBadges = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionBadges extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-badges"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-badges"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-badges":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionBadges);
            }
            break;
    } });
}

export { AtomicResultSectionBadges as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-section-badges2.js.map