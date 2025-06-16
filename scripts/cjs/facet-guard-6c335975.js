'use strict';

const index = require('./index-757bc886.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');

const FacetGuard = ({ hasError, enabled, firstSearchExecuted, hasResults }, children) => {
    if (hasError || !enabled || (firstSearchExecuted && !hasResults)) {
        return index.h(initializationUtils.Hidden, null);
    }
    return index.h(index.Fragment, null, children);
};

exports.FacetGuard = FacetGuard;

//# sourceMappingURL=facet-guard-6c335975.js.map