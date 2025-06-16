import { h } from '@stencil/core/internal/client';
import { A as ArrowBottomIcon } from './arrow-bottom-rounded.js';
import { A as ArrowUp } from './arrow-top-rounded.js';
import { C as CloseIcon } from './close.js';
import { B as Button } from './stencil-button.js';
import { H as Heading } from './stencil-heading.js';

const FacetContainer = (_, children) => (h("div", { class: "bg-background border-neutral rounded-lg border p-4", part: "facet" }, children));

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
        h(Button, { style: "text-transparent", part: "label-button", class: "flex w-full justify-between rounded-none px-2 py-1 text-lg font-bold", ariaLabel: props.isCollapsed ? expandFacet : collapseFacet, onClick: () => props.onToggleCollapse(), ariaExpanded: (!props.isCollapsed).toString(), ref: props.headerRef },
            h(Heading, { level: props.headingLevel, class: "truncate" }, label),
            h("atomic-icon", { part: "label-button-icon", class: "ml-4 w-3 shrink-0 self-center", icon: props.isCollapsed ? ArrowBottomIcon : ArrowUp })),
        props.onClearFilters && props.numberOfActiveValues > 0 && (h(Button, { style: "text-primary", part: "clear-button", class: "flex max-w-full items-baseline p-2 text-sm", ariaLabel: clearFiltersForFacet, onClick: () => props.onClearFilters() },
            h("atomic-icon", { part: "clear-button-icon", class: "mr-1 h-2 w-2", icon: CloseIcon }),
            h("span", null, clearFilters))),
    ];
};

export { FacetHeader as F, FacetContainer as a };

//# sourceMappingURL=stencil-facet-header.js.map