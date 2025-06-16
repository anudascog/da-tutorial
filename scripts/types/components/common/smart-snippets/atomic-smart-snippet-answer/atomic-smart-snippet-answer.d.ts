/**
 * @part answer - The container displaying the full document excerpt.
 * @internal
 */
export declare class AtomicSmartSnippetAnswer {
    htmlContent: string;
    innerStyle?: string;
    host: HTMLElement;
    private answerSizeUpdated;
    private selectInlineLink;
    private beginDelayedSelectInlineLink;
    private cancelPendingSelectInlineLink;
    private wrapperElement?;
    private isRendering;
    private resizeObserver;
    componentWillRender(): void;
    componentDidRender(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    setWrapperElement(element: HTMLElement): void;
    private get sanitizedStyle();
    private emitCurrentHeight;
    private bindAnalyticsToLink;
    private bindAnalyticsToLinks;
    private renderStyle;
    private renderContent;
    render(): any;
}
