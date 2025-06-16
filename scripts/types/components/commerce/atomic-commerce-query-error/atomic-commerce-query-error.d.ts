import { Search, ProductListing } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-query-error` component handles fatal errors when performing a query on the Commerce API. When the error is known, it displays a link to relevant documentation for debugging purposes. When the error is unknown, it displays a small text area with the JSON content of the error.
 *
 * @part icon - The SVG related to the error.
 * @part title - The title of the error.
 * @part description - A description of the error.
 * @part doc-link - A link to the relevant documentation.
 * @part more-info-btn - A button to request additional error information.
 * @part error-info - Additional error information.
 *
 * @alpha
 */
export declare class AtomicCommerceQueryError implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    searchOrListing: Search | ProductListing;
    private searchOrListingState;
    error: Error;
    showMoreInfo: boolean;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
}
