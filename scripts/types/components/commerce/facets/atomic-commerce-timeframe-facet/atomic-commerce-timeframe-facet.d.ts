import { DateFacet, DateFilterRange, DateFacetState, SearchSummaryState, ProductListingSummaryState, Summary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * A facet is a list of values for a certain field occurring in the results.
 * An `atomic-commerce-timeframe-facet` displays a facet of the results for the current query as date intervals.
 *
 * @alpha
 */
export declare class AtomicCommerceTimeframeFacet implements InitializableComponent<Bindings> {
    bindings: Bindings;
    private host;
    /**
     * The summary controller instance.
     */
    summary: Summary<SearchSummaryState | ProductListingSummaryState>;
    /**
     * The date facet controller instance.
     */
    facet: DateFacet;
    /**
     * Specifies whether the facet is collapsed.
     */
    isCollapsed: boolean;
    /**
     * The field identifier for this facet.
     */
    field?: string;
    facetState: DateFacetState;
    summaryState: SearchSummaryState | ProductListingSummaryState;
    error: Error;
    private inputRange?;
    private headerFocus?;
    private get displayName();
    private get focusTarget();
    private unsubscribeFacetController?;
    initialize(): void;
    connectedCallback(): void;
    applyDateInput({ detail }: CustomEvent<DateFilterRange>): void;
    private get valuesToRender();
    private get shouldRenderValues();
    private get shouldRenderFacet();
    private get shouldRenderInput();
    private get hasValues();
    private get numberOfSelectedValues();
    private get hasInputRange();
    disconnectedCallback(): void;
    private get isHidden();
    private resetRange;
    private registerFacetToStore;
    private formatFacetValue;
    private renderValues;
    private renderValue;
    private renderValuesContainer;
    private renderHeader;
    private renderDateInput;
    render(): any;
    private ensureSubscribed;
}
