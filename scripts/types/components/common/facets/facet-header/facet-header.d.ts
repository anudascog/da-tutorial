import { FunctionalComponent } from "../../../../utils/functional-component-utils";
import { i18n } from 'i18next';
import '../../atomic-icon/atomic-icon';
export interface FacetHeaderProps {
    i18n: i18n;
    label: string;
    numberOfActiveValues: number;
    isCollapsed: boolean;
    headingLevel: number;
    onToggleCollapse(): void;
    onClearFilters?(): void;
    headerRef?: (element?: HTMLButtonElement) => void;
}
export declare const renderFacetHeader: FunctionalComponent<FacetHeaderProps>;
