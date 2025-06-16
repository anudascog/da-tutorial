import { Pagination, Summary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import type { CommerceBindings as Bindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-products-per-page` component determines how many products to display per page.
 *
 * @part label - The "Products per page" label.
 * @part buttons - The list of buttons.
 * @part button - The individual products per page buttons.
 * @part active-button - The active products per page button.
 *
 * @alpha
 */
export declare class AtomicCommerceProductsPerPage implements InitializableComponent<Bindings> {
    bindings: Bindings;
    pagination: Pagination;
    private paginationState;
    summary: Summary;
    private summaryState;
    error: Error;
    private isAppLoaded;
    private choices;
    private readonly radioGroupName;
    /**
     * A list of choices for the number of products to display per page, separated by commas.
     */
    choicesDisplayed: string;
    /**
     * The initial selection for the number of product per page. This should be part of the `choicesDisplayed` option. By default, this is set to the first value in `choicesDisplayed`.
     * @type {number}
     */
    initialChoice?: number;
    private scrollToTopEvent;
    initialize(): void;
    private get label();
    render(): any;
}
