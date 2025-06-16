import { proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { m as markParentAsReady, i as isParentReady } from './init-queue.js';
import { b as buildCustomEvent } from './event-utils.js';
import { i as initializeEventName } from './initialization-lit-stencil-common-utils.js';

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AtomicExternal_instances, _AtomicExternal_interface_get;
const AtomicExternal$1 = /*@__PURE__*/ proxyCustomElement(class AtomicExternal extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        _AtomicExternal_instances.add(this);
        /**
         * The CSS selector that identifies the `atomic-search-interface` component with which to initialize the external components.
         */
        this.selector = 'atomic-search-interface';
        this.selector = 'atomic-search-interface';
        this.boundInterface = undefined;
    }
    handleInitialization(event) {
        event.preventDefault();
        event.stopPropagation();
        __classPrivateFieldGet(this, _AtomicExternal_instances, "a", _AtomicExternal_interface_get).dispatchEvent(buildCustomEvent(initializeEventName, event.detail));
    }
    handleScrollToTop(event) {
        event.preventDefault();
        event.stopPropagation();
        __classPrivateFieldGet(this, _AtomicExternal_instances, "a", _AtomicExternal_interface_get).dispatchEvent(buildCustomEvent('atomic/scrollToTop', event.detail));
    }
    handleParentReady(event) {
        if (event.target === this.boundInterface) {
            markParentAsReady(this.host);
        }
    }
    connectedCallback() {
        if (isParentReady(__classPrivateFieldGet(this, _AtomicExternal_instances, "a", _AtomicExternal_interface_get))) {
            markParentAsReady(this.host);
        }
    }
    get host() { return this; }
}, [0, "atomic-external", {
        "selector": [513],
        "boundInterface": [1040]
    }, [[0, "atomic/initializeComponent", "handleInitialization"], [0, "atomic/scrollToTop", "handleScrollToTop"], [8, "atomic/parentReady", "handleParentReady"]]]);
_AtomicExternal_instances = new WeakSet(), _AtomicExternal_interface_get = function _AtomicExternal_interface_get() {
    if (!this.boundInterface) {
        this.boundInterface = document.querySelector(this.selector) ?? undefined;
        if (!this.boundInterface) {
            throw new Error(`Cannot find interface element with selector "${this.selector}"`);
        }
    }
    return this.boundInterface;
};
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-external"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-external":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicExternal$1);
            }
            break;
    } });
}

const AtomicExternal = AtomicExternal$1;
const defineCustomElement = defineCustomElement$1;

export { AtomicExternal, defineCustomElement };

//# sourceMappingURL=atomic-external.js.map