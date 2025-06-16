import { NumericFacet, NumericFacetState, ProductListingSummaryState, SearchSummaryState, Summary, Context, ContextState } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
import type { Range } from '../facet-number-input/atomic-commerce-facet-number-input';
/**
 * The `atomic-commerce-numeric-facet` component is responsible for rendering a commerce facet that allows the user to filter products using numeric ranges.
 *
 * @alpha
 */
export declare class AtomicCommerceNumericFacet implements InitializableComponent<Bindings> {
    bindings: Bindings;
    private host;
    facetState: NumericFacetState;
    summaryState: SearchSummaryState | ProductListingSummaryState;
    context: Context;
    contextState: ContextState;
    error: Error;
    private manualRanges;
    /**
     * The Summary controller instance.
     */
    summary: Summary<SearchSummaryState | ProductListingSummaryState>;
    /**
     * The numeric facet controller instance.
     */
    facet: NumericFacet;
    /**
     * Specifies whether the facet is collapsed.
     */
    isCollapsed: boolean;
    /**
     * The field identifier for this facet.
     */
    field?: string;
    private headerFocus?;
    private get focusTarget();
    private unsubscribeFacetController?;
    initialize(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get formatter();
    private registerFacetToStore;
    applyNumberInput({ detail }: CustomEvent<Range>): void;
    render(): any;
    private renderValues;
    private get displayName();
    private get numberOfSelectedValues();
    private get hasInputRange();
    private get shouldRenderValues();
    private get valuesToRender();
    private get shouldRenderInput();
    private get isHidden();
    private get shouldRenderFacet();
    private get hasValues();
    private ensureSubscribed;
}
