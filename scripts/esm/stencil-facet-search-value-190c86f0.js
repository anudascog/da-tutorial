import { h, F as Fragment } from './index-3f35faca.js';
import { F as FacetValue } from './stencil-facet-value-b1eff024.js';

const MIN_VALUES_WHERE_FACET_SEARCH_IMPROVES_UX = 9;
const FacetSearchInputGuard = ({ withSearch, canShowMoreValues, numberOfDisplayedValues }, children) => {
    if (!withSearch) {
        return;
    }
    // Hide the input if there are no more values to load from the index and there are less than 8 values to display.
    // 8 is an arbitrary number, discussed with UX as a good compromise: A list long enough where it's worth searching.
    if (!canShowMoreValues &&
        numberOfDisplayedValues < MIN_VALUES_WHERE_FACET_SEARCH_IMPROVES_UX) {
        return;
    }
    return h(Fragment, null, children);
};

const FacetSearchValue = (props) => {
    return h(FacetValue, { ...props, facetState: "idle" });
};

export { FacetSearchInputGuard as F, FacetSearchValue as a };

//# sourceMappingURL=stencil-facet-search-value-190c86f0.js.map