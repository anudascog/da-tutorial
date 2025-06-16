'use strict';

function rectEquals(r1, r2) {
    return (r1.x === r2.x &&
        r1.y === r2.y &&
        r1.width === r2.width &&
        r1.height === r2.height);
}
function parentNodeToString(node) {
    return Array.from(node.children)
        .map((child) => child.outerHTML)
        .join('');
}
function closest(element, selector) {
    if (!element) {
        return null;
    }
    if (element.matches(selector)) {
        return element;
    }
    if (element.parentNode instanceof ShadowRoot) {
        return closest(element.parentNode.host, selector);
    }
    return closest(element.parentElement, selector);
}

exports.closest = closest;
exports.parentNodeToString = parentNodeToString;
exports.rectEquals = rectEquals;

//# sourceMappingURL=dom-utils-d4790328.js.map