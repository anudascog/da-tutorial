/**
 * @internal
 */
export declare class AtomicTabButton {
    /**
     * The label to display on the tab button.
     */
    label: string;
    /**
     * Whether the tab button is active.
     */
    active: boolean;
    /**
     * Click handler for the tab button.
     */
    select: () => void;
    private get activeTabClass();
    private get activeTabTextClass();
    render(): any;
}
