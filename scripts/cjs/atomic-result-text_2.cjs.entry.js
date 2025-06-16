'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const fieldUtils = require('./field-utils-a715deca.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const resultUtils = require('./result-utils-13b0d6d4.js');
const stencilItemTextHighlighted = require('./stencil-item-text-highlighted-91fd0fe8.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./object-utils-508205eb.js');
require('@coveo/bueno');
require('./item-decorators-2c23030b.js');

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
        index.registerInstance(this, hostRef);
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
        const resultValueAsString = resultUtils.getStringValueFromResultOrNull(this.result, this.field);
        if (resultValueAsString === null) {
            return (index.h(stencilItemTextHighlighted.ItemTextFallback, { field: this.field, host: this.host, logger: this.bindings.engine.logger, defaultValue: this.default, item: this.result, getProperty: headless.ResultTemplatesHelpers.getResultProperty }, index.h("atomic-text", { value: fieldUtils.getFieldValueCaption(this.field, this.default, this.bindings.i18n) })));
        }
        const textValue = `${resultValueAsString}`;
        const highlightKeywords = headless.ResultTemplatesHelpers.getResultProperty(this.result, `${this.field}Highlights`);
        return this.shouldHighlight && highlightKeywords ? (index.h(stencilItemTextHighlighted.ItemTextHighlighted, { textValue: textValue, highlightKeywords: highlightKeywords, highlightString: headless.HighlightUtils.highlightString, onError: (error) => (this.error = error) })) : (fieldUtils.getFieldValueCaption(this.field, textValue, this.bindings.i18n));
    }
    get host() { return index.getElement(this); }
};
__decorate$1([
    initializationUtils.InitializeBindings()
], AtomicResultText.prototype, "bindings", void 0);
__decorate$1([
    resultTemplateDecorators.ResultContext()
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
        index.registerInstance(this, hostRef);
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
    initializationUtils.InitializeBindings()
], AtomicText.prototype, "bindings", void 0);

exports.atomic_result_text = AtomicResultText;
exports.atomic_text = AtomicText;

//# sourceMappingURL=atomic-result-text_2.cjs.entry.js.map