import { QuerySummary } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicQuerySummary implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    querySummary: QuerySummary;
    private querySummaryState;
    error: Error;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
}
