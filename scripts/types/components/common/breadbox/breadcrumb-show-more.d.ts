import { FunctionalComponent } from "../../../utils/functional-component-utils";
import { i18n } from 'i18next';
export interface BreadcrumbShowMoreProps {
    setRef: (el: HTMLButtonElement) => void;
    onShowMore: () => void;
    numberOfCollapsedBreadcrumbs: number;
    isCollapsed: boolean;
    i18n: i18n;
}
export declare const renderBreadcrumbShowMore: FunctionalComponent<BreadcrumbShowMoreProps>;
