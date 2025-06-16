import { ProductTemplatesHelpers } from '@coveo/headless/commerce';
import './purify.js';
import { m as aggregate, n as isVisualNode, q as isElementNode } from './utils.js';
import { h } from '@stencil/core/internal/client';
import { t as tableElementTagName } from './table-element-utils.js';
import { i as isResultSectionNode } from './sections2.js';

// TODO: Replace by Set.prototype.intersection in July 2025
function intersection(setA, setB) {
    const result = new Set();
    for (const elem of setA) {
        if (setB.has(elem)) {
            result.add(elem);
        }
    }
    return result;
}

function makeMatchConditions(mustMatch, mustNotMatch) {
    const conditions = [];
    for (const field in mustMatch) {
        if (mustNotMatch[field]) {
            const mustNotMatchValues = new Set(mustNotMatch[field]);
            const mustMatchValues = new Set(mustMatch[field]);
            const commonValues = intersection(mustNotMatchValues, mustMatchValues);
            if (commonValues.size > 0) {
                console.error(`Conflicting match conditions for field ${field}, the template will be ignored.`, commonValues);
                return [() => false];
            }
        }
        conditions.push(ProductTemplatesHelpers.fieldMustMatch(field, mustMatch[field]));
    }
    for (const field in mustNotMatch) {
        conditions.push(ProductTemplatesHelpers.fieldMustNotMatch(field, mustNotMatch[field]));
    }
    return conditions;
}

function getTemplateNodeType(node) {
    if (isResultSectionNode(node)) {
        return 'section';
    }
    if (!isVisualNode(node)) {
        return 'metadata';
    }
    if (isElementNode(node) &&
        node.tagName.toLowerCase() === tableElementTagName) {
        return 'table-column-definition';
    }
    return 'other';
}
function groupNodesByType(nodes) {
    return aggregate(Array.from(nodes), (node) => getTemplateNodeType(node));
}
/**
 * @deprecated Use `ProductTemplateController` Reactive controller instead.
 */
class ProductTemplateCommon {
    constructor({ host, setError, validParents, allowEmpty = false, }) {
        this.matchConditions = [];
        this.host = host;
        this.validateTemplate(host, setError, validParents, allowEmpty);
    }
    validateTemplate(host, setError, validParents, allowEmpty = true) {
        const hasValidParent = validParents
            .map((p) => p.toUpperCase())
            .includes(host.parentElement?.nodeName || '');
        const tagName = host.nodeName.toLowerCase();
        if (!hasValidParent) {
            setError(new Error(`The "${tagName}" component has to be the child of one of the following: ${validParents
                .map((p) => `"${p.toLowerCase()}"`)
                .join(', ')}.`));
            return;
        }
        if (host.parentElement?.attributes.getNamedItem('display')?.value === 'grid') {
            this.gridCellLinkTarget = host.parentElement?.attributes.getNamedItem('grid-cell-link-target')?.value;
        }
        const template = host.querySelector('template');
        if (!template) {
            setError(new Error(`The "${tagName}" component must contain a "template" element as a child.`));
            return;
        }
        if (!allowEmpty && !template.innerHTML.trim()) {
            setError(new Error(`The "template" tag inside "${tagName}" cannot be empty.`));
            return;
        }
        if (template.content.querySelector('script')) {
            console.warn('Any "script" tags defined inside of "template" elements are not supported and will not be executed when the products are rendered.', host);
        }
        const { section: sectionNodes, other: otherNodes } = groupNodesByType(template.content.childNodes);
        if (sectionNodes?.length && otherNodes?.length) {
            console.warn('Product templates should only contain section elements or non-section elements. Future updates could unpredictably affect this product template.', host, { sectionNodes, otherNodes });
        }
    }
    getTemplate(conditions, error) {
        if (error) {
            return null;
        }
        return {
            conditions: conditions.concat(this.matchConditions),
            content: getTemplateElement(this.host).content,
            linkContent: this.getLinkTemplateElement(this.host).content,
            priority: 1,
        };
    }
    renderIfError(error) {
        if (error) {
            return (h("atomic-component-error", { element: this.host, error: error }));
        }
    }
    getDefaultLinkTemplateElement() {
        const linkTemplate = document.createElement('template');
        linkTemplate.innerHTML = `<atomic-product-link>${this.gridCellLinkTarget ? `<a slot="attributes" target="${this.gridCellLinkTarget}"></a>` : ''}</atomic-product-link>`;
        return linkTemplate;
    }
    getLinkTemplateElement(host) {
        return (host.querySelector('template[slot="link"]') ??
            this.getDefaultLinkTemplateElement());
    }
}
function getTemplateElement(host) {
    return host.querySelector('template:not([slot])');
}
function makeDefinedConditions(ifDefined, ifNotDefined) {
    const conditions = [];
    if (ifDefined) {
        const fieldNames = ifDefined.split(',');
        conditions.push(ProductTemplatesHelpers.fieldsMustBeDefined(fieldNames));
    }
    if (ifNotDefined) {
        const fieldNames = ifNotDefined.split(',');
        conditions.push(ProductTemplatesHelpers.fieldsMustNotBeDefined(fieldNames));
    }
    return conditions;
}

export { ProductTemplateCommon as P, makeMatchConditions as a, makeDefinedConditions as m };

//# sourceMappingURL=stencil-product-template-common.js.map