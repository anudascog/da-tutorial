import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
interface LoadMoreButtonProps {
    i18n: i18n;
    onClick: () => void;
    moreAvailable: boolean;
    label: 'load-more-results' | 'load-more-products';
}
export declare const loadMoreButton: FunctionalComponent<LoadMoreButtonProps>;
export {};
