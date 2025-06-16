interface FacetSearchState {
    query: string;
    values: unknown[];
    isLoading: boolean;
}
/**
 * Meant to be used inside the `componentShouldUpdate` lifecycle method.
 * It prevents updating the facet between two matchless facet searches.
 * It also prevents updating the facet until the first search has loaded.
 */
export declare function shouldUpdateFacetSearchComponent(nextFacetSearchState: FacetSearchState, prevFacetSearchState: FacetSearchState): boolean;
export declare function shouldDisplaySearchResults(facetSearchState: FacetSearchState): boolean;
export declare function highlightSearchResult(resultValue: string, searchQuery?: string): string;
export {};
