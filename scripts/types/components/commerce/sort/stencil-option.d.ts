import { SortCriterion } from '@coveo/headless/commerce';
import { FunctionalComponent } from '../../../stencil-public-runtime';
import { SortOptionProps } from '../../common/sort/stencil-option';
interface CommerceSortOptionProps extends Omit<SortOptionProps, 'label' | 'value'> {
    sort: SortCriterion;
}
export declare const CommerceSortOption: FunctionalComponent<CommerceSortOptionProps>;
export declare function getLabel(sort: SortCriterion): string;
export declare function getSortByLabel(label: string, availableSorts: SortCriterion[]): SortCriterion;
export {};
