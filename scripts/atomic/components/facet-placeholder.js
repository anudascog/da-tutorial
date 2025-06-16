import { h } from '@stencil/core/internal/client';

const FacetPlaceholder = ({ numberOfValues, isCollapsed, }) => {
    const facetValues = [];
    for (let i = 0; i < numberOfValues; i++) {
        facetValues.push(h("div", { class: "bg-neutral mt-4 flex h-5", style: { width: '100%', opacity: '0.5' } }));
    }
    return (h("div", { part: "placeholder", class: "bg-background border-neutral mb-4 animate-pulse rounded-lg border p-7", "aria-hidden": "true" },
        h("div", { class: "bg-neutral h-8 rounded", style: { width: '75%' } }),
        !isCollapsed && h("div", { class: "mt-7" }, facetValues)));
};

export { FacetPlaceholder as F };

//# sourceMappingURL=facet-placeholder.js.map