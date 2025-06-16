import { html, nothing, render } from 'lit';
import { encodeForDomAttribute } from '../../../utils/string-utils.js';
export const getPartialSearchBoxSuggestionElement = (suggestion, i18n) => {
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
export const renderQuerySuggestion = ({ icon, hasQuery, suggestion, hasMultipleKindOfSuggestions, }) => {
    const template = html `
    <div part="query-suggestion-content" class="flex items-center">
      ${hasMultipleKindOfSuggestions
        ? html `<atomic-icon
            part="query-suggestion-icon"
            icon=${icon}
            class="mr-2 h-4 w-4 shrink-0"
          ></atomic-icon>`
        : nothing}
      ${hasQuery
        ? html `<span
            part="query-suggestion-text"
            class="line-clamp-2 break-all"
            .innerHTML=${suggestion.highlightedValue}
          ></span>`
        : html `<span part="query-suggestion-text" class="line-clamp-2 break-all"
            >${suggestion.rawValue}</span
          >`}
    </div>
  `;
    const container = document.createElement('div');
    render(template, container);
    return container.firstElementChild;
};
