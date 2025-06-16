import { SearchBoxSuggestions, SearchBoxSuggestionsBindings } from "../../common/suggestions/suggestions-common";
import { SearchBoxSuggestionsComponent } from "../../../decorators/types";
import { SearchBox } from '@coveo/headless/commerce';
import { LitElement } from 'lit';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-search-box-query-suggestions` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of query suggestion behavior.
 * @alpha
 */
export declare class AtomicCommerceSearchBoxQuerySuggestions extends LitElement implements SearchBoxSuggestionsComponent<CommerceBindings> {
    bindings: SearchBoxSuggestionsBindings<SearchBox, CommerceBindings>;
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
    connectedCallback(): void;
    initialize(): SearchBoxSuggestions;
    private renderItems;
    private renderItem;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-commerce-search-box-query-suggestions': AtomicCommerceSearchBoxQuerySuggestions;
    }
}
