import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { SortCriterion } from '@coveo/headless/commerce';
import { SortOptionProps } from '../../common/sort/option';
export interface CommerceSortOptionProps extends Omit<SortOptionProps, 'label' | 'value'> {
    sort: SortCriterion;
}
export declare const renderCommerceSortOption: FunctionalComponent<CommerceSortOptionProps>;
export declare function getLabel(sort: SortCriterion): string;
export declare function getSortByLabel(label: string, availableSorts: SortCriterion[]): SortCriterion;
