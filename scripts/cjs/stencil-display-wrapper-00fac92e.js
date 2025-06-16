'use strict';

const index = require('./index-757bc886.js');

const DisplayWrapper = ({ display, listClasses }, children) => {
    if (display === 'table') {
        return index.h(ListWrapper, { listClasses: listClasses }, ...children);
    }
    return (index.h(ListWrapper, { listClasses: listClasses },
        index.h("div", { class: `list-root ${listClasses}`, part: "result-list" }, children)));
};
const ListWrapper = ({ listClasses }, children) => {
    return index.h("div", { class: `list-wrapper ${listClasses}` }, ...children);
};

exports.DisplayWrapper = DisplayWrapper;

//# sourceMappingURL=stencil-display-wrapper-00fac92e.js.map