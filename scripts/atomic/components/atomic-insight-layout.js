import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { I as InitializeBindings } from './initialization-utils.js';
import { r as randomID } from './utils.js';
import { b as buildInsightLayout } from './insight-layout.js';

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
const AtomicInsightLayout$1 = /*@__PURE__*/ proxyCustomElement(class AtomicInsightLayout extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Whether the interface should be shown in widget format.
         */
        this.widget = false;
        this.widget = false;
    }
    updateStyles() {
        if (this.styleTag) {
            this.styleTag.innerHTML = buildInsightLayout(this.host, this.widget);
        }
        else {
            this.makeStyleTag();
        }
    }
    makeStyleTag() {
        this.styleTag = this.bindings.createStyleElement();
        this.styleTag.innerHTML = buildInsightLayout(this.host, this.widget);
        this.host.appendChild(this.styleTag);
    }
    componentDidLoad() {
        const id = this.host.id || randomID('atomic-insight-layout-');
        this.host.id = id;
        this.makeStyleTag();
    }
    get host() { return this; }
    static get watchers() { return {
        "widget": ["updateStyles"]
    }; }
}, [0, "atomic-insight-layout", {
        "widget": [1540]
    }, undefined, {
        "widget": ["updateStyles"]
    }]);
__decorate([
    InitializeBindings()
], AtomicInsightLayout$1.prototype, "bindings", void 0);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-insight-layout"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-insight-layout":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicInsightLayout$1);
            }
            break;
    } });
}

const AtomicInsightLayout = AtomicInsightLayout$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicInsightLayout, defineCustomElement };

//# sourceMappingURL=atomic-insight-layout.js.map