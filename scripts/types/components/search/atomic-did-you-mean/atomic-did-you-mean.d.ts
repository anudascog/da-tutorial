import { QueryTrigger } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-did-you-mean` component is responsible for handling query corrections. When a query returns no result but finds a possible query correction, the component either suggests the correction or automatically triggers a new query with the suggested term.
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
export declare class AtomicDidYouMean implements InitializableComponent {
    bindings: Bindings;
    private didYouMean;
    protected queryTrigger: QueryTrigger;
    private didYouMeanState?;
    private queryTriggerState?;
    error: Error;
    /**
     * Whether to automatically apply corrections for queries that would otherwise return no results.
     * When `automaticallyCorrectQuery` is `true`, the component automatically triggers a new query using the suggested term.
     * When `automaticallyCorrectQuery` is `false`, the component returns the suggested term without triggering a new query.
     *
     * The default value is `true`.
     */
    automaticallyCorrectQuery: boolean;
    /**
     * Define which query correction system to use
     *
     * `legacy`: Query correction is powered by the legacy index system. This system relies on an algorithm using solely the index content to compute the suggested terms.
     * `next`: Query correction is powered by a machine learning system, requiring a valid query suggestion model configured in your Coveo environment to function properly. This system relies on machine learning algorithms to compute the suggested terms.
     *
     * Default value is `next`.
     */
    queryCorrectionMode: 'legacy' | 'next';
    updateQueryCorrectionMode(): void;
    initialize(): void;
    private get content();
    render(): any;
}
