import { CategoryFacetState, CategoryFacet, SearchSummaryState, ProductListingSummaryState, Summary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * A facet is a list of values for a certain field occurring in the results, ordered using a configurable criteria (e.g., number of occurrences).
 * An `atomic-commerce-category-facet` displays a facet of values in a browsable, hierarchical fashion.
 *
 * @part facet - The wrapper for the entire facet.
 * @part placeholder - The placeholder shown before the first search is executed.
 *
 * @part label-button - The button that displays the label and allows to expand/collapse the facet.
 * @part label-button-icon - The label button icon.
 *
 * @part search-wrapper - The search box wrapper.
 * @part search-input - The search box input.
 * @part search-icon - The search box submit button.
 * @part search-clear-button - The button to clear the search box of input.
 * @part more-matches - The label indicating there are more matches for the current facet search query.
 * @part no-matches - The label indicating there are no matches for the current facet search query.
 * @part matches-query - The highlighted query inside the matches labels.
 * @part search-results - The search results container.
 * @part search-result - The search result value.
 * @part search-result-path - The search result path.
 * @part search-highlight - The highlighted query inside the facet values.
 *
 * @part parents - The container surrounding the whole hierarchy of values.
 * @part sub-parents - The container surrounding a sub-hierarchy of values.
 * @part values - The container surrounding either the children of the active value or the values at the base.
 * @part all-categories-button - The "View all" button displayed first within the parents.
 * @part parent-button - The clickable parent button displayed first within sub-parents.
 * @part active-parent - The clickable active parent displayed first within the last sub-parents.
 * @part value-link - The clickable value displayed first within values.
 * @part back-arrow - The back arrow displayed before the clickable parents.
 * @part value-label - The facet value label within a value button.
 * @part value-count - The facet value count within a value button.
 * @part leaf-value - A facet value with no child value.
 * @part node-value - A facet value with child values.
 *
 * @part show-more - The show more results button.
 * @part show-less - The show less results button.
 * @part show-more-less-icon - The icons of the show more & show less buttons.
 *
 * @alpha
 */
export declare class AtomicCommerceCategoryFacet implements InitializableComponent<Bindings> {
    bindings: Bindings;
    private host;
    /**
     * The summary controller instance.
     */
    summary: Summary<SearchSummaryState | ProductListingSummaryState>;
    /**
     * The category facet controller instance.
     */
    facet: CategoryFacet;
    /**
     * Specifies whether the facet is collapsed.
     */
    isCollapsed: boolean;
    /**
     * The field identifier for this facet.
     */
    field?: string;
    facetState: CategoryFacetState;
    summaryState: SearchSummaryState | ProductListingSummaryState;
    error: Error;
    private resultIndexToFocusOnShowMore;
    private showLessFocus?;
    private showMoreFocus?;
    private headerFocus?;
    private activeValueFocus?;
    private unsubscribeFacetController?;
    protected facetSearchAriaMessage: string;
    initialize(): void;
    private get displayName();
    private get focusTargets();
    disconnectedCallback(): void;
    connectedCallback(): void;
    private get isHidden();
    componentShouldUpdate(next: unknown, prev: unknown, propName: keyof AtomicCommerceCategoryFacet): boolean;
    private get hasParents();
    private renderHeader;
    private renderSearchInput;
    private renderValuesTree;
    private renderChild;
    private renderChildren;
    private renderSearchResults;
    private renderMatches;
    private renderShowMoreLess;
    private isCategoryFacetState;
    render(): any;
    private ensureSubscribed;
}
