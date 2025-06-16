import { FunctionalComponent } from '../../../../stencil-public-runtime';
import { i18n } from 'i18next';
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
export declare const FacetHeader: FunctionalComponent<FacetHeaderProps>;
