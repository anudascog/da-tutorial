/**
 * @internal
 */
export declare class TabBar {
    private host;
    private popoverTabs;
    private resizeObserver;
    private get tabsFromSlot();
    private get selectedTab();
    private get slotContentWidth();
    private get containerWidth();
    private get isOverflow();
    private get tabPopover();
    private get popoverWidth();
    private get overflowingTabs();
    private get displayedTabs();
    private get lastDisplayedTab();
    private get lastDisplayedTabRightPosition();
    private updatePopoverPosition;
    private getElementWidth;
    private hideElement;
    private showElement;
    private updateTabVisibility;
    private updatePopoverTabs;
    private setTabButtonMaxWidth;
    private updateTabsDisplay;
    resolveResult(event: CustomEvent<{}>): void;
    componentWillUpdate(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render: () => any;
}
