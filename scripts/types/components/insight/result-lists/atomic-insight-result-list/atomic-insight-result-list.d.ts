import { ResultList as InsightResultList, ResultListState as InsightResultListState, ResultsPerPage as InsightResultsPerPage, ResultsPerPageState as InsightResultsPerPageState } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { FocusTargetController } from '../../../../utils/stencil-accessibility-utils';
import { ItemRenderingFunction } from '../../../common/item-list/stencil-item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../../../common/layout/display-options';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightResultList implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    resultList: InsightResultList;
    resultsPerPage: InsightResultsPerPage;
    private loadingFlag;
    private itemRenderingFunction;
    private itemTemplateProvider;
    private nextNewResultTarget?;
    private display;
    private itemListCommon;
    host: HTMLDivElement;
    resultsPerPageState: InsightResultsPerPageState;
    resultListState: InsightResultListState;
    private templateHasError;
    private resultTemplateRegistered;
    error: Error;
    private isAppLoaded;
    /**
     * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed in the results.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    initialize(): void;
    get focusTarget(): FocusTargetController;
    render(): any;
    private computeListDisplayClasses;
    private getPropsForAtomicInsightResult;
}
