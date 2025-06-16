'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');

const AtomicTab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The [constant query expression (`cq`)](https://docs.coveo.com/en/2830/searching-with-coveo/about-the-query-expression#constant-query-expression-cq) to apply when the tab is the active one.
         */
        this.expression = '';
        this.label = undefined;
        this.name = undefined;
        this.expression = '';
    }
    get host() { return index.getElement(this); }
};

exports.atomic_tab = AtomicTab;

//# sourceMappingURL=atomic-tab.cjs.entry.js.map