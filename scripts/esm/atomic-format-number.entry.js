import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { b as dispatchNumberFormatEvent } from './format-common-6436d8ea.js';
import './event-utils-8de63ec3.js';

const AtomicFormatNumber = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '6325357a5aadbc87e6ab48e71144ed9e3cbcaf29', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicFormatNumber as atomic_format_number };

//# sourceMappingURL=atomic-format-number.entry.js.map