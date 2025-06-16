import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
import { Breadcrumb } from './breadcrumb-types';
export interface BreadcrumbContentProps {
    pathLimit: number;
    isCollapsed: boolean;
    i18n: i18n;
    breadcrumb: Breadcrumb;
}
export declare const BreadcrumbContent: FunctionalComponent<BreadcrumbContentProps>;
