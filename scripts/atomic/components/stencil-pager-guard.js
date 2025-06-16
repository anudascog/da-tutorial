import { h, Fragment } from '@stencil/core/internal/client';
import { H as Hidden } from './initialization-utils.js';

/**
 * @deprecated use the lit equivalent
 */
const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasItems) {
        return h(Hidden, null);
    }
    return h(Fragment, null, ...children);
};

export { PagerGuard as P };

//# sourceMappingURL=stencil-pager-guard.js.map