import { r as registerInstance, h, H as Host, g as getElement } from './index-3f35faca.js';
import { b as buildDebouncedQueue } from './debounce-utils-efa015c0.js';
import { r as randomID } from './utils-0a01e06c.js';
import './purify-c7ebd240.js';
import './_commonjsHelpers-1789f0cf.js';

const AtomicAriaLive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get host() { return getElement(this); }
};

export { AtomicAriaLive as atomic_aria_live };

//# sourceMappingURL=atomic-aria-live.entry.js.map