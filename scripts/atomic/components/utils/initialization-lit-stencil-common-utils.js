import { closest } from './dom-utils';
import { buildCustomEvent } from './event-utils';
import { enqueueOrDispatchInitializationEvent } from './init-queue';
export function fetchBindings(element) {
    return new Promise((resolve, reject) => {
        const event = buildCustomEvent(initializeEventName, (bindings) => resolve(bindings));
        const parent = closest(element, initializableElements.join(', '));
        if (!parent) {
            reject(new MissingInterfaceParentError(element.nodeName.toLowerCase()));
            return;
        }
        enqueueOrDispatchInitializationEvent(parent, event, element);
    });
}
export class MissingInterfaceParentError extends Error {
    constructor(elementName) {
        super(`The "${elementName}" element must be the child of the following elements: ${initializableElements.join(', ')}`);
    }
}
export const initializableElements = [
    'atomic-recs-interface',
    'atomic-search-interface',
    'atomic-commerce-interface',
    'atomic-commerce-recommendation-interface',
    'atomic-relevance-inspector',
    'atomic-insight-interface',
    'atomic-external',
];
export const initializeEventName = 'atomic/initializeComponent';
