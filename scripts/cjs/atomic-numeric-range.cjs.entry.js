'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');

const AtomicNumericRange = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Specifies whether the end value should be included in the range.
         */
        this.endInclusive = false;
        this.label = undefined;
        this.start = undefined;
        this.end = undefined;
        this.endInclusive = false;
    }
    get host() { return index.getElement(this); }
};

exports.atomic_numeric_range = AtomicNumericRange;

//# sourceMappingURL=atomic-numeric-range.cjs.entry.js.map