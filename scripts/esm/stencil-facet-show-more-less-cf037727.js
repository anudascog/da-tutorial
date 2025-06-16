import { s as shouldUpdateFacetSearchComponent } from './stencil-facet-value-label-highlight-b4083ffd.js';
import { h } from './index-3f35faca.js';
import { P as PlusIcon, M as MinusIcon } from './plus-00840ff6.js';
import { B as Button } from './stencil-button-45a5cdb4.js';

function announceFacetSearchResultsWithAriaLive(facet, label, setAriaLive, i18n) {
    let prevState = facet.state.facetSearch;
    facet.subscribe(() => {
        if (shouldUpdateFacetSearchComponent(facet.state.facetSearch, prevState) &&
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
    return (h("div", { class: "mt-2" },
        h(Button, { style: "text-primary", part: "show-less", class: `${btnClasses} ${props.canShowLessValues ? '' : 'hidden'}`, ariaLabel: showLessFacetValues, onClick: () => props.onShowLess(), ref: props.showLessRef },
            h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: MinusIcon }),
            h("span", { class: "truncate" }, showLess)),
        h(Button, { style: "text-primary", part: "show-more", class: `${btnClasses} ${props.canShowMoreValues ? '' : 'hidden'}`, ariaLabel: showMoreFacetValues, onClick: () => props.onShowMore(), ref: props.showMoreRef },
            h("atomic-icon", { part: "show-more-less-icon", class: iconClasses, icon: PlusIcon }),
            h("span", { class: "truncate" }, showMore))));
};

export { FacetShowMoreLess as F, announceFacetSearchResultsWithAriaLive as a };

//# sourceMappingURL=stencil-facet-show-more-less-cf037727.js.map