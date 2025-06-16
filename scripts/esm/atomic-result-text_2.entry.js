import { r as registerInstance, h, g as getElement } from './index-3f35faca.js';
import { ResultTemplatesHelpers, HighlightUtils } from '@coveo/headless';
import { g as getFieldValueCaption } from './field-utils-f0146383.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import { g as getStringValueFromResultOrNull } from './result-utils-8d856f03.js';
import { I as ItemTextFallback, a as ItemTextHighlighted } from './stencil-item-text-highlighted-0e1c6c08.js';
import { R as ResultContext } from './result-template-decorators-62ec8535.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';
import './object-utils-b58b5b66.js';
import '@coveo/bueno';
import './item-decorators-c19409ab.js';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicResultText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * When this is set to `true`, the component attempts to highlight text based on the highlighting properties provided by the search API response.
         */
        this.shouldHighlight = true;
        this.error = undefined;
        this.field = undefined;
        this.shouldHighlight = true;
        this.default = undefined;
    }
    render() {
        const resultValueAsString = getStringValueFromResultOrNull(this.result, this.field);
        if (resultValueAsString === null) {
            return (h(ItemTextFallback, { field: this.field, host: this.host, logger: this.bindings.engine.logger, defaultValue: this.default, item: this.result, getProperty: ResultTemplatesHelpers.getResultProperty }, h("atomic-text", { value: getFieldValueCaption(this.field, this.default, this.bindings.i18n) })));
        }
        const textValue = `${resultValueAsString}`;
        const highlightKeywords = ResultTemplatesHelpers.getResultProperty(this.result, `${this.field}Highlights`);
        return this.shouldHighlight && highlightKeywords ? (h(ItemTextHighlighted, { textValue: textValue, highlightKeywords: highlightKeywords, highlightString: HighlightUtils.highlightString, onError: (error) => (this.error = error) })) : (getFieldValueCaption(this.field, textValue, this.bindings.i18n));
    }
    get host() { return getElement(this); }
};
__decorate$1([
    InitializeBindings()
], AtomicResultText.prototype, "bindings", void 0);
__decorate$1([
    ResultContext()
], AtomicResultText.prototype, "result", void 0);

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
const AtomicText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.strings = {
            value: () => this.bindings.i18n.t(this.value, {
                count: this.count,
            }),
        };
        this.error = undefined;
        this.value = undefined;
        this.count = undefined;
    }
    connectedCallback() {
        if (!this.value) {
            this.error = new Error('The "value" attribute must be defined.');
        }
    }
    render() {
        return this.strings.value();
    }
};
__decorate([
    InitializeBindings()
], AtomicText.prototype, "bindings", void 0);

export { AtomicResultText as atomic_result_text, AtomicText as atomic_text };

//# sourceMappingURL=atomic-result-text_2.entry.js.map