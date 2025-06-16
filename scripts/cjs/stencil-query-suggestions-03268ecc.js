'use strict';

const index = require('./index-757bc886.js');
const stringUtils = require('./string-utils-bdf08f8c.js');

const getPartialSearchBoxSuggestionElement = (suggestion, i18n) => {
    return {
        part: 'query-suggestion-item',
        key: `qs-${stringUtils.encodeForDomAttribute(suggestion.rawValue)}`,
        query: suggestion.rawValue,
        ariaLabel: i18n.t('query-suggestion-label', {
            query: suggestion.rawValue,
            interpolation: { escapeValue: false },
        }),
    };
};
const QuerySuggestionContainer = (_, children) => {
    return (index.h("div", { part: "query-suggestion-content", class: "flex items-center" }, children));
};
const QuerySuggestionIcon = ({ icon, hasSuggestion }) => {
    if (!hasSuggestion) {
        return;
    }
    return (index.h("atomic-icon", { part: "query-suggestion-icon", icon: icon, class: "mr-2 h-4 w-4 shrink-0" }));
};
const QuerySuggestionText = ({ suggestion, hasQuery }) => {
    if (hasQuery) {
        return (index.h("span", { part: "query-suggestion-text", class: "line-clamp-2 break-all", innerHTML: suggestion.highlightedValue }));
    }
    return (index.h("span", { part: "query-suggestion-text", class: "line-clamp-2 break-all" }, suggestion.rawValue));
};

exports.QuerySuggestionContainer = QuerySuggestionContainer;
exports.QuerySuggestionIcon = QuerySuggestionIcon;
exports.QuerySuggestionText = QuerySuggestionText;
exports.getPartialSearchBoxSuggestionElement = getPartialSearchBoxSuggestionElement;

//# sourceMappingURL=stencil-query-suggestions-03268ecc.js.map