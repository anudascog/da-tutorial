import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
export interface SortOptionProps {
    value: string;
    selected: boolean;
    i18n: i18n;
    label: string;
}
export declare const renderSortOption: FunctionalComponent<SortOptionProps>;
