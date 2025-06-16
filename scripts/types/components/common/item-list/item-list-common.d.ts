import { FocusTargetController } from "../../../utils/accessibility-utils";
import { CommerceStore } from '../../commerce/atomic-commerce-interface/store';
import { CommerceRecommendationStore } from '../../commerce/atomic-commerce-recommendation-interface/store';
import { InsightStore } from '../../insight/atomic-insight-interface/store';
import { RecsStore } from '../../recommendations/atomic-recs-interface/store';
import { SearchStore } from '../../search/atomic-search-interface/store';
import { AnyItem } from '../interface/item';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../layout/display-options';
export declare const resultComponentClass = "result-component";
export type ItemRenderingFunction<SpecificResult extends AnyItem = AnyItem> = ((result: SpecificResult, root: HTMLElement, linkContainer?: HTMLElement) => string) | undefined;
export interface ItemListCommonProps {
    store: CommerceStore | CommerceRecommendationStore | RecsStore | InsightStore | SearchStore;
    loadingFlag: string;
    host: HTMLElement;
    nextNewItemTarget: FocusTargetController;
    getCurrentNumberOfItems: () => number;
    getIsLoading: () => boolean;
    engineSubscribe: (cb: () => void) => () => void;
}
export declare class ItemListCommon {
    private props;
    private indexOfResultToFocus?;
    private firstResultEl?;
    private updateBreakpointsOnce;
    constructor(props: ItemListCommonProps);
    updateBreakpoints(): void;
    getResultId(uniqueIdOnResult: string, searchResponseId: string, density: ItemDisplayDensity, imageSize: ItemDisplayImageSize): string;
    setNewResultRef(element: HTMLElement, resultIndex: number): void;
    focusOnNextNewResult(): void;
    focusOnFirstResultAfterNextSearch(): Promise<void>;
}
