import { u as containsVisualElement } from './utils.js';

function hideEmptySection(element) {
    element.style.display = containsVisualElement(element) ? '' : 'none';
}

export { hideEmptySection as h };

//# sourceMappingURL=item-section-utils.js.map