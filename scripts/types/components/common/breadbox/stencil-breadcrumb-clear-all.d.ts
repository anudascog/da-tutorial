import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
export interface BreadcrumbClearAllProps {
    setRef: (el: HTMLButtonElement) => void;
    onClick: ((event?: MouseEvent | undefined) => void) | undefined;
    isCollapsed: boolean;
    i18n: i18n;
}
export declare const BreadcrumbClearAll: FunctionalComponent<BreadcrumbClearAllProps>;
