import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { ResultTemplatesHelpers, HighlightUtils } from '@coveo/headless';
import { g as getFieldValueCaption } from './field-utils.js';
import { I as InitializeBindings } from './initialization-utils.js';
import { g as getStringValueFromResultOrNull } from './result-utils.js';
import { I as ItemTextFallback, a as ItemTextHighlighted } from './stencil-item-text-highlighted.js';
import { R as ResultContext } from './result-template-decorators.js';
import { d as defineCustomElement$1 } from './atomic-text2.js';

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
const AtomicResultText = /*@__PURE__*/ proxyCustomElement(class AtomicResultText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
    get host() { return this; }
}, [0, "atomic-result-text", {
        "field": [513],
        "shouldHighlight": [516, "should-highlight"],
        "default": [513],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultText.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultText.prototype, "result", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-text", "atomic-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultText);
            }
            break;
        case "atomic-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtomicResultText as A, defineCustomElement as d };

//# sourceMappingURL=atomic-result-text2.js.map