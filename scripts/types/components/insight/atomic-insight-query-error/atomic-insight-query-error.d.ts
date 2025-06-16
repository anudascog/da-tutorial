import { QueryError } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicQueryError implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    queryError: QueryError;
    private queryErrorState;
    error: Error;
    showMoreInfo: boolean;
    protected ariaMessage: string;
    initialize(): void;
    render(): any;
}
