import { FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import { Breadcrumb } from './breadcrumb-types';
export interface BreadcrumbButtonProps {
    onSelectBreadcrumb: () => void;
    setRef: (el?: HTMLButtonElement) => void;
    pathLimit: number;
    breadcrumb: Breadcrumb;
    i18n: i18n;
}
export declare const renderBreadcrumbButton: FunctionalComponentWithChildren<BreadcrumbButtonProps>;
