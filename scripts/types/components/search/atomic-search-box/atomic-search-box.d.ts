import { SearchBox, StandaloneSearchBox } from '@coveo/headless';
import { EventEmitter } from '../../../stencil-public-runtime';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { RedirectionPayload } from '../../common/search-box/redirection-payload';
import { SearchBoxSuggestionsEvent } from '../../common/suggestions/suggestions-common';
import { Bindings } from '../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-search-box` component creates a search box with built-in support for suggestions.
 *
 * @slot default - The default slot where you can add child components to the search box.
 *
 * @part wrapper - The search box wrapper.
 * @part input - The search box input.
 * @part loading - The search box loading animation.
 * @part clear-button - The button to clear the search box of input.
 * @part clear-icon - The clear button's icon.
 * @part submit-button - The search box submit button.
 * @part submit-icon - The search box submit button's icon.
 * @part suggestions - A list of suggested query corrections on each panel.
 * @part suggestions-left - A list of suggested query corrections on the left panel.
 * @part suggestions-right - A list of suggested query corrections on the right panel.
 * @part suggestions-wrapper - The wrapper that contains suggestion panels.
 * @part suggestions-single-list - The wrapper that contains 1 suggestion list.
 * @part suggestions-double-list - The wrapper that contains 2 suggestion lists.
 * @part suggestion - A suggested query correction.
 * @part active-suggestion - The currently active suggestion.
 * @part suggestion-divider - An item in the list that separates groups of suggestions.
 * @part suggestion-with-query - An item in the list that will update the search box query.
 *
 * @part query-suggestion-item - A suggestion from the `atomic-search-box-query-suggestions` component.
 * @part query-suggestion-content - The contents of a suggestion from the `atomic-search-box-query-suggestions` component.
 * @part query-suggestion-icon - The icon of a suggestion from the `atomic-search-box-query-suggestions` component.
 * @part query-suggestion-text - The text of a suggestion from the `atomic-search-box-query-suggestions` component.
 *
 * @part recent-query-item - A suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-content - The contents of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-icon - The icon of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-text - The text of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-text-highlight - The highlighted portion of the text of a suggestion from the `atomic-search-box-recent-queries` component.
 * @part recent-query-title-item - The clear button above suggestions from the `atomic-search-box-recent-queries` component.
 * @part recent-query-title-content - The contents of the clear button above suggestions from the `atomic-search-box-recent-queries` component.
 * @part recent-query-title - The "recent searches" text of the clear button above suggestions from the `atomic-search-box-recent-queries` component.
 * @part recent-query-clear - The "clear" text of the clear button above suggestions from the `atomic-search-box-recent-queries` component.
 *
 * @part instant-results-item - An instant result rendered by an `atomic-search-box-instant-results` component.
 * @part instant-results-show-all - The clickable suggestion to show all items for the current instant results search rendered by an `atomic-search-box-instant-results` component.
 * @part instant-results-show-all-button - The button inside the clickable suggestion from the `atomic-search-box-instant-results` component.
 */
export declare class AtomicSearchBox implements InitializableComponent<Bindings> {
    bindings: Bindings;
    private searchBox;
    private searchBoxSuggestionEventsQueue;
    private id;
    private textAreaRef;
    private suggestionManager;
    private host;
    private searchBoxState;
    error: Error;
    private isExpanded;
    /**
     * The amount of queries displayed when the user interacts with the search box.
     * By default, a mix of query suggestions and recent queries will be shown.
     * You can configure those settings using the following components as children:
     *  - atomic-search-box-query-suggestions
     *  - atomic-search-box-recent-queries
     */
    numberOfQueries: number;
    /**
     * Defining this option makes the search box standalone (see [Use a
     * Standalone Search Box](https://docs.coveo.com/en/atomic/latest/usage/ssb/)).
     *
     * This option defines the default URL the user should be redirected to, when a query is submitted.
     * If a query pipeline redirect is triggered, it will redirect to that URL instead
     * (see [query pipeline triggers](https://docs.coveo.com/en/1458)).
     */
    redirectionUrl?: string;
    /**
     * The timeout for suggestion queries, in milliseconds.
     * If a suggestion query times out, the suggestions from that particular query won't be shown.
     */
    suggestionTimeout: number;
    /**
     * The delay for suggestion queries on input, in milliseconds.
     *
     * The suggestion request will be delayed until the end user stops typing for at least the specified amount of time.
     *
     * This delay is used to avoid sending too many requests to the Coveo Platform when the user is typing, as well as reducing potential input lag on low end devices.
     * A higher delay will reduce input lag, at the cost of suggestions freshness.
     */
    suggestionDelay: number;
    /**
     * Whether to prevent the user from triggering searches and query suggestions from the component.
     * Perfect for use cases where you need to disable the search conditionally.
     * For the specific case when you need to disable the search based on the length of the query, refer to {@link minimumQueryLength}.
     */
    disableSearch: boolean;
    /**
     * The minimum query length required to enable search.
     * For example, to disable the search for empty queries, set this to `1`.
     */
    minimumQueryLength: number;
    /**
     * Whether to clear all active query filters when the end user submits a new query from the search box.
     * Setting this option to "false" is not recommended & can lead to an increasing number of queries returning no results.
     */
    clearFilters: boolean;
    /**
     * Whether to interpret advanced [Coveo Cloud query syntax](https://docs.coveo.com/en/1814/) in the query.
     * You should only enable query syntax in the search box if you have good reasons to do so, as it
     * requires end users to be familiar with Coveo Cloud query syntax, otherwise they will likely be surprised
     * by the search box behaviour.
     *
     * When the `redirection-url` property is set and redirects to a page with more `atomic-search-box` components, all `atomic-search-box` components need to have the same `enable-query-syntax` value.
     */
    enableQuerySyntax: boolean;
    /**
     * Event that is emitted when a standalone search box redirection is triggered. By default, the search box will directly change the URL and redirect accordingly, so if you want to handle the redirection differently, use this event.
     *
     * Example:
     * ```html
     * <script>
     *   document.querySelector('atomic-search-box').addEventListener((e) => {
     *     e.preventDefault();
     *     // handle redirection
     *   });
     * </script>
     * ...
     * <atomic-search-box redirection-url="/search"></atomic-search-box>
     * ```
     */
    redirect: EventEmitter<RedirectionPayload>;
    protected searchBoxAriaMessage: string;
    protected suggestionsAriaMessage: string;
    private isStandaloneSearchBox;
    initialize(): void;
    private updateRedirectionUrl;
    private registerNewSearchBoxController;
    private initializeSearchboxController;
    componentWillUpdate(): void;
    disconnectedCallback: () => void;
    registerSuggestions(event: CustomEvent<SearchBoxSuggestionsEvent<SearchBox | StandaloneSearchBox>>): void;
    private registerSearchboxSuggestionEvents;
    watchRedirectionUrl(): void;
    private initializeSuggestionManager;
    private get suggestionBindings();
    private get partialSuggestionBindings();
    private get searchBoxOptions();
    private updateBreakpoints;
    private onInput;
    private onFocus;
    private onSubmit;
    private onKeyDown;
    private triggerTextAreaChange;
    private renderSuggestion;
    private renderPanel;
    private get shouldShowSuggestions();
    private renderSuggestions;
    private renderTextBox;
    private renderAbsolutePositionSpacer;
    private isSearchDisabledForEndUser;
    private getSearchInputLabel;
    private announceNewActiveSuggestionToScreenReader;
    private announceNewSuggestionsToScreenReader;
    render(): any;
}
