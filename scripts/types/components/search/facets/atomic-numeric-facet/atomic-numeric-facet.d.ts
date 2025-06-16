import { NumericFacet, NumericFacetState, NumericFilter, NumericFilterState, RangeFacetRangeAlgorithm, RangeFacetSortCriterion, SearchStatus, SearchStatusState, TabManager, TabManagerState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { NumberInputType } from '../../../common/facets/facet-number-input/number-input-type';
import { NumberFormatter } from '../../../common/formats/format-common';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * A facet is a list of values for a certain field occurring in the results, ordered using a configurable criteria (e.g., ascending, descending).
 * An `atomic-numeric-facet` displays a facet of the results for the current query as numeric ranges.
 *
 * @part facet - The wrapper for the entire facet.
 * @part placeholder - The placeholder shown before the first search is executed.
 *
 * @part label-button - The button that displays the label and allows to expand/collapse the facet.
 * @part label-button-icon - The label button icon.
 * @part clear-button - The button that resets the actively selected facet values.
 * @part clear-button-icon - The clear button icon.
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

 * @part input-form - The form that comprises the labels, inputs, and 'apply' button for the custom numeric range.
 * @part label-start - The label for the starting value of the custom numeric range.
 * @part label-end - The label for the ending value of the custom numeric range.
 * @part input-start - The input for the starting value of the custom numeric range.
 * @part input-end - The input for the ending value of the custom numeric range.
 * @part input-apply-button - The apply button for the custom range.
 */
export declare class AtomicNumericFacet implements InitializableComponent {
    bindings: Bindings;
    facetForRange?: NumericFacet;
    facetForInput?: NumericFacet;
    filter: NumericFilter;
    searchStatus: SearchStatus;
    tabManager: TabManager;
    private host;
    private manualRanges;
    private formatter;
    private facetForRangeDependenciesManager?;
    private facetForInputDependenciesManager?;
    private filterDependenciesManager?;
    facetState: NumericFacetState;
    filterState?: NumericFilterState;
    searchStatusState: SearchStatusState;
    tabManagerState: TabManagerState;
    error: Error;
    facetForInputState?: NumericFacetState;
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
    sortCriteria: RangeFacetSortCriterion;
    /**
     * The algorithm that's used for generating the ranges of this facet when they aren't manually defined. The default value of `"equiprobable"` generates facet ranges which vary in size but have a more balanced number of results within each range. The value of `"even"` generates equally sized facet ranges across all of the results.
     */
    rangeAlgorithm: RangeFacetRangeAlgorithm;
    /**
     * Whether to display the facet values as checkboxes (multiple selection) or links (single selection).
     * Possible values are 'checkbox' and 'link'.
     */
    displayValuesAs: 'checkbox' | 'link';
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
     * <atomic-numeric-facet
     *   depends-on-abc
     *   ...
     * ></atomic-numeric-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-numeric-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-numeric-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    private headerFocus?;
    private get focusTarget();
    initialize(): void;
    disconnectedCallback(): void;
    private initializeSearchStatus;
    private initializeTabManager;
    private initializeFacetForInput;
    private initializeFacetForRange;
    private initializeFilter;
    private initializeDependenciesManager;
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
    private get enabled();
    private get isHidden();
    private get shouldRenderFacet();
    private get hasValues();
    private validateProps;
}
