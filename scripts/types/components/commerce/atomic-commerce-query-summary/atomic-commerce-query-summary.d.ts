import { Pagination, ProductListingSummaryState, SearchSummaryState, Summary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-query-summary` component displays information about the current range of results and the request duration (e.g., "Results 1-10 of 123 in 0.47 seconds").
 *
 * @part container - The container for the whole summary.
 * @part results - The container for the results.
 * @part highlight - The summary highlights.
 * @part query - The summary highlighted query.
 * @part placeholder - The query summary placeholder used while the search interface is initializing.
 *
 * @alpha
 */
export declare class AtomicCommerceQuerySummary implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    listingOrSearchSummary: Summary<SearchSummaryState | ProductListingSummaryState>;
    pagination: Pagination;
    private listingOrSearchSummaryState;
    error: Error;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
    private isSearch;
}
