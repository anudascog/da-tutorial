import { b as buildCustomEvent } from './event-utils-8de63ec3.js';
import { d as defer } from './utils-0a01e06c.js';

const findAriaLiveEventName = 'atomic/accessibility/findAriaLive';
/**
 * @deprecated use Lit equivalent
 */
function AriaLiveRegion(regionName, assertive = false) {
    function getAriaLiveElement() {
        const event = buildCustomEvent(findAriaLiveEventName, {});
        document.dispatchEvent(event);
        const { element } = event.detail;
        return element;
    }
    function dispatchMessage(message) {
        getAriaLiveElement()?.updateMessage(regionName, message, assertive);
    }
    function registerRegion() {
        getAriaLiveElement()?.registerRegion(regionName, assertive);
    }
    return (component, setterName) => {
        const { componentWillRender } = component;
        Object.defineProperty(component, setterName, {
            set: (message) => dispatchMessage(message),
        });
        component.componentWillRender = function () {
            componentWillRender && componentWillRender.call(this);
            registerRegion();
        };
    };
}
/**
 * @deprecated use Lit equivalent
 */
class FocusTargetController {
    constructor(component) {
        this.component = component;
        this.doFocusAfterSearch = false;
        this.doFocusOnNextTarget = false;
        this.bindings = component.bindings;
        this.handleComponentRenderLoop();
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
    handleComponentRenderLoop() {
        const originalComponentDidRender = this.component.componentDidRender;
        this.component.componentDidRender = () => {
            originalComponentDidRender &&
                originalComponentDidRender.call(this.component);
            if (!this.bindings) {
                return;
            }
            if (this.doFocusAfterSearch &&
                this.bindings.store.getUniqueIDFromEngine(this.bindings.engine) !==
                    this.lastSearchId) {
                this.doFocusAfterSearch = false;
                if (this.element) {
                    const el = this.element;
                    // The focus seems to be flaky without deferring, especially on iOS.
                    defer().then(() => {
                        el.focus();
                        this.onFocusCallback?.();
                    });
                }
            }
        };
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
/**
 * @deprecated use Lit equivalent
 */
function* getFocusableDescendants(element) {
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
/**
 * @deprecated use Lit equivalent
 */
function getFirstFocusableDescendant(element) {
    return getFocusableDescendants(element).next().value ?? null;
}

export { AriaLiveRegion as A, FocusTargetController as F, getFirstFocusableDescendant as g };

//# sourceMappingURL=stencil-accessibility-utils-08c682fb.js.map