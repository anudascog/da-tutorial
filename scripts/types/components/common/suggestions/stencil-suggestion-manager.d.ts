import { SearchBoxSuggestionElement, SearchBoxSuggestionsBindings, SearchBoxSuggestionsEvent } from './suggestions-common';
/**
 * List of suggestions that will be displayed along other lists (e.g recent queries) when the search box's input is selected.
 */
export interface SearchBoxSuggestions {
    /**
     * The search box will sort the position of suggestions using this value, the lowest value being first.
     * By default, the DOM position will be used.
     */
    position: number;
    /**
     * Whether the suggestions should be listed in the right or left panel. By default, the suggestions are listed in the right panel.
     */
    panel?: 'left' | 'right';
    /**
     * Method that returns the list of elements which will be rendered in the list of suggestions.
     */
    renderItems(): SearchBoxSuggestionElement[];
    /**
     * Hook called when the user changes the search box's input value. This can lead to all the query suggestions being updated.
     */
    onInput?(): Promise<unknown> | void;
    /**
     * Hook called when the current suggested query changes as the user navigates the list of suggestions.
     * This is used for instant results, which are rendered based on the current suggested query.
     * @param q The new current suggested query.
     */
    onSuggestedQueryChange?(q: string): Promise<unknown> | void;
}
interface SearchBoxProps {
    getSearchBoxValue: () => string;
    updateQuery: (suggestedQuery: string) => void;
    getSuggestionTimeout: () => number;
    getNumberOfSuggestionsToDisplay: () => number;
    getSuggestionDelay: () => number;
    getLogger: () => Pick<typeof console, 'warn'>;
    getHost: () => HTMLElement;
}
export declare class SuggestionManager<SearchBoxController> {
    private ownerSearchBoxProps;
    suggestions: SearchBoxSuggestions[];
    leftSuggestionElements: SearchBoxSuggestionElement[];
    rightSuggestionElements: SearchBoxSuggestionElement[];
    leftPanel: HTMLElement | undefined;
    rightPanel: HTMLElement | undefined;
    triggerSuggestions: () => Promise<void>;
    activeDescendant: string;
    suggestedQuery: string;
    keyboardActiveDescendant: string;
    private queryDataAttribute;
    private suggestionEvents;
    private previousActiveDescendantElement;
    private leftSuggestions;
    private rightSuggestions;
    constructor(ownerSearchBoxProps: SearchBoxProps);
    get partialSuggestionBindings(): Pick<SearchBoxSuggestionsBindings<SearchBoxController>, 'suggestedQuery' | 'clearSuggestions' | 'triggerSuggestions' | 'getSuggestions' | 'getSuggestionElements'>;
    get activeDescendantElement(): HTMLElement | null;
    onSubmit(): void;
    updateActiveDescendant(id?: string): void;
    updateKeyboardActiveDescendant(id?: string): void;
    clickOnActiveElement(): void;
    isRightPanelInFocus(): boolean;
    initializeSuggestions(bindings: SearchBoxSuggestionsBindings<SearchBoxController>): void;
    registerSuggestionsFromEvent(event: CustomEvent<SearchBoxSuggestionsEvent<SearchBoxController>>, bindings: SearchBoxSuggestionsBindings<SearchBoxController>): void;
    registerSuggestions(suggestions: SearchBoxSuggestions): void;
    get isDoubleList(): boolean;
    focusPanel(side: 'left' | 'right'): void;
    clearSuggestions(): void;
    focusNextValue(): void;
    focusValue(value: HTMLElement): void;
    onSuggestionMouseOver(item: SearchBoxSuggestionElement, side: 'left' | 'right', id: string): void;
    onSuggestionClick(item: SearchBoxSuggestionElement, e: Event): void;
    get hasSuggestions(): boolean;
    get allSuggestionElements(): SearchBoxSuggestionElement[];
    focusPreviousValue(): void;
    get hasActiveDescendant(): boolean;
    private executeQuerySuggestion;
    private get lastValue();
    private get previousOrLastValue();
    private sortSuggestions;
    private get nextOrFirstValue();
    private get firstValue();
    private get panelInFocus();
    private scrollActiveDescendantIntoView;
    private updateQueryFromSuggestion;
    private updateOwnerSearchboxQuery;
    private updateSuggestedQuery;
    private updateSuggestionElements;
    forceUpdate(): void;
    private isPanelInFocus;
    private getAndFilterLeftSuggestionElements;
    private getSuggestionElements;
    private updateDescendants;
    private clearSuggestionElements;
}
export {};
