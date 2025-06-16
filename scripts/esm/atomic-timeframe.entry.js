import { r as registerInstance } from './index-3f35faca.js';

const AtomicTimeframe = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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

export { AtomicTimeframe as atomic_timeframe };

//# sourceMappingURL=atomic-timeframe.entry.js.map