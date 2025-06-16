import { ItemRenderingFunction } from "../../common/item-list/item-list-common";
import { ItemDisplayDensity, ItemDisplayImageSize } from "../../common/layout/display-options";
import { SearchBoxSuggestions, SearchBoxSuggestionsBindings } from "../../common/suggestions/suggestions-common";
import { SearchBoxSuggestionsComponent } from "../../../decorators/types";
import { Product, SearchBox } from '@coveo/headless/commerce';
import { LitElement } from 'lit';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
export type AriaLabelGenerator = (bindings: CommerceBindings, product: Product) => string | undefined;
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
export declare class AtomicCommerceSearchBoxInstantProducts extends LitElement implements SearchBoxSuggestionsComponent<CommerceBindings> {
    bindings: SearchBoxSuggestionsBindings<SearchBox, CommerceBindings>;
    private itemRenderingFunction;
    private products;
    private itemTemplateProvider;
    private instantProducts;
    private display;
    error: Error;
    private templateHasError;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    /**
     * The spacing of various elements in the product list, including the gap between products, the gap between parts of a product, and the font sizes of different parts in a product.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed in the products.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The callback to generate an [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) for a given product so that accessibility tools can fully describe what's visually rendered by a product.
     *
     * By default, or if an empty string is returned, `product.ec_name` is used.
     */
    ariaLabelGenerator?: AriaLabelGenerator;
    connectedCallback(): void;
    private getLink;
    private handleLinkClick;
    private renderItems;
    initialize(): SearchBoxSuggestions;
    private onSuggestedQueryChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-commerce-search-box-instant-products': AtomicCommerceSearchBoxInstantProducts;
    }
}
