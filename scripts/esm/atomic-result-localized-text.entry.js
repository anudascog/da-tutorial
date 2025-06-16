import { r as registerInstance } from './index-3f35faca.js';
import { isNullOrUndefined } from '@coveo/bueno';
import { ResultTemplatesHelpers } from '@coveo/headless';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { M as MapProp } from './props-utils-525cbc5b.js';
import { R as ResultContext } from './result-template-decorators-62ec8535.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './utils-0a01e06c.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';
import './item-decorators-c19409ab.js';

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
const AtomicResultLocalizedText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
__decorate([
    InitializeBindings()
], AtomicResultLocalizedText.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultLocalizedText.prototype, "result", void 0);
__decorate([
    MapProp()
], AtomicResultLocalizedText.prototype, "field", void 0);

export { AtomicResultLocalizedText as atomic_result_localized_text };

//# sourceMappingURL=atomic-result-localized-text.entry.js.map