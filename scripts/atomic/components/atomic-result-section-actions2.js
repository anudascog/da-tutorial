import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionActions = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionActions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-actions"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-actions"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-actions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionActions);
            }
            break;
    } });
}

export { AtomicResultSectionActions as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-section-actions2.js.map