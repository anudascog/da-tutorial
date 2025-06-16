'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const headless = require('@coveo/headless');
const stringUtils = require('./string-utils-bdf08f8c.js');
const itemTemplateProvider = require('./item-template-provider-2499fe9d.js');
const stencilButtonStyle = require('./stencil-button-style-ba779fe2.js');
const suggestionsCommon = require('./suggestions-common-be99e4f9.js');
require('./template-provider-7802ca20.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');

const getPartialInstantItemElement = (i18n, itemTitle, itemUniqueId) => {
    return {
        ariaLabel: i18n.t('instant-results-suggestion-label', {
            title: itemTitle,
            interpolation: { escapeValue: false },
        }),
        key: `instant-result-${stringUtils.encodeForDomAttribute(itemUniqueId)}`,
        part: 'instant-results-item',
    };
};
const getPartialInstantItemShowAllElement = (i18n) => {
    return {
        key: 'instant-results-show-all-button',
        part: 'instant-results-show-all',
        ariaLabel: i18n.t('show-all-results'),
    };
};
const InstantItemShowAllButton = ({ i18n }) => {
    return (index.h("div", { part: "instant-results-show-all-button", class: stencilButtonStyle.getClassNameForButtonStyle('text-primary') }, i18n.t('show-all-results')));
};

const AtomicSearchBoxInstantResults = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.results = [];
        this.display = 'list';
        this.templateHasError = false;
        /**
         * The maximum number of results to show.
         */
        this.maxResultsPerQuery = 4;
        /**
         * The spacing of various elements in the result list, including the gap between results, the gap between parts of a result, and the font sizes of different parts in a result.
         */
        this.density = 'normal';
        /**
         * The expected size of the image displayed in the results.
         */
        this.imageSize = 'icon';
        this.error = undefined;
        this.templateHasError = false;
        this.maxResultsPerQuery = 4;
        this.density = 'normal';
        this.imageSize = 'icon';
        this.ariaLabelGenerator = undefined;
    }
    /**
     * Sets a rendering function to bypass the standard HTML template mechanism for rendering results.
     * You can use this function while working with web frameworks that don't use plain HTML syntax, e.g., React, Angular or Vue.
     *
     * Do not use this method if you integrate Atomic in a plain HTML deployment.
     *
     * @param resultRenderingFunction
     */
    async setRenderFunction(resultRenderingFunction) {
        this.itemRenderingFunction = resultRenderingFunction;
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
    getLink(el) {
        const atomicResult = el.tagName === 'ATOMIC-RESULT' ? el : el?.querySelector('atomic-result');
        return (atomicResult?.shadowRoot?.querySelector('atomic-result-link a:not([slot])') || null);
    }
    handleLinkClick(el, hasModifier) {
        const setTarget = (value) => el.setAttribute('target', value);
        const initialTarget = el.getAttribute('target');
        hasModifier && setTarget('_blank');
        el.click();
        hasModifier && setTarget(initialTarget || '');
        return true;
    }
    renderItems() {
        if (!this.bindings.suggestedQuery() || this.bindings.store.isMobile()) {
            return [];
        }
        const results = this.instantResults.state.results.length
            ? this.instantResults.state.results
            : this.results;
        const elements = results.map((result) => {
            const partialItem = getPartialInstantItemElement(this.bindings.i18n, this.ariaLabelGenerator?.(this.bindings, result) || result.title, result.uniqueId);
            return {
                ...partialItem,
                content: (index.h("atomic-result", { key: `instant-result-${stringUtils.encodeForDomAttribute(result.uniqueId)}`, part: "outline", result: result, interactiveResult: headless.buildInteractiveInstantResult(this.bindings.engine, {
                        options: { result },
                    }), display: this.display, density: this.density, imageSize: this.imageSize, content: this.itemTemplateProvider.getTemplateContent(result), stopPropagation: false, renderingFunction: this.itemRenderingFunction })),
                onSelect: (e) => {
                    const link = this.getLink(e.target);
                    if (!link) {
                        return;
                    }
                    this.handleLinkClick(link, e.ctrlKey || e.metaKey);
                },
            };
        });
        if (elements.length) {
            const partialItem = getPartialInstantItemShowAllElement(this.bindings.i18n);
            elements.push({
                ...partialItem,
                content: index.h(InstantItemShowAllButton, { i18n: this.bindings.i18n }),
                onSelect: () => {
                    this.bindings.clearSuggestions();
                    this.bindings.searchBoxController.updateText(this.instantResults.state.q);
                    this.bindings.searchBoxController.submit();
                },
            });
        }
        return elements;
    }
    initialize() {
        this.instantResults = headless.buildInstantResults(this.bindings.engine, {
            options: {
                maxResultsPerQuery: this.maxResultsPerQuery,
            },
        });
        this.itemTemplateProvider = new itemTemplateProvider.ItemTemplateProvider({
            includeDefaultTemplate: true,
            templateElements: Array.from(this.host.querySelectorAll('atomic-result-template')),
            getResultTemplateRegistered: () => true,
            setResultTemplateRegistered: () => { },
            getTemplateHasError: () => this.templateHasError,
            setTemplateHasError: (value) => {
                this.templateHasError = value;
            },
            bindings: this.bindings,
        });
        return {
            position: Array.from(this.host.parentNode.children).indexOf(this.host),
            panel: 'right',
            onSuggestedQueryChange: (q) => {
                this.instantResults.updateQuery(q);
                return this.onSuggestedQueryChange();
            },
            renderItems: () => this.renderItems(),
        };
    }
    onSuggestedQueryChange() {
        if (!this.bindings.getSuggestionElements().length &&
            !this.bindings.searchBoxController.state.value) {
            console.warn("There doesn't seem to be any query suggestions configured. Make sure to include either an atomic-search-box-query-suggestions or atomic-search-box-recent-queries in your search box in order to see some instant results.");
        }
        return new Promise((resolve) => {
            const unsubscribe = this.instantResults.subscribe(() => {
                const state = this.instantResults.state;
                if (!state.isLoading) {
                    if (state.results.length) {
                        this.results = state.results;
                    }
                    unsubscribe();
                    resolve();
                }
            });
        });
    }
    render() {
        if (this.error) {
            return (index.h("atomic-component-error", { key: '6e436e6b99962916f27f50ea4182b88260370899', element: this.host, error: this.error }));
        }
    }
    get host() { return index.getElement(this); }
};

exports.atomic_search_box_instant_results = AtomicSearchBoxInstantResults;

//# sourceMappingURL=atomic-search-box-instant-results.cjs.entry.js.map