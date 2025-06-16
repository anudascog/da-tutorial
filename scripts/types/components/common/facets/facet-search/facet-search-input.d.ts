import { FunctionalComponent } from "../../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import '../../atomic-icon/atomic-icon';
export interface FacetSearchInputProps {
    label: string;
    query: string;
    i18n: i18n;
    onClear(): void;
    onChange(value: string): void;
}
export declare const renderFacetSearchInput: FunctionalComponent<FacetSearchInputProps>;
