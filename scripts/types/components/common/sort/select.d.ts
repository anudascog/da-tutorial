import { FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import '../atomic-icon/atomic-icon';
export interface SortSelectProps {
    id: string;
    i18n: i18n;
    onSelect: (opt: Event) => void;
}
export declare const renderSortSelect: FunctionalComponentWithChildren<SortSelectProps>;
