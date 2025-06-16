import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightSearchBox {
    bindings: InsightBindings;
    private searchBox;
    private id;
    private textAreaRef;
    private suggestionManager;
    private host;
    private searchBoxState;
    error: Error;
    private isExpanded;
    /**
     * Whether to prevent the user from triggering a search from the component.
     * Perfect for use cases where you need to disable the search conditionally, like when the input is empty.
     */
    disableSearch: boolean;
    /**
     * The number of query suggestions to display when interacting with the search box.
     */
    numberOfSuggestions: number;
    protected searchBoxAriaMessage: string;
    protected suggestionsAriaMessage: string;
    initialize(): void;
    private onSubmit;
    private onKeyDown;
    private triggerTextAreaChange;
    private renderSuggestion;
    private renderSuggestionItem;
    private renderPanel;
    private renderSuggestions;
    private getSearchInputLabel;
    private onFocus;
    private onInput;
    private announceNewActiveSuggestionToScreenReader;
    private announceNewSuggestionsToScreenReader;
    render(): any;
}
