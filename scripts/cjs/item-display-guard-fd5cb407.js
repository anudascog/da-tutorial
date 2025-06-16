'use strict';

const index = require('./index-757bc886.js');

const ItemDisplayGuard = (props, children) => {
    if (!props.hasItems || !props.firstRequestExecuted) {
        return;
    }
    return index.h(index.Fragment, null, ...children);
};

exports.ItemDisplayGuard = ItemDisplayGuard;

//# sourceMappingURL=item-display-guard-fd5cb407.js.map