import { SearchSummaryState, ProductListingSummaryState, Summary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 *
 * The `atomic-no-products` component displays search tips when there are no products. Any additional content slotted inside of its element will be displayed as well.
 *
 * @part no-results - The text indicating that no products were found for the search.
 * @part search-tips - The search tips to help the user correct the query.
 * @part highlight - The highlighted query.
 * @part icon - The magnifying glass icon.
 *
 * @slot default - Any additional content slotted inside of its element will be displayed as well.
 */
export declare class AtomicCommerceNoProducts implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    summary: Summary<ProductListingSummaryState | SearchSummaryState>;
    private summaryState;
    error: Error;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
}
