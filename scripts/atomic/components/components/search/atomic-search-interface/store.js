import { DEFAULT_MOBILE_BREAKPOINT } from '../../../utils/replace-breakpoint';
import { createBaseStore, getFacetElements, registerFacet, setLoadingFlag, unsetLoadingFlag, waitUntilAppLoaded, } from '../../common/interface/store';
import { makeDesktopQuery } from '../atomic-layout/search-layout';
export function createSearchStore() {
    const store = createBaseStore({
        loadingFlags: [],
        iconAssetsPath: '',
        resultList: undefined,
        mobileBreakpoint: DEFAULT_MOBILE_BREAKPOINT,
        facets: {},
        numericFacets: {},
        dateFacets: {},
        categoryFacets: {},
        facetElements: [],
        fieldsToInclude: [],
        sortOptions: [],
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
        registerFacet(facetType, data) {
            registerFacet(store, facetType, data);
        },
        getFacetElements() {
            return getFacetElements(store);
        },
        waitUntilAppLoaded(callback) {
            waitUntilAppLoaded(store, callback);
        },
        getUniqueIDFromEngine(engine) {
            return engine.state.search.response.searchUid;
        },
        hasLoadingFlag(loadingFlag) {
            return store.state.loadingFlags.indexOf(loadingFlag) !== -1;
        },
        getAllFacets() {
            return {
                ...store.state.facets,
                ...store.state.dateFacets,
                ...store.state.categoryFacets,
                ...store.state.numericFacets,
            };
        },
        addFieldsToInclude(fields) {
            const currentFields = store.state.fieldsToInclude;
            store.state.fieldsToInclude = [...currentFields, ...fields];
        },
    };
}
