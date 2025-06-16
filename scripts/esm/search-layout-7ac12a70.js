import { b as buildSearchLayoutCommon } from './search-layout-348e9883.js';

const layoutWebComponentTagName = 'atomic-search-layout';
const containerWebComponentTagName = 'atomic-search-interface';
const noResultsSelector = `${containerWebComponentTagName}-no-results`;
const errorSelector = `${containerWebComponentTagName}-error`;
const firstSearchExecutedSelector = `${containerWebComponentTagName}-search-executed`;
function makeDesktopQuery(mobileBreakpoint) {
    return `only screen and (min-width: ${mobileBreakpoint})`;
}
function buildSearchLayout(element, mobileBreakpoint) {
    return buildSearchLayoutCommon(element, mobileBreakpoint, layoutWebComponentTagName, containerWebComponentTagName, noResultsSelector, errorSelector, 'atomic-refine-toggle', 'atomic-sort-dropdown');
}

export { buildSearchLayout as b, errorSelector as e, firstSearchExecutedSelector as f, makeDesktopQuery as m, noResultsSelector as n };

//# sourceMappingURL=search-layout-7ac12a70.js.map