import { AttachToCase, Result } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
export interface InsightResultAttachToCaseEvent {
    callback: () => void;
    result: Result;
}
/**
 * @internal
 * The `atomic-insight-result-attach-to-case-action` component can be nested inside a `atomic-insight-result-actions` to render an interactive button that will emit an `atomic/insight/attachToCase/attach` or `atomic/insight/attachToCase/detach` JavaScript event, based on its current state, when clicked.
 *
 * @part result-action-container - The result action container
 * @part result-action-button - The result action button
 * @part result-action-icon - The result action icon
 */
export declare class AtomicInsightResultAttachToCaseAction implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    private result;
    host: HTMLElement;
    error: Error;
    attachToCase: AttachToCase;
    attachToCaseState: {};
    private attach;
    private detach;
    initialize(): void;
    private onClick;
    private getIcon;
    private getTooltip;
    render(): any;
}
