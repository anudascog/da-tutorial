import { buildResultTemplatesManager } from '@coveo/headless';
import { T as TemplateProvider } from './template-provider-67066474.js';

class ItemTemplateProvider extends TemplateProvider {
    constructor(props, gridCellLinkTarget) {
        super(props, () => buildResultTemplatesManager(props.bindings.engine));
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

export { ItemTemplateProvider as I };

//# sourceMappingURL=item-template-provider-91cc8acc.js.map