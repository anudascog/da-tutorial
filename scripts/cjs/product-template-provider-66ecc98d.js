'use strict';

const commerce = require('@coveo/headless/commerce');
const templateProvider = require('./template-provider-7802ca20.js');

class ProductTemplateProvider extends templateProvider.TemplateProvider {
    constructor(props, gridCellLinkTarget) {
        super(props, () => commerce.buildProductTemplatesManager());
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

exports.ProductTemplateProvider = ProductTemplateProvider;

//# sourceMappingURL=product-template-provider-66ecc98d.js.map