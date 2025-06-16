import { HighlightUtils } from '@coveo/headless';
import { html, render } from 'lit';
import { when } from 'lit/directives/when.js';
import { encodeForDomAttribute } from '../../../utils/string-utils';
export const getPartialRecentQueryElement = (value, i18n) => {
    return {
        part: 'recent-query-item',
        query: value,
        key: `recent-${encodeForDomAttribute(value)}`,
        ariaLabel: i18n.t('recent-query-suggestion-label', {
            query: value,
            interpolation: { escapeValue: false },
        }),
    };
};
export const getPartialRecentQueryClearElement = (i18n) => {
    return {
        key: 'recent-query-clear',
        ariaLabel: i18n.t('clear-recent-searches', {
            interpolation: { escapeValue: false },
        }),
        part: 'recent-query-title-item suggestion-divider',
        hideIfLast: true,
    };
};
export const renderRecentQuery = ({ icon, query, value, }) => {
    const hasQuery = query !== '';
    const template = html `<div
    part="recent-query-content"
    class="flex items-center text-left break-all"
  >
    <atomic-icon
      part="recent-query-icon"
      icon=${icon}
      class="mr-2 h-4 w-4 shrink-0"
    ></atomic-icon>

    ${when(hasQuery, () => html `<span
          part="recent-query-text"
          class="line-clamp-2 break-words"
          .innerHTML=${HighlightUtils.highlightString({
        content: value,
        openingDelimiter: '<span part="recent-query-text-highlight" class="font-bold">',
        closingDelimiter: '</span>',
        highlights: [
            {
                offset: query.length,
                length: value.length - query.length,
            },
        ],
    })}
        ></span>`, () => html `<span part="recent-query-text" class="line-clamp-2 break-all">
          ${value}
        </span>`)}
  </div>`;
    const container = document.createElement('div');
    render(template, container);
    return container.firstElementChild;
};
export const renderRecentQueryClear = ({ i18n }) => {
    const template = html ` <div
    part="recent-query-title-content"
    class="flex w-full justify-between"
  >
    <span class="font-bold" part="recent-query-title">
      ${i18n.t('recent-searches')}
    </span>
    <span part="recent-query-clear">${i18n.t('clear')}</span>
  </div>`;
    const container = document.createElement('div');
    render(template, container);
    return container.firstElementChild;
};
