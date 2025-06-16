import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionEmphasized$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionEmphasized extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-emphasized"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-emphasized"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-emphasized":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionEmphasized$1);
            }
            break;
    } });
}

const AtomicResultSectionEmphasized = AtomicResultSectionEmphasized$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultSectionEmphasized, defineCustomElement };

//# sourceMappingURL=atomic-result-section-emphasized.js.map