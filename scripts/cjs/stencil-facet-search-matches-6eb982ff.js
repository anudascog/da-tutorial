'use strict';

const index = require('./index-757bc886.js');
const close = require('./close-20739950.js');
const search = require('./search-a4774f02.js');
const stencilButton = require('./stencil-button-ac56f2c3.js');
const stencilFacetValueLabelHighlight = require('./stencil-facet-value-label-highlight-c2421e8f.js');

const FacetSearchInput = (props) => {
    const label = props.i18n.t(props.label);
    const search$1 = props.i18n.t('facet-search-input');
    const facetSearch = props.i18n.t('facet-search', { label });
    const clear = props.i18n.t('clear');
    let inputRef;
    return (index.h("div", { class: "mt-3 px-2", part: "search-wrapper" },
        index.h("div", { class: "relative h-10" },
            index.h("input", { part: "search-input", class: "input-primary placeholder-neutral-dark group h-full w-full px-9 text-sm", type: "text", placeholder: search$1, "aria-label": facetSearch, value: props.query, onInput: (e) => props.onChange(e.target.value), ref: (ref) => (inputRef = ref) }),
            index.h("div", { class: "search-icon text-on-background pointer-events-none absolute left-0 inline-flex h-full w-9 items-center justify-center" },
                index.h("atomic-icon", { part: "search-icon", icon: search.SearchIcon })),
            props.query !== '' && (index.h(stencilButton.Button, { style: "text-transparent", title: clear, class: "search-clear-button absolute top-px right-px bottom-px inline-flex w-9 items-center justify-center", onClick: () => {
                    props.onClear();
                    inputRef.focus();
                } },
                index.h("atomic-icon", { part: "search-clear-button", icon: close.CloseIcon }))))));
};

//TODO: change to noMatchesFound & remove the key in https://coveord.atlassian.net/browse/KIT-3368
function matchesFound(key, query, i18n) {
    return i18n.t(key, {
        query: `<span class="font-bold italic text-on-background" part="matches-query">${stencilFacetValueLabelHighlight.escapeHtml_1(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
function clickableMoreMatchesFound(query, i18n) {
    return i18n.t('more-matches-for', {
        query: `<span class="font-bold italic" part="matches-query">${stencilFacetValueLabelHighlight.escapeHtml_1(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
const FacetSearchMatches = (props) => {
    if (!props.numberOfMatches) {
        return (index.h("div", { class: "px-2" },
            index.h("div", { part: "no-matches", class: "bg-neutral-light text-neutral-dark truncate rounded p-3 text-sm", innerHTML: matchesFound('no-matches-found-for', props.query, props.i18n) })));
    }
    if (props.hasMoreMatches) {
        if (props.showMoreMatches) {
            return (index.h("div", { class: "px-2" },
                index.h(stencilButton.Button, { style: "text-primary", class: "mt-3 p-2", onClick: props.showMoreMatches },
                    index.h("div", { part: "more-matches", class: "truncate text-sm", innerHTML: clickableMoreMatchesFound(props.query, props.i18n) }))));
        }
        return (index.h("div", { class: "px-2" },
            index.h("div", { part: "more-matches", class: "text-neutral-dark mt-3 truncate text-sm", innerHTML: matchesFound('more-matches-for', props.query, props.i18n) })));
    }
};

exports.FacetSearchInput = FacetSearchInput;
exports.FacetSearchMatches = FacetSearchMatches;

//# sourceMappingURL=stencil-facet-search-matches-6eb982ff.js.map