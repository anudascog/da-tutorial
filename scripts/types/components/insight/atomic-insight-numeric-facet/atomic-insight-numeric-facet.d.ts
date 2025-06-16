import { NumericFacet as InsightNumericFacet, NumericFacetState as InsightNumericFacetState, NumericFilter as InsightNumericFilter, NumericFilterState as InsightNumericFilterState, RangeFacetRangeAlgorithm as InsightRangeFacetRangeAlgorithm, RangeFacetSortCriterion as InsightRangeFacetSortCriterion, SearchStatus as InsightSearchStatus, SearchStatusState as InsightSearchStatusState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { NumberInputType } from '../../common/facets/facet-number-input/number-input-type';
import { NumberFormatter } from '../../common/formats/format-common';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightNumericFacet implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    facetForRange?: InsightNumericFacet;
    facetForInput?: InsightNumericFacet;
    filter?: InsightNumericFilter;
    searchStatus: InsightSearchStatus;
    private manualRanges;
    private dependenciesManager?;
    private host;
    private formatter;
    facetState: InsightNumericFacetState;
    filterState?: InsightNumericFilterState;
    searchStatusState: InsightSearchStatusState;
    error: Error;
    facetForInputState?: InsightNumericFacetState;
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
     * The number of values to request for this facet, when there are no manual ranges.
     * If the number of values is 0, no ranges will be displayed.
     */
    numberOfValues: number;
    /**
     * Whether this facet should contain an input allowing users to set custom ranges.
     * Depending on the field, the input can allow either decimal or integer values.
     */
    withInput?: NumberInputType;
    /**
     * The sort criterion to apply to the returned facet values.
     * Possible values are 'ascending' and 'descending'.
     */
    sortCriteria: InsightRangeFacetSortCriterion;
    /**
     * The algorithm that's used for generating the ranges of this facet when they aren't manually defined. The default value of `"equiprobable"` generates facet ranges which vary in size but have a more balanced number of results within each range. The value of `"even"` generates equally sized facet ranges across all of the results.
     */
    rangeAlgorithm: InsightRangeFacetRangeAlgorithm;
    /**
     * Whether to display the facet values as checkboxes (multiple selection) or links (single selection).
     * Possible values are 'checkbox' and 'link'.
     */
    displayValuesAs: 'checkbox' | 'link';
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
     * <atomic-insight-numeric-facet
     *   depends-on-abc
     *   ...
     * ></atomic-insight-numeric-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-insight-numeric-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-insight-numeric-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    private headerFocus?;
    initialize(): void;
    private get focusTarget();
    disconnectedCallback(): void;
    private initializeFacetForInput;
    private initializeFacetForRange;
    private initializeFilter;
    private initializeDependenciesManager;
    private initializeSearchStatus;
    private registerFacetToStore;
    setFormat(event: CustomEvent<NumberFormatter>): void;
    applyNumberInput(): void;
    render(): any;
    private renderValues;
    private get numberOfSelectedValues();
    private get shouldRenderValues();
    private get hasInputRange();
    private get valuesToRender();
    private get shouldRenderInput();
    private computeFacetId;
    private get isHidden();
    private get shouldRenderFacet();
    private get hasValues();
    private get enabled();
    private validateProps;
}
