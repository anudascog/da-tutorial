import { h, F as Fragment } from './index-3f35faca.js';

const ItemDisplayGuard = (props, children) => {
    if (!props.hasItems || !props.firstRequestExecuted) {
        return;
    }
    return h(Fragment, null, ...children);
};

export { ItemDisplayGuard as I };

//# sourceMappingURL=item-display-guard-ee66eb7c.js.map