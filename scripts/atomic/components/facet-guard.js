import { h, Fragment } from '@stencil/core/internal/client';
import { H as Hidden } from './initialization-utils.js';

const FacetGuard = ({ hasError, enabled, firstSearchExecuted, hasResults }, children) => {
    if (hasError || !enabled || (firstSearchExecuted && !hasResults)) {
        return h(Hidden, null);
    }
    return h(Fragment, null, children);
};

export { FacetGuard as F };

//# sourceMappingURL=facet-guard.js.map