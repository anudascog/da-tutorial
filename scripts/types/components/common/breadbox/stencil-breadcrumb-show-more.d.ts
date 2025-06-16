import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
export interface BreadcrumbShowMoreProps {
    setRef: (el: HTMLButtonElement) => void;
    onShowMore: () => void;
    numberOfCollapsedBreadcrumbs: number;
    isCollapsed: boolean;
    i18n: i18n;
}
export declare const BreadcrumbShowMore: FunctionalComponent<BreadcrumbShowMoreProps>;
