import { Sort, SortState, Search, ProductListing, SearchState, ProductListingState } from '@coveo/headless/commerce';
import { CSSResultGroup, LitElement } from 'lit';
import { InitializableComponent } from '../../../decorators/types';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-sort-dropdown` component renders a dropdown that the end user can interact with to select the criteria to use when sorting products.
 *
 * @part label - The "Sort by" label of the `<select>` element.
 * @part select-parent - The `<select>` element parent.
 * @part select - The `<select>` element of the dropdown list.
 * @part select-separator - The element separating the select from the icon.
 * @part placeholder - The dropdown placeholder for while the interface is initializing.
 *
 * @alpha
 */
export declare class AtomicCommerceSortDropdown extends LitElement implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private readonly dropdownId;
    sort: Sort;
    sortState: SortState;
    searchOrListing: Search | ProductListing;
    searchOrListingState?: SearchState | ProductListingState;
    error: Error;
    static styles: CSSResultGroup;
    initialize(): void;
    private select;
    private sortLabelTemplate;
    private sortSelectTemplate;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atomic-commerce-sort-dropdown': AtomicCommerceSortDropdown;
    }
}
