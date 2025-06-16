import { ProductListingState, ProductListing, Search, Summary, ProductListingSummaryState, SearchSummaryState } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { FocusTargetController } from '../../../utils/stencil-accessibility-utils';
import { ItemRenderingFunction } from '../../common/item-list/stencil-item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from '../../common/layout/display-options';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
import { SelectChildProductEventArgs } from '../product-template-components/atomic-product-children/select-child-product-event';
/**
 * @alpha
 * The `atomic-commerce-product-list` component is responsible for displaying products.
 *
 * @part result-list - The element containing the list of products.
 *
 * @slot default - The default slot where the product templates are defined.
 */
export declare class AtomicCommerceProductList implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    productListing: ProductListing;
    search: Search;
    private loadingFlag;
    private itemRenderingFunction;
    private nextNewResultTarget?;
    private productTemplateProvider;
    private productListCommon;
    host: HTMLDivElement;
    private productListingState;
    private searchState;
    summary: Summary<ProductListingSummaryState | SearchSummaryState>;
    private summaryState;
    private resultTemplateRegistered;
    error: Error;
    private templateHasError;
    private isAppLoaded;
    /**
     * The desired number of placeholders to display while the product list is loading.
     */
    numberOfPlaceholders: number;
    /**
     * The desired layout to use when displaying products. Layouts affect how many products to display per row and how visually distinct they are from each other.
     */
    display: ItemDisplayLayout;
    /**
     * The spacing of various elements in the product list, including the gap between products, the gap between parts of a product, and the font sizes of different parts in a product.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed for products.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering products.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param productRenderingFunction
     */
    setRenderFunction(productRenderingFunction: ItemRenderingFunction): Promise<void>;
    get focusTarget(): FocusTargetController;
    initialize(): void;
    onSelectChildProduct(event: CustomEvent<SelectChildProductEventArgs>): void;
    get productState(): ProductListingState;
    render(): any;
    private computeListDisplayClasses;
    private logWarningIfNeeded;
    private getInteractiveProduct;
    private getPropsForAtomicProduct;
    private renderAsGrid;
    private renderAsTable;
    private renderAsList;
}
