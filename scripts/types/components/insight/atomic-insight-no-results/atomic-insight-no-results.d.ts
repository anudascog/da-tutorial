import { SearchStatus, QuerySummary } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightNoResults implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    searchStatus: SearchStatus;
    querySummary: QuerySummary;
    private searchStatusState;
    private querySummaryState;
    error: Error;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
}
