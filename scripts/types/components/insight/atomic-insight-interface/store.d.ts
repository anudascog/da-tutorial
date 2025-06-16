import { DateFacetValue, InsightEngine, NumericFacetValue } from '@coveo/headless/insight';
import { FacetInfo, FacetStore, FacetType, FacetValueFormat } from '../../common/facets/facet-common-store';
import { BaseStore, ResultListInfo } from '../../common/interface/store';
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
}
export type InsightStore = BaseStore<Data> & {
    isMobile(): boolean;
    unsetLoadingFlag(loadingFlag: string): void;
    setLoadingFlag(flag: string): void;
    registerFacet<T extends FacetType, U extends string>(facetType: T, data: Data[T][U] & {
        facetId: U;
        element: HTMLElement;
    }): void;
    getFacetElements(): HTMLElement[];
    waitUntilAppLoaded(callback: () => void): void;
    getUniqueIDFromEngine(engine: InsightEngine): string;
};
export declare function createInsightStore(): InsightStore;
export {};
