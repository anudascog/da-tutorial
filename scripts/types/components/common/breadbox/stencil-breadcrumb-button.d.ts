import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { Breadcrumb } from './breadcrumb-types';
export interface BreadcrumbButtonProps {
    onSelectBreadcrumb: () => void;
    setRef: (el: HTMLButtonElement) => void;
    pathLimit: number;
    breadcrumb: Breadcrumb;
    i18n: i18n;
}
export declare const BreadcrumbButton: FunctionalComponent<BreadcrumbButtonProps>;
