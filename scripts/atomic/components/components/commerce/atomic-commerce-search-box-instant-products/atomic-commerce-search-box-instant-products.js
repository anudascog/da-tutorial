var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { getPartialInstantItemElement, getPartialInstantItemShowAllElement, renderInstantItemShowAllButton, } from "../../common/suggestions/instant-item";
import { dispatchSearchBoxSuggestionsEvent, } from "../../common/suggestions/suggestions-common";
import { errorGuard } from "../../../decorators/error-guard";
import { withTailwindStyles } from "../../../decorators/with-tailwind-styles.js";
import { encodeForDomAttribute } from "../../../utils/string-utils";
import { buildInstantProducts, } from '@coveo/headless/commerce';
import { html, LitElement, nothing, render } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { keyed } from 'lit/directives/keyed.js';
import { ProductTemplateProvider } from '../product-list/product-template-provider';
/**
 * The `atomic-commerce-search-box-instant-products` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of instant products behavior.
 *
 * This component does not support accessibility out-of-the-box. To do so, see [Instant Results Accessibility](https://docs.coveo.com/en/atomic/latest/usage/accessibility/#instant-results-accessibility).
 *
 * This component is not supported on mobile.
 *
 * @part instant-results-show-all-button - The 'See all results' button.
 * @part instant-results-item - The individual instant product item.
 *
 * @slot default - The default slot where the instant products are rendered.
 * @alpha
 */
let AtomicCommerceSearchBoxInstantProducts = class AtomicCommerceSearchBoxInstantProducts extends LitElement {
    constructor() {
        super(...arguments);
        this.products = [];
        this.display = 'list';
        this.templateHasError = false;
        /**
         * The spacing of various elements in the product list, including the gap between products, the gap between parts of a product, and the font sizes of different parts in a product.
         */
        this.density = 'normal';
        /**
         * The expected size of the image displayed in the products.
         */
        this.imageSize = 'icon';
    }
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    async setRenderFunction(resultRenderingFunction) {
        this.itemRenderingFunction = resultRenderingFunction;
    }
    connectedCallback() {
        super.connectedCallback();
        try {
            dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this, ['atomic-commerce-search-box']);
        }
        catch (error) {
            this.error = error;
        }
    }
    getLink(el) {
        const atomicProduct = el.tagName === 'ATOMIC-PRODUCT'
            ? el
            : el?.querySelector('atomic-product');
        return (atomicProduct?.shadowRoot?.querySelector('atomic-product-link a:not([slot])') || null);
    }
    handleLinkClick(el, hasModifier) {
        const setTarget = (value) => el.setAttribute('target', value);
        const initialTarget = el.getAttribute('target');
        hasModifier && setTarget('_blank');
        el.click();
        hasModifier && setTarget(initialTarget || '');
    }
    renderItems() {
        if (!this.bindings.suggestedQuery() || this.bindings.store.isMobile()) {
            return [];
        }
        const products = this.instantProducts.state.products.length
            ? this.instantProducts.state.products
            : this.products;
        const elements = products.map((product) => {
            const interactiveProduct = this.instantProducts.interactiveProduct({
                options: { product },
            });
            const partialItem = getPartialInstantItemElement(this.bindings.i18n, this.ariaLabelGenerator?.(this.bindings, product) || product.ec_name, product.permanentid);
            const key = `instant-product-${encodeForDomAttribute(product.permanentid)}`;
            const template = html `${keyed(key, html `<atomic-product
            part="outline"
            .product=${product}
            .interactiveProduct=${interactiveProduct}
            .display=${this.display}
            .density=${this.density}
            .imageSize=${this.imageSize}
            .content=${this.itemTemplateProvider.getTemplateContent(product)}
            .stopPropagation=${false}
            .renderingFunction=${this.itemRenderingFunction}
          ></atomic-product>`)}`;
            const container = document.createElement('div');
            render(template, container);
            const productElement = container.firstElementChild;
            return {
                ...partialItem,
                content: productElement,
                onSelect: (e) => {
                    const link = this.getLink(e.target);
                    if (!link) {
                        return;
                    }
                    this.handleLinkClick(link, e.ctrlKey || e.metaKey);
                },
            };
        });
        if (elements.length) {
            const partialItem = getPartialInstantItemShowAllElement(this.bindings.i18n);
            elements.push({
                ...partialItem,
                content: renderInstantItemShowAllButton({ i18n: this.bindings.i18n }),
                onSelect: () => {
                    this.bindings.clearSuggestions();
                    this.bindings.searchBoxController.updateText(this.instantProducts.state.query);
                    this.bindings.searchBoxController.submit();
                },
            });
        }
        return elements;
    }
    initialize() {
        this.instantProducts = buildInstantProducts(this.bindings.engine, {
            options: {},
        });
        this.bindings.store.onChange('activeProductChild', () => {
            if (this.bindings.store.state.activeProductChild) {
                this.instantProducts.promoteChildToParent(this.bindings.store.state.activeProductChild);
            }
        });
        this.itemTemplateProvider = new ProductTemplateProvider({
            includeDefaultTemplate: true,
            templateElements: Array.from(this.querySelectorAll('atomic-product-template')),
            getResultTemplateRegistered: () => true,
            setResultTemplateRegistered: () => { },
            getTemplateHasError: () => this.templateHasError,
            setTemplateHasError: (value) => {
                this.templateHasError = value;
            },
        });
        return {
            position: Array.from(this.parentNode.children).indexOf(this),
            panel: 'right',
            onSuggestedQueryChange: (q) => {
                this.instantProducts.updateQuery(q);
                return this.onSuggestedQueryChange();
            },
            renderItems: () => this.renderItems(),
        };
    }
    onSuggestedQueryChange() {
        if (!this.bindings.getSuggestionElements().length &&
            !this.bindings.searchBoxController.state.value) {
            console.warn("There doesn't seem to be any query suggestions configured. Make sure to include either an atomic-commerce-search-box-query-suggestions or atomic-commerce-search-box-recent-queries in your search box in order to see some instant products.");
        }
        return new Promise((resolve) => {
            const unsubscribe = this.instantProducts.subscribe(() => {
                const state = this.instantProducts.state;
                if (!state.isLoading) {
                    if (state.products.length) {
                        this.products = state.products;
                    }
                    unsubscribe();
                    resolve();
                }
            });
        });
    }
    render() {
        return html `${nothing}`;
    }
};
__decorate([
    state()
], AtomicCommerceSearchBoxInstantProducts.prototype, "error", void 0);
__decorate([
    state()
], AtomicCommerceSearchBoxInstantProducts.prototype, "templateHasError", void 0);
__decorate([
    property({ reflect: true })
], AtomicCommerceSearchBoxInstantProducts.prototype, "density", void 0);
__decorate([
    property({ attribute: 'image-size', reflect: true })
], AtomicCommerceSearchBoxInstantProducts.prototype, "imageSize", void 0);
__decorate([
    property({ attribute: 'aria-label-generator' })
], AtomicCommerceSearchBoxInstantProducts.prototype, "ariaLabelGenerator", void 0);
__decorate([
    errorGuard()
], AtomicCommerceSearchBoxInstantProducts.prototype, "render", null);
AtomicCommerceSearchBoxInstantProducts = __decorate([
    customElement('atomic-commerce-search-box-instant-products'),
    withTailwindStyles
], AtomicCommerceSearchBoxInstantProducts);
export { AtomicCommerceSearchBoxInstantProducts };
