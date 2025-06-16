import { r as registerInstance, g as getElement } from './index-3f35faca.js';
import { m as markParentAsReady, i as isParentReady } from './init-queue-fbe942c3.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';
import { i as initializeEventName } from './initialization-lit-stencil-common-utils-9e0c895f.js';

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AtomicExternal_instances, _AtomicExternal_interface_get;
const AtomicExternal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
};
_AtomicExternal_instances = new WeakSet(), _AtomicExternal_interface_get = function _AtomicExternal_interface_get() {
    if (!this.boundInterface) {
        this.boundInterface = document.querySelector(this.selector) ?? undefined;
        if (!this.boundInterface) {
            throw new Error(`Cannot find interface element with selector "${this.selector}"`);
        }
    }
    return this.boundInterface;
};

export { AtomicExternal as atomic_external };

//# sourceMappingURL=atomic-external.entry.js.map