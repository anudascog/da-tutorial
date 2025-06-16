import { q as isElementNode } from './utils.js';

const resultSectionTags = new Set([
    'atomic-result-section-visual',
    'atomic-result-section-badges',
    'atomic-result-section-actions',
    'atomic-result-section-title',
    'atomic-result-section-title-metadata',
    'atomic-result-section-emphasized',
    'atomic-result-section-excerpt',
    'atomic-result-section-bottom-metadata',
    'atomic-result-section-children',
]);
const productSectionTags = new Set([
    'atomic-product-section-visual',
    'atomic-product-section-badges',
    'atomic-product-section-actions',
    'atomic-product-section-name',
    'atomic-product-section-metadata',
    'atomic-product-section-emphasized',
    'atomic-product-section-description',
    'atomic-product-section-bottom-metadata',
    'atomic-product-section-children',
]);
const allTags = new Set([...resultSectionTags, ...productSectionTags]);
function isResultSectionNode(element) {
    if (!isElementNode(element)) {
        return false;
    }
    return allTags.has(element.tagName.toLowerCase());
}
function containsSections(content) {
    if (typeof content === 'string') {
        return Array.from(resultSectionTags.values()).some((resultSectionTag) => content.includes(resultSectionTag));
    }
    return Array.from(content).some((child) => isResultSectionNode(child));
}

export { containsSections as c, isResultSectionNode as i };

//# sourceMappingURL=sections2.js.map