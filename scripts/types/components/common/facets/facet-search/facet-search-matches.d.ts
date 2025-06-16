import { FunctionalComponent } from "../../../../utils/functional-component-utils";
import { i18n } from 'i18next';
export interface FacetSearchMatchesProps {
    i18n: i18n;
    query: string;
    numberOfMatches: number;
    hasMoreMatches: boolean;
    showMoreMatches?: () => void;
}
export declare const renderFacetSearchMatches: FunctionalComponent<FacetSearchMatchesProps>;
