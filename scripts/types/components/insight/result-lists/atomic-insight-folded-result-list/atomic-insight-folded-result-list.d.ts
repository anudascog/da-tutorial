import { ResultsPerPageState as InsightResultsPerPageState, ResultsPerPage as InsightResultsPerPage, FoldedResultList as InsightFoldedResultList, FoldedResultListState as InsightFoldedResultListState, FoldedCollection as InsightFoldedCollection } from '@coveo/headless/insight';
import { InitializableComponent } from '../../../../utils/initialization-utils';
import { FoldedItemListStateContextEvent } from '../../../common/item-list/item-list-decorators';
import { ItemRenderingFunction } from '../../../common/item-list/stencil-item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../../../common/layout/display-options';
import { InsightBindings } from '../../atomic-insight-interface/atomic-insight-interface';
/**
 * @internal
 */
export declare class AtomicInsightFoldedResultList implements InitializableComponent<InsightBindings> {
    bindings: InsightBindings;
    foldedResultList: InsightFoldedResultList;
    resultsPerPage: InsightResultsPerPage;
    private itemRenderingFunction;
    private loadingFlag;
    private itemTemplateProvider;
    private nextNewResultTarget?;
    private display;
    private itemListCommon;
    host: HTMLDivElement;
    foldedResultListState: InsightFoldedResultListState;
    resultsPerPageState: InsightResultsPerPageState;
    private resultTemplateRegistered;
    error: Error;
    private isAppLoaded;
    private templateHasError;
    /**
     * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed in the results.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The name of the field on which to do the folding. The folded result list component will use the values of this field to resolve the collections of result items.
     *
     * @defaultValue `foldingcollection`
     */
    collectionField?: string;
    /**
     * The name of the field that determines whether a certain result is a top result containing other child results within a collection.
     *
     * @defaultValue `foldingparent`
     */
    parentField?: string;
    /**
     * The name of the field that uniquely identifies a result within a collection.
     *
     * @defaultValue `foldingchild`
     */
    childField?: string;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    resolveFoldedResultList(event: FoldedItemListStateContextEvent): void;
    loadCollection(event: CustomEvent<InsightFoldedCollection>): void;
    initialize(): void;
    private get focusTarget();
    private initFolding;
    render(): any;
    private computeListDisplayClasses;
    private getPropsForAtomicInsightResult;
}
