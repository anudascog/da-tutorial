import { FunctionalComponentWithChildren } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
export interface BreadcrumbContainerProps {
    isCollapsed: boolean;
    i18n: i18n;
}
export declare const renderBreadcrumbContainer: FunctionalComponentWithChildren<BreadcrumbContainerProps>;
