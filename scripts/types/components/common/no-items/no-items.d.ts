import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface NoItemsProps {
    query: string;
    i18n: i18n;
    i18nKey: 'no-results' | 'no-products';
}
export declare const NoItems: FunctionalComponent<NoItemsProps>;
export {};
