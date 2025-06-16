import { c as closest } from './dom-utils-f6086cd3.js';
import { g as getElement } from './index-3f35faca.js';
import { b as buildCustomEvent } from './event-utils-8de63ec3.js';

class MissingParentError extends Error {
    constructor(elementName, parentName) {
        super(`The "${elementName}" element must be the child of an "${parentName}" element.`);
    }
}
function ItemContext(opts = {
    parentName: 'atomic-result',
    folded: false,
}) {
    return (component, itemVariable) => {
        const { connectedCallback, componentWillRender, render } = component;
        component.connectedCallback = function () {
            const element = getElement(this);
            const event = buildCustomEvent(itemContextEventName, (item) => {
                this[itemVariable] = extractFolded(item, opts.folded);
            });
            const canceled = element.dispatchEvent(event);
            if (canceled) {
                this.error = new MissingParentError(element.nodeName.toLowerCase(), opts.parentName);
                return;
            }
            return connectedCallback && connectedCallback.call(this);
        };
        component.componentWillRender = function () {
            if (this.error) {
                return;
            }
            return componentWillRender && componentWillRender.call(this);
        };
        component.render = function () {
            if (this.error) {
                const element = getElement(this);
                element.remove();
                console.error('Result component is in error and has been removed from the DOM', this.error, this, element);
                return;
            }
            return render && render.call(this);
        };
    };
}
function InteractiveItemContext() {
    return (component, interactiveItemVariable) => {
        const { connectedCallback } = component;
        component.connectedCallback = function () {
            const element = getElement(this);
            const event = buildCustomEvent(interactiveItemContextEventName, (item) => {
                this[interactiveItemVariable] = item;
            });
            element.dispatchEvent(event);
            return connectedCallback && connectedCallback.call(this);
        };
    };
}
const itemContextEventName = 'atomic/resolveResult';
const interactiveItemContextEventName = 'atomic/resolveInteractiveResult';
function itemContext(element, parentName) {
    return new Promise((resolve, reject) => {
        const event = buildCustomEvent(itemContextEventName, (item) => {
            return resolve(item);
        });
        element.dispatchEvent(event);
        if (!closest(element, parentName)) {
            reject(new MissingParentError(element.nodeName.toLowerCase(), parentName));
        }
    });
}
function extractFolded(item, returnFolded) {
    if (returnFolded) {
        if ('children' in item) {
            return item;
        }
        else {
            return { children: [], result: item };
        }
    }
    if ('children' in item && 'result' in item) {
        return item.result;
    }
    return item;
}
const childTemplatesContextEventName = 'atomic/resolveChildTemplates';
function ChildTemplatesContext() {
    return (component, itemTemplateProviderProp) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = getElement(this);
            const event = buildCustomEvent(childTemplatesContextEventName, (itemTemplateProvider) => {
                const component = this;
                if (component.itemTemplateProvider) {
                    return;
                }
                this[itemTemplateProviderProp] = itemTemplateProvider;
            });
            const canceled = element.dispatchEvent(event);
            if (canceled) {
                this[itemTemplateProviderProp] = null;
                return;
            }
            return componentWillRender && componentWillRender.call(this);
        };
    };
}
const itemDisplayConfigContextEventName = 'atomic/resolveResultDisplayConfig';
function ItemDisplayConfigContext() {
    return (component, itemVariable) => {
        const { componentWillRender } = component;
        component.componentWillRender = function () {
            const element = getElement(this);
            const event = buildCustomEvent(itemDisplayConfigContextEventName, (config) => {
                this[itemVariable] = config;
            });
            const canceled = element.dispatchEvent(event);
            if (canceled) {
                return;
            }
            return componentWillRender && componentWillRender.call(this);
        };
    };
}

export { ChildTemplatesContext as C, ItemContext as I, InteractiveItemContext as a, ItemDisplayConfigContext as b, itemContext as i };

//# sourceMappingURL=item-decorators-c19409ab.js.map