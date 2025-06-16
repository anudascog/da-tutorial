import { Result as InsightResult, InteractiveResult as InsightInteractiveResult, FoldedResult as InsightFoldedResult } from '@coveo/headless/insight';
import { DisplayConfig, InteractiveItemContextEvent, ItemContextEvent } from '../../common/item-list/item-decorators';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../../common/layout/display-options';
import { InsightStore } from '../atomic-insight-interface/store';
/**
 * @internal
 */
export declare class AtomicInsightResult {
    private layout;
    host: HTMLElement;
    /**
     * Whether an atomic-result-link inside atomic-insight-result should stop click event propagation.
     */
    stopPropagation?: boolean;
    /**
     * The result item.
     */
    result: InsightResult | InsightFoldedResult;
    /**
     * The InteractiveResult item.
     * @internal
     */
    interactiveResult: InsightInteractiveResult;
    /**
     * Global Atomic state.
     * @internal
     */
    store?: InsightStore;
    /**
     * The result content to display.
     */
    content?: ParentNode;
    /**
     * How large or small results should be.
     */
    density: ItemDisplayDensity;
    /**
     * The size of the visual section in result list items.
     *
     * This is overwritten by the image size defined in the result content, if it exists.
     */
    imageSize: ItemDisplayImageSize;
    /**
     * The classes to add to the result element.
     */
    classes: string;
    /**
     * @internal
     */
    loadingFlag?: string;
    resolveResult(event: ItemContextEvent<InsightFoldedResult | InsightResult>): void;
    resolveInteractiveResult(event: InteractiveItemContextEvent): void;
    resolveStopPropagation(event: CustomEvent): void;
    resolveResultDisplayConfig(event: ItemContextEvent<DisplayConfig>): void;
    connectedCallback(): void;
    private getContentHTML;
    render(): any;
    componentDidLoad(): void;
}
