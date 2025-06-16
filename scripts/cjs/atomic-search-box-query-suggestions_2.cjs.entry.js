'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const search = require('./search-a4774f02.js');
const stencilQuerySuggestions = require('./stencil-query-suggestions-03268ecc.js');
const suggestionsCommon = require('./suggestions-common-be99e4f9.js');
const clock = require('./clock-f03ff827.js');
const localStorageUtils = require('./local-storage-utils-84663077.js');
const utils = require('./utils-b6642872.js');
const stringUtils = require('./string-utils-bdf08f8c.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./purify-85b542e2.js');
require('./_commonjsHelpers-b3309d7b.js');

const AtomicSearchBoxQuerySuggestions = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = undefined;
        this.maxWithoutQuery = undefined;
    }
    componentWillLoad() {
        try {
            suggestionsCommon.dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this.host, ['atomic-search-box']);
        }
        catch (error) {
            this.error = error;
        }
    }
    initialize() {
        const engine = this.bindings.engine;
        const { registerQuerySuggest, fetchQuerySuggestions } = headless.loadQuerySuggestActions(engine);
        engine.dispatch(registerQuerySuggest({
            id: this.bindings.id,
            count: this.bindings.numberOfQueries,
        }));
        return {
            position: Array.from(this.host.parentNode.children).indexOf(this.host),
            onInput: () => engine.dispatch(fetchQuerySuggestions({
                id: this.bindings.id,
            })),
            renderItems: () => this.renderItems(),
        };
    }
    renderItems() {
        const hasQuery = this.bindings.searchBoxController.state.value !== '';
        const max = hasQuery ? this.maxWithQuery : this.maxWithoutQuery;
        return this.bindings.searchBoxController.state.suggestions
            .slice(0, max)
            .map((suggestion) => this.renderItem(suggestion));
    }
    renderItem(suggestion) {
        const hasQuery = this.bindings.searchBoxController.state.value !== '';
        const partialItem = stencilQuerySuggestions.getPartialSearchBoxSuggestionElement(suggestion, this.bindings.i18n);
        return {
            ...partialItem,
            content: (index.h(stencilQuerySuggestions.QuerySuggestionContainer, null, index.h(stencilQuerySuggestions.QuerySuggestionIcon, { icon: this.icon || search.SearchIcon, hasSuggestion: this.bindings.getSuggestions().length > 1 }), index.h(stencilQuerySuggestions.QuerySuggestionText, { suggestion: suggestion, hasQuery: hasQuery }))),
            onSelect: () => {
                this.bindings.searchBoxController.selectSuggestion(suggestion.rawValue);
            },
        };
    }
    render() {
        if (this.error) {
            return (index.h("atomic-component-error", { key: 'f365f584643501aabc61cdd2fba3be4fe6966014', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

const getPartialRecentQueryElement = (value, i18n) => {
    return {
        part: 'recent-query-item',
        query: value,
        key: `recent-${stringUtils.encodeForDomAttribute(value)}`,
        ariaLabel: i18n.t('recent-query-suggestion-label', {
            query: value,
            interpolation: { escapeValue: false },
        }),
    };
};
const getPartialRecentQueryClearElement = (i18n) => {
    return {
        key: 'recent-query-clear',
        ariaLabel: i18n.t('clear-recent-searches', {
            interpolation: { escapeValue: false },
        }),
        part: 'recent-query-title-item suggestion-divider',
        hideIfLast: true,
    };
};
const RecentQueriesContainer = (_, children) => {
    return (index.h("div", { part: "recent-query-content", class: "flex items-center text-left break-all" }, children));
};
const RecentQueryIcon = ({ icon, }) => {
    return (index.h("atomic-icon", { part: "recent-query-icon", icon: icon, class: "mr-2 h-4 w-4 shrink-0" }));
};
const RecentQueryText = ({ query, value, }) => {
    if (query === '') {
        return (index.h("span", { part: "recent-query-text", class: "line-clamp-2 break-all" }, value));
    }
    return (index.h("span", { part: "recent-query-text", class: "line-clamp-2 break-all", innerHTML: headless.HighlightUtils.highlightString({
            content: value,
            openingDelimiter: '<span part="recent-query-text-highlight" class="font-bold">',
            closingDelimiter: '</span>',
            highlights: [
                {
                    offset: query.length,
                    length: value.length - query.length,
                },
            ],
        }) }));
};
const RecentQueryClear = ({ i18n, }) => {
    return (index.h("div", { part: "recent-query-title-content", class: "flex w-full justify-between" },
        index.h("span", { class: "font-bold", part: "recent-query-title" }, i18n.t('recent-searches')),
        index.h("span", { part: "recent-query-clear" }, i18n.t('clear'))));
};

const AtomicSearchBoxRecentQueries = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The maximum number of suggestions that will be displayed if the user has typed something into the input field.
         */
        this.maxWithQuery = 3;
        this.warnUser = utils.once(() => this.bindings.engine.logger.warn('Because analytics are disabled, the recent queries feature is deactivated.'));
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = 3;
        this.maxWithoutQuery = undefined;
    }
    componentWillLoad() {
        try {
            suggestionsCommon.dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this.host, ['atomic-search-box']);
        }
        catch (error) {
            this.error = error;
        }
    }
    renderIcon() {
        return this.icon || clock.Clock;
    }
    initialize() {
        this.storage = new localStorageUtils.SafeStorage();
        this.recentQueriesList = headless.buildRecentQueriesList(this.bindings.engine, {
            initialState: { queries: this.retrieveLocalStorage() },
            options: { maxLength: 1000, clearFilters: this.bindings.clearFilters },
        });
        this.recentQueriesList.subscribe(() => this.updateLocalStorage());
        return {
            position: Array.from(this.host.parentNode.children).indexOf(this.host),
            renderItems: () => this.renderItems(),
        };
    }
    retrieveLocalStorage() {
        return this.storage.getParsedJSON(localStorageUtils.StorageItems.RECENT_QUERIES, []);
    }
    updateLocalStorage() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return this.disableFeature();
        }
        return this.storage.setJSON(localStorageUtils.StorageItems.RECENT_QUERIES, this.recentQueriesList.state.queries);
    }
    disableFeature() {
        this.warnUser();
        this.storage.removeItem(localStorageUtils.StorageItems.RECENT_QUERIES);
    }
    renderItems() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return [];
        }
        const query = this.bindings.searchBoxController.state.value;
        const hasQuery = query !== '';
        const max = hasQuery ? this.maxWithQuery : this.maxWithoutQuery;
        const filteredQueries = this.recentQueriesList.state.queries
            .filter((recentQuery) => recentQuery.toLowerCase().startsWith(query.toLowerCase()))
            .slice(0, max);
        const suggestionElements = filteredQueries.map((value) => this.renderItem(value));
        if (suggestionElements.length) {
            suggestionElements.unshift(this.renderClear());
        }
        return suggestionElements;
    }
    renderClear() {
        const partialItem = getPartialRecentQueryClearElement(this.bindings.i18n);
        return {
            ...partialItem,
            content: index.h(RecentQueryClear, { i18n: this.bindings.i18n }),
            onSelect: () => {
                this.recentQueriesList.clear();
                this.bindings.triggerSuggestions();
            },
        };
    }
    renderItem(value) {
        const query = this.bindings.searchBoxController.state.value;
        const partialItem = getPartialRecentQueryElement(value, this.bindings.i18n);
        return {
            ...partialItem,
            content: (index.h(RecentQueriesContainer, null, index.h(RecentQueryIcon, { icon: this.renderIcon() }), index.h(RecentQueryText, { query: query, value: value }))),
            onSelect: () => {
                if (this.bindings.isStandalone) {
                    this.bindings.searchBoxController.updateText(value);
                    this.bindings.searchBoxController.submit();
                    return;
                }
                this.recentQueriesList.executeRecentQuery(this.recentQueriesList.state.queries.indexOf(value));
            },
        };
    }
    render() {
        if (this.error) {
            return (index.h("atomic-component-error", { key: 'e69dbc35b907da621c65f6f7de79919c1b3f2767', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_search_box_query_suggestions = AtomicSearchBoxQuerySuggestions;
exports.atomic_search_box_recent_queries = AtomicSearchBoxRecentQueries;

//# sourceMappingURL=atomic-search-box-query-suggestions_2.cjs.entry.js.map