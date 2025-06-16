import { closest } from '../../../utils/dom-utils';
import { buildCustomEvent } from '../../../utils/event-utils';
const searchBoxElements = [
    'atomic-search-box',
    'atomic-insight-search-box',
    'atomic-commerce-search-box',
];
const isLitElementLoosely = (candidate) => 'updateComplete' in candidate &&
    candidate['updateComplete'] instanceof Promise;
const dispatchSearchBoxSuggestionsEventEventually = async (interfaceElement, element, event) => {
    if (isLitElementLoosely(interfaceElement)) {
        await interfaceElement.updateComplete;
    }
    else if ('componentOnReady' in interfaceElement) {
        await interfaceElement.componentOnReady();
    }
    element.dispatchEvent(buildCustomEvent('atomic/searchBoxSuggestion/register', event));
};
/**
 * Dispatches an event which retrieves the `SearchBoxSuggestionsBindings` on a configured parent search box.
 * @param event Event sent from the registered query suggestions to the parent search box.
 * @param element Element on which to dispatch the event, which must be the child of a configured search box.
 */
export const dispatchSearchBoxSuggestionsEvent = (event, element, allowedSearchBoxElements = searchBoxElements) => {
    const interfaceElement = closest(element, searchBoxElements.join(', '));
    if (!interfaceElement) {
        throw new Error(`The "${element.nodeName.toLowerCase()}" component was not handled, as it is not a child of the following elements: ${allowedSearchBoxElements.join(', ')}`);
    }
    dispatchSearchBoxSuggestionsEventEventually(interfaceElement, element, event);
};
export function elementHasNoQuery(el) {
    return !el.query;
}
export function elementHasQuery(el) {
    return !!el.query;
}
