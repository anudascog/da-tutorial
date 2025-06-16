import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightLayout implements InitializableComponent<InsightBindings> {
    error: Error;
    private styleTag?;
    private host;
    /**
     * Whether the interface should be shown in widget format.
     */
    widget: boolean;
    bindings: InsightBindings;
    updateStyles(): void;
    private makeStyleTag;
    componentDidLoad(): void;
}
