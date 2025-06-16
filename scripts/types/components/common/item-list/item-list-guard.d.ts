import { FunctionalComponent } from '../../../stencil-public-runtime';
export interface ItemListGuardProps {
    hasError: boolean;
    hasItems: boolean;
    hasTemplate: boolean;
    firstRequestExecuted: boolean;
    templateHasError: boolean;
}
export declare const ItemListGuard: FunctionalComponent<ItemListGuardProps>;
