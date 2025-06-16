import { InitializableComponent } from "../../../decorators/types";
import { Pagination, PaginationState, ProductListing, Search } from '@coveo/headless/commerce';
import { LitElement } from 'lit';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-pager` component enables users to navigate through paginated product results.
 *
 * @part buttons - The list of all buttons rendered by the component.
 * @part page-buttons - The list of all page buttons.
 * @part page-button - The individual page buttons.
 * @part active-page-button - The active page button.
 * @part previous-button - The "previous page" button.
 * @part next-button - The "next page" button.
 * @part previous-button-icon - The "previous page" button icon.
 * @part next-button-icon - The "next page" button icon.
 *
 * @event atomic/scrollToTop - Emitted when the user clicks the next or previous button, or a page button.
 * @alpha
 */
export declare class AtomicCommercePager extends LitElement implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    error: Error;
    private isAppLoaded;
    pagerState: PaginationState;
    /**
     * The maximum number of page buttons to display.
     */
    numberOfPages: number;
    /**
     * The SVG icon to use to display the Previous button.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    previousButtonIcon: string;
    /**
     * The SVG icon to use to display the Next button.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     */
    nextButtonIcon: string;
    pager: Pagination;
    listingOrSearch: ProductListing | Search;
    initialize(): void;
    private validateProps;
    private radioGroupName;
    render(): import("lit-html").TemplateResult<1>;
    private focusOnFirstResultAndScrollToTop;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-commerce-pager': AtomicCommercePager;
    }
}
