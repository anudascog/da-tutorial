import { CommerceEngine, ChildProduct } from '@coveo/headless/commerce';
import { BaseStore, ResultListInfo } from '../../common/interface/store';
interface Data {
    loadingFlags: string[];
    iconAssetsPath: string;
    resultList: ResultListInfo | undefined;
    mobileBreakpoint: string;
    activeProductChild: ChildProduct | undefined;
}
export type CommerceStore = BaseStore<Data> & {
    unsetLoadingFlag(loadingFlag: string): void;
    setLoadingFlag(flag: string): void;
    isMobile(): boolean;
    getUniqueIDFromEngine(engine: CommerceEngine): string;
};
export declare function createCommerceStore(type: 'search' | 'product-listing'): CommerceStore;
export {};
