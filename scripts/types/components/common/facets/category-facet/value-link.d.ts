import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
export interface CategoryFacetValueLinkProps {
    displayValue: string;
    numberOfResults: number;
    i18n: i18n;
    onClick: () => void;
    isParent: boolean;
    isSelected: boolean;
    searchQuery: string;
    isLeafValue: boolean;
    setRef: (el?: HTMLButtonElement) => void;
}
export declare const CategoryFacetValueLink: FunctionalComponent<CategoryFacetValueLinkProps>;
