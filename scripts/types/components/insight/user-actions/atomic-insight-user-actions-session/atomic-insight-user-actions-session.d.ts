import { UserAction as IUserAction } from '@coveo/headless/insight';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
export type UserActionType = 'SEARCH' | 'CLICK' | 'TICKET_CREATION' | 'VIEW' | 'CUSTOM';
/**
 * @internal
 * The `AtomicInsightUserActionSession` component displays all the user actions that took place during a specific user session.
 * @category Insight Panel
 * @example
 * <atomic-insight-user-actions-session userActions={actions} startTimestamp={1723035731}></atomic-insight-user-actions-session>
 */
export declare class AtomicInsightUserActionsSession {
    bindings: InsightBindings;
    error: Error;
    /**
     * The start time of the session as a Unix timestamp.
     */
    startTimestamp: number;
    /**
     * The list of user actions performed during the session.
     */
    userActions: Array<IUserAction>;
    private userActionsToDisplay;
    private userActionsAfterCaseCreation;
    areActionsAfterCaseCreationVisible: boolean;
    connectedCallback(): void;
    prepareUserActionsToDisplay(): void;
    showActionsAfterCaseCreation(): void;
    renderSessionStartDate(): any;
    renderActions(actions: Array<IUserAction>): any;
    renderShowMoreActionsButton(): any;
    render(): any;
}
