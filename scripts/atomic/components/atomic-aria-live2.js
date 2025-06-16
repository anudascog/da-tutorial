import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { b as buildDebouncedQueue } from './debounce-utils.js';
import { r as randomID } from './utils.js';

const AtomicAriaLive = /*@__PURE__*/ proxyCustomElement(class AtomicAriaLive extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.regions = {};
        this.messagesQueue = buildDebouncedQueue({ delay: 500 });
        this.regions = {};
    }
    onFindAriaLive({ detail: args }) {
        if (!args.element || !this.isInSearchInterface) {
            args.element = this.host;
        }
    }
    get isInSearchInterface() {
        let element = this.host;
        while (element) {
            if (element.tagName === 'ATOMIC-SEARCH-INTERFACE') {
                return true;
            }
            element = element.parentElement;
        }
        return false;
    }
    connectedCallback() {
        this.id = randomID('atomic-aria-live-');
    }
    /**
     * @internal
     */
    async updateMessage(region, message, assertive) {
        const updateRegion = () => (this.regions = { ...this.regions, [region]: { assertive, message } });
        if (message) {
            this.messagesQueue.enqueue(updateRegion, region);
        }
        else {
            this.messagesQueue.cancelActionIfQueued(region);
            updateRegion();
        }
    }
    /**
     * @internal
     */
    async registerRegion(region, assertive) {
        if (region in this.regions) {
            return;
        }
        this.regions = { ...this.regions, [region]: { assertive, message: '' } };
    }
    disconnectedCallback() {
        this.messagesQueue.clear();
    }
    render() {
        return (h(Host, { key: '7e8db409c9974f4959e0a15fdffa544f06f5a93c', style: {
                position: 'absolute',
                display: 'block',
                height: '0',
                overflow: 'hidden',
                margin: '0',
            } }, Object.entries(this.regions).map(([regionName, { assertive, message }]) => (h("div", { key: regionName, id: `${this.id}-${regionName}`, "aria-live": assertive ? 'assertive' : 'polite', role: "status" }, message)))));
    }
    get host() { return this; }
}, [0, "atomic-aria-live", {
        "regions": [32],
        "updateMessage": [64],
        "registerRegion": [64]
    }, [[4, "atomic/accessibility/findAriaLive", "onFindAriaLive"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-aria-live"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-aria-live":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicAriaLive);
            }
            break;
    } });
}

export { AtomicAriaLive as A, defineCustomElement as d };

//# sourceMappingURL=atomic-aria-live2.js.map