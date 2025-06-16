import { buildCustomEvent } from './event-utils';
import { defer } from './utils';
export class AriaLiveRegionController {
    constructor(host, regionName, assertive = false) {
        this.host = host;
        this.regionName = regionName;
        this.assertive = assertive;
        this.host.addController(this);
    }
    getAriaLiveElement() {
        const event = buildCustomEvent('atomic/accessibility/findAriaLive', {});
        document.dispatchEvent(event);
        const { element } = event.detail;
        return element;
    }
    dispatchMessage(message) {
        this.getAriaLiveElement()?.updateMessage(this.regionName, message, this.assertive);
    }
    set message(msg) {
        this.dispatchMessage(msg);
    }
    hostUpdate() {
        this.getAriaLiveElement()?.registerRegion(this.regionName, this.assertive);
    }
}
export class FocusTargetController {
    constructor(host, bindings) {
        this.host = host;
        this.doFocusAfterSearch = false;
        this.doFocusOnNextTarget = false;
        this.host = host;
        this.bindings = bindings;
        this.host.addController(this);
    }
    setTarget(el) {
        if (!el) {
            return;
        }
        this.element = el;
        if (this.doFocusOnNextTarget) {
            this.doFocusOnNextTarget = false;
            this.focus();
        }
    }
    async focus() {
        // Not sure why this is needed; should be investigated after Lit Migration (KIT-4235)
        await defer();
        this.element?.focus();
        this.onFocusCallback?.();
    }
    focusAfterSearch() {
        this.lastSearchId = this.bindings.store.getUniqueIDFromEngine(this.bindings.engine);
        this.doFocusAfterSearch = true;
        return new Promise((resolve) => (this.onFocusCallback = resolve));
    }
    focusOnNextTarget() {
        this.doFocusOnNextTarget = true;
        return new Promise((resolve) => (this.onFocusCallback = resolve));
    }
    disableForCurrentSearch() {
        if (this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !==
            this.lastSearchId) {
            this.doFocusAfterSearch = false;
        }
    }
    hostUpdated() {
        if (this.doFocusAfterSearch &&
            this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !==
                this.lastSearchId) {
            this.doFocusAfterSearch = false;
            if (this.element) {
                const el = this.element;
                // The focus seems to be flaky without deferring, especially on iOS; should be investigated after Lit Migration (KIT-4235)
                defer().then(() => {
                    el.focus();
                    this.onFocusCallback?.();
                });
            }
        }
    }
}
function isFocusable(element) {
    // Source: https://stackoverflow.com/a/30753870
    if (element.getAttribute('tabindex') === '-1') {
        return false;
    }
    if (element.hasAttribute('tabindex')) {
        return true;
    }
    if (element.getAttribute('contentEditable') === 'true') {
        return true;
    }
    switch (element.tagName) {
        case 'A':
        case 'AREA':
            return element.hasAttribute('href');
        case 'INPUT':
        case 'SELECT':
        case 'TEXTAREA':
        case 'BUTTON':
            return !element.hasAttribute('disabled');
        case 'IFRAME':
            return true;
        default:
            return false;
    }
}
export function* getFocusableDescendants(element) {
    if (isFocusable(element)) {
        yield element;
    }
    let children = Array.from(element.children);
    if (element instanceof HTMLSlotElement) {
        children = element.assignedElements();
    }
    else if (element.shadowRoot) {
        children.push(...Array.from(element.shadowRoot.children));
    }
    for (const child of children) {
        yield* getFocusableDescendants(child);
    }
}
export function getFirstFocusableDescendant(element) {
    return getFocusableDescendants(element).next().value ?? null;
}
