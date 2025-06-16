import { h, F as Fragment } from './index-3f35faca.js';
import { H as Hidden } from './initialization-utils-ff3edf9a.js';

const FacetGuard = ({ hasError, enabled, firstSearchExecuted, hasResults }, children) => {
    if (hasError || !enabled || (firstSearchExecuted && !hasResults)) {
        return h(Hidden, null);
    }
    return h(Fragment, null, children);
};

export { FacetGuard as F };

//# sourceMappingURL=facet-guard-e7fea41e.js.map