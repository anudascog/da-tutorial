'use strict';

const index = require('./index-757bc886.js');

// The Lit equivalent of this file is grid-layout.ts
const DisplayGrid = ({ setRef, selectorForItem }, children) => {
    let ref;
    return (index.h("div", { part: "result-list-grid-clickable-container outline", ref: (element) => {
            ref = element;
            setRef(element);
        }, onClick: (event) => {
            event.preventDefault();
            ref?.querySelector(selectorForItem)?.click();
        } }, ...children));
};

exports.DisplayGrid = DisplayGrid;

//# sourceMappingURL=stencil-display-grid-93c5802a.js.map