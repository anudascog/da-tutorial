import { FacetInfo } from '../../../common/facets/facet-common-store';
export interface PopoverChildFacet extends FacetInfo {
    hasValues: () => boolean;
    numberOfActiveValues: () => number;
}
export declare const popoverClass = "popover-nested";
export declare function initializePopover(host: HTMLElement, childFacet: PopoverChildFacet): void;
