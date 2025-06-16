import { Result } from '@coveo/headless';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
export interface InsightResultActionClickedEvent {
    action: string;
    result: Result;
}
export declare enum Actions {
    CopyToClipboard = "copyToClipboard",
    AttachToCase = "attachToCase",
    Quickview = "quickview",
    PostToFeed = "postToFeed",
    SendAsEmail = "sendAsEmail"
}
/**
 * @internal
 */
export declare class AtomicInsightResultAction implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    private result;
    error: Error;
    private actionClicked;
    /**
     * Specify the result action icon to display.
     */
    icon: string;
    /**
     * The text tooltip to show on the result action icon.
     */
    tooltip: string;
    /**
     * The text tooltip to show on the result action icon for some time after clicking the button.
     */
    tooltipOnClick: string;
    /**
     * The type of action to perform when the result action is clicked. This will be sent along the event fired when the button is clicked.
     */
    action: Actions | string;
    private actions;
    initialize(): void;
    private onClick;
    private getIcon;
    render(): any;
}
