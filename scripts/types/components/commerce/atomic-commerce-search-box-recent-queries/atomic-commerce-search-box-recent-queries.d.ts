import { SearchBoxSuggestionsComponent } from "../../../decorators/types";
import { SearchBox } from '@coveo/headless/commerce';
import { LitElement } from 'lit';
import { SearchBoxSuggestions, SearchBoxSuggestionsBindings } from '../../common/suggestions/suggestions-common';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-search-box-recent-queries` component can be added as a child of an `atomic-commerce-search-box` component, allowing for the configuration of recent query suggestions.
 *
 * @alpha
 */
export declare class AtomicCommerceSearchBoxRecentQueries extends LitElement implements SearchBoxSuggestionsComponent<CommerceBindings> {
    bindings: SearchBoxSuggestionsBindings<SearchBox, CommerceBindings>;
    private recentQueriesList;
    private storage;
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
     * The maximum number of suggestions to display when the user types in the input field.
     */
    maxWithQuery: number;
    /**
     * The maximum number of suggestions to display initially, when the input field is empty.
     */
    maxWithoutQuery?: number;
    connectedCallback(): void;
    initialize(): SearchBoxSuggestions;
    private retrieveLocalStorage;
    private updateLocalStorage;
    private warnUser;
    private disableFeature;
    private renderItems;
    private renderClear;
    private renderItem;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-commerce-search-box-recent-queries': AtomicCommerceSearchBoxRecentQueries;
    }
}
