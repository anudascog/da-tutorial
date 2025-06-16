import { FunctionalComponent } from '../../../stencil-public-runtime';
interface ShowHideButtonProps {
    moreResultsAvailable: boolean;
    loadFullCollection: () => void;
    showInitialChildren: boolean;
    toggleShowInitialChildren: () => void;
    loadAllResults: string;
    collapseResults: string;
}
export declare const ShowHideButton: FunctionalComponent<ShowHideButtonProps>;
export {};
