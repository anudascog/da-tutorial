import { createBaseStore, setLoadingFlag, unsetLoadingFlag, } from '../../common/interface/store';
export function createCommerceRecommendationStore() {
    const store = createBaseStore({
        loadingFlags: [],
        iconAssetsPath: '',
        resultList: undefined,
    });
    return {
        ...store,
        unsetLoadingFlag(loadingFlag) {
            unsetLoadingFlag(store, loadingFlag);
        },
        setLoadingFlag(loadingFlag) {
            setLoadingFlag(store, loadingFlag);
        },
    };
}
