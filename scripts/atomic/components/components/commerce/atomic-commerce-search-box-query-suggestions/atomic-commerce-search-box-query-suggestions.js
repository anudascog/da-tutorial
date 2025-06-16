var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { getPartialSearchBoxSuggestionElement, renderQuerySuggestion, } from "../../common/suggestions/query-suggestions";
import { dispatchSearchBoxSuggestionsEvent, } from "../../common/suggestions/suggestions-common";
import { errorGuard } from "../../../decorators/error-guard";
import { loadQuerySuggestActions, } from '@coveo/headless/commerce';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
const SearchIcon = "<svg viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m6.4 0c3.5 0 6.4 2.9 6.4 6.4 0 1.4-.4 2.7-1.2 3.7l4 4c.4.4.4 1 .1 1.5l-.1.1c-.2.2-.5.3-.8.3s-.6-.1-.8-.3l-4-4c-1 .7-2.3 1.2-3.7 1.2-3.4-.1-6.3-3-6.3-6.5s2.9-6.4 6.4-6.4zm0 2.1c-2.3 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3z\"/></svg>";
/**
 * The `atomic-commerce-search-box-query-suggestions` component can be added as a child of an `atomic-search-box` component, allowing for the configuration of query suggestion behavior.
 * @alpha
 */
let AtomicCommerceSearchBoxQuerySuggestions = class AtomicCommerceSearchBoxQuerySuggestions extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The maximum number of suggestions that will be displayed if the user has typed something into the input field.
         */
        this.maxWithQuery = 3;
    }
    connectedCallback() {
        super.connectedCallback();
        try {
            dispatchSearchBoxSuggestionsEvent((bindings) => {
                this.bindings = bindings;
                return this.initialize();
            }, this, ['atomic-commerce-search-box']);
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
            position: Array.from(this.parentNode.children).indexOf(this),
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
        const partialItem = getPartialSearchBoxSuggestionElement(suggestion, this.bindings.i18n);
        const icon = this.icon ? this.icon : SearchIcon;
        const hasQuery = this.bindings.searchBoxController.state.value !== '';
        const hasMultipleKindOfSuggestions = this.bindings.getSuggestions().length > 1;
        return {
            ...partialItem,
            content: renderQuerySuggestion({
                icon,
                hasQuery,
                suggestion,
                hasMultipleKindOfSuggestions,
            }),
            onSelect: () => {
                this.bindings.searchBoxController.selectSuggestion(suggestion.rawValue);
            },
        };
    }
    render() {
        return html `${nothing}`;
    }
};
__decorate([
    state()
], AtomicCommerceSearchBoxQuerySuggestions.prototype, "error", void 0);
__decorate([
    property()
], AtomicCommerceSearchBoxQuerySuggestions.prototype, "icon", void 0);
__decorate([
    property({ type: Number, attribute: 'max-with-query', reflect: true })
], AtomicCommerceSearchBoxQuerySuggestions.prototype, "maxWithQuery", void 0);
__decorate([
    property({ type: Number, attribute: 'max-without-query', reflect: true })
], AtomicCommerceSearchBoxQuerySuggestions.prototype, "maxWithoutQuery", void 0);
__decorate([
    errorGuard()
], AtomicCommerceSearchBoxQuerySuggestions.prototype, "render", null);
AtomicCommerceSearchBoxQuerySuggestions = __decorate([
    customElement('atomic-commerce-search-box-query-suggestions')
], AtomicCommerceSearchBoxQuerySuggestions);
export { AtomicCommerceSearchBoxQuerySuggestions };
