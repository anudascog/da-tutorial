import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
export interface BreadcrumbShowLessProps {
    onShowLess: () => void;
    setRef: (el: HTMLButtonElement) => void;
    isCollapsed: boolean;
    i18n: i18n;
}
export declare const BreadcrumbShowLess: FunctionalComponent<BreadcrumbShowLessProps>;
