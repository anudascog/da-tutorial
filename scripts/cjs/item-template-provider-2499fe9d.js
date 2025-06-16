'use strict';

const headless = require('@coveo/headless');
const templateProvider = require('./template-provider-7802ca20.js');

class ItemTemplateProvider extends templateProvider.TemplateProvider {
    constructor(props, gridCellLinkTarget) {
        super(props, () => headless.buildResultTemplatesManager(props.bindings.engine));
        this.gridCellLinkTarget = gridCellLinkTarget;
    }
    // TODO: Add JSX support for default template
    makeDefaultTemplate() {
        const content = document.createDocumentFragment();
        const linkEl = document.createElement('atomic-result-link');
        content.appendChild(linkEl);
        const linkContent = document.createDocumentFragment();
        const linkMarkup = `
      <atomic-result-link>
      ${this.gridCellLinkTarget ? `<a slot="attributes" target="${this.gridCellLinkTarget}"></a>` : ''}
      </atomic-result-link>
    `;
        const linkTemplate = document.createElement('template');
        linkTemplate.innerHTML = linkMarkup.trim();
        linkContent.appendChild(linkTemplate.content);
        return {
            content,
            linkContent,
            conditions: [],
        };
    }
}

exports.ItemTemplateProvider = ItemTemplateProvider;

//# sourceMappingURL=item-template-provider-2499fe9d.js.map