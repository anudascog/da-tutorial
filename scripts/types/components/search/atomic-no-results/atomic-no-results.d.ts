import { HistoryManager, SearchStatus, QuerySummary } from '@coveo/headless';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-no-results` component displays search tips and a "Cancel last action" button when there are no results. Any additional content slotted inside of its element will be displayed as well.
 *
 * @part cancel-button - The "Cancel last action" button.
 * @part no-results - The text indicating that no results were found for the search.
 * @part search-tips - The search tips to help the user correct the query.
 * @part highlight - The highlighted query.
 * @part icon - The magnifying glass icon.
 */
export declare class AtomicNoResults {
    bindings: Bindings;
    searchStatus: SearchStatus;
    history: HistoryManager;
    querySummary: QuerySummary;
    private searchStatusState;
    private historyState;
    private querySummaryState;
    error: Error;
    protected ariaMessage: string;
    /**
     * Whether to display a button which cancels the last available action.
     */
    enableCancelLastAction: boolean;
    initialize(): void;
    render(): any;
}
