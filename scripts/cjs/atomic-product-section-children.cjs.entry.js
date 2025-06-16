'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const itemSectionUtils = require('./item-section-utils-66318831.js');
require('./utils-b6642872.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');

const AtomicProductSectionChildren = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentDidRender() {
        itemSectionUtils.hideEmptySection(this.host);
    }
    get host() { return index.getElement(this); }
};

exports.atomic_product_section_children = AtomicProductSectionChildren;

//# sourceMappingURL=atomic-product-section-children.cjs.entry.js.map