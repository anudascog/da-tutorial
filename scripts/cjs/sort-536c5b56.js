'use strict';

const index = require('./index-757bc886.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');

const RefineModalBody = (_, children) => {
    return (index.h("aside", { part: "content", slot: "body", class: "adjust-for-scroll-bar flex w-full flex-col" }, children));
};

const RefineModalFiltersSection = ({ i18n, withAutomaticFacets, withFacets }, children) => {
    return (index.h(index.Fragment, null,
        index.h("div", { part: "filter-section", class: "mt-8 mb-3 flex w-full justify-between" },
            index.h("h1", { part: "section-title section-filters-title", class: "truncate text-2xl font-bold" }, i18n.t('filters')),
            children),
        withFacets && index.h("slot", { name: "facets" }),
        withAutomaticFacets && index.h("slot", { name: "automatic-facets" })));
};
const RefineModalFiltersClearButton = ({ i18n, onClick }) => {
    return (index.h(stencilButton.Button, { onClick: onClick, style: "text-primary", text: i18n.t('clear'), class: "px-2 py-1", part: "filter-clear-all" }));
};

const SortIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 6L7.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 14L7.5 18L4 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.5 18L16.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 10L16.5 6L20 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const RefineModalSortSection = ({ i18n, onSelect }, children) => {
    return (index.h(index.Fragment, null,
        index.h("h1", { part: "section-title section-sort-title", class: "mb-3 truncate text-2xl font-bold" }, i18n.t('sort')),
        index.h("div", { part: "select-wrapper", class: "relative" },
            index.h("select", { class: "btn-outline-neutral w-full grow cursor-pointer appearance-none rounded-lg px-6 py-5 text-lg font-bold", part: "select", "aria-label": i18n.t('sort-by'), onChange: onSelect }, children),
            index.h("div", { part: "select-icon-wrapper", class: "pointer-events-none absolute top-0 right-0 bottom-0 flex items-center justify-center pr-6" },
                index.h("atomic-icon", { part: "select-icon", icon: SortIcon, class: "h-6 w-6" })))));
};

exports.RefineModalBody = RefineModalBody;
exports.RefineModalFiltersClearButton = RefineModalFiltersClearButton;
exports.RefineModalFiltersSection = RefineModalFiltersSection;
exports.RefineModalSortSection = RefineModalSortSection;

//# sourceMappingURL=sort-536c5b56.js.map