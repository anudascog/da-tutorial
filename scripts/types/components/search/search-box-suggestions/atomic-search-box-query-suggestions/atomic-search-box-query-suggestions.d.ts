/**
 * The `atomic-search-box-query-suggestions` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of query suggestion behavior.
 */
export declare class AtomicSearchBoxQuerySuggestions {
    private bindings;
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
    maxWithQuery?: number;
    /**
     * The maximum number of suggestions that will be displayed initially when the input field is empty.
     */
    maxWithoutQuery?: number;
    componentWillLoad(): void;
    private initialize;
    private renderItems;
    private renderItem;
    render(): any;
}
