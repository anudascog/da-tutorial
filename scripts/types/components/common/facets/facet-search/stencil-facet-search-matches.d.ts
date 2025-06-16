import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface FacetSearchMatchesProps {
    i18n: i18n;
    query: string;
    numberOfMatches: number;
    hasMoreMatches: boolean;
    showMoreMatches?: () => void;
}
export declare const FacetSearchMatches: FunctionalComponent<FacetSearchMatchesProps>;
export {};
