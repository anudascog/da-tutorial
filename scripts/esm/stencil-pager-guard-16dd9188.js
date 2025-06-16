import { h, F as Fragment } from './index-3f35faca.js';
import { H as Hidden } from './initialization-utils-ff3edf9a.js';

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

//# sourceMappingURL=stencil-pager-guard-16dd9188.js.map