import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { loadQuerySuggestActions } from '@coveo/headless';
import { S as SearchIcon } from './search.js';
import { g as getPartialSearchBoxSuggestionElement, Q as QuerySuggestionContainer, a as QuerySuggestionIcon, b as QuerySuggestionText } from './stencil-query-suggestions.js';
import { d as dispatchSearchBoxSuggestionsEvent } from './suggestions-common.js';

const AtomicSearchBoxQuerySuggestions = /*@__PURE__*/ proxyCustomElement(class AtomicSearchBoxQuerySuggestions extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.error = undefined;
        this.icon = undefined;
        this.maxWithQuery = undefined;
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
    initialize() {
        const engine = this.bindings.engine;
        const { registerQuerySuggest, fetchQuerySuggestions } = loadQuerySuggestActions(engine);
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
        const partialItem = getPartialSearchBoxSuggestionElement(suggestion, this.bindings.i18n);
        return {
            ...partialItem,
            content: (h(QuerySuggestionContainer, null, h(QuerySuggestionIcon, { icon: this.icon || SearchIcon, hasSuggestion: this.bindings.getSuggestions().length > 1 }), h(QuerySuggestionText, { suggestion: suggestion, hasQuery: hasQuery }))),
            onSelect: () => {
                this.bindings.searchBoxController.selectSuggestion(suggestion.rawValue);
            },
        };
    }
    render() {
        if (this.error) {
            return (h("atomic-component-error", { key: 'f365f584643501aabc61cdd2fba3be4fe6966014', element: this.host, error: this.error }));
        }
    }
    get host() { return this; }
}, [1, "atomic-search-box-query-suggestions", {
        "icon": [1],
        "maxWithQuery": [514, "max-with-query"],
        "maxWithoutQuery": [514, "max-without-query"],
        "error": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atomic-search-box-query-suggestions"];
    components.forEach(tagName => { switch (tagName) {
        case "atomic-search-box-query-suggestions":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtomicSearchBoxQuerySuggestions);
            }
            break;
    } });
}

export { AtomicSearchBoxQuerySuggestions as A, defineCustomElement as d };

//# sourceMappingURL=atomic-search-box-query-suggestions2.js.map