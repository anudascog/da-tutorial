'use strict';

const index = require('./index-757bc886.js');
const arrowBottomRounded = require('./arrow-bottom-rounded-705a1b2c.js');
const arrowTopRounded = require('./arrow-top-rounded-e7a05d2f.js');
const close = require('./close-20739950.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');
const stencilHeading = require('./stencil-heading-2faee1f7.js');

const FacetContainer = (_, children) => (index.h("div", { class: "bg-background border-neutral rounded-lg border p-4", part: "facet" }, children));

const FacetHeader = (props) => {
    const label = props.i18n.t(props.label);
    const expandFacet = props.i18n.t('expand-facet', { label });
    const collapseFacet = props.i18n.t('collapse-facet', { label });
    const clearFilters = props.i18n.t('clear-filters', {
        count: props.numberOfActiveValues,
    });
    const clearFiltersForFacet = props.i18n.t('clear-filters-for-facet', {
        count: props.numberOfActiveValues,
        label,
    });
    return [
        index.h(stencilButton.Button, { style: "text-transparent", part: "label-button", class: "flex w-full justify-between rounded-none px-2 py-1 text-lg font-bold", ariaLabel: props.isCollapsed ? expandFacet : collapseFacet, onClick: () => props.onToggleCollapse(), ariaExpanded: (!props.isCollapsed).toString(), ref: props.headerRef },
            index.h(stencilHeading.Heading, { level: props.headingLevel, class: "truncate" }, label),
            index.h("atomic-icon", { part: "label-button-icon", class: "ml-4 w-3 shrink-0 self-center", icon: props.isCollapsed ? arrowBottomRounded.ArrowBottomIcon : arrowTopRounded.ArrowUp })),
        props.onClearFilters && props.numberOfActiveValues > 0 && (index.h(stencilButton.Button, { style: "text-primary", part: "clear-button", class: "flex max-w-full items-baseline p-2 text-sm", ariaLabel: clearFiltersForFacet, onClick: () => props.onClearFilters() },
            index.h("atomic-icon", { part: "clear-button-icon", class: "mr-1 h-2 w-2", icon: close.CloseIcon }),
            index.h("span", null, clearFilters))),
    ];
};

const FacetPlaceholder = ({ numberOfValues, isCollapsed, }) => {
    const facetValues = [];
    for (let i = 0; i < numberOfValues; i++) {
        facetValues.push(index.h("div", { class: "bg-neutral mt-4 flex h-5", style: { width: '100%', opacity: '0.5' } }));
    }
    return (index.h("div", { part: "placeholder", class: "bg-background border-neutral mb-4 animate-pulse rounded-lg border p-7", "aria-hidden": "true" },
        index.h("div", { class: "bg-neutral h-8 rounded", style: { width: '75%' } }),
        !isCollapsed && index.h("div", { class: "mt-7" }, facetValues)));
};

exports.FacetContainer = FacetContainer;
exports.FacetHeader = FacetHeader;
exports.FacetPlaceholder = FacetPlaceholder;

//# sourceMappingURL=facet-placeholder-ad0407f0.js.map