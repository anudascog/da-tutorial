import { r as registerInstance, h } from './index-3f35faca.js';
import { D as DOMPurify } from './purify-c7ebd240.js';
import { I as InitializeBindings } from './initialization-utils-ff3edf9a.js';
import './_commonjsHelpers-1789f0cf.js';
import './dom-utils-f6086cd3.js';
import './event-utils-8de63ec3.js';
import './init-queue-fbe942c3.js';
import './initialization-lit-stencil-common-utils-9e0c895f.js';

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
        registerInstance(this, hostRef);
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
        return (h("span", { key: '6df3b278a2ab957c97ac150211f03233f7bdfa7d', innerHTML: this.sanitize ? DOMPurify.sanitize(this.value) : this.value }));
    }
};
__decorate([
    InitializeBindings()
], AtomicHtml.prototype, "bindings", void 0);

export { AtomicHtml as atomic_html };

//# sourceMappingURL=atomic-html.entry.js.map