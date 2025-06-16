'use strict';

const utils = require('./utils-b6642872.js');

function createStore(initialState) {
    const listeners = new Map();
    const state = new Proxy(initialState, {
        set(target, prop, value) {
            const oldValue = target[prop];
            if (oldValue !== value) {
                target[prop] = value;
                if (listeners.has(prop)) {
                    for (const cb of listeners.get(prop)) {
                        cb(value);
                    }
                }
            }
            return true;
        },
    });
    const get = (propName) => {
        return state[propName];
    };
    const set = (propName, value) => {
        state[propName] = value;
    };
    const onChange = (propName, callback) => {
        if (!listeners.has(propName)) {
            listeners.set(propName, new Set());
        }
        listeners.get(propName).add(callback);
        return () => {
            listeners.get(propName).delete(callback);
            if (listeners.get(propName).size === 0) {
                listeners.delete(propName);
            }
        };
    };
    return {
        state,
        get,
        set,
        onChange,
    };
}
function createBaseStore(initialState) {
    const store = createStore(initialState);
    return {
        ...store,
        getUniqueIDFromEngine(_engine) {
            throw new Error('getUniqueIDFromEngine not implemented at the base store level.');
        },
    };
}
function unsetLoadingFlag(store, loadingFlag) {
    const flags = store.state.loadingFlags;
    store.state.loadingFlags = flags.filter((value) => value !== loadingFlag);
}
function setLoadingFlag(store, loadingFlag) {
    const flags = store.state.loadingFlags;
    store.state.loadingFlags = flags.concat(loadingFlag);
}
const isRefineModalFacet = 'is-refine-modal';
function registerFacet(store, facetType, data) {
    const clearExistingFacetElement = (facetType, facetId) => {
        if (store.state[facetType][facetId]) {
            store.state.facetElements = store.state.facetElements.filter((facetElement) => facetElement.getAttribute('facet-id') !== facetId);
        }
    };
    if (data.element.getAttribute(isRefineModalFacet) !== null) {
        return;
    }
    clearExistingFacetElement(facetType, data.facetId);
    store.state.facetElements.push(data.element);
    store.state[facetType][data.facetId] = data;
}
function getFacetElements(store) {
    return store.state.facetElements.filter((element) => utils.isInDocument(element));
}
function waitUntilAppLoaded(store, callback) {
    if (!store.state.loadingFlags.length) {
        callback();
    }
    else {
        store.onChange('loadingFlags', (flags) => {
            if (!flags.length) {
                callback();
            }
        });
    }
}
function createAppLoadedListener(store, callback) {
    const updateIsAppLoaded = () => {
        const isAppLoaded = store.state.loadingFlags.length === 0;
        callback(isAppLoaded);
    };
    store.onChange('loadingFlags', updateIsAppLoaded);
    updateIsAppLoaded();
}

exports.createAppLoadedListener = createAppLoadedListener;
exports.createBaseStore = createBaseStore;
exports.getFacetElements = getFacetElements;
exports.isRefineModalFacet = isRefineModalFacet;
exports.registerFacet = registerFacet;
exports.setLoadingFlag = setLoadingFlag;
exports.unsetLoadingFlag = unsetLoadingFlag;
exports.waitUntilAppLoaded = waitUntilAppLoaded;

//# sourceMappingURL=store-590ec8d4.js.map