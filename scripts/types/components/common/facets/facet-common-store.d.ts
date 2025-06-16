import { VNode } from '../../../stencil-public-runtime';
export interface FacetInfo {
    facetId: string;
    label: () => string;
    element: HTMLElement;
    isHidden(): boolean;
}
export type FacetType = 'facets' | 'numericFacets' | 'dateFacets' | 'categoryFacets';
export interface FacetValueFormat<ValueType> {
    format(facetValue: ValueType): string;
    content?(facetValue: ValueType): VNode;
}
export type FacetStore<F extends FacetInfo> = Record<string, F>;
