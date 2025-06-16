import { DidYouMean, QueryTrigger } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * @alpha
 *
 * The `atomic-commerce-query-correction` component is responsible for handling query corrections. When a query returns no products but finds a possible query correction, the component either suggests the correction or automatically triggers a new query with the suggested term.
 *
 * @part no-results - The text displayed when there are no results.
 * @part auto-corrected - The text displayed for the automatically corrected query.
 * @part showing-results-for - The first paragraph of the text displayed when a query trigger changes a query.
 * @part search-instead-for - The second paragraph of the text displayed when a query trigger changes a query.
 * @part did-you-mean - The text displayed around the button to manually correct a query.
 * @part correction-btn - The button used to manually correct a query.
 * @part undo-btn - The button used to undo a query changed by a query trigger.
 * @part highlight - The query highlights.
 */
export declare class AtomicCommerceDidYouMean implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    didYouMean: DidYouMean;
    queryTrigger: QueryTrigger;
    private didYouMeanState?;
    private queryTriggerState?;
    error: Error;
    initialize(): void;
    private get content();
    render(): any;
}
