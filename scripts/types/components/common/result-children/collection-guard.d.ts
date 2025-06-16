import { FunctionalComponent } from '../../../stencil-public-runtime';
import { ItemDisplayDensity, ItemDisplayImageSize } from '../layout/display-options';
interface CollectionGuardProps {
    isLoadingMoreResults: boolean;
    moreResultsAvailable: boolean;
    hasChildren: boolean;
    numberOfChildren: number;
    density: ItemDisplayDensity;
    imageSize: ItemDisplayImageSize;
    noResultText: string;
}
export declare const CollectionGuard: FunctionalComponent<CollectionGuardProps>;
export {};
