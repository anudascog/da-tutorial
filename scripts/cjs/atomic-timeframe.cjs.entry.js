'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');

const AtomicTimeframe = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The relative period of time to now.
         */
        this.period = 'past';
        /**
         * The amount of units from which to count.
         *
         * E.g., 10 days, 1 year, etc.
         */
        this.amount = 1;
        this.period = 'past';
        this.unit = undefined;
        this.amount = 1;
        this.label = undefined;
    }
};

exports.atomic_timeframe = AtomicTimeframe;

//# sourceMappingURL=atomic-timeframe.cjs.entry.js.map