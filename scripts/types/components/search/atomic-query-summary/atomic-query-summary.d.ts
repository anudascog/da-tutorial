import { QuerySummary } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-query-summary` component displays information about the current range of results and the request duration (e.g., "Results 1-10 of 123 in 0.47 seconds").
 *
 * @part container - The container for the whole summary.
 * @part results - The container for the results.
 * @part duration - The container for the duration.
 * @part highlight - The summary highlights.
 * @part query - The summary highlighted query.
 * @part placeholder - The query summary placeholder used while the search interface is initializing.
 */
export declare class AtomicQuerySummary implements InitializableComponent {
    bindings: Bindings;
    querySummary: QuerySummary;
    private querySummaryState;
    error: Error;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
}
