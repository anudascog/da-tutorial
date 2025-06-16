import { QuerySummary, ResultList } from '@coveo/headless';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-load-more-results` component allows the user to load additional results if more are available.
 *
 * @part container - The container of the component.
 * @part showing-results - The summary displaying which results are shown and how many are available.
 * @part highlight - The highlighted number of results displayed and number of results available.
 * @part progress-bar - The progress bar displaying a percentage of results shown over the total number of results available.
 * @part load-more-results-button - The "Load more results" button.
 */
export declare class AtomicLoadMoreResults {
    bindings: Bindings;
    querySummary: QuerySummary;
    resultList: ResultList;
    private querySummaryState;
    private resultListState;
    error: Error;
    private isAppLoaded;
    initialize(): void;
    private onClick;
    render(): any;
}
