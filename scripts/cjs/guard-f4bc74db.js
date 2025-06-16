'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const RefineToggleButton = ({ i18n, onClick, setRef }) => {
    return (index.h(stencilButton.Button, { style: "outline-primary", class: "w-full p-3", onClick: onClick, text: i18n.t('sort-and-filter'), ref: setRef, part: "button" }));
};

const RefineToggleGuard = ({ hasError, firstRequestExecuted, hasItems }, children) => {
    if (hasError) {
        return;
    }
    if (!firstRequestExecuted) {
        return (index.h("div", { part: "placeholder", "aria-hidden": true, class: "bg-neutral my-2 h-8 w-28 animate-pulse rounded" }));
    }
    if (!hasItems) {
        return;
    }
    return index.h(index.Fragment, null, children);
};

exports.RefineToggleButton = RefineToggleButton;
exports.RefineToggleGuard = RefineToggleGuard;

//# sourceMappingURL=guard-f4bc74db.js.map