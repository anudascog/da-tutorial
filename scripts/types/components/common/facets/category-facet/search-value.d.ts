import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface CategoryFacetSearchValueProps {
    value: {
        count: number;
        path: string[];
        displayValue: string;
    };
    i18n: i18n;
    field: string;
    onClick(): void;
    searchQuery: string;
}
export declare const CategoryFacetSearchValue: FunctionalComponent<CategoryFacetSearchValueProps>;
export {};
