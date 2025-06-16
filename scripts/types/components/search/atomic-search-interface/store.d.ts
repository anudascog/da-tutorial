import { NumericFacetValue, DateFacetValue, SortCriterion, SearchEngine } from '@coveo/headless';
import { FacetInfo, FacetStore, FacetType, FacetValueFormat } from '../../common/facets/facet-common-store';
import { BaseStore, ResultListInfo } from '../../common/interface/store';
export interface SortDropdownOption {
    tabs: {
        included: string[] | string;
        excluded: string[] | string;
    };
    expression: string;
    criteria: SortCriterion[];
    label: string;
}
interface FacetInfoMap {
    [facetId: string]: FacetInfo | (FacetInfo & FacetValueFormat<NumericFacetValue>) | (FacetInfo & FacetValueFormat<DateFacetValue>);
}
interface Data {
    loadingFlags: string[];
    iconAssetsPath: string;
    resultList: ResultListInfo | undefined;
    mobileBreakpoint: string;
    facets: FacetStore<FacetInfo>;
    numericFacets: FacetStore<FacetInfo & FacetValueFormat<NumericFacetValue>>;
    dateFacets: FacetStore<FacetInfo & FacetValueFormat<DateFacetValue>>;
    categoryFacets: FacetStore<FacetInfo>;
    facetElements: HTMLElement[];
    fieldsToInclude: string[];
    sortOptions: SortDropdownOption[];
}
export type SearchStore = BaseStore<Data> & {
    unsetLoadingFlag(loadingFlag: string): void;
    setLoadingFlag(flag: string): void;
    isMobile(): boolean;
    registerFacet<T extends FacetType, U extends string>(facetType: T, data: Data[T][U] & {
        facetId: U;
        element: HTMLElement;
    }): void;
    getFacetElements(): HTMLElement[];
    waitUntilAppLoaded(callback: () => void): void;
    getUniqueIDFromEngine(engine: SearchEngine): string;
    hasLoadingFlag(loadingFlag: string): boolean;
    getAllFacets(): FacetInfoMap;
    addFieldsToInclude(fields: string[]): void;
};
export declare function createSearchStore(): SearchStore;
export {};
