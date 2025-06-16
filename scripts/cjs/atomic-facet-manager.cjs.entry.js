'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-757bc886.js');
const bueno = require('@coveo/bueno');
const headless = require('@coveo/headless');
const initializationUtils = require('./initialization-utils-62dc9852.js');
const stencilFacetCommon = require('./stencil-facet-common-c258bef8.js');
require('./dom-utils-d4790328.js');
require('./event-utils-9bfcf3c5.js');
require('./init-queue-a18aa323.js');
require('./initialization-lit-stencil-common-utils-24279cfa.js');

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const AtomicFacetManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The number of expanded facets inside the manager.
         * Remaining facets are automatically collapsed.
         *
         * Using the value `0` collapses all facets.
         * Using the value `-1` disables the feature and keeps all facets expanded. Useful when you want to set the collapse state for each facet individually.
         */
        this.collapseFacetsAfter = 4;
        this.sortFacets = () => {
            const facets = stencilFacetCommon.getFacetsInChildren(this.host);
            const sortedFacets = this.sortFacetsUsingManager(facets, this.facetManager);
            const { visibleFacets, invisibleFacets } = stencilFacetCommon.sortFacetVisibility(sortedFacets, this.bindings.store.getAllFacets());
            const generator = stencilFacetCommon.getAutomaticFacetGenerator(this.host);
            stencilFacetCommon.collapseFacetsAfter(visibleFacets, this.collapseFacetsAfter);
            generator?.updateCollapseFacetsDependingOnFacetsVisibility(this.collapseFacetsAfter, visibleFacets.length);
            this.host.append(...[
                ...visibleFacets,
                ...invisibleFacets,
                ...(generator ? [generator] : []),
            ]);
        };
        this.facetManagerState = undefined;
        this.error = undefined;
        this.collapseFacetsAfter = 4;
    }
    initialize() {
        this.validateProps();
        this.facetManager = headless.buildFacetManager(this.bindings.engine);
        // An update has to be forced for the facets to be visually updated, without being interacted with.
        this.bindings.i18n.on('languageChanged', this.sortFacets);
    }
    validateProps() {
        new bueno.Schema({
            collapseFacetAfter: new bueno.NumberValue({ min: -1, required: true }),
        }).validate({
            collapseFacetAfter: this.collapseFacetsAfter,
        });
    }
    sortFacetsUsingManager(facets, facetManager) {
        const payload = facets.map((f) => ({
            facetId: f.facetId,
            payload: f,
        }));
        return facetManager.sort(payload).map((f) => f.payload);
    }
    disconnectedCallback() {
        this.bindings?.i18n.off('languageChanged', this.sortFacets);
    }
    render() {
        return index.h("slot", { key: '61472d27c4a78d0cd3637e34d10c2dedddea647b' });
    }
    get host() { return index.getElement(this); }
};
__decorate([
    initializationUtils.InitializeBindings()
], AtomicFacetManager.prototype, "bindings", void 0);
__decorate([
    initializationUtils.BindStateToController('facetManager', {
        onUpdateCallbackMethod: 'sortFacets',
    })
], AtomicFacetManager.prototype, "facetManagerState", void 0);

exports.atomic_facet_manager = AtomicFacetManager;

//# sourceMappingURL=atomic-facet-manager.cjs.entry.js.map