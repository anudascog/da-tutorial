import { h, Fragment } from '@stencil/core/internal/client';

const ItemListGuard = ({ hasError, hasItems, firstRequestExecuted, hasTemplate, templateHasError }, children) => {
    if (hasError || (firstRequestExecuted && !hasItems) || !hasTemplate) {
        return;
    }
    return (h(Fragment, null,
        templateHasError && h("slot", null),
        ...children));
};

export { ItemListGuard as I };

//# sourceMappingURL=item-list-guard.js.map