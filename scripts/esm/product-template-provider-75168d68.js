import { buildProductTemplatesManager } from '@coveo/headless/commerce';
import { T as TemplateProvider } from './template-provider-67066474.js';

class ProductTemplateProvider extends TemplateProvider {
    constructor(props, gridCellLinkTarget) {
        super(props, () => buildProductTemplatesManager());
        this.gridCellLinkTarget = gridCellLinkTarget;
    }
    makeDefaultTemplate() {
        const content = document.createDocumentFragment();
        const markup = `
      <atomic-product-section-name>
        <atomic-product-link class="font-bold"></atomic-product-link>
      </atomic-product-section-name>
      <atomic-product-section-visual>
        <atomic-product-image field="ec_thumbnails"></atomic-product-image>
      </atomic-product-section-visual>
    `;
        const template = document.createElement('template');
        template.innerHTML = markup.trim();
        content.appendChild(template.content);
        const linkContent = document.createDocumentFragment();
        const linkMarkup = `
      <atomic-product-link>
      ${this.gridCellLinkTarget ? `<a slot="attributes" target="${this.gridCellLinkTarget}"></a>` : ''}
      </atomic-product-link>
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

export { ProductTemplateProvider as P };

//# sourceMappingURL=product-template-provider-75168d68.js.map