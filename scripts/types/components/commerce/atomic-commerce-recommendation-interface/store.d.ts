import { BaseStore, ResultListInfo } from '../../common/interface/store';
interface Data {
    loadingFlags: string[];
    iconAssetsPath: string;
    resultList: ResultListInfo | undefined;
}
export type CommerceRecommendationStore = BaseStore<Data> & {
    unsetLoadingFlag(loadingFlag: string): void;
    setLoadingFlag(flag: string): void;
};
export declare function createCommerceRecommendationStore(): CommerceRecommendationStore;
export {};
