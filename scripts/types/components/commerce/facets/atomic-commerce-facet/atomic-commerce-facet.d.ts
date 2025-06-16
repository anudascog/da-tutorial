import { ProductListingSummaryState, RegularFacet, RegularFacetState, SearchSummaryState, Summary } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { CommerceBindings as Bindings } from '../../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-facet` component renders a commerce facet that the end user can interact with to filter products.
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
 *
 * @alpha
 */
export declare class AtomicCommerceFacet implements InitializableComponent<Bindings> {
    bindings: Bindings;
    private host;
    /**
     * The Summary controller instance.
     */
    summary: Summary<SearchSummaryState | ProductListingSummaryState>;
    /**
     * The facet controller instance.
     */
    facet: RegularFacet;
    /**
     * Specifies whether the facet is collapsed.
     */
    isCollapsed: boolean;
    /**
     * The field identifier for this facet.
     */
    field?: string;
    facetState: RegularFacetState;
    summaryState: SearchSummaryState | ProductListingSummaryState;
    error: Error;
    private showLessFocus?;
    private showMoreFocus?;
    private headerFocus?;
    private unsubscribeFacetController?;
    protected facetSearchAriaMessage: string;
    initialize(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    componentShouldUpdate(next: unknown, prev: unknown, propName: keyof AtomicCommerceFacet): boolean;
    render(): any;
    private renderBody;
    private renderValuesContainer;
    private renderSearchResults;
    private renderValues;
    private renderShowMoreLess;
    private renderMatches;
    private get activeValues();
    private get displayName();
    private get facetValueProps();
    private get isHidden();
    private initPopover;
    private initAriaLive;
    private get facetInfo();
    private get focusTargets();
    private isFacetState;
    private ensureSubscribed;
}
