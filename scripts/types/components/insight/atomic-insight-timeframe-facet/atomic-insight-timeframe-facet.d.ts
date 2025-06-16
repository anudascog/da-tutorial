import { DateFacet as InsightDateFacet, DateFacetState as InsightDateFacetState, DateFilter as InsightDateFilter, DateFilterState as InsightDateFilterState, SearchStatus as InsightSearchStatus, SearchStatusState as InsightSearchStatusState, RangeFacetSortCriterion as InsightRangeFacetSortCriterion } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightTimeframeFacet implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    facetForDateRange?: InsightDateFacet;
    facetForDatePicker?: InsightDateFacet;
    private timeframeFacetCommon?;
    filter?: InsightDateFilter;
    searchStatus: InsightSearchStatus;
    private host;
    facetState: InsightDateFacetState;
    facetForDatePickerState?: InsightDateFacetState;
    filterState?: InsightDateFilterState;
    searchStatusState: InsightSearchStatusState;
    error: Error;
    /**
     * Specifies a unique identifier for the facet.
     */
    facetId?: string;
    /**
     * The non-localized label for the facet.
     * Used in the atomic-breadbox component through the bindings store.
     */
    label: string;
    /**
     * The field whose values you want to display in the facet.
     */
    field: string;
    /**
     * Whether this facet should contain an datepicker allowing users to set custom ranges.
     */
    withDatePicker: boolean;
    /**
     * Specifies if the facet is collapsed.
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
     * <atomic-insight-facet facet-id="abc" field="objecttype" ...></atomic-insight-facet>
     *
     * <!-- To show the facet when any value is selected in the facet with id "abc": -->
     * <atomic-insight-timeframe-facet
     *   depends-on-abc
     *   ...
     * ></atomic-insight-timeframe-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-insight-timeframe-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-insight-timeframe-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    /**
     * The sort criterion to apply to the returned facet values.
     * Possible values are 'ascending' and 'descending'.
     */
    sortCriteria: InsightRangeFacetSortCriterion;
    private headerFocus?;
    initialize(): void;
    private get focusTarget();
    disconnectedCallback(): void;
    private initializeFacetForDatePicker;
    private initializeFacetForDateRange;
    private initializeFilter;
    applyDateInput(): void;
    render(): any;
}
