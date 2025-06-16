import { h, proxyCustomElement, HTMLElement } from '@stencil/core/internal/client';
import { HighlightUtils, buildRecentQueriesList } from '@coveo/headless';
import { C as Clock } from './clock.js';
import { a as SafeStorage, S as StorageItems } from './local-storage-utils.js';
import { o as once } from './utils.js';
import { e as encodeForDomAttribute } from './string-utils.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common.js';

const getPartialRecentQueryElement = (value, i18n) => {
    return {
        part: 'recent-query-item',
        query: value,
        key: `recent-${encodeForDomAttribute(value)}`,
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
    return (h("div", { part: "recent-query-content", class: "flex items-center text-left break-all" }, children));
};
const RecentQueryIcon = ({ icon, }) => {
    return (h("atomic-icon", { part: "recent-query-icon", icon: icon, class: "mr-2 h-4 w-4 shrink-0" }));
};
const RecentQueryText = ({ query, value, }) => {
    if (query === '') {
        return (h("span", { part: "recent-query-text", class: "line-clamp-2 break-all" }, value));
    }
    return (h("span", { part: "recent-query-text", class: "line-clamp-2 break-all", innerHTML: HighlightUtils.highlightString({
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
    return (h("div", { part: "recent-query-title-content", class: "flex w-full justify-between" },
        h("span", { class: "font-bold", part: "recent-query-title" }, i18n.t('recent-searches')),
        h("span", { part: "recent-query-clear" }, i18n.t('clear'))));
};

const AtomicSearchBoxRecentQueries = /*@__PURE__*/ proxyCustomElement(class AtomicSearchBoxRecentQueries extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * The maximum number of suggestions that will be displayed if the user has typed something into the input field.
         */
        this.maxWithQuery = 3;
        this.warnUser = once(() => this.bindings.engine.logger.warn('Because analytics are disabled, the recent queries feature is deactivated.'));
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = 3;
        this.maxWithoutQuery = undefined;
    }
    componentWillLoad() {
        try {
            dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this.host, ['atomic-search-box']);
        }
        catch (error) {
            this.error = error;
        }
    }
    renderIcon() {
        return this.icon || Clock;
    }
    initialize() {
        this.storage = new SafeStorage();
        this.recentQueriesList = buildRecentQueriesList(this.bindings.engine, {
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
        return this.storage.getParsedJSON(StorageItems.RECENT_QUERIES, []);
    }
    updateLocalStorage() {
        if (!this.recentQueriesList.state.analyticsEnabled) {
            return this.disableFeature();
        }
        return this.storage.setJSON(StorageItems.RECENT_QUERIES, this.recentQueriesList.state.queries);
    }
    disableFeature() {
        this.warnUser();
        this.storage.removeItem(StorageItems.RECENT_QUERIES);
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
            content: h(RecentQueryClear, { i18n: this.bindings.i18n }),
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
            content: (h(RecentQueriesContainer, null, h(RecentQueryIcon, { icon: this.renderIcon() }), h(RecentQueryText, { query: query, value: value }))),
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
            return (h("atomic-component-error", { key: 'e69dbc35b907da621c65f6f7de79919c1b3f2767', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-search-box-recent-queries", {
        "icon": [1],
        "maxWithQuery": [514, "max-with-query"],
        "maxWithoutQuery": [514, "max-without-query"],
        "error": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-search-box-recent-queries"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-search-box-recent-queries":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSearchBoxRecentQueries);
            }
            break;
    } });
}

export { AtomicSearchBoxRecentQueries as A, defineCustomElement as d };

//# sourceMappingURL=atomic-search-box-recent-queries2.js.map