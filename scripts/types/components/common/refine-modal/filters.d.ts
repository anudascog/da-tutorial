import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface RefineModalFiltersSectionProps {
    i18n: i18n;
    withFacets: boolean;
    withAutomaticFacets: boolean;
}
export declare const RefineModalFiltersSection: FunctionalComponent<RefineModalFiltersSectionProps>;
interface RefineModalFiltersClearButtonProps {
    i18n: i18n;
    onClick: () => void;
}
export declare const RefineModalFiltersClearButton: FunctionalComponent<RefineModalFiltersClearButtonProps>;
export {};
