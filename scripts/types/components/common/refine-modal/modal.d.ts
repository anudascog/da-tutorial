import { FunctionalComponent } from '../../../stencil-public-runtime';
import { i18n } from 'i18next';
interface RefineModalProps {
    host: HTMLElement;
    i18n: i18n;
    onClose(): void;
    title: string;
    numberOfItems: number;
    isOpen: boolean;
    openButton?: HTMLElement;
    boundary?: 'page' | 'element';
    scope?: HTMLElement;
}
export declare const RefineModal: FunctionalComponent<RefineModalProps>;
export declare function getClonedFacetElements(facetElements: HTMLElement[], collapseFacetsAfter: number, root: HTMLElement): HTMLDivElement;
export {};
