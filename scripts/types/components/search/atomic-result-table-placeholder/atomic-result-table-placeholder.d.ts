import { ItemDisplayDensity, ItemDisplayImageSize } from '../../common/layout/display-options';
/**
 * The `atomic-result-table-placeholder` component provides an intermediate visual state that is rendered before the first results are available.
 * @internal
 */
export declare class AtomicResultTablePlaceholder {
    density: ItemDisplayDensity;
    imageSize: ItemDisplayImageSize;
    rows: number;
    private getClasses;
    render(): any;
}
