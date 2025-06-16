import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { b as dispatchNumberFormatEvent } from './format-common.js';

const AtomicFormatUnit$1 = /*@__PURE__*/ proxyCustomElement(class AtomicFormatUnit extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    get host() { return this; }
}, [1, "atomic-format-unit", {
        "unit": [513],
        "unitDisplay": [513, "unit-display"],
        "error": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-format-unit"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-format-unit":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicFormatUnit$1);
            }
            break;
    } });
}

const AtomicFormatUnit = AtomicFormatUnit$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicFormatUnit, defineCustomElement };

//# sourceMappingURL=atomic-format-unit.js.map