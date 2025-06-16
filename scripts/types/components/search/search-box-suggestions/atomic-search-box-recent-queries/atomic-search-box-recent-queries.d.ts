/**
 * The `atomic-search-box-recent-queries` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of recent query suggestions.
 */
export declare class AtomicSearchBoxRecentQueries {
    private bindings;
    private recentQueriesList;
    private storage;
    private host;
    error: Error;
    /**
     * The SVG icon to display.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    icon?: string;
    /**
     * The maximum number of suggestions that will be displayed if the user has typed something into the input field.
     */
    maxWithQuery: number;
    /**
     * The maximum number of suggestions that will be displayed initially when the input field is empty.
     */
    maxWithoutQuery?: number;
    componentWillLoad(): void;
    private renderIcon;
    private initialize;
    private retrieveLocalStorage;
    private updateLocalStorage;
    private warnUser;
    private disableFeature;
    private renderItems;
    private renderClear;
    private renderItem;
    render(): any;
}
