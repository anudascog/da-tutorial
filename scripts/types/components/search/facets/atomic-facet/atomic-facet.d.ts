import { Facet, FacetState, FacetSortCriterion, SearchStatus, SearchStatusState, FacetResultsMustMatch, TabManagerState, TabManager } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * A facet is a list of values for a certain field occurring in the results, ordered using a configurable criteria (e.g., number of occurrences).
 * An `atomic-facet` displays a facet of the results for the current query.
 *
 * @part facet - The wrapper for the entire facet.
 * @part placeholder - The placeholder shown before the first search is executed.
 *
 * @part label-button - The button that displays the label and allows to expand/collapse the facet.
 * @part label-button-icon - The label button icon.
 * @part clear-button - The button that resets the actively selected facet values.
 * @part clear-button-icon - The clear button icon.
 *
 * @part search-wrapper - The search box wrapper.
 * @part search-input - The search box input.
 * @part search-icon - The search box submit button.
 * @part search-clear-button - The button to clear the search box of input.
 * @part more-matches - The label indicating there are more matches for the current facet search query.
 * @part no-matches - The label indicating there are no matches for the current facet search query.
 * @part matches-query - The highlighted query inside the matches labels.
 * @part search-highlight - The highlighted query inside the facet values.
 *
 * @part values - The facet values container.
 * @part value-label - The facet value label, common for all displays.
 * @part value-count - The facet value count, common for all displays.
 *
 * @part value-checkbox - The facet value checkbox, available when display is 'checkbox'.
 * @part value-checkbox-checked - The checked facet value checkbox, available when display is 'checkbox'.
 * @part value-checkbox-label - The facet value checkbox clickable label, available when display is 'checkbox'.
 * @part value-checkbox-icon - The facet value checkbox icon, available when display is 'checkbox'.
 * @part value-link - The facet value when display is 'link'.
 * @part value-link-selected - The selected facet value when display is 'link'.
 * @part value-box - The facet value when display is 'box'.
 * @part value-box-selected - The selected facet value when display is 'box'.
 * @part value-exclude-button - The button to exclude a facet value, available when display is 'checkbox'.
 *
 * @part show-more - The show more results button.
 * @part show-less - The show less results button.
 * @part show-more-less-icon - The icons of the show more & show less buttons.
 */
export declare class AtomicFacet implements InitializableComponent {
    bindings: Bindings;
    facet: Facet;
    searchStatus: SearchStatus;
    tabManager: TabManager;
    private host;
    facetState: FacetState;
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
     *  <atomic-facet tabs-included='["tabIDA", "tabIDB"]'></atomic-facet>
     * ```
     * If you don't set this property, the facet can be displayed on any tab. Otherwise, the facet can only be displayed on the specified tabs.
     */
    tabsIncluded: string[] | string;
    /**
     * The tabs on which this facet must not be displayed. This property should not be used at the same time as `tabs-included`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-facet tabs-excluded='["tabIDA", "tabIDB"]'></atomic-facet>
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
     * Possible values are 'score', 'alphanumeric', 'alphanumericDescending', 'occurrences', alphanumericNatural', 'alphanumericNaturalDescending' and 'automatic'.
     */
    sortCriteria: FacetSortCriterion;
    /**
     * Specifies how a result must match the selected facet values.
     * Allowed values:
     * - `atLeastOneValue`: A result will match if at least one of the corresponding facet values is selected.
     * - `allValues`: A result will match if all corresponding facet values are selected.
     */
    resultsMustMatch: FacetResultsMustMatch;
    /**
     * Whether to display the facet values as checkboxes (multiple selection), links (single selection) or boxes (multiple selection).
     * Possible values are 'checkbox', 'link', and 'box'.
     */
    displayValuesAs: 'checkbox' | 'link' | 'box';
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
     * Whether to allow excluding values from the facet.
     */
    enableExclusion: boolean;
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
     * <atomic-facet
     *   depends-on-abc
     *   ...
     * ></atomic-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    /**
     * Specifies an explicit list of `allowedValues` in the Search API request, as a JSON string representation.
     *
     * If you specify a list of values for this option, the facet uses only these values (if they are available in
     * the current result set).
     *
     * Example:
     *
     * The following facet only uses the `Contact`, `Account`, and `File` values of the `objecttype` field. Even if the
     * current result set contains other `objecttype` values, such as `Message`, or `Product`, the facet does not use
     * those other values.
     *
     * ```html
     * <atomic-facet field="objecttype" allowed-values='["Contact","Account","File"]'></atomic-facet>
     * ```
     *
     * The maximum amount of allowed values is 25.
     *
     * Default value is `undefined`, and the facet uses all available values for its `field` in the current result set.
     */
    allowedValues: string[] | string;
    /**
     * Identifies the facet values that must appear at the top, in this order.
     * This parameter can be used in conjunction with the `sortCriteria` parameter.
     *
     * Facet values not part of the `customSort` list will be sorted according to the `sortCriteria`.
     *
     * Example:
     *
     * The following facet will sort the `Contact`, `Account`, and `File` values at the top of the list for the `objecttype` field.
     *
     * If there are more than these 3 values available, the rest of the list will be sorted using `occurrences`.
     *
     * ```html
     * <atomic-facet field="objecttype" custom-sort='["Contact","Account","File"]' sort-criteria='occurrences'></atomic-facet>
     * ```
     * The maximum amount of custom sort values is 25.
     *
     * The default value is `undefined`, and the facet values will be sorted using only the `sortCriteria`.
     */
    customSort: string[] | string;
    private showLessFocus?;
    private showMoreFocus?;
    private headerFocus?;
    private facetConditionsManager?;
    protected facetSearchAriaMessage: string;
    initialize(): void;
    disconnectedCallback(): void;
    componentShouldUpdate(next: FacetState, prev: FacetState, propName: keyof AtomicFacet): boolean;
    render(): any;
    private renderBody;
    private renderValuesContainer;
    private renderSearchResults;
    private renderValues;
    private renderShowMoreLess;
    private renderMatches;
    private get activeValues();
    private get facetOptions();
    private get facetValueProps();
    private get isHidden();
    private initConditionManager;
    private registerFacet;
    private initPopover;
    private initAriaLive;
    private get facetInfo();
    private get definedLabel();
    private get focusTargets();
    private isFacetState;
}
