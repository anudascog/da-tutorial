import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { b as dispatchNumberFormatEvent } from './format-common-6436d8ea.js';
import './event-utils-8de63ec3.js';

const AtomicFormatUnit = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            dispatchNumberFormatEvent((value, languages) => this.format(value, languages), this.host);
        }
        catch (error) {
            this.error = error;
        }
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: '2458157975492e1240abb1059a65a6091b285b0b', element: this.host, error: this.error }));
        }
    }
    get host() { return getElement(this); }
};

export { AtomicFormatUnit as atomic_format_unit };

//# sourceMappingURL=atomic-format-unit.entry.js.map