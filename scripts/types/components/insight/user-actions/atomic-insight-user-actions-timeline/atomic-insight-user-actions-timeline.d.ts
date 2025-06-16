import { UserActions as InsightUserActions, UserActionsState as InsightUserActionsState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 * This component displays all the actions performed by a user around the time they created a case.
 * The actions are grouped into multiple sessions, including the session during which the case was created,
 * the sessions preceding the case creation and the sessions following the case creation.
 *
 * @component
 * @example
 * <AtomicInsightUserActionsTimeline userId={'123'} caseCreationDate={'2024-08-15T10:00:00Z'} />
 *
 */
export declare class AtomicInsightUserActionsTimeline implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    userActions: InsightUserActions;
    userActionsState: InsightUserActionsState;
    error: Error;
    /**
     * The ID of the user whose actions are being displayed. For example in email format "someone@company.com".
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
    followingSessionsAreVisible: boolean;
    precedingSessionsAreVisible: boolean;
    private toggleFollowingSessions;
    private togglePrecedingSessions;
    private renderSessions;
    private renderToggleFollowingSessionsButton;
    private renderTogglePrecedingSessionsButton;
    private renderFollowingSessionsSection;
    private renderPrecedingSessionsSection;
    private renderTimeline;
    private renderNoUserActionsScreen;
    render(): any;
}
