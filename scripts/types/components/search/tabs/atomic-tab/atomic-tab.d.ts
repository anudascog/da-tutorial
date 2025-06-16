/**
 * The `atomic-tab` component represents an individual tab within the `atomic-tab-manager` component.
 * It must be used as a child of the `atomic-tab-manager` component to function correctly.
 */
export declare class AtomicTab {
    host: HTMLElement;
    /**
     * The label to display on the tab.
     */
    label: string;
    /**
     * The internal name of the atomic tab.
     */
    name: string;
    /**
     * The [constant query expression (`cq`)](https://docs.coveo.com/en/2830/searching-with-coveo/about-the-query-expression#constant-query-expression-cq) to apply when the tab is the active one.
     */
    expression: string;
}
