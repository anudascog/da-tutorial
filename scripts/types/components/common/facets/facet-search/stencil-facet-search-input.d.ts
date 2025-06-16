import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface FacetSearchInputProps {
    label: string;
    query: string;
    i18n: i18n;
    onClear(): void;
    onChange(value: string): void;
}
export declare const FacetSearchInput: FunctionalComponent<FacetSearchInputProps>;
export {};
