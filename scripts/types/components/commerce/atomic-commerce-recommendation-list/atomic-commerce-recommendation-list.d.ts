import { Recommendations, RecommendationsState } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { FocusTargetController } from '../../../utils/stencil-accessibility-utils';
import { ItemRenderingFunction } from '../../common/item-list/stencil-item-list-common';
import { ItemDisplayBasicLayout, ItemDisplayDensity, ItemDisplayImageSize } from '../../common/layout/display-options';
import { CommerceBindings } from '../atomic-commerce-recommendation-interface/atomic-commerce-recommendation-interface';
import { SelectChildProductEventArgs } from '../product-template-components/atomic-product-children/select-child-product-event';
/**
 * The `atomic-commerce-recommendation-list` component displays a list of product recommendations by applying one or more product templates.
 * @alpha
 *
 * @part result-list - The element containing the list of product recommendations.
 * @part result-list-grid-clickable-container - The parent of a recommended product and the clickable link encompassing it.
 * @part result-list-grid-clickable - The clickable link encompassing a recommended product.
 * @part label - The label of the recommendation list.
 * @part previous-button - The previous button.
 * @part next-button - The next button.
 * @part indicators - The list of indicators.
 * @part indicator - A single indicator.
 * @part active-indicator - The active indicator.
 *
 * @slot default - The default slot where the product templates are defined.
 */
export declare class AtomicCommerceRecommendationList implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    recommendations: Recommendations;
    private loadingFlag;
    private itemRenderingFunction;
    private nextNewProductTarget?;
    private productTemplateProvider;
    private itemListCommon;
    host: HTMLDivElement;
    recommendationsState: RecommendationsState;
    error: Error;
    private isAppLoaded;
    private productTemplateRegistered;
    private templateHasError;
    private currentPage;
    /**
     * The identifier used by the Commerce API to retrieve the desired recommendation list for the component.
     * You can configure recommendation lists and get their respective slot IDs through the Coveo Merchandising Hub (CMH).
     * You can include multiple `atomic-commerce-recommendation-list` components with different slot IDs in the same page to display several recommendation lists.
     */
    slotId: string;
    /**
     * The unique identifier of the product to use for seeded recommendations.
     */
    productId?: string;
    /**
     * The layout to apply when displaying the products. This does not affect the display of the surrounding list itself.
     * To modify the number of products per column, modify the `--atomic-recs-number-of-columns` CSS variable.
     */
    display: ItemDisplayBasicLayout;
    /**
     * The spacing of various elements in the product list, including the gap between products, the gap between parts of a product, and the font sizes of the parts of a product.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed on the recommended products.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The number of products to display per page.
     * The products will be displayed in a carousel if this property is set.
     * This does not affect the display of the list itself, only the number of recommendation pages.
     * If you want to display the recommendations in a carousel with a single row, set the `--atomic-recs-number-fof-columns` CSS variable to the same value as this property.
     */
    productsPerPage?: number;
    /**
     * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the heading label, from 1 to 6.
     */
    headingLevel: number;
    watchNumberOfRecommendationsPerPage(): Promise<void>;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism when rendering products.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular, or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML implementation.
     *
     * @param productRenderingFunction
     */
    setRenderFunction(productRenderingFunction: ItemRenderingFunction): Promise<void>;
    /**
     * Moves to the previous page, when the carousel is activated.
     */
    previousPage(): Promise<void>;
    /**
     * Moves to the next page, when the carousel is activated.
     */
    nextPage(): Promise<void>;
    initialize(): void;
    onSelectChildProduct(event: CustomEvent<SelectChildProductEventArgs>): void;
    get focusTarget(): FocusTargetController;
    private get augmentedRecommendationListState();
    private validateProductsPerPage;
    private validateSlotID;
    private renderHeading;
    private get currentIndex();
    private get subsetRecommendations();
    private get numberOfPages();
    private get hasPagination();
    private get shouldRenderPagination();
    private get hasNoProducts();
    private logWarningIfNeeded;
    private getAtomicProductProps;
    private computeListDisplayClasses;
    private renderAsGrid;
    private renderRecommendationList;
    render(): any;
}
