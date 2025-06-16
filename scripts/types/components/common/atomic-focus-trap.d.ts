/**
 * @internal
 */
export declare class AtomicFocusTrap {
    private host;
    active: boolean;
    /**
     * The source to focus when the focus trap becomes inactive.
     */
    source?: HTMLElement;
    /**
     * The container to hide from the tabindex and accessibility DOM when the focus trap is inactive.
     */
    container?: HTMLElement;
    /**
     * Whether the element should be hidden from screen readers & not interactive with the tab, when not active.
     */
    shouldHideSelf: boolean;
    /**
     * The common ancestor of the focus trap and of all the elements that should be inaccessible when inside the focus trap.
     */
    scope: HTMLElement;
    private readonly hiddenElements;
    hide(element: Element): void;
    showAll(): void;
    hideSiblingsRecursively(element: Element | ShadowRoot): void;
    showSelf(): void;
    hideSelf(): void;
    onDeactivated(isInitialLoad: boolean): Promise<void>;
    onActivated(isInitialLoad: boolean): Promise<void>;
    activeChanged(active: boolean, wasActive: boolean): Promise<void>;
    onFocusChanged(e: FocusEvent): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get parentToHide();
}
