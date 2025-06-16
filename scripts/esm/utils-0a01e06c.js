import { D as DOMPurify } from './purify-c7ebd240.js';

/**
 * Returns a function that can be executed only once
 */
function once(fn) {
    let result;
    return function (...args) {
        if (fn) {
            result = fn.apply(this, args);
            fn = () => { };
        }
        return result;
    };
}
function camelToKebab(value) {
    return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}
function kebabToCamel(value) {
    return value.replace(/-./g, (x) => x[1].toUpperCase());
}
function snakeToCamel(value) {
    return value
        .toLowerCase()
        .replace(/([_][a-z])/g, (group) => group.toUpperCase().replace('_', ''));
}
function titleToKebab(value) {
    return value.replace(/\s/g, '-').toLowerCase();
}
function randomID(prepend, length = 5) {
    const randomStr = Math.random()
        .toString(36)
        .substring(2, 2 + length);
    if (!prepend) {
        return randomStr;
    }
    return prepend + randomStr;
}
function parseXML(string) {
    return new window.DOMParser().parseFromString(string, 'text/xml');
}
function isElementNode(node) {
    return node.nodeType === Node.ELEMENT_NODE;
}
function isTextNode(node) {
    return node.nodeType === Node.TEXT_NODE;
}
function isVisualNode(node) {
    if (isElementNode(node)) {
        return !(node instanceof HTMLStyleElement);
    }
    if (isTextNode(node)) {
        return !!node.textContent?.trim();
    }
    return false;
}
function containsVisualElement(node) {
    for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes.item(i);
        if (isVisualNode(child)) {
            return true;
        }
    }
    return false;
}
function elementHasAncestorTag(el, tagName) {
    const parentElement = el.parentElement;
    if (!parentElement) {
        return false;
    }
    if (parentElement.tagName === tagName.toUpperCase()) {
        return true;
    }
    return elementHasAncestorTag(parentElement, tagName);
}
function sanitizeStyle(style) {
    const purifiedOuterHTML = DOMPurify.sanitize(`<style>${style}</style>`, {
        ALLOWED_TAGS: ['style'],
        ALLOWED_ATTR: [],
        FORCE_BODY: true,
    });
    const wrapperEl = document.createElement('div');
    // deepcode ignore ReactSetInnerHtml: sanitized by dompurify
    wrapperEl.innerHTML = purifiedOuterHTML;
    return wrapperEl.querySelector('style')?.innerHTML;
}
function getFocusedElement(rootElement = document) {
    const activeElement = rootElement.activeElement;
    if (activeElement?.shadowRoot) {
        return getFocusedElement(activeElement.shadowRoot) ?? activeElement;
    }
    return activeElement;
}
function isFocusingOut(event) {
    return (document.hasFocus() &&
        (!(event.relatedTarget instanceof Node) ||
            (event.currentTarget instanceof Node &&
                !event.currentTarget.contains(event.relatedTarget))));
}
// https://terodox.tech/how-to-tell-if-an-element-is-in-the-dom-including-the-shadow-dom/
function isInDocument(element) {
    let currentElement = element;
    while (currentElement && currentElement.parentNode) {
        if (currentElement.parentNode === document) {
            return true;
        }
        else if (currentElement.parentNode instanceof ShadowRoot) {
            currentElement = currentElement.parentNode.host;
        }
        else {
            currentElement = currentElement.parentNode;
        }
    }
    return false;
}
function getParent(element) {
    if (element.parentNode) {
        return element.parentNode;
    }
    if (element instanceof ShadowRoot) {
        return element.host;
    }
    return null;
}
function isAncestorOf(ancestor, element) {
    if (element === ancestor) {
        return true;
    }
    if (element instanceof HTMLElement &&
        element.assignedSlot &&
        isAncestorOf(ancestor, element.assignedSlot)) {
        return true;
    }
    const parent = getParent(element);
    return parent === null ? false : isAncestorOf(ancestor, parent);
}
function aggregate(values, getKey) {
    return values.reduce((aggregatedValues, value, i) => {
        const key = getKey(value, i);
        if (!(key in aggregatedValues)) {
            aggregatedValues[key] = [];
        }
        aggregatedValues[key].push(value);
        return aggregatedValues;
    }, {});
}
/**
 * Similar as a classic spread, but preserve all characteristics of properties (e.g. getter/setter).
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#description
 * for an explanation why (spread & assign work similarly).
 * @param objects the objects to "spread" together
 * @returns the spread result
 */
function spreadProperties(...objects) {
    const returnObject = {};
    for (const obj of objects) {
        Object.defineProperties(returnObject, Object.getOwnPropertyDescriptors(obj));
    }
    return returnObject;
}
const sortByDocumentPosition = (a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
async function defer() {
    return new Promise((resolve) => setTimeout(resolve, 10));
}

export { isElementNode as a, isFocusingOut as b, camelToKebab as c, defer as d, aggregate as e, isVisualNode as f, containsVisualElement as g, elementHasAncestorTag as h, isInDocument as i, snakeToCamel as j, kebabToCamel as k, sortByDocumentPosition as l, sanitizeStyle as m, isAncestorOf as n, once as o, parseXML as p, getParent as q, randomID as r, spreadProperties as s, titleToKebab as t, getFocusedElement as u };

//# sourceMappingURL=utils-0a01e06c.js.map