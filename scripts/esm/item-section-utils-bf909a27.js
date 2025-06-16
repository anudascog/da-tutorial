import { g as containsVisualElement } from './utils-0a01e06c.js';

function hideEmptySection(element) {
    element.style.display = containsVisualElement(element) ? '' : 'none';
}

export { hideEmptySection as h };

//# sourceMappingURL=item-section-utils-bf909a27.js.map