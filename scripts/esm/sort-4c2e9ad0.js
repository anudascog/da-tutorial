import { h, F as Fragment } from './index-3f35faca.js';
import { B as Button } from './stencil-button-45a5cdb4.js';

const RefineModalBody = (_, children) => {
    return (h("aside", { part: "content", slot: "body", class: "adjust-for-scroll-bar flex w-full flex-col" }, children));
};

const RefineModalFiltersSection = ({ i18n, withAutomaticFacets, withFacets }, children) => {
    return (h(Fragment, null,
        h("div", { part: "filter-section", class: "mt-8 mb-3 flex w-full justify-between" },
            h("h1", { part: "section-title section-filters-title", class: "truncate text-2xl font-bold" }, i18n.t('filters')),
            children),
        withFacets && h("slot", { name: "facets" }),
        withAutomaticFacets && h("slot", { name: "automatic-facets" })));
};
const RefineModalFiltersClearButton = ({ i18n, onClick }) => {
    return (h(Button, { onClick: onClick, style: "text-primary", text: i18n.t('clear'), class: "px-2 py-1", part: "filter-clear-all" }));
};

const SortIcon = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 6L7.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 14L7.5 18L4 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.5 18L16.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13 10L16.5 6L20 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const RefineModalSortSection = ({ i18n, onSelect }, children) => {
    return (h(Fragment, null,
        h("h1", { part: "section-title section-sort-title", class: "mb-3 truncate text-2xl font-bold" }, i18n.t('sort')),
        h("div", { part: "select-wrapper", class: "relative" },
            h("select", { class: "btn-outline-neutral w-full grow cursor-pointer appearance-none rounded-lg px-6 py-5 text-lg font-bold", part: "select", "aria-label": i18n.t('sort-by'), onChange: onSelect }, children),
            h("div", { part: "select-icon-wrapper", class: "pointer-events-none absolute top-0 right-0 bottom-0 flex items-center justify-center pr-6" },
                h("atomic-icon", { part: "select-icon", icon: SortIcon, class: "h-6 w-6" })))));
};

export { RefineModalSortSection as R, RefineModalFiltersClearButton as a, RefineModalFiltersSection as b, RefineModalBody as c };

//# sourceMappingURL=sort-4c2e9ad0.js.map