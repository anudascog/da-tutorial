import { InitializableComponent } from '../../../utils/initialization-utils';
import { TabCommon } from '../../common/tabs/tab-common';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightTab implements TabCommon, InitializableComponent<InsightBindings> {
    private tab;
    private tabId;
    host: HTMLElement;
    bindings: InsightBindings;
    error: Error;
    private isAppLoaded;
    private tabState;
    /**
     * The label that will be shown to the user.
     */
    label: string;
    /**
     * Whether this tab is active upon rendering.
     * If multiple tabs are set to active on render, the last one to be rendered will override the others.
     */
    active: boolean;
    /**
     * The expression that will be passed to the search as a `cq` paramenter upon being selected.
     */
    expression: string;
    private unsubscribe;
    /**
     * Activates the tab.
     */
    select(): Promise<void>;
    initialize(): void;
    componentDidRender(): void;
    disconnectedCallback(): void;
    render(): any;
}
