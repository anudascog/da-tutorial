'use strict';

const index = require('./index-757bc886.js');
const initializationUtils = require('./initialization-utils-62dc9852.js');

/**
 * @deprecated use the lit equivalent
 */
const PagerGuard = (props, children) => {
    if (props.hasError || !props.isAppLoaded || !props.hasItems) {
        return index.h(initializationUtils.Hidden, null);
    }
    return index.h(index.Fragment, null, ...children);
};

exports.PagerGuard = PagerGuard;

//# sourceMappingURL=stencil-pager-guard-16f46f73.js.map