import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use LoadMoreButtonProps interface instead
 */
interface StencilLoadMoreButtonProps {
    i18n: i18n;
    onClick: () => void;
    moreAvailable: boolean;
    label?: 'load-more-results' | 'load-more-products';
}
/**
 * @deprecated Should only be used for Stencil components; for Lit components, use the button.ts file instead
 */
export declare const LoadMoreButton: FunctionalComponent<StencilLoadMoreButtonProps>;
export {};
