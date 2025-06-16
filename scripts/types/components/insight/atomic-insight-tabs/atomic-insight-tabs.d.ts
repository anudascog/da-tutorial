import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightTabs implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    error: Error;
    render(): any;
}
