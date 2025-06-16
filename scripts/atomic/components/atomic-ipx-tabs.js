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
const AtomicIPXTabs = /*@__PURE__*/ proxyCustomElement(class AtomicIPXTabs extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.error = undefined;
    }
    render() {
        return (h("atomic-tab-bar", { key: 'f20e3bc0f39e36bbfc9c8733e126c01421193433' }, h("slot", { key: '06222748e5f16b3661f2112f4602fc69ff7c7597' })));
    }
}, [4, "atomic-ipx-tabs", {
        "error": [32]
    }]);
__decorate([
    InitializeBindings()
], AtomicIPXTabs.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-ipx-tabs", "atomic-tab-bar", "atomic-tab-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-ipx-tabs":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicIPXTabs);
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

const AtomicIpxTabs = AtomicIPXTabs;
const defineCustomElement = defineCustomElement$1;

export { AtomicIpxTabs, defineCustomElement };

//# sourceMappingURL=atomic-ipx-tabs.js.map