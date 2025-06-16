'use strict';

const headless = require('@coveo/headless');
const index = require('./index-757bc886.js');
const utils = require('./utils-b6642872.js');
const tableElementUtils = require('./table-element-utils-4865b735.js');
const sections = require('./sections-a7c2169a.js');

function getTemplateNodeType(node) {
    if (sections.isResultSectionNode(node)) {
        return 'section';
    }
    if (!utils.isVisualNode(node)) {
        return 'metadata';
    }
    if (utils.isElementNode(node) &&
        node.tagName.toLowerCase() === tableElementUtils.tableElementTagName) {
        return 'table-column-definition';
    }
    return 'other';
}
function groupNodesByType(nodes) {
    return utils.aggregate(Array.from(nodes), (node) => getTemplateNodeType(node));
}
class ResultTemplateCommon {
    constructor({ host, setError, validParents, allowEmpty = false, }) {
        this.matchConditions = [];
        this.gridCellLinkTarget = '_self';
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
        const template = host.querySelector('template:not([slot])');
        if (!template) {
            setError(new Error(`The "${tagName}" component has to contain a "template" element as a child.`));
            return;
        }
        if (!allowEmpty && !template.innerHTML.trim()) {
            setError(new Error(`The "template" tag inside "${tagName}" cannot be empty.`));
            return;
        }
        if (template.content.querySelector('script')) {
            console.warn('Any "script" tags defined inside of "template" elements are not supported and will not be executed when the results are rendered.', host);
        }
        const { section: sectionNodes, other: otherNodes } = groupNodesByType(template.content.childNodes);
        if (sectionNodes?.length && otherNodes?.length) {
            console.warn('Result templates should only contain section elements or non-section elements. Future updates could unpredictably affect this result template.', host, { sectionNodes, otherNodes });
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
            return (index.h("atomic-component-error", { element: this.host, error: error }));
        }
    }
    getDefaultLinkTemplateElement() {
        const linkTemplate = document.createElement('template');
        linkTemplate.innerHTML = `<atomic-result-link>${this.gridCellLinkTarget ? `<a slot="attributes" target="${this.gridCellLinkTarget}"></a>` : ''}</atomic-result-link>`;
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
function makeMatchConditions(mustMatch, mustNotMatch) {
    const conditions = [];
    for (const field in mustMatch) {
        conditions.push(headless.ResultTemplatesHelpers.fieldMustMatch(field, mustMatch[field]));
    }
    for (const field in mustNotMatch) {
        conditions.push(headless.ResultTemplatesHelpers.fieldMustNotMatch(field, mustNotMatch[field]));
    }
    return conditions;
}
function makeDefinedConditions(ifDefined, ifNotDefined) {
    const conditions = [];
    if (ifDefined) {
        const fieldNames = ifDefined.split(',');
        conditions.push(headless.ResultTemplatesHelpers.fieldsMustBeDefined(fieldNames));
    }
    if (ifNotDefined) {
        const fieldNames = ifNotDefined.split(',');
        conditions.push(headless.ResultTemplatesHelpers.fieldsMustNotBeDefined(fieldNames));
    }
    return conditions;
}

exports.ResultTemplateCommon = ResultTemplateCommon;
exports.makeDefinedConditions = makeDefinedConditions;
exports.makeMatchConditions = makeMatchConditions;

//# sourceMappingURL=result-template-common-ab94a761.js.map