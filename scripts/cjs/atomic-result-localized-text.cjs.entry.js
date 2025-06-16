'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const bueno = require('@coveo/bueno');
const headless = require('@coveo/headless');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const propsUtils = require('./props-utils-66dfcd3a.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('./utils-b6642872.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./item-decorators-2c23030b.js');

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
        index.registerInstance(this, hostRef);
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
            const fieldValueRaw = headless.ResultTemplatesHelpers.getResultProperty(this.result, fieldName);
            if (!bueno.isNullOrUndefined(fieldValueRaw)) {
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
            count: headless.ResultTemplatesHelpers.getResultProperty(this.result, this.fieldCount) ?? 1,
        };
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultLocalizedText.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultLocalizedText.prototype, "result", void 0);
__decorate([
    propsUtils.MapProp()
], AtomicResultLocalizedText.prototype, "field", void 0);

exports.atomic_result_localized_text = AtomicResultLocalizedText;

//# sourceMappingURL=atomic-result-localized-text.cjs.entry.js.map