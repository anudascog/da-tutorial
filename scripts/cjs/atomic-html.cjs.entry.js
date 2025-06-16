'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const purify = require('./purify-85b542e2.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');
require('./_commonjsHelpers-b3309d7b.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');

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
const AtomicHtml = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
         */
        this.sanitize = true;
        this.error = undefined;
        this.value = undefined;
        this.sanitize = true;
    }
    connectedCallback() {
        if (!this.value) {
            this.error = new Error('The "value" attribute must be defined.');
        }
    }
    render() {
        return (index.h("span", { key: '6df3b278a2ab957c97ac150211f03233f7bdfa7d', innerHTML: this.sanitize ? purify.DOMPurify.sanitize(this.value) : this.value }));
    }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicHtml.prototype, "bindings", void 0);

exports.atomic_html = AtomicHtml;

//# sourceMappingURL=atomic-html.cjs.entry.js.map