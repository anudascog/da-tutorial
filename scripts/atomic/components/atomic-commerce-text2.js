import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
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
const AtomicCommerceText = /*@__PURE__*/ proxyCustomElement(class AtomicCommerceText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
}, [1, "atomic-commerce-text", {
        "value": [513],
        "count": [514],
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicCommerceText.prototype, "bindings", void 0);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-commerce-text"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-commerce-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicCommerceText);
            }
            break;
    } });
}

export { AtomicCommerceText as A, defineCustomElement as d };

//# sourceMappingURL=atomic-commerce-text2.js.map