import { h, F as Fragment } from './index-3f35faca.js';

const ItemListGuard = ({ hasError, hasItems, firstRequestExecuted, hasTemplate, templateHasError }, children) => {
    if (hasError || (firstRequestExecuted && !hasItems) || !hasTemplate) {
        return;
    }
    return (h(Fragment, null,
        templateHasError && h("slot", null),
        ...children));
};

export { ItemListGuard as I };

//# sourceMappingURL=item-list-guard-22b0711a.js.map