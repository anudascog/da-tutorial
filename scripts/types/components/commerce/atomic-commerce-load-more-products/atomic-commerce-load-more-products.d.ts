import { Pagination, ProductListing, Search } from '@coveo/headless/commerce';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-load-more-products` component allows the user to load additional products if more are available.
 *
 * @part container - The container of the component.
 * @part showing-results - The summary displaying which products are shown and how many are available.
 * @part highlight - The highlighted number of products displayed and number of products available.
 * @part progress-bar - The progress bar displaying a percentage of results shown over the total number of products available.
 * @part load-more-results-button - The "Load more products" button.
 *
 * @alpha
 */
export declare class AtomicCommerceLoadMoreProducts {
    bindings: CommerceBindings;
    pagination: Pagination;
    listingOrSearch: ProductListing | Search;
    private paginationState;
    private productListingOrSearchState;
    error: Error;
    private isAppLoaded;
    initialize(): void;
    private get lastProduct();
    private onClick;
    render(): any;
}
