'use strict';

const index = require('./index-757bc886.js');

const ItemListGuard = ({ hasError, hasItems, firstRequestExecuted, hasTemplate, templateHasError }, children) => {
    if (hasError || (firstRequestExecuted && !hasItems) || !hasTemplate) {
        return;
    }
    return (index.h(index.Fragment, null,
        templateHasError && index.h("slot", null),
        ...children));
};

exports.ItemListGuard = ItemListGuard;

//# sourceMappingURL=item-list-guard-506b695a.js.map