import { GeneratedAnswerCitation, InteractiveCitation } from '@coveo/headless';
/**
 * @internal
 */
export declare class AtomicCitation {
    host: HTMLElement;
    /**
     * The citation item information.
     */
    citation: GeneratedAnswerCitation;
    /**
     * The citation index.
     */
    index: number;
    /**
     * Callback function invoked when the user stops hovering over a citation. `citationHoverTimeMs` is the amount of time over which the citation has been hovered.
     */
    sendHoverEndEvent: (citationHoverTimeMs: number) => void;
    /**
     * An `InteractiveCitation` controller instance. It is used when the user interacts with the citation by selecting or hovering over it.
     */
    interactiveCitation: InteractiveCitation;
    isOpen: boolean;
    private citationRef;
    private popupRef;
    private popperInstance?;
    private stopPropagation?;
    private hoverStart?;
    private hoverAnalyticsTimeout;
    private hoverTimeout?;
    private hoverDebounceTimeoutMs;
    sendHoverAnalytics(): void;
    componentDidRender(): void;
    componentDidUpdate(): void;
    private getTruncatedText;
    private openPopover;
    private closePopover;
    private delayedPopoverOpen;
    private renderPopover;
    render(): any;
}
