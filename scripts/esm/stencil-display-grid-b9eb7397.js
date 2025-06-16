import { h } from './index-3f35faca.js';

// The Lit equivalent of this file is grid-layout.ts
const DisplayGrid = ({ setRef, selectorForItem }, children) => {
    let ref;
    return (h("div", { part: "result-list-grid-clickable-container outline", ref: (element) => {
            ref = element;
            setRef(element);
        }, onClick: (event) => {
            event.preventDefault();
            ref?.querySelector(selectorForItem)?.click();
        } }, ...children));
};

export { DisplayGrid as D };

//# sourceMappingURL=stencil-display-grid-b9eb7397.js.map