import { FunctionalComponent } from "../../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import '../../atomic-icon/atomic-icon';
export interface FacetShowMoreProps {
    label: string;
    i18n: i18n;
    canShowLessValues: boolean;
    canShowMoreValues: boolean;
    onShowMore(): void;
    onShowLess(): void;
    showMoreRef?: (element?: HTMLButtonElement) => void;
    showLessRef?: (element?: HTMLButtonElement) => void;
}
export declare const renderFacetShowMoreLess: FunctionalComponent<FacetShowMoreProps>;
