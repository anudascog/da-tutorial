import { h, Fragment } from '@stencil/core/internal/client';
import { B as Button } from './stencil-button.js';

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

export { RefineToggleGuard as R, RefineToggleButton as a };

//# sourceMappingURL=guard.js.map