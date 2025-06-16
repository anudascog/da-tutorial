'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const resultUtils = require('./result-utils-13b0d6d4.js');
const resultTemplateDecorators = require('./result-template-decorators-3115d726.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');
require('@coveo/headless');
require('./object-utils-508205eb.js');
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
const AtomicResultHtml = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
         */
        this.sanitize = true;
        this.error = undefined;
        this.field = undefined;
        this.sanitize = true;
    }
    render() {
        const resultValue = resultUtils.getStringValueFromResultOrNull(this.result, this.field);
        if (!resultValue) {
            this.host.remove();
            return;
        }
        return (index.h("atomic-html", { value: resultValue, sanitize: this.sanitize }));
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicResultHtml.prototype, "bindings", void 0);
__decorate([
    resultTemplateDecorators.ResultContext()
], AtomicResultHtml.prototype, "result", void 0);

exports.atomic_result_html = AtomicResultHtml;

//# sourceMappingURL=atomic-result-html.cjs.entry.js.map