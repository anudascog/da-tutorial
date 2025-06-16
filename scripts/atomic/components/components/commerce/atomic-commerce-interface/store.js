import { Selectors, } from '@coveo/headless/commerce';
import { DEFAULT_MOBILE_BREAKPOINT } from '../../../utils/replace-breakpoint';
import { createBaseStore, setLoadingFlag, unsetLoadingFlag, } from '../../common/interface/store';
import { makeDesktopQuery } from '../../search/atomic-layout/search-layout';
export function createCommerceStore(type) {
    const store = createBaseStore({
        loadingFlags: [],
        iconAssetsPath: '',
        resultList: undefined,
        mobileBreakpoint: DEFAULT_MOBILE_BREAKPOINT,
        activeProductChild: undefined,
    });
    return {
        ...store,
        unsetLoadingFlag(loadingFlag) {
            unsetLoadingFlag(store, loadingFlag);
        },
        setLoadingFlag(loadingFlag) {
            setLoadingFlag(store, loadingFlag);
        },
        isMobile() {
            return !window.matchMedia(makeDesktopQuery(store.state.mobileBreakpoint))
                .matches;
        },
        getUniqueIDFromEngine(engine) {
            switch (type) {
                case 'search':
                    return Selectors.Search.responseIdSelector(engine);
                case 'product-listing':
                    return Selectors.ProductListing.responseIdSelector(engine);
            }
        },
    };
}
