import { RecommendationList, RecommendationListState } from '@coveo/headless/recommendation';
import { InitializableComponent } from '../../../utils/initialization-utils';
import { FocusTargetController } from '../../../utils/stencil-accessibility-utils';
import { ItemRenderingFunction } from '../../common/item-list/stencil-item-list-common';
import { ItemDisplayDensity, ItemDisplayImageSize, ItemDisplayBasicLayout } from '../../common/layout/display-options';
import { RecsBindings } from '../atomic-recs-interface/atomic-recs-interface';
/**
 * The `atomic-recs-list` component displays recommendations by applying one or more result templates.
 *
 * @part result-list - The element containing the list of results.
 * @part result-list-grid-clickable-container - The parent of the result & the clickable link encompassing it.
 * @part result-list-grid-clickable - The clickable link encompassing the result.
 * @part label - The label of the result list.
 * @part previous-button - The previous button.
 * @part next-button - The next button.
 * @part indicators - The list of indicators.
 * @part indicator - A single indicator.
 * @part active-indicator - The active indicator.
 * @slot default - The default slot where to insert the template element.
 */
export declare class AtomicRecsList implements InitializableComponent<RecsBindings> {
    bindings: RecsBindings;
    recommendationList: RecommendationList;
    private loadingFlag;
    private itemRenderingFunction;
    private itemTemplateProvider;
    private nextNewResultTarget?;
    private itemListCommon;
    host: HTMLDivElement;
    error: Error;
    private isAppLoaded;
    private resultTemplateRegistered;
    private templateHasError;
    private currentPage;
    recommendationListState: RecommendationListState;
    /**
     * The Recommendation identifier used by the Coveo platform to retrieve recommended documents.
     * Make sure to set a different value for each atomic-recs-list in your page.
     */
    recommendation: string;
    /**
     * The layout to apply when displaying results themselves. This does not affect the display of the surrounding list itself.
     * To modify the number of recommendations per column, modify the --atomic-recs-number-of-columns CSS variable.
     */
    display: ItemDisplayBasicLayout;
    /**
     * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
     */
    density: ItemDisplayDensity;
    /**
     * The expected size of the image displayed in the results.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The total number of recommendations to display.
     * This does not modify the number of recommendations per column. To do so, modify the --atomic-recs-number-of-columns CSS variable.
     */
    numberOfRecommendations: number;
    /**
     * The number of recommendations to display, per page.
     * Setting a value greater than and lower than the numberOfRecommendations value activates the carousel.
     * This does not affect the display of the list itself, only the number of recommendation pages.
     */
    numberOfRecommendationsPerPage?: number;
    /**
     * The non-localized label for the list of recommendations.
     */
    label?: string;
    /**
     * The [heading level](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) to use for the heading label, from 1 to 6.
     */
    headingLevel: number;
    watchNumberOfRecommendationsPerPage(): Promise<void>;
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    setRenderFunction(resultRenderingFunction: ItemRenderingFunction): Promise<void>;
    /**
     * Moves to the previous page, when the carousel is activated.
     */
    previousPage(): Promise<void>;
    /**
     * Moves to the next page, when the carousel is activated.
     */
    nextPage(): Promise<void>;
    initialize(): void;
    get focusTarget(): FocusTargetController;
    private get recommendationListStateWithAugment();
    private validateNumberOfRecommendationsPerPage;
    private validateRecommendationIdentifier;
    private updateOriginLevel2;
    private renderHeading;
    private get currentIndex();
    private get subsetRecommendations();
    private get numberOfPages();
    private get hasPagination();
    private get shouldRenderPagination();
    private getPropsForAtomicRecsResult;
    private computeListDisplayClasses;
    private renderAsGrid;
    private renderListOfRecommendations;
    render(): any;
}
