import { r as registerInstance, g as getElement } from './index-3f35faca.js';

const AtomicNumericRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Specifies whether the end value should be included in the range.
         */
        this.endInclusive = false;
        this.label = undefined;
        this.start = undefined;
        this.end = undefined;
        this.endInclusive = false;
    }
    get host() { return getElement(this); }
};

export { AtomicNumericRange as atomic_numeric_range };

//# sourceMappingURL=atomic-numeric-range.entry.js.map