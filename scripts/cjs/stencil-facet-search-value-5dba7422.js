'use strict';

const index = require('./index-757bc886.js');
const stencilFacetValue = require('./stencil-facet-value-5f8a0792.js');

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
    return index.h(index.Fragment, null, children);
};

const FacetSearchValue = (props) => {
    return index.h(stencilFacetValue.FacetValue, { ...props, facetState: "idle" });
};

exports.FacetSearchInputGuard = FacetSearchInputGuard;
exports.FacetSearchValue = FacetSearchValue;

//# sourceMappingURL=stencil-facet-search-value-5dba7422.js.map