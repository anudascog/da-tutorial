import { h, F as Fragment } from './index-3f35faca.js';
import { B as Button } from './stencil-button-45a5cdb4.js';

const RefineToggleButton = ({ i18n, onClick, setRef }) => {
    return (h(Button, { style: "outline-primary", class: "w-full p-3", onClick: onClick, text: i18n.t('sort-and-filter'), ref: setRef, part: "button" }));
};

const RefineToggleGuard = ({ hasError, firstRequestExecuted, hasItems }, children) => {
    if (hasError) {
        return;
    }
    if (!firstRequestExecuted) {
        return (h("div", { part: "placeholder", "aria-hidden": true, class: "bg-neutral my-2 h-8 w-28 animate-pulse rounded" }));
    }
    if (!hasItems) {
        return;
    }
    return h(Fragment, null, children);
};

export { RefineToggleButton as R, RefineToggleGuard as a };

//# sourceMappingURL=guard-6f52f3ff.js.map