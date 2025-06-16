import { DateFacetValue, NumericFacetValue } from '@coveo/headless';
import { FacetInfo, FacetStore, FacetType, FacetValueFormat } from '../facets/facet-common-store';
export declare function createStore<StoreData extends Record<string, unknown>>(initialState: StoreData): CommonStore<StoreData>;
export interface CommonStore<StoreData> {
    state: StoreData;
    get: <PropName extends keyof StoreData>(propName: PropName) => StoreData[PropName];
    set: <PropName extends keyof StoreData>(propName: PropName, value: StoreData[PropName]) => void;
    onChange: <PropName extends keyof StoreData>(propName: PropName, cb: (newValue: StoreData[PropName]) => void) => () => void;
}
export type BaseStore<T> = CommonStore<T> & {
    getUniqueIDFromEngine(engine: unknown): string | undefined;
};
export declare function createBaseStore<T extends {}>(initialState: T): BaseStore<T>;
export interface ResultListInfo {
    focusOnNextNewResult(): void;
    focusOnFirstResultAfterNextSearch(): Promise<void>;
}
export declare function unsetLoadingFlag(store: CommonStore<{
    loadingFlags: string[];
}>, loadingFlag: string): void;
export declare function setLoadingFlag(store: CommonStore<{
    loadingFlags: string[];
}>, loadingFlag: string): void;
interface Facets {
    facets: FacetStore<FacetInfo>;
    numericFacets: FacetStore<FacetInfo & FacetValueFormat<NumericFacetValue>>;
    dateFacets: FacetStore<FacetInfo & FacetValueFormat<DateFacetValue>>;
    categoryFacets: FacetStore<FacetInfo>;
    facetElements: HTMLElement[];
}
export declare const isRefineModalFacet = "is-refine-modal";
export declare function registerFacet<T extends FacetType, U extends string>(store: CommonStore<Facets>, facetType: T, data: Facets[T][U] & {
    facetId: U;
    element: HTMLElement;
}): void;
export declare function getFacetElements(store: CommonStore<Facets>): HTMLElement[];
export declare function waitUntilAppLoaded(store: CommonStore<{
    loadingFlags: string[];
}>, callback: () => void): void;
export declare function createAppLoadedListener(store: CommonStore<{
    loadingFlags: string[];
}>, callback: (isAppLoaded: boolean) => void): void;
export {};
