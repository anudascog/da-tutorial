import { FunctionalComponent } from "../../../../utils/functional-component-utils";
import { i18n } from 'i18next';
export interface FacetValueProps {
    field: string;
    facetValue: string;
    facetCount: number;
    facetState: 'idle' | 'selected' | 'excluded';
    i18n: i18n;
    enableExclusion: boolean;
    onExclude: () => void;
    onSelect: () => void;
    displayValuesAs: 'checkbox' | 'link' | 'box';
    facetSearchQuery: string;
    setRef?: (btn?: Element) => void;
}
export declare const renderFacetValue: FunctionalComponent<FacetValueProps>;
