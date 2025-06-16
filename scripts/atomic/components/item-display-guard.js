import { h, Fragment } from '@stencil/core/internal/client';

const ItemDisplayGuard = (props, children) => {
    if (!props.hasItems || !props.firstRequestExecuted) {
        return;
    }
    return h(Fragment, null, ...children);
};

export { ItemDisplayGuard as I };

//# sourceMappingURL=item-display-guard.js.map