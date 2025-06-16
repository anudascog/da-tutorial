import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface SortSelectProps {
    id: string;
    i18n: i18n;
    onSelect: (opt: Event) => void;
}
export declare const SortSelect: FunctionalComponent<SortSelectProps>;
export {};
