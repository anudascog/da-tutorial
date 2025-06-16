import { h } from './index-3f35faca.js';

const DisplayWrapper = ({ display, listClasses }, children) => {
    if (display === 'table') {
        return h(ListWrapper, { listClasses: listClasses }, ...children);
    }
    return (h(ListWrapper, { listClasses: listClasses },
        h("div", { class: `list-root ${listClasses}`, part: "result-list" }, children)));
};
const ListWrapper = ({ listClasses }, children) => {
    return h("div", { class: `list-wrapper ${listClasses}` }, ...children);
};

export { DisplayWrapper as D };

//# sourceMappingURL=stencil-display-wrapper-23dd1a7e.js.map