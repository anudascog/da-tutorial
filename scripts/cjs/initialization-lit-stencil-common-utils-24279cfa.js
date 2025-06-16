'use strict';

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

exports.MissingInterfaceParentError = MissingInterfaceParentError;
exports.initializableElements = initializableElements;
exports.initializeEventName = initializeEventName;

//# sourceMappingURL=initialization-lit-stencil-common-utils-24279cfa.js.map