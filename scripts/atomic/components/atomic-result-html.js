import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { g as getStringValueFromResultOrNull } from './result-utils.js';
import { R as ResultContext } from './result-template-decorators.js';
import { d as defineCustomElement$2 } from './atomic-html2.js';

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
const AtomicResultHtml$1 = /*@__PURE__*/ proxyCustomElement(class AtomicResultHtml extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Specify if the content should be sanitized, using [`DOMPurify`](https://www.npmjs.com/package/dompurify).
         */
        this.sanitize = true;
        this.error = undefined;
        this.field = undefined;
        this.sanitize = true;
    }
    render() {
        const resultValue = getStringValueFromResultOrNull(this.result, this.field);
        if (!resultValue) {
            this.host.remove();
            return;
        }
        return (h("atomic-html", { value: resultValue, sanitize: this.sanitize }));
    }
    get host() { return this; }
}, [0, "atomic-result-html", {
        "field": [513],
        "sanitize": [516],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicResultHtml$1.prototype, "bindings", void 0);
__decorate([
    ResultContext()
], AtomicResultHtml$1.prototype, "result", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-result-html", "atomic-html"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-result-html":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicResultHtml$1);
            }
            break;
        case "atomic-html":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicResultHtml = AtomicResultHtml$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicResultHtml, defineCustomElement };

//# sourceMappingURL=atomic-result-html.js.map