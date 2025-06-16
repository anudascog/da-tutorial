import { h } from '@stencil/core/internal/client';
import { e as encodeForDomAttribute } from './string-utils.js';

const getPartialSearchBoxSuggestionElement = (suggestion, i18n) => {
    return {
        part: 'query-suggestion-item',
        key: `qs-${encodeForDomAttribute(suggestion.rawValue)}`,
        query: suggestion.rawValue,
        ariaLabel: i18n.t('query-suggestion-label', {
            query: suggestion.rawValue,
            interpolation: { escapeValue: false },
        }),
    };
};
const QuerySuggestionContainer = (_, children) => {
    return (h("div", { part: "query-suggestion-content", class: "flex items-center" }, children));
};
const QuerySuggestionIcon = ({ icon, hasSuggestion }) => {
    if (!hasSuggestion) {
        return;
    }
    return (h("atomic-icon", { part: "query-suggestion-icon", icon: icon, class: "mr-2 h-4 w-4 shrink-0" }));
};
const QuerySuggestionText = ({ suggestion, hasQuery }) => {
    if (hasQuery) {
        return (h("span", { part: "query-suggestion-text", class: "line-clamp-2 break-all", innerHTML: suggestion.highlightedValue }));
    }
    return (h("span", { part: "query-suggestion-text", class: "line-clamp-2 break-all" }, suggestion.rawValue));
};

export { QuerySuggestionContainer as Q, QuerySuggestionIcon as a, QuerySuggestionText as b, getPartialSearchBoxSuggestionElement as g };

//# sourceMappingURL=stencil-query-suggestions.js.map