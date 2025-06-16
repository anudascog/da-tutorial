import { BreadcrumbManager, ProductListing, Search, Context, ContextState } from '@coveo/headless/commerce';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { CommerceBindings } from '../atomic-commerce-interface/atomic-commerce-interface';
/**
 * The `atomic-commerce-breadbox` component creates breadcrumbs that display a summary of the currently active facet values.
 *
 * @part container - The container of the whole component, list & label.
 * @part breadcrumb-list-container - The container of the list of breadcrumb buttons.
 * @part breadcrumb-list - The list of breadcrumb buttons.
 * @part breadcrumb-button - A single breadcrumb button.
 * @part breadcrumb-label - The breadcrumb label, associated with the facet.
 * @part breadcrumb-value - The breadcrumb formatted value.
 * @part breadcrumb-clear - The button to clear individual filters.
 * @part show-more - The button to display all breadcrumbs.
 * @part show-less - The button to display less breadcrumbs.
 * @part label - The "Filters" label.
 * @part clear - The button to clear all filters.
 *
 * @alpha
 */
export declare class AtomicCommerceBreadbox implements InitializableComponent<CommerceBindings> {
    bindings: CommerceBindings;
    private resizeObserver?;
    private showMore;
    private showLess;
    private lastRemovedBreadcrumbIndex;
    private numberOfBreadcrumbs;
    private numberOfCollapsedBreadcrumbs;
    private firstExpandedBreadcrumbIndex?;
    breadcrumbManager: BreadcrumbManager;
    private host;
    context: Context;
    contextState: ContextState;
    searchOrListing: Search | ProductListing;
    private breadcrumbManagerState;
    error: Error;
    private isCollapsed;
    private breadcrumbRemovedFocus?;
    private breadcrumbShowMoreFocus?;
    private breadcrumbShowLessFocus?;
    /**
     * This prop allows you to control the display depth
     * of the path by specifying the number of parent or ancestor
     * breadcrumbs links relative to the currently selected value.
     *
     * If the path size is equal to or less than the pathLimit, all values in
     * the path will be displayed without truncation.
     *
     * If the path size exceeds the pathLimit, it will truncate the path by
     * replacing the middle values with ellipses ('...').
     *
     * Minimum: `1`
     * @defaultValue `3`
     */
    pathLimit: number;
    initialize(): void;
    private validateProps;
    disconnectedCallback(): void;
    private get focusTargets();
    private get breadcrumbs();
    private hide;
    private show;
    private showAllBreadcrumbs;
    private hideOverflowingBreadcrumbs;
    private updateShowLessDisplay;
    private adaptBreadcrumbs;
    private get isOverflowing();
    private updateShowMoreValue;
    private getNumberFormatter;
    private valueForFacetType;
    private buildBreadcrumb;
    private renderBreadcrumbs;
    render(): any;
    componentDidRender(): void;
}
