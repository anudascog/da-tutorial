import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { h as hideEmptySection } from './item-section-utils-bf909a27.js';
import './utils-0a01e06c.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';

const AtomicProductSectionBottomMetadata = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidRender() {
        hideEmptySection(this.host);
    }
    get host() { return getElement(this); }
};

export { AtomicProductSectionBottomMetadata as atomic_product_section_bottom_metadata };

//# sourceMappingURL=atomic-product-section-bottom-metadata.entry.js.map