import { FacetResultsMustMatch } from '@coveo/headless';
import { Facet as InsightFacet, FacetSortCriterion as InsightFacetSortCriterion, FacetState as InsightFacetState, SearchStatus as InsightSearchStatus, SearchStatusState as InsightSearchStatusState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { InsightBindings } from '../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightFacet implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    facet: InsightFacet;
    searchStatus: InsightSearchStatus;
    dependsOn: {};
    private host;
    facetState: InsightFacetState;
    searchStatusState: InsightSearchStatusState;
    error: Error;
    /**
     * Specifies a unique identifier for the facet.
     */
    facetId?: string;
    /**
     * The non-localized label for the facet.
     */
    label: string;
    /**
     * The field whose values you want to display in the facet.
     */
    field: string;
    /**
     * The number of values to request for this facet.
     * Also determines the number of additional values to request each time more values are shown.
     */
    numberOfValues: number;
    /**
     * The sort criterion to apply to the returned facet values.
     * Possible values are 'score', 'alphanumeric', 'alphanumericDescending', 'occurrences', alphanumericNatural', 'alphanumericNaturalDescending' and 'automatic'.
     */
    sortCriteria: InsightFacetSortCriterion;
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
     * Whether to allow excluding values from the facet.
     */
    enableExclusion: boolean;
    private showLessFocus?;
    private showMoreFocus?;
    private headerFocus?;
    private facetConditionsManager?;
    protected facetSearchAriaMessage: string;
    initialize(): void;
    private get focusTargets();
    disconnectedCallback(): void;
    render(): any;
    private renderBody;
    private renderValuesContainer;
    private renderValues;
    private renderShowMoreLess;
    private get activeValues();
    private get facetValueProps();
    private initAriaLive;
    private initConditionManager;
    private initPopover;
    private get isHidden();
    private get facetInfo();
    private registerFacet;
}
