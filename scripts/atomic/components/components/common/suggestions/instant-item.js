import { html, render } from 'lit';
import { encodeForDomAttribute } from '../../../utils/string-utils';
import { getClassNameForButtonStyle } from '../button-style';
export const getPartialInstantItemElement = (i18n, itemTitle, itemUniqueId) => {
    return {
        ariaLabel: i18n.t('instant-results-suggestion-label', {
            title: itemTitle,
            interpolation: { escapeValue: false },
        }),
        key: `instant-result-${encodeForDomAttribute(itemUniqueId)}`,
        part: 'instant-results-item',
    };
};
export const getPartialInstantItemShowAllElement = (i18n) => {
    return {
        key: 'instant-results-show-all-button',
        part: 'instant-results-show-all',
        ariaLabel: i18n.t('show-all-results'),
    };
};
export const renderInstantItemShowAllButton = ({ i18n, }) => {
    const template = html `<div
    part="instant-results-show-all-button"
    class=${getClassNameForButtonStyle('text-primary')}
  >
    ${i18n.t('show-all-results')}
  </div>`;
    const container = document.createElement('div');
    render(template, container);
    return container.firstElementChild;
};
