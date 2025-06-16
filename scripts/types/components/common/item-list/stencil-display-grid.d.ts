import { FunctionalComponent } from '../../../stencil-public-runtime';
export interface DisplayGridProps {
    selectorForItem: string;
    item: {
        clickUri: string;
        title: string;
    };
    setRef: (element?: HTMLElement) => void;
    select: () => void;
    beginDelayedSelect: () => void;
    cancelPendingSelect: () => void;
}
export declare const DisplayGrid: FunctionalComponent<DisplayGridProps>;
