class MissingInterfaceParentError extends Error {
    constructor(elementName) {
        super(`The "${elementName}" element must be the child of the following elements: ${initializableElements.join(', ')}`);
    }
}
const initializableElements = [
    'atomic-recs-interface',
    'atomic-search-interface',
    'atomic-commerce-interface',
    'atomic-commerce-recommendation-interface',
    'atomic-relevance-inspector',
    'atomic-insight-interface',
    'atomic-external',
];
const initializeEventName = 'atomic/initializeComponent';

export { MissingInterfaceParentError as M, initializableElements as a, initializeEventName as i };

//# sourceMappingURL=initialization-lit-stencil-common-utils-9e0c895f.js.map