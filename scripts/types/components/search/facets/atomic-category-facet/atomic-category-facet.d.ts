import { CategoryFacet, CategoryFacetState, CategoryFacetSortCriterion, SearchStatus, SearchStatusState, TabManagerState, TabManager } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * A facet is a list of values for a certain field occurring in the results, ordered using a configurable criteria (e.g., number of occurrences).
 * An `atomic-category-facet` displays a facet of values in a browsable, hierarchical fashion.
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
 */
export declare class AtomicCategoryFacet implements InitializableComponent {
    bindings: Bindings;
    facet: CategoryFacet;
    private dependenciesManager?;
    private resultIndexToFocusOnShowMore;
    searchStatus: SearchStatus;
    tabManager: TabManager;
    private host;
    facetState: CategoryFacetState;
    searchStatusState: SearchStatusState;
    tabManagerState: TabManagerState;
    error: Error;
    /**
     * Specifies a unique identifier for the facet.
     */
    facetId?: string;
    /**
     * The non-localized label for the facet.
     * Used in the `atomic-breadbox` component through the bindings store.
     */
    label: string;
    /**
     * The field whose values you want to display in the facet.
     */
    field: string;
    /**
     * The tabs on which the facet can be displayed. This property should not be used at the same time as `tabs-excluded`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-timeframe-facet tabs-included='["tabIDA", "tabIDB"]'></atomic-timeframe-facet>
     * ```
     * If you don't set this property, the facet can be displayed on any tab. Otherwise, the facet can only be displayed on the specified tabs.
     */
    tabsIncluded: string[] | string;
    /**
     * The tabs on which this facet must not be displayed. This property should not be used at the same time as `tabs-included`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-timeframe-facet tabs-excluded='["tabIDA", "tabIDB"]'></atomic-timeframe-facet>
     * ```
     * If you don't set this property, the facet can be displayed on any tab. Otherwise, the facet won't be displayed on any of the specified tabs.
     */
    tabsExcluded: string[] | string;
    /**
     * The number of values to request for this facet.
     * Also determines the number of additional values to request each time more values are shown.
     */
    numberOfValues: number;
    /**
     * Whether this facet should contain a search box.
     *
     */
    withSearch: boolean;
    /**
     * The sort criterion to apply to the returned facet values.
     * Possible values are 'alphanumeric' and 'occurrences'.
     * For this criterion to apply to the top-layer facet values, disable
     * [facet value ordering](https://docs.coveo.com/en/l1qf4156/#facet-value-ordering)
     * in your Dynamic Navigation Experience configuration.
     */
    sortCriteria: CategoryFacetSortCriterion;
    /**
     * The character that separates values of a multi-value field.
     *
     * *Note:* If you use the [example formatting](https://docs.coveo.com/en/atomic/latest/reference/components/atomic-category-facet/#usage-notes) for the associated multi-value field, you must set this value to `|` or the facet won't display properly.
     */
    delimitingCharacter: string;
    /**
     * The base path shared by all values for the facet.
     *
     * Specify the property as an array using a JSON string representation:
     * ```html
     *  <atomic-category-facet base-path='["first value", "second value"]' ></atomic-category-facet>
     * ```
     */
    basePath: string[] | string;
    /**
     * Whether to use basePath as a filter for the results.
     */
    filterByBasePath: boolean;
    /**
     * Specifies whether the facet is collapsed. When the facet is the child of an `atomic-facet-manager` component, the facet manager controls this property.
     */
    isCollapsed: boolean;
    /**
     * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the heading over the facet, from 1 to 6.
     */
    headingLevel: number;
    /**
     * Whether to exclude the parents of folded results when estimating the result count for each facet value.
     *
     *
     * Note: Resulting count is only an estimation, in some cases this value could be incorrect.
     */
    filterFacetCount: boolean;
    /**
     * The maximum number of results to scan in the index to ensure that the facet lists all potential facet values.
     * Note: A high injectionDepth may negatively impact the facet request performance.
     * Minimum: `0`
     * Default: `1000`
     */
    injectionDepth: number;
    /**
     * The required facets and values for this facet to be displayed.
     * Examples:
     * ```html
     * <atomic-facet facet-id="abc" field="objecttype" ...></atomic-facet>
     *
     * <!-- To show the facet when any value is selected in the facet with id "abc": -->
     * <atomic-category-facet
     *   depends-on-abc
     *   ...
     * ></atomic-category-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-category-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-category-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    private showLessFocus?;
    private showMoreFocus?;
    private headerFocus?;
    private activeValueFocus?;
    protected facetSearchAriaMessage: string;
    initialize(): void;
    private get focusTargets();
    disconnectedCallback(): void;
    private get isHidden();
    componentShouldUpdate(next: unknown, prev: unknown, propName: keyof AtomicCategoryFacet): boolean;
    private get hasParents();
    private initializeDependenciesManager;
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
}
