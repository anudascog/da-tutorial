import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface CategoryFacetParentButtonProps {
    i18n: i18n;
    field: string;
    facetValue: {
        value: string;
        numberOfResults: number;
    };
    onClick: () => void;
}
export declare const CategoryFacetParentButton: FunctionalComponent<CategoryFacetParentButtonProps>;
export {};
