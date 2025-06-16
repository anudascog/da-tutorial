import { r as registerInstance, g as getElement } from './index-3f35faca.js';

const AtomicTab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The [constant query expression (`cq`)](https://docs.coveo.com/en/2830/searching-with-coveo/about-the-query-expression#constant-query-expression-cq) to apply when the tab is the active one.
         */
        this.expression = '';
        this.label = undefined;
        this.name = undefined;
        this.expression = '';
    }
    get host() { return getElement(this); }
};

export { AtomicTab as atomic_tab };

//# sourceMappingURL=atomic-tab.entry.js.map