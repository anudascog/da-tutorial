import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { D as DOMPurify } from './purify.js';
import { I as InitializeBindings } from './initialization-utils.js';

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
const AtomicHtml = /*@__PURE__*/ proxyCustomElement(class AtomicHtml extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
}, [1, "atomic-html", {
        "value": [1],
        "sanitize": [516],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicHtml.prototype, "bindings", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-html"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-html":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicHtml);
            }
            break;
    } });
}

export { AtomicHtml as A, defineCustomElement as d };

//# sourceMappingURL=atomic-html2.js.map