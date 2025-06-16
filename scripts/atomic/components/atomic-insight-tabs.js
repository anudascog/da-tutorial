import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { d as defineCustomElement$3 } from './tab-bar.js';
import { d as defineCustomElement$2 } from './tab-popover.js';

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
const AtomicInsightTabs$1 = /*@__PURE__*/ proxyCustomElement(class AtomicInsightTabs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.error = undefined;
    }
    render() {
        return (h("atomic-tab-bar", { key: 'ffad936de9ef2369cd3642b0971e554060eee181' }, h("slot", { key: '960de9465861f8f9e64dd60351c5eaef9c14e0d6' })));
    }
}, [4, "atomic-insight-tabs", {
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicInsightTabs$1.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-insight-tabs", "atomic-tab-bar", "atomic-tab-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-insight-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicInsightTabs$1);
            }
            break;
        case "atomic-tab-bar":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atomic-tab-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtomicInsightTabs = AtomicInsightTabs$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicInsightTabs, defineCustomElement };

//# sourceMappingURL=atomic-insight-tabs.js.map