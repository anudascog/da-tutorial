'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const formatCommon = require('./format-common-4aa8aa88.js');
require('./event-utils-9bfcf3c5.js');

const AtomicFormatUnit = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The unit formatting style to use in unit formatting.
         *
         * * "long" (e.g., 16 litres)
         * * "short" (e.g., 16 l)
         * * "narrow" (e.g., 16l)
         */
        this.unitDisplay = 'short';
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                style: 'unit',
                unit: this.unit,
                unitDisplay: this.unitDisplay,
            });
        };
        this.error = undefined;
        this.unit = undefined;
        this.unitDisplay = 'short';
    }
    componentWillLoad() {
        try {
            formatCommon.dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (index.h("atomic-component-error", { key: '2458157975492e1240abb1059a65a6091b285b0b', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_format_unit = AtomicFormatUnit;

//# sourceMappingURL=atomic-format-unit.cjs.entry.js.map