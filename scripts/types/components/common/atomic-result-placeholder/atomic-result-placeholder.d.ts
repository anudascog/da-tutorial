import { ItemDisplayLayout, ItemDisplayDensity, ItemDisplayImageSize } from '../../common/layout/display-options';
/**
 * The `atomic-result-placeholder` component provides an intermediate visual state that is rendered before the first results are available.
 * @internal
 */
export declare class AtomicResultPlaceholder {
    display: ItemDisplayLayout;
    density: ItemDisplayDensity;
    imageSize: ItemDisplayImageSize;
    private renderExcerptLine;
    render(): any;
}
