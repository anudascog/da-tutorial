import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { h as hideEmptySection } from './item-section-utils.js';

const AtomicResultSectionTitleMetadata$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultSectionTitleMetadata extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return this; }
}, [0, "atomic-result-section-title-metadata"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-section-title-metadata"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-section-title-metadata":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultSectionTitleMetadata$1);
            }
            break;
    } });
}

const AtomicResultSectionTitleMetadata = AtomicResultSectionTitleMetadata$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultSectionTitleMetadata, defineCustomElement };

//# sourceMappingURL=atomic-result-section-title-metadata.js.map