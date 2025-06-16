import { UserActions as InsightUserActions, UserActionsState as InsightUserActionsState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 * The `atomic-insight-user-actions-toggle` component displays a button that opens a modal containing the user actions timeline component.
 */
export declare class AtomicInsightUserActionsToggle implements InitializableComponent<InsightBindings> {
    host: HTMLElement;
    bindings: InsightBindings;
    userActions: InsightUserActions;
    userActionsState: InsightUserActionsState;
    error: Error;
    /**
     * The ID of the user whose actions are being displayed.
     */
    userId: string;
    /**
     * The date and time when the case was created. For example "2024-01-01T00:00:00Z"
     */
    ticketCreationDateTime: string;
    /**
     * The names of custom events to exclude.
     */
    excludedCustomActions: string[];
    initialize(): void;
    private buttonRef?;
    private modalRef?;
    private enableModal;
    private loadModal;
    render(): any;
}
