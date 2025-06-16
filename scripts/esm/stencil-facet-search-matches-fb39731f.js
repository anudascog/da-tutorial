import { h } from './index-3f35faca.js';
import { C as CloseIcon } from './close-ff816971.js';
import { S as SearchIcon } from './search-64cc84a9.js';
import { B as Button } from './stencil-button-45a5cdb4.js';
import { e as escapeHtml_1 } from './stencil-facet-value-label-highlight-b4083ffd.js';

const FacetSearchInput = (props) => {
    const label = props.i18n.t(props.label);
    const search = props.i18n.t('facet-search-input');
    const facetSearch = props.i18n.t('facet-search', { label });
    const clear = props.i18n.t('clear');
    let inputRef;
    return (h("div", { class: "mt-3 px-2", part: "search-wrapper" },
        h("div", { class: "relative h-10" },
            h("input", { part: "search-input", class: "input-primary placeholder-neutral-dark group h-full w-full px-9 text-sm", type: "text", placeholder: search, "aria-label": facetSearch, value: props.query, onInput: (e) => props.onChange(e.target.value), ref: (ref) => (inputRef = ref) }),
            h("div", { class: "search-icon text-on-background pointer-events-none absolute left-0 inline-flex h-full w-9 items-center justify-center" },
                h("atomic-icon", { part: "search-icon", icon: SearchIcon })),
            props.query !== '' && (h(Button, { style: "text-transparent", title: clear, class: "search-clear-button absolute top-px right-px bottom-px inline-flex w-9 items-center justify-center", onClick: () => {
                    props.onClear();
                    inputRef.focus();
                } },
                h("atomic-icon", { part: "search-clear-button", icon: CloseIcon }))))));
};

//TODO: change to noMatchesFound & remove the key in https://coveord.atlassian.net/browse/KIT-3368
function matchesFound(key, query, i18n) {
    return i18n.t(key, {
        query: `<span class="font-bold italic text-on-background" part="matches-query">${escapeHtml_1(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
function clickableMoreMatchesFound(query, i18n) {
    return i18n.t('more-matches-for', {
        query: `<span class="font-bold italic" part="matches-query">${escapeHtml_1(query)}</span>`,
        interpolation: { escapeValue: false },
    });
}
const FacetSearchMatches = (props) => {
    if (!props.numberOfMatches) {
        return (h("div", { class: "px-2" },
            h("div", { part: "no-matches", class: "bg-neutral-light text-neutral-dark truncate rounded p-3 text-sm", innerHTML: matchesFound('no-matches-found-for', props.query, props.i18n) })));
    }
    if (props.hasMoreMatches) {
        if (props.showMoreMatches) {
            return (h("div", { class: "px-2" },
                h(Button, { style: "text-primary", class: "mt-3 p-2", onClick: props.showMoreMatches },
                    h("div", { part: "more-matches", class: "truncate text-sm", innerHTML: clickableMoreMatchesFound(props.query, props.i18n) }))));
        }
        return (h("div", { class: "px-2" },
            h("div", { part: "more-matches", class: "text-neutral-dark mt-3 truncate text-sm", innerHTML: matchesFound('more-matches-for', props.query, props.i18n) })));
    }
};

export { FacetSearchInput as F, FacetSearchMatches as a };

//# sourceMappingURL=stencil-facet-search-matches-fb39731f.js.map