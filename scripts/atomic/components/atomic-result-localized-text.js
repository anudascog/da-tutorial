import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { isNullOrUndefined } from '@coveo/bueno';
import { ResultTemplatesHelpers } from '@coveo/headless';
import { I as InitializeBindings } from './initialization-utils.js';
import { M as MapProp } from './props-utils.js';
import { R as ResultContext } from './result-template-decorators.js';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicResultLocalizedText$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultLocalizedText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The field value to dynamically evaluate.
         */
        this.field = {};
        this.error = undefined;
        this.localeKey = undefined;
        this.field = {};
        this.fieldCount = undefined;
    }
    render() {
        return this.bindings.i18n.t(this.localeKey, {
            ...this.parseFieldValues(),
            ...this.parseFieldCount(),
        });
    }
    parseFieldValues() {
        const ret = {};
        if (Object.keys(this.field).length === 0) {
            return ret;
        }
        Object.entries(this.field).forEach(([fieldName, i18nParameter]) => {
            const fieldValueRaw = ResultTemplatesHelpers.getResultProperty(this.result, fieldName);
            if (!isNullOrUndefined(fieldValueRaw)) {
                ret[i18nParameter] = fieldValueRaw;
            }
        });
        return ret;
    }
    parseFieldCount() {
        if (!this.fieldCount) {
            return {};
        }
        return {
            count: ResultTemplatesHelpers.getResultProperty(this.result, this.fieldCount) ?? 1,
        };
    }
}, [0, "atomic-result-localized-text", {
        "localeKey": [1, "locale-key"],
        "field": [16],
        "fieldCount": [1, "field-count"],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultLocalizedText$1.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultLocalizedText$1.prototype, "result", void 0);
__decorate([
    MapProp()
], AtomicResultLocalizedText$1.prototype, "field", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-localized-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-localized-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultLocalizedText$1);
            }
            break;
    } });
}

const AtomicResultLocalizedText = AtomicResultLocalizedText$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultLocalizedText, defineCustomElement };

//# sourceMappingURL=atomic-result-localized-text.js.map