import { ResultList, ResultsPerPage, TabManager, TabManagerState } from '@coveo/headless';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { FocusTargetController } from '../../../../utils/stencil-accessibility-utils';
import { ItemRenderingFunction } from '../../../common/item-list/stencil-item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayLayout } from '../../../common/layout/display-options';
import { Bindings } from '../../atomic-search-interface/atomic-search-interface';
/**
 * The `atomic-result-list` component is responsible for displaying query results by applying one or more result templates.
 *
 * @slot default - The default slot where the result templates are inserted.
 * @part result-list - The element containing every result of a result list
 * @part outline - The element displaying an outline or a divider around a result
 * @part result-list-grid-clickable-container - The parent of the result & the clickable link encompassing it, when results are displayed as a grid
 * @part result-list-grid-clickable - The clickable link encompassing the result when results are displayed as a grid
 * @part result-table - The element of the result table containing a heading and a body
 * @part result-table-heading - The element containing the row of cells in the result table's heading
 * @part result-table-heading-row - The element containing cells of the result table's heading
 * @part result-table-heading-cell - The element representing a cell of the result table's heading
 * @part result-table-body - The element containing the rows of the result table's body
 * @part result-table-row - The element containing the cells of a row in the result table's body
 * @part result-table-row-odd - The element containing the cells of an odd row in the result table's body
 * @part result-table-row-even - The element containing the cells of an even row in the result table's body
 * @part result-table-cell - The element representing a cell of the result table's body
 */
export declare class AtomicResultList implements InitializableComponent {
    bindings: Bindings;
    resultList: ResultList;
    resultsPerPage: ResultsPerPage;
    private loadingFlag;
    private itemRenderingFunction;
    private nextNewResultTarget?;
    private itemTemplateProvider;
    private resultListCommon;
    host: HTMLDivElement;
    private resultListState;
    private resultsPerPageState;
    tabManager: TabManager;
    tabManagerState: TabManagerState;
    private resultTemplateRegistered;
    error: Error;
    private isAppLoaded;
    private templateHasError;
    /**
     * The desired layout to use when displaying results. Layouts affect how many results to display per row and how visually distinct they are from each other.
     */
    display: ItemDisplayLayout;
    /**
     * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed in the results.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The tabs on which the result list can be displayed. This property should not be used at the same time as `tabs-excluded`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-result-list tabs-included='["tabIDA", "tabIDB"]'></atomic-result-list snippet>
     * ```
     * If you don't set this property, the result list can be displayed on any tab. Otherwise, the result list can only be displayed on the specified tabs.
     */
    tabsIncluded: string[] | string;
    /**
     * The tabs on which this result list must not be displayed. This property should not be used at the same time as `tabs-included`.
     *
     * Set this property as a stringified JSON array, e.g.,
     * ```html
     *  <atomic-result-list tabs-excluded='["tabIDA", "tabIDB"]'></atomic-result-list>
     * ```
     * If you don't set this property, the result list can be displayed on any tab. Otherwise, the result list won't be displayed on any of the specified tabs.
     */
    tabsExcluded: string[] | string;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    get focusTarget(): FocusTargetController;
    initialize(): void;
    watchTabManagerState(newValue: {
        activeTab: string;
    }, oldValue: {
        activeTab: string;
    }): void;
    render(): any;
    private getPropsForAtomicResult;
    private computeListDisplayClasses;
    private renderAsGrid;
    private renderAsTable;
    private renderAsList;
}
