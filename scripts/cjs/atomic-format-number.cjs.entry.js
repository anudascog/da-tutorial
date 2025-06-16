'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const formatCommon = require('./format-common-4aa8aa88.js');
require('./event-utils-9bfcf3c5.js');

const AtomicFormatNumber = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.format = (value, languages) => {
            return value.toLocaleString(languages, {
                minimumIntegerDigits: this.minimumIntegerDigits,
                minimumFractionDigits: this.minimumFractionDigits,
                maximumFractionDigits: this.maximumFractionDigits,
                minimumSignificantDigits: this.minimumSignificantDigits,
                maximumSignificantDigits: this.maximumSignificantDigits,
            });
        };
        this.error = undefined;
        this.minimumIntegerDigits = undefined;
        this.minimumFractionDigits = undefined;
        this.maximumFractionDigits = undefined;
        this.minimumSignificantDigits = undefined;
        this.maximumSignificantDigits = undefined;
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
            return (index.h("atomic-component-error", { key: '6325357a5aadbc87e6ab48e71144ed9e3cbcaf29', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_format_number = AtomicFormatNumber;

//# sourceMappingURL=atomic-format-number.cjs.entry.js.map