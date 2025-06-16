import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionChildren$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionChildren extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-children"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-children"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-children":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionChildren$1);
            }
            break;
    } });
}

const AtomicResultSectionChildren = AtomicResultSectionChildren$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultSectionChildren, defineCustomElement };

//# sourceMappingURL=atomic-result-section-children.js.map