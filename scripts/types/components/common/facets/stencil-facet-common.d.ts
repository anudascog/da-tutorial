import { FacetValue, SearchStatusState } from '@coveo/headless';
import { i18n } from 'i18next';
export interface FacetValueProps {
    i18n: i18n;
    displayValue: string;
    numberOfResults: number;
    isSelected: boolean;
    onClick(): void;
    searchQuery?: string;
    class?: string;
    part?: string;
    additionalPart?: string;
    buttonRef?: (element?: HTMLButtonElement) => void;
}
export declare function shouldDisplayInputForFacetRange(facetRange: {
    hasInput: boolean;
    hasInputRange: boolean;
    searchStatusState: SearchStatusState;
    facetValues: Pick<FacetValue, 'numberOfResults' | 'state'>[];
}): boolean;
export type BaseFacetElement = HTMLElement & {
    facetId: string;
    isCollapsed: boolean;
};
export declare function sortFacetVisibility(facetElements: BaseFacetElement[], facetInfoMap: Record<string, {
    isHidden: () => boolean;
}>): {
    visibleFacets: BaseFacetElement[];
    invisibleFacets: BaseFacetElement[];
};
export declare function collapseFacetsAfter(facets: BaseFacetElement[], visibleFacetsCount: number): void;
export declare function isAutomaticFacetGenerator(element: HTMLElement): element is HTMLAtomicAutomaticFacetGeneratorElement;
export declare function getFacetsInChildren(parent: HTMLElement): BaseFacetElement[];
export declare function getAutomaticFacetGenerator(parent: HTMLElement): HTMLAtomicAutomaticFacetGeneratorElement | undefined;
/**
 * Triage elements by their parents.
 * @param facets Facet Elements
 * @param parents Elements that may contains the facets
 * @returns an array in the same order as the parents, containing the facets that are contained by the corresponding parent.
 * The last element of the array contains the facets that are not contained by any of the parents.
 */
export declare function triageFacetsByParents(facets: BaseFacetElement[], ...parents: (HTMLElement | null)[]): Map<HTMLElement | null, BaseFacetElement[]>;
