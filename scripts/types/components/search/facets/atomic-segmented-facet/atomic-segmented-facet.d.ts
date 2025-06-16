import { Facet, FacetSortCriterion, FacetState, SearchStatus, SearchStatusState, TabManager, TabManagerState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-segmented-facet` displays a horizontal facet of the results for the current query.
 * @part segmented-container - The container that holds the segmented facets.
 * @part label - The facet value label.
 * @part values - The facet values container.
 * @part value-box - The facet value.
 * @part value-box-selected - The selected facet value.
 * @part placeholder - The placeholder displayed when the facet is loading.
 */
export declare class AtomicSegmentedFacet implements InitializableComponent {
    bindings: Bindings;
    searchStatus: SearchStatus;
    tabManager: TabManager;
    searchStatusState: SearchStatusState;
    tabManagerState: TabManagerState;
    facetState: FacetState;
    facet: Facet;
    error: Error;
    /**
     * Specifies a unique identifier for the facet.
     */
    facetId?: string;
    /**
     * The field whose values you want to display in the facet.
     */
    field: string;
    /**
     * The non-localized label for the facet.
     * Used in the `atomic-breadbox` component through the bindings store.
     */
    label?: string;
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
     * The number of values to request for this facet.
     * Also determines the number of additional values to request each time more values are shown.
     */
    numberOfValues: number;
    /**
     * The sort criterion to apply to the returned facet values.
     * Possible values are 'score', 'alphanumeric', 'alphanumericDescending', 'occurrences', alphanumericNatural', 'alphanumericNaturalDescending' and 'automatic'.
     */
    sortCriteria: FacetSortCriterion;
    /**
     * The required facets and values for this facet to be displayed.
     * Examples:
     * ```html
     * <atomic-segmented-facet facet-id="abc" field="objecttype" ...></atomic-segmented-facet>
     *
     * <!-- To show the facet when any value is selected in the facet with id "abc": -->
     * <atomic-segmented-facet
     *   depends-on-abc
     *   ...
     * ></atomic-segmented-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-segmented-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    /**
     * Specifies an explicit list of `allowedValues` in the Search API request. This list is in the form of a JSON string.
     *
     * If you specify a list of values for this option, the facet only uses these values (if they are available in
     * the current result set).
     *
     * Example:
     *
     * The following facet only uses the `Contact`, `Account`, and `File` values of the `objecttype` field. Even if the
     * current result set contains other `objecttype` values, such as `Message` or `Product`, the facet does not use
     * them.
     *
     * ```html
     * <atomic-segmented-facet field="objecttype" allowed-values='["Contact","Account","File"]'></atomic-segmented-facet>
     * ```
     *
     * The maximum amount of allowed values is 25.
     *
     * The default value is `undefined`, and the facet uses all available values for its `field` in the current result set.
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
     * <atomic-segmented-facet field="objecttype" custom-sort='["Contact","Account","File"]' sort-criteria='occurrences'></atomic-segmented-facet>
     * ```
     * The maximum amount of custom sort values is 25.
     *
     * The default value is `undefined`, and the facet values will be sorted using only the `sortCriteria`.
     */
    customSort: string[] | string;
    private dependenciesManager;
    initialize(): void;
    disconnectedCallback(): void;
    private renderValuesContainer;
    private renderValue;
    private renderValues;
    private renderLabel;
    private get facetOptions();
    render(): any;
}
