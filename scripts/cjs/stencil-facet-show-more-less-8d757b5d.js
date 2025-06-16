'use strict';

const stencilFacetValueLabelHighlight = require('./stencil-facet-value-label-highlight-c2421e8f.js');
const index = require('./index-757bc886.js');
const plus = require('./plus-07843914.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

function announceFacetSearchResultsWithAriaLive(facet, label, setAriaLive, i18n) {
    let prevState = facet.state.facetSearch;
    facet.subscribe(() => {
        if (stencilFacetValueLabelHighlight.shouldUpdateFacetSearchComponent(facet.state.facetSearch, prevState) &&
            facet.state.facetSearch.query) {
            prevState = facet.state.facetSearch;
            setAriaLive(i18n.t('facet-search-results-count', {
                count: facet.state.facetSearch.values.length,
                label,
            }));
        }
    });
}

const FacetShowMoreLess = (props) => {
    const label = props.i18n.t(props.label);
    const showMore = props.i18n.t('show-more');
    const showMoreFacetValues = props.i18n.t('show-more-facet-values', {
        label,
    });
    const showLess = props.i18n.t('show-less');
    const showLessFacetValues = props.i18n.t('show-less-facet-values', {
        label,
    });
    const btnClasses = 'flex items-baseline text-left p-2 text-sm max-w-full';
    const iconClasses = 'w-2 h-2 mr-1';
    if (!props.canShowLessValues && !props.canShowMoreValues) {
        return;
    }
    return (index.h("div", { class: "mt-2" },
        index.h(stencilButton.Button, { style: "text-primary", part: "show-less", class: `${btnClasses} ${props.canShowLessValues ? '' : 'hidden'}`, ariaLabel: showLessFacetValues, onClick: () => props.onShowLess(), ref: props.showLessRef },
            index.h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: plus.MinusIcon }),
            index.h("span", { class: "truncate" }, showLess)),
        index.h(stencilButton.Button, { style: "text-primary", part: "show-more", class: `${btnClasses} ${props.canShowMoreValues ? '' : 'hidden'}`, ariaLabel: showMoreFacetValues, onClick: () => props.onShowMore(), ref: props.showMoreRef },
            index.h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: plus.PlusIcon }),
            index.h("span", { class: "truncate" }, showMore))));
};

exports.FacetShowMoreLess = FacetShowMoreLess;
exports.announceFacetSearchResultsWithAriaLive = announceFacetSearchResultsWithAriaLive;

//# sourceMappingURL=stencil-facet-show-more-less-8d757b5d.js.map