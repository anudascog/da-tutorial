'use strict';

const searchLayout = require('./search-layout-ced12c1e.js');

const layoutWebComponentTagName = 'atomic-search-layout';
const containerWebComponentTagName = 'atomic-search-interface';
const noResultsSelector = `${containerWebComponentTagName}-no-results`;
const errorSelector = `${containerWebComponentTagName}-error`;
const firstSearchExecutedSelector = `${containerWebComponentTagName}-search-executed`;
function makeDesktopQuery(mobileBreakpoint) {
    return `only screen and (min-width: ${mobileBreakpoint})`;
}
function buildSearchLayout(element, mobileBreakpoint) {
    return searchLayout.buildSearchLayoutCommon(element, mobileBreakpoint, layoutWebComponentTagName, containerWebComponentTagName, noResultsSelector, errorSelector, 'atomic-refine-toggle', 'atomic-sort-dropdown');
}

exports.buildSearchLayout = buildSearchLayout;
exports.errorSelector = errorSelector;
exports.firstSearchExecutedSelector = firstSearchExecutedSelector;
exports.makeDesktopQuery = makeDesktopQuery;
exports.noResultsSelector = noResultsSelector;

//# sourceMappingURL=search-layout-f66ff241.js.map