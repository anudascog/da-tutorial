import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface FacetShowMoreProps {
    label: string;
    i18n: i18n;
    canShowLessValues: boolean;
    canShowMoreValues: boolean;
    onShowMore(): void;
    onShowLess(): void;
    showMoreRef?: (element?: HTMLButtonElement) => void;
    showLessRef?: (element?: HTMLButtonElement) => void;
}
export declare const FacetShowMoreLess: FunctionalComponent<FacetShowMoreProps>;
export {};
