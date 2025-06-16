import { AttachToCase } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 * The `atomic-insight-result-attach-to-case-indicator` component can be included inside a result template to indicate whether a result is attached to the current case.
 *
 * @part icon The icon that indicates whether the result is attached to the case.
 */
export declare class AtomicInsightResultAttachToCaseIndicator implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    private result;
    host: HTMLElement;
    error: Error;
    attachToCase: AttachToCase;
    attachToCaseState: {};
    initialize(): void;
    render(): any;
}
