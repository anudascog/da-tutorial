import { NumericFacet, NumericFacetState, SearchStatus, SearchStatusState, TabManager, TabManagerState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * A facet is a list of values for a certain field occurring in the results, ordered using a configurable criteria (e.g., number of occurrences).
 * An `atomic-rating-facet` displays a facet of the results for the current query as ratings.
 * It only supports numeric fields.
 *
 * @part facet - The wrapper for the entire facet.
 * @part placeholder - The placeholder shown before the first search is executed.
 *
 * @part label-button - The button that displays the label and toggles to expand or collapse the facet.
 * @part label-button-icon - The label button icon.
 * @part clear-button - The button that resets the actively selected facet values.
 * @part clear-button-icon - The clear button icon.
 *
 * @part values - The facet values container.
 * @part value-count - The facet value count, common for all displays.
 * @part value-rating - The facet value rating, common for all displays.
 * @part value-rating-icon - The individual star icons used in the rating display.
 *
 * @part value-checkbox - The facet value checkbox, available when display is 'checkbox'.
 * @part value-checkbox-checked - The checked facet value checkbox, available when display is 'checkbox'.
 * @part value-checkbox-label - The facet value checkbox clickable label, available when display is 'checkbox'.
 * @part value-checkbox-icon - The facet value checkbox icon, available when display is 'checkbox'.
 * @part value-link - The facet value when display is 'link'.
 * @part value-link-selected - The selected facet value when display is 'link'.
 */
export declare class AtomicRatingFacet implements InitializableComponent {
    bindings: Bindings;
    facet: NumericFacet;
    private dependenciesManager?;
    searchStatus: SearchStatus;
    tabManager: TabManager;
    private host;
    facetState: NumericFacetState;
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
     * The number of options to display in the facet. If `maxValueInIndex` isn't specified, it will be assumed that this is also the maximum number of rating icons.
     */
    numberOfIntervals: number;
    /**
     * The maximum value in the field's index and the number of rating icons to display in the facet. If not assigned a value, this property will default to the same value as `numberOfIntervals`.
     */
    maxValueInIndex: number;
    /**
     * The minimum value of the field.
     */
    minValueInIndex: number;
    /**
     * Whether to display the facet values as checkboxes (multiple selection) or links (single selection).
     * Possible values are 'checkbox' and 'link'.
     */
    displayValuesAs: 'checkbox' | 'link';
    /**
     * The SVG icon to use to display the rating.
     *
     * - Use a value that starts with `http://`, `https://`, `./`, or `../`, to fetch and display an icon from a given location.
     * - Use a value that starts with `assets://`, to display an icon from the Atomic package.
     * - Use a stringified SVG to display it directly.
     *
     * When using a custom icon, at least part of your icon should have the color set to `fill="currentColor"`.
     * This part of the SVG will take on the colors set in the following [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties):
     *
     * - `--atomic-rating-icon-active-color`
     * - `--atomic-rating-icon-inactive-color`
  
     */
    icon: string;
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
     */
    injectionDepth: number;
    /**
     * The required facets and values for this facet to be displayed.
     * Examples:
     * ```html
     * <atomic-facet facet-id="abc" field="objecttype" ...></atomic-facet>
     *
     * <!-- To show the facet when any value is selected in the facet with id "abc": -->
     * <atomic-rating-facet
     *   depends-on-abc
     *   ...
     * ></atomic-rating-facet>
     *
     * <!-- To show the facet when value "doc" is selected in the facet with id "abc": -->
     * <atomic-rating-facet
     *   depends-on-abc="doc"
     *   ...
     * ></atomic-rating-facet>
     * ```
     */
    dependsOn: Record<string, string>;
    private headerFocus?;
    private get focusTarget();
    private validateProps;
    initialize(): void;
    private initializeFacet;
    disconnectedCallback(): void;
    private get isHidden();
    private get scaleFactor();
    private get numberOfSelectedValues();
    private initializeDependenciesManager;
    private generateCurrentValues;
    private formatFacetValue;
    private ratingContent;
    private renderHeader;
    private renderValue;
    private renderValuesContainer;
    private renderValues;
    private get valuesToRender();
    render(): any;
}
