import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface LoadMoreSummaryProps {
    i18n: i18n;
    from: number;
    to: number;
    label?: 'showing-results-of-load-more' | 'showing-products-of-load-more';
}
export declare const LoadMoreSummary: FunctionalComponent<LoadMoreSummaryProps>;
export {};
