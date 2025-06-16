import { Summary, SearchSummaryState, ProductListingSummaryState, Sort, SortState, FacetGenerator, FacetGeneratorState, BreadcrumbManager, BreadcrumbManagerState } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-refine-modal` is automatically created as a child of the `atomic-commerce-search-interface` when the `atomic-commerce-refine-toggle` is initialized.
 *
 * When the modal is opened, the class `atomic-modal-opened` is added to the interface element and the body, allowing further customization.
 *
 * @part container - The modal's outermost container.
 * @part header-wrapper - The wrapper around the header.
 * @part header - The header of the modal, containing the title.
 * @part title - The title of the modal.
 * @part close-button - The button in the header that closes the modal.
 * @part close-icon - The icon of the close button.
 * @part header-ruler - The horizontal ruler underneath the header.
 * @part body-wrapper - The wrapper around the body.
 * @part body - The body of the modal, between the header and the footer.
 * @part content - The wrapper around the content inside the body of the modal.
 * @part section-title - The title for each section.
 * @part section-sort-title - The title for the sort section.
 * @part section-filters-title - The title for the filters section.
 * @part select-wrapper - The wrapper around the select element, used to position the icon.
 * @part select - The `<select>` element of the dropdown list.
 * @part select-icon-wrapper - The wrapper around the sort icon that's used to align it.
 * @part select-icon - The select dropdown's sort icon.
 * @part filter-section - The section containing facets and the "filters" title.
 * @part filter-clear-all - The button that resets all actively selected facet values.
 * @part footer-wrapper - The wrapper with a shadow or background color around the footer.
 * @part footer - The footer of the modal.
 * @part footer-content - The wrapper around the content inside the footer of the modal, containing the button to view results.
 * @part footer-button - The button in the footer that closes the modal.
 * @part footer-button-text - The text inside the button in the footer that closes the modal.
 * @part footer-button-count - The count inside the button in the footer that closes the modal.
 *
 * @alpha
 */
export declare class AtomicCommerceRefineModal implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    host: HTMLElement;
    error: Error;
    openButton?: HTMLElement;
    isOpen: boolean;
    summary: Summary;
    summaryState: SearchSummaryState | ProductListingSummaryState;
    sort: Sort;
    sortState: SortState;
    facetGenerator: FacetGenerator;
    facetGeneratorState: FacetGeneratorState;
    breadcrumbManager: BreadcrumbManager;
    breadcrumbManagerState: BreadcrumbManagerState;
    /**
     * The number of expanded facets inside the refine modal.
     * Remaining facets are automatically collapsed.
     *
     * Using the value `0` collapses all facets.
     */
    collapseFacetsAfter: number;
    watchEnabled(isOpen: boolean): void;
    initialize(): void;
    private createFacetSlot;
    private onSelectSortOption;
    private renderSort;
    private renderFilters;
    render(): any;
    componentDidLoad(): void;
}
