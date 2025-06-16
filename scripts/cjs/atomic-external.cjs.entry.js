'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const initQueue = require('./init-queue-a18aa323.js');
const eventUtils = require('./event-utils-9bfcf3c5.js');
const initializationLitStencilCommonUtils = require('./initialization-lit-stencil-common-utils-24279cfa.js');

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
        index.registerInstance(this, hostRef);
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
        __classPrivateFieldGet(this, _AtomicExternal_instances, "a", _AtomicExternal_interface_get).dispatchEvent(eventUtils.buildCustomEvent(initializationLitStencilCommonUtils.initializeEventName, event.detail));
    }
    handleScrollToTop(event) {
        event.preventDefault();
        event.stopPropagation();
        __classPrivateFieldGet(this, _AtomicExternal_instances, "a", _AtomicExternal_interface_get).dispatchEvent(eventUtils.buildCustomEvent('atomic/scrollToTop', event.detail));
    }
    handleParentReady(event) {
        if (event.target === this.boundInterface) {
            initQueue.markParentAsReady(this.host);
        }
    }
    connectedCallback() {
        if (initQueue.isParentReady(__classPrivateFieldGet(this, _AtomicExternal_instances, "a", _AtomicExternal_interface_get))) {
            initQueue.markParentAsReady(this.host);
        }
    }
    get host() { return index.getElement(this); }
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

exports.atomic_external = AtomicExternal;

//# sourceMappingURL=atomic-external.cjs.entry.js.map